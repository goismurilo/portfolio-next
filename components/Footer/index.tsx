import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col flex-wrap mx-auto max-w-7xl justify-center items-center p-10">
      <p className="text-center">
        Copyright &copy; 2032 goisMurilo | All rights reserved.
      </p>
      <a
        href="https://www.linkedin.com/in/goismurilo/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-secondary hover:text-primary-color-400 flex items-center"
      >
        <p>Desenvolvido por </p>
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
