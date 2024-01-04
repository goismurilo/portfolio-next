import { NextResponse } from "next/server";
import { Resend } from "resend";
import { profile } from "../../[locale]/constants/profile";
import MailForOwner from "../../../emails/mail-for-owner";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: NextResponse) {
  try {
    const { nameGuest, emailGuest, message, ipAddress, device, location } =
      await req.json();

    const data = await resend.emails.send({
      from: `NewAge <contact@newagesolutions.tech>`,
      to: [profile.email],
      subject: "Email coming from the portfolio-website",
      react: MailForOwner({
        emailDate: new Date(),
        emailGuest,
        message,
        device,
        ipAddress,
        location,
        nameGuest,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
