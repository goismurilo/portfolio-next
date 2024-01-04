import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { profile } from "../app/[locale]/constants/profile";

export interface MailForOwnerProps {
  emailDate?: Date;
  device?: string;
  nameGuest?: string;
  emailGuest?: string;
  location?: string;
  ipAddress?: string;
  message?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_HOSTINGER_URL
  ? `https://${process.env.NEXT_PUBLIC_HOSTINGER_URL}`
  : "";

export const MailForOwner = ({
  emailDate = new Date("September 7, 2022, 10:58 am"),
  device = "Chrome on Mac OS X",
  location = "Upland, California, United States",
  message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id tortor lacinia mi ultricies scelerisque vitae ut odio. Vivamus neque orci, accumsan quis nibh nec, tincidunt scelerisque tortor. Morbi ac pharetra felis. Vivamus quis massa eu leo sollicitudin mollis.",
  ipAddress = "47.149.53.167",
  nameGuest = "Unknown Guest",
  emailGuest = "unknown@unknown.com",
}: MailForOwnerProps) => {
  const formattedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(emailDate);

  return (
    <Html>
      <Head />
      <Preview>Portfolio recent email</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img src={`/public/vercel.svg`} />
          </Section>

          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {profile.username},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  New message from {nameGuest}
                </Heading>

                <Text style={paragraph}>
                  <b>Time: </b>
                  {formattedDate}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Device: </b>
                  {device}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Location: </b>
                  {location}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email from: </b>
                  {emailGuest}
                </Text>
                <Text
                  style={{
                    color: "rgb(0,0,0, 0.5)",
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  *Approximate geographic location based on IP address:
                  {ipAddress}
                </Text>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  {`'${message}'`}
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img width={620} src={`${baseUrl}/images/yelp-footer.png`} />
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2032 | goismurilo, Alto da Boa Vista, Eunápolis, BA, BRA |
            newagesolutions.tech
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default MailForOwner;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  padding: "12px 30px",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px 40px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
