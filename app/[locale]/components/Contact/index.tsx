"use client";

import Image from "next/image";

import AvatarImage from "../../assets/images/avatar.svg";
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { profile } from "../../constants/profile";
import { Button } from "../Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MailForOwnerProps } from "../../../../emails/mail-for-owner";

export default function Contact() {
  const contacts = [
    {
      socialNetwork: "Github",
      icon: <FaGithub className="w-6 h-6" />,
      href: profile.github,
    },
    {
      socialNetwork: "Linkedin",
      icon: <FaLinkedin className="w-6 h-6" />,
      href: profile.linkedIn,
    },
    {
      socialNetwork: "Instagram",
      icon: <FaInstagram className="w-6 h-6" />,
      href: profile.instagram,
    },
    {
      socialNetwork: "Whatsapp",
      icon: <FaWhatsapp className="w-6 h-6" />,
      href: profile.whatsapp,
    },
  ];

  const [isLoading, setIsLoading] = useState(false);

  const [ipAddress, setIpAddress] = useState<string>("");
  const [device, setDevice] = useState<string>("");

  const [guestFullName, setGuestFullName] = useState<string>("");
  const [guestEmail, setGuestEmail] = useState<string>("");
  const [guestMessage, setGuestMessage] = useState<string>("");

  const t = useTranslations("Contacts");
  const params = useParams();

  async function handleSendMailGuest() {
    setIsLoading(true);
    const data = {
      guestFullName,
      guestEmail,
      ipAddress,
    };
    try {
      const res = await fetch("/api/send-mail-guest", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      await sendMailOwner();
    } catch (e) {
      console.log("Contacts ::: handleSendMailGuest", e);
    } finally {
      setIsLoading(false);
    }
  }

  async function sendMailOwner() {
    const data: MailForOwnerProps = {
      nameGuest: guestFullName,
      device,
      emailGuest: guestEmail,
      // TODO: Add location based IP
      location: "",
      message: guestMessage,
      ipAddress,
    };

    try {
      const res = await fetch("/api/send-mail-owner", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.log("Contacts ::: sendMailOwner", e);
    }
  }

  useEffect(() => {
    fetch("/api/get-ip")
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(data.ip);
        setDevice(data.device);
      })
      .catch((error) => {
        console.error("Erro ao obter endereço IP ou Device:", error);
      });
  }, []);

  return (
    <div
      id="contacts"
      className="flex flex-col lg:flex-row mx-auto max-w-7xl gap-12 lg:gap-32 py-12 px-6 lg:p-16 bg-surface-primary lg:rounded-2xl"
    >
      <div className="flex flex-col gap-10">
        <Image src={AvatarImage} width={160} height={160} alt="Profile Image" />
        <div className="flex flex-col gap-4">
          <div>
            <span className="font-cursive text-secondary-color">
              {
                //? i18n: Contact
                t("section")
              }
            </span>
            <h2>
              {
                //? i18n: Enjoyed my work? Let’s work together
                t("title")
              }
            </h2>
          </div>
          {/* !TODO: Add internalization */}
          {/* {
              //? i18n: I’m always up for a chat. Pop me an email at
              t("paragraph", {
                email: profile.email,
              })
            } */}
          {params.locale === "en" ? (
            <p>
              Im always up for a chat. Pop me an email at
              <span className="text-secondary-color underline">
                {" "}
                {profile.email}
              </span>{" "}
              or give me a shout on social media.
            </p>
          ) : (
            <p>
              Estou sempre pronto para bater um papo. Envie um e-mail para{" "}
              <span className="text-secondary-color underline">
                {" "}
                {profile.email}
              </span>{" "}
              ou fale comigo em minhas redes sociais
            </p>
          )}
          <div className="flex gap-2">
            {contacts.map((contact, key) => {
              return (
                <a
                  key={key}
                  href={contact.href}
                  className="flex cursor-pointer p-3 bg-surface-secondary w-12 h-12 items-center justify-center rounded-lg"
                >
                  {contact.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 w-full">
        <form
          className="flex flex-col gap-4 h-full"
          action={() => handleSendMailGuest()}
        >
          <input
            type="text"
            placeholder={t("form.name")}
            className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ring-secondary-color accent-secondary-color bg-surface-background text-text-secondary"
            required
            value={guestFullName}
            onChange={(e) => setGuestFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ring-secondary-color accent-secondary-color bg-surface-background text-text-secondary"
            required
            value={guestEmail}
            onChange={(e) => setGuestEmail(e.target.value)}
          />
          <textarea
            placeholder={t("form.message")}
            className="min-h-40 h-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ring-secondary-color accent-secondary-color bg-surface-background text-text-secondary"
            required
            value={guestMessage}
            onChange={(e) => setGuestMessage(e.target.value)}
          />

          <Button
            type="submit"
            className="flex gap-2 max-w-[14.6rem]"
            disabled={isLoading}
          >
            <p className="font-bold">
              {
                //? i18n: Send me a message
                t("button")
              }
            </p>
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </form>
      </div>
    </div>
  );
}
