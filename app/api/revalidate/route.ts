import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

/**
 * API endpoint to refresh all cached pages.
 * - This runs automatically every 4 hours via Vercel Cron.
 * - You can also trigger it manually by visiting `/api/revalidate`.
 */
export async function GET() {
  console.log("Revalidating all cached pages...");
  revalidateTag("*"); // Clears cache for ALL pages
  return NextResponse.json({ message: "All pages revalidated!" });
}
