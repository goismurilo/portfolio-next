import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailGuestTemplate from "../../../emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: NextResponse) {
  try {
    const { guestFullName, guestEmail, ipAddress } = await req.json();

    const data = await resend.emails.send({
      from: `NewAge <contact@newagesolutions.tech>`,
      to: [guestEmail],
      subject: "Email coming from the portfolio-website",
      react: EmailGuestTemplate({
        username: guestFullName,
        inviteFromIp: ipAddress,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
