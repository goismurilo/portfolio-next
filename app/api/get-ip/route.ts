import { headers } from "next/headers";

export async function GET(req: Request) {
  return new Response(getIp());
}

function getIp() {
  let ip = null;
  let forwardedFor = headers().get("x-forwarded-for");
  let realIp = headers().get("x-real-ip");

  const device = headers().get("user-agent");

  if (forwardedFor) {
    ip = forwardedFor.split(",")[0].trim();
  }

  if (realIp) {
    ip = realIp.trim();
  }

  return JSON.stringify({ ip, device });
}
