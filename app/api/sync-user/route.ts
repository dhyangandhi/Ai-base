import { NextResponse } from "next/server";
import { syncUser } from "@/lib/syncUser";

export async function GET() {
  try {
    const user = await syncUser();
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not authenticated or database connection issue" },
        { status: 401 }
      );
    }
    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST() {
  return GET();
}
