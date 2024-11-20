
export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  // Here you throw the error for Sentry monitoring
  throw new Error("Sentry Example API Route Error");

  // The code below will never be reached due to the throw above
  // No need for return since the error is already thrown
}
