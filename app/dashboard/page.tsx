import { redirect } from "next/navigation";
import DashboardClientPage from "./dashboard-client";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),

  });

  if (!session) {
    redirect("/auth");
  }
  return <DashboardClientPage session={session} />;
}
