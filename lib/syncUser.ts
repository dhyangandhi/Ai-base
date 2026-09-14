import { currentUser } from "@clerk/nextjs/server";
import { db, users } from "@/db";
import { eq } from "drizzle-orm";

export async function syncUser() {
  try {
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return null;
    }

    const email = clerkUser.emailAddresses[0]?.emailAddress || "";
    const name = [clerkUser.firstName, clerkUser.lastName]
      .filter(Boolean)
      .join(" ")
      .trim() || clerkUser.username || "Anonymous User";
    const imageUrl = clerkUser.imageUrl || null;

    // Check if user already exists in the PostgreSQL database
    const existingUsers = await db
      .select()
      .from(users)
      .where(eq(users.clerkId, clerkUser.id));

    if (existingUsers.length > 0) {
      const existingUser = existingUsers[0];
      
      // Update details if profile changed
      if (
        existingUser.email !== email ||
        existingUser.name !== name ||
        existingUser.imageUrl !== imageUrl
      ) {
        const [updatedUser] = await db
          .update(users)
          .set({
            email,
            name,
            imageUrl,
            updatedAt: new Date(),
          })
          .where(eq(users.clerkId, clerkUser.id))
          .returning();
        return updatedUser;
      }

      return existingUser;
    }

    // Save new user info to database (without webhooks)
    const [newUser] = await db
      .insert(users)
      .values({
        clerkId: clerkUser.id,
        email,
        name,
        imageUrl,
      })
      .returning();

    return newUser;
  } catch (error) {
    console.error("Error syncing user to database:", error);
    return null;
  }
}
