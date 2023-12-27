import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="flex flex-col flex-wrap mx-auto max-w-7xl justify-center items-center p-10">
      <p className="text-center">
        Copyright &copy; 2032 goisMurilo | {t("rights")}
      </p>
      <a
        href="https://www.linkedin.com/in/goismurilo/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-secondary hover:text-primary-color-400 flex items-center"
      >
        <p>{t("developer")}</p>
        <span>
          <Image
            src="/logo-with-name.svg"
            alt="goisMurilo Logo"
            width={100}
            height={80}
          />
        </span>
      </a>
    </footer>
  );
}
