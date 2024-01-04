"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import {
  ClipboardDocumentCheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import ExampleImage from "../../assets/images/example-image.svg";
import ArrowCurved from "../../assets/icons/arrow-curved.svg";

import { Button } from "../Button";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { profile } from "../../constants/profile";

export default function Landing() {
  const t = useTranslations("Landing");

  const [position, setPosition] = useState({ bottom: 0, left: 0 });
  const referenceElement = useRef(null);
  const targetElement = useRef(null);

  function scrollToID(id: string) {
    const element = document.getElementById(id);

    if (element) {
      window.scroll({
        behavior: "smooth",
        left: 0,
        top: element.offsetTop,
      });
    }
  }

  useEffect(() => {
    if (referenceElement.current && targetElement.current) {
      // @ts-ignore
      const referenceRect = referenceElement.current.getBoundingClientRect();
      // @ts-ignore
      const targetRect = targetElement.current.getBoundingClientRect();

      const newPosition = {
        bottom: referenceRect.bottom + 20,
        left: referenceRect.width - targetRect.width / 2,
      };

      setPosition(newPosition);
    }
  }, []);

  return (
    <div
      id="Home"
      className="relative mx-auto max-w-7xl p-24 pt-24 md:py-24 md:px-28 md:pt-40 flex flex-col items-center gap-6 lg:flex-row-reverse lg:gap-36 "
    >
      <Image
        src={ExampleImage}
        className="md:w-96 md:h-96"
        alt="Pequeno gráfico de experiencias"
        ref={referenceElement}
      />
      <div className="flex flex-col gap-6 md:gap-8">
        <h1 className="bg-gradient-to-r font-cursive from-[#9955E8]  to-secondary-color inline-block text-transparent bg-clip-text text-5xl">
          {
            //? i18n: Hi, I'm {username}
            t("title", { username: profile.username })
          }
        </h1>
        <div className="flex flex-col gap-6">
          <h2>
            {
              //? i18n: Full-stack developer and innovation enthusiast
              t("subtitle")
            }
          </h2>
          <p>
            {
              //? i18n: Over 3 years of experience in the tech industry. I specialize in building innovative web and mobile applications using technologies such as React, React Native e Angular.
              t("paragraph")
            }
          </p>
        </div>
        <div className="flex gap-2">
          <Link href={profile.cv}>
            <Button buttonType="secondary" className="w-48 flex gap-2">
              <ClipboardDocumentCheckIcon className="w-6 h-6" />
              <p className="font-bold">
                {
                  //? i18n: My Resume
                  t("button1")
                }
              </p>
            </Button>
          </Link>

          <div className="relative">
            <Button
              className="w-48 flex gap-2"
              onClick={() => scrollToID("contacts")}
            >
              <p className="font-bold">
                {
                  //? i18n: Get in touch
                  t("button2")
                }
              </p>
              <ArrowRightIcon className="w-6 h-6" />

              <Image
                src={ArrowCurved}
                className="absolute -bottom-20 left-0 lg:hidden rotate-[130deg]"
                // TODO: Translate and add description
                alt=""
              />
            </Button>
          </div>
        </div>
      </div>
      <Image
        src={ArrowCurved}
        ref={targetElement}
        className="hidden lg:flex absolute rotate-[130deg]"
        // TODO: Translate and add description
        alt=""
        style={{ top: position.bottom, right: position.left }}
      />
    </div>
  );
}
