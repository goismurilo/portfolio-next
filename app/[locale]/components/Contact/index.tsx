"use client";

import Image from "next/image";

import AvatarImage from "../../assets/images/avatar.svg";
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { profile } from "../../utils/profile";
import { Button } from "../Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

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

  const t = useTranslations("Contacts");
  const params = useParams();

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
        <form className="flex flex-col gap-4 h-full" action="">
          <input
            type="text"
            placeholder={t("form.name")}
            className="px-4 py-3 rounded-lg accent-secondary-color caret-secondary-color focus:border-secondary-color bg-surface-background text-text-secondary"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg accent-secondary-color focus:border-secondary-color bg-surface-background text-text-secondary"
          />
          <textarea
            placeholder={t("form.message")}
            className="min-h-40 h-full px-4 py-3 rounded-lg focus:border-secondary-color bg-surface-background text-text-secondary"
          />
        </form>
        <Button className="flex gap-2 max-w-[14.6rem]">
          <p className="font-bold">
            {
              //? i18n: Send me a message
              t("button")
            }
          </p>
          <ArrowRightIcon className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
