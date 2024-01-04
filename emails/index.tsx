import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailGuestTemplateProps {
  username?: string;
  inviteFromIp?: string;
}

export const EmailGuestTemplate = ({
  username = "Murilo Gois",
  inviteFromIp = "204.13.186.218",
}: EmailGuestTemplateProps) => {
  const baseUrl = process.env.NEXT_PUBLIC_HOSTINGER_URL
    ? `https://${process.env.NEXT_PUBLIC_HOSTINGER_URL}`
    : "";
  const previewText = `${username}, vi que você demonstrou interresse pelo meu CV`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/vercel-logo.png"
                width="40"
                height="37"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-bold text-center p-0 my-[30px] mx-0">
              Parece que meu perfil te interresou...
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {username},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Estou muito grato pelo seu email, fique tranquilo que logo, logo
              eu vou te responder!
            </Text>
            <Section>
              <Row>
                <Column align="right">
                  <Img
                    className="rounded-full"
                    src={`${baseUrl}/images/circle-person.svg`}
                    width="64"
                    height="64"
                  />
                </Column>
                <Column align="center">
                  <Img
                    src="https://www.freeiconspng.com/uploads/arrow-icon-28.png"
                    width="12"
                    height="9"
                    alt="Portfolio owner"
                  />
                </Column>
                <Column align="left">
                  <Img
                    className="rounded-full"
                    src={`${baseUrl}/images/circle-goismurilo.svg`}
                    width="64"
                    height="64"
                  />
                </Column>
              </Row>
            </Section>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This email was sent from{" "}
              <span className="text-black">{inviteFromIp}</span> located in If
              you were not expecting this invitation, you can ignore this email.
              If you are concerned about your accounts safety, please reply to
              this email to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailGuestTemplate;
