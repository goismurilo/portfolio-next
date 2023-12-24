import Image from "next/image";

import AvatarImage from "../../assets/images/avatar.svg";
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { profile } from "../../utils/profile";
import { Button } from "../Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

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
  return (
    <div
      id="contacts"
      className="flex flex-col lg:flex-row mx-auto max-w-7xl gap-12 lg:gap-32 py-12 px-6 lg:p-16 bg-surface-primary rounded-2xl"
    >
      <div className="flex flex-col gap-10">
        <Image src={AvatarImage} width={160} height={160} alt="Profile Image" />
        <div className="flex flex-col gap-4">
          <div>
            <span className="font-cursive text-secondary-color">Contact</span>
            <h2>Enjoyed my work? Let’s work together</h2>
          </div>
          <p>
            I’m always up for a chat. Pop me an email at
            <span className="text-secondary-color underline">
              {" "}
              {profile.email}
            </span>{" "}
            or give me a shout on social media.
          </p>
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
            placeholder="Name"
            className="px-4 py-3 rounded-lg accent-secondary-color caret-secondary-color focus:border-secondary-color bg-surface-background text-text-secondary"
          />
          <input
            type="text"
            placeholder="Email"
            className="px-4 py-3 rounded-lg accent-secondary-color focus:border-secondary-color bg-surface-background text-text-secondary"
          />
          <textarea
            placeholder="Your message"
            className="min-h-40 h-full px-4 py-3 rounded-lg focus:border-secondary-color bg-surface-background text-text-secondary"
          />
        </form>
        <Button className="flex gap-2 max-w-60">
          <p className="font-bold">Send me a message</p>
          <ArrowRightIcon className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
