import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

import ExampleImageGirl from "../../assets/images/example-image-girl.svg";
import { Button } from "../Button";
import { profile } from "../../constants/profile";
import { mainStacks } from "../../constants/stacks";

export default function AboutMe() {
  const t = useTranslations("AboutMe");
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row items-center py-12 px-6 lg:p-16 gap-10 lg:gap-32 mx-auto max-w-7xl bg-surface-primary lg:rounded-2xl"
    >
      <Image
        src={ExampleImageGirl}
        className="w-80 lg:w-96 lg:h-96"
        alt="Example Image"
      />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex gap-6">
            {mainStacks.map((item, key) => {
              return (
                <Image
                  key={key}
                  src={item.icon}
                  className="h-6 w-6"
                  alt="Icon"
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            <span className="section-table text-secondary-color">
              {
                //? i18n: About me
                t("section")
              }
            </span>
            <h2>
              {
                //? i18n: I’m a passionate software developer looking for my first international opportunity
                t("title")
              }
            </h2>
            <p className="text-text-secondary">
              {
                //? i18n: Beyond coding, I'm a coffee enthusiast, a cat lover, and a self-taught artist who enjoys spending my free time doodling. I am currently seeking opportunities to bring my skills and enthusiasm to a tech company in the United States or Europe and am excited about the prospect of relocating to pursue new challenges.
                t("subtitle")
              }
            </p>
          </div>
          <Link href={profile.cv}>
            <Button className="w-48">
              <ClipboardDocumentCheckIcon className="w-6 h-6" />
              <p className="font-bold">
                {
                  //? i18n: About me
                  t("button")
                }
              </p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
