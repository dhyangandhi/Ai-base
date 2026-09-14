import React from 'react';
import { SignInButton, SignUpButton, UserButton, Show } from '@clerk/nextjs';
import { syncUser } from '@/lib/syncUser';

export const dynamic = 'force-dynamic';

export default async function Home() {
  // Sync signed-in user info to PostgreSQL database on server render without webhooks
  const dbUser = await syncUser();

  return (
    <main style={styles.container}>
      {/* Top Navbar */}
      <header style={styles.header}>
        <div style={styles.logoGroup}>
          <span style={styles.logoBadge}>⚡ DB Sync</span>
          <span style={styles.logoTitle}>Next.js Auth & Drizzle</span>
        </div>
        <div style={styles.authGroup}>
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button style={styles.secondaryBtn}>Sign In</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button style={styles.primaryBtn}>Sign Up</button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </header>

      {/* Main Content Hero */}
      <div style={styles.hero}>
        <div style={styles.badge}>
          <span style={styles.badgePulse} /> Direct DB Sync (No Webhooks)
        </div>
        
        <h1 style={styles.title}>
          User Sync to Database <span style={styles.gradient}>Without Webhooks</span>
        </h1>
        
        <p style={styles.subtitle}>
          Sign in or sign up to automatically persist your user account details directly to Neon PostgreSQL using Drizzle ORM server-side on login or page load.
        </p>

        {/* User Database Status Card */}
        <Show when="signed-in">
          <div style={styles.dbCard}>
            <div style={styles.cardHeader}>
              <div style={styles.cardTitleGroup}>
                <span style={styles.successIcon}>✓</span>
                <div>
                  <h2 style={styles.cardTitle}>User Saved to Database</h2>
                  <p style={styles.cardSub}>Synced via Server Component without external webhooks</p>
                </div>
              </div>
              <span style={styles.statusTag}>Live Postgres Sync</span>
            </div>

            {dbUser ? (
              <div style={styles.dbDetailsGrid}>
                <div style={styles.detailItem}>
                  <span style={styles.detailLabel}>Database ID</span>
                  <span style={styles.detailValue}>#{dbUser.id}</span>
                </div>
                <div style={styles.detailItem}>
                  <span style={styles.detailLabel}>Full Name</span>
                  <span style={styles.detailValue}>{dbUser.name || "N/A"}</span>
                </div>
                <div style={styles.detailItem}>
                  <span style={styles.detailLabel}>Email Address</span>
                  <span style={styles.detailValue}>{dbUser.email}</span>
                </div>
                <div style={styles.detailItem}>
                  <span style={styles.detailLabel}>Clerk User ID</span>
                  <span style={styles.detailValueCode}>{dbUser.clerkId}</span>
                </div>
                <div style={styles.detailItem}>
                  <span style={styles.detailLabel}>Saved At</span>
                  <span style={styles.detailValue}>
                    {dbUser.createdAt ? new Date(dbUser.createdAt).toLocaleString() : "Just now"}
                  </span>
                </div>
                <div style={styles.detailItem}>
                  <span style={styles.detailLabel}>Webhook Required</span>
                  <span style={{ ...styles.detailValue, color: '#10b981', fontWeight: 700 }}>No (Direct On-Demand)</span>
                </div>
              </div>
            ) : (
              <div style={styles.pendingBox}>
                <p style={styles.pendingText}>
                  User is authenticated with Clerk. Connect your PostgreSQL database connection string in <code>.env</code> to view live saved records.
                </p>
              </div>
            )}
          </div>
        </Show>

        <Show when="signed-out">
          <div style={styles.ctaCard}>
            <h3 style={styles.ctaTitle}>Test Sign In / Sign Up Flow</h3>
            <p style={styles.ctaText}>
              Click below to create an account or sign in. As soon as you complete authentication, your user record will be automatically created in the database.
            </p>
            <div style={styles.heroCtaGroup}>
              <SignInButton mode="modal">
                <button style={styles.largePrimaryBtn}>Sign In Now</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button style={styles.largeSecondaryBtn}>Create Account</button>
              </SignUpButton>
            </div>
          </div>
        </Show>
      </div>

      {/* Feature Grid */}
      <section style={styles.grid}>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>⚡</div>
          <h3 style={styles.featureTitle}>Zero Webhook Latency</h3>
          <p style={styles.featureText}>
            No public endpoints, tunnel proxies, or webhook signing secrets required for local development or production.
          </p>
        </div>

        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>🛡️</div>
          <h3 style={styles.featureTitle}>Guaranteed Fresh Data</h3>
          <p style={styles.featureText}>
            User data is verified and synchronized server-side directly inside Next.js App Router server components and API routes.
          </p>
        </div>

        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>🗄️</div>
          <h3 style={styles.featureTitle}>Drizzle ORM & Postgres</h3>
          <p style={styles.featureText}>
            Type-safe database interactions with Neon Serverless PostgreSQL and Drizzle schema validation.
          </p>
        </div>
      </section>

      <footer style={styles.footer}>
        Built with Next.js 15, Clerk Authentication, and Drizzle ORM
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#09090b',
    color: '#fafafa',
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
    padding: '1.5rem 2rem',
    boxSizing: 'border-box',
  },
  header: {
    width: '100%',
    maxWidth: '1100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 1.5rem',
    borderRadius: '16px',
    backgroundColor: 'rgba(24, 24, 27, 0.7)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    marginBottom: '3rem',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logoBadge: {
    padding: '0.25rem 0.65rem',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
    color: '#ffffff',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
  },
  logoTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#f4f4f5',
  },
  authGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  primaryBtn: {
    padding: '0.5rem 1.25rem',
    borderRadius: '8px',
    backgroundColor: '#0ea5e9',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '0.875rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  secondaryBtn: {
    padding: '0.5rem 1.25rem',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    color: '#e4e4e7',
    fontWeight: 500,
    fontSize: '0.875rem',
    border: '1px solid #3f3f46',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  hero: {
    textAlign: 'center',
    maxWidth: '800px',
    marginBottom: '3.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.4rem 1rem',
    borderRadius: '9999px',
    backgroundColor: '#18181b',
    fontSize: '0.85rem',
    fontWeight: 500,
    color: '#38bdf8',
    marginBottom: '1.5rem',
    border: '1px solid #27272a',
  },
  badgePulse: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#10b981',
    boxShadow: '0 0 10px #10b981',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 800,
    letterSpacing: '-0.03em',
    lineHeight: 1.15,
    margin: '0 0 1.25rem 0',
  },
  gradient: {
    background: 'linear-gradient(to right, #38bdf8, #818cf8, #c084fc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#a1a1aa',
    lineHeight: 1.6,
    margin: '0 0 2.5rem 0',
    maxWidth: '640px',
  },
  dbCard: {
    width: '100%',
    backgroundColor: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
    textAlign: 'left',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1.5rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #27272a',
  },
  cardTitleGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  successIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    color: '#10b981',
    fontWeight: 800,
    fontSize: '1.1rem',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
    margin: 0,
    color: '#fafafa',
  },
  cardSub: {
    fontSize: '0.85rem',
    color: '#71717a',
    margin: '0.2rem 0 0 0',
  },
  statusTag: {
    padding: '0.3rem 0.75rem',
    borderRadius: '9999px',
    backgroundColor: 'rgba(14, 165, 233, 0.15)',
    color: '#38bdf8',
    fontSize: '0.75rem',
    fontWeight: 600,
    border: '1px solid rgba(56, 189, 248, 0.3)',
  },
  dbDetailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.25rem',
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
    backgroundColor: '#09090b',
    padding: '0.85rem 1rem',
    borderRadius: '10px',
    border: '1px solid #27272a',
  },
  detailLabel: {
    fontSize: '0.75rem',
    color: '#71717a',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: 600,
  },
  detailValue: {
    fontSize: '0.95rem',
    color: '#f4f4f5',
    fontWeight: 500,
  },
  detailValueCode: {
    fontSize: '0.85rem',
    color: '#38bdf8',
    fontFamily: 'monospace',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  pendingBox: {
    backgroundColor: '#09090b',
    padding: '1.25rem',
    borderRadius: '10px',
    border: '1px dashed #3f3f46',
  },
  pendingText: {
    fontSize: '0.9rem',
    color: '#a1a1aa',
    margin: 0,
    lineHeight: 1.5,
  },
  ctaCard: {
    width: '100%',
    backgroundColor: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '16px',
    padding: '2.5rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    margin: '0 0 0.75rem 0',
  },
  ctaText: {
    fontSize: '0.95rem',
    color: '#a1a1aa',
    maxWidth: '500px',
    margin: '0 0 1.75rem 0',
    lineHeight: 1.5,
  },
  heroCtaGroup: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  largePrimaryBtn: {
    padding: '0.75rem 1.75rem',
    borderRadius: '10px',
    backgroundColor: '#0ea5e9',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(14, 165, 233, 0.4)',
  },
  largeSecondaryBtn: {
    padding: '0.75rem 1.75rem',
    borderRadius: '10px',
    backgroundColor: 'transparent',
    color: '#fafafa',
    fontWeight: 600,
    fontSize: '1rem',
    border: '1px solid #3f3f46',
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '1100px',
    marginBottom: '3rem',
  },
  featureCard: {
    backgroundColor: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '14px',
    padding: '1.5rem',
  },
  featureIcon: {
    fontSize: '1.75rem',
    marginBottom: '0.75rem',
  },
  featureTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    margin: '0 0 0.5rem 0',
  },
  featureText: {
    fontSize: '0.875rem',
    color: '#a1a1aa',
    lineHeight: 1.5,
    margin: 0,
  },
  footer: {
    fontSize: '0.85rem',
    color: '#71717a',
    marginTop: 'auto',
    padding: '1rem 0',
  },
};
