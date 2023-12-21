import Image from "next/image";

import acessaBR from "../../src/images/acessabr.png";
import digitalCast from "../../src/images/digitalcast.png";
import manchete from "../../src/images/manchete.png";

export default function Projects() {
  return (
    <div id="projects" className="p-4 bg-primary-medium">
      <h1 className="text-center font-bold text-4xl text-white">Projetos</h1>
      <div className="flex flex-wrap justify-center">
        {/* // TODO -> Create Component children Projects */}
        <div className="w-64 bg-violet-200 p-4 rounded-lg mt-4 mr-2">
          <Image src={acessaBR} height={230} width={400} alt="" />
          <strong>AcessaBR</strong>
          <p className="py-2 h-40">
            Projeto que lista os lugares públicos mais populares da cidade de
            Eunápolis-BA e cataloga os itens de mobilidade urbana que existem
            lá.
          </p>
          <span className="py-2 px-8 my-4 rounded-lg bg-second-dark hover:opacity-75 text-white flex justify-center">
            <a
              className="align-middle-text"
              href="https://acessabr-flame.vercel.app/BA/Eun%C3%A1polis"
            >
              Ver Projeto
            </a>
          </span>
          <span className="bg-primary-light p-2 mr-1 rounded-3xl text-white">
            React
          </span>
          <span className="bg-primary-light p-2 mr-1 rounded-3xl text-white">
            Typescript
          </span>
        </div>
        <div className="w-64 bg-violet-200 p-4 rounded-lg mt-4 mr-2">
          <Image src={digitalCast} height={230} width={400} alt="" />
          <strong>DigitalCast</strong>
          <p className="py-2 h-40">
            O projeto é uma aplicação React Native feita a partir da plataforma
            Expo. É um player que executa algumas previas de músicas do Spotfy.
          </p>
          <span className="py-2 px-8 my-4 rounded-lg bg-second-dark hover:opacity-75 text-white flex justify-center">
            <a
              className="align-middle-text"
              href="https://github.com/goismurilo/digital-cast"
            >
              Ver Projeto
            </a>
          </span>
          <span className="bg-primary-light p-2 mr-1 rounded-3xl text-white">
            ReactNative
          </span>
          <span className="bg-primary-light p-2 mr-1 rounded-3xl text-white">
            Typescript
          </span>
        </div>
        <div className="w-64 bg-violet-200 p-4 rounded-lg mt-4 mr-2">
          <Image src={manchete} height={230} width={400} alt="" />
          <strong>MancheteFlix</strong>
          <p className="py-2 h-40">
            Esse projeto tem o intuito de revitalizar a antiga TV Manchete e
            simular como seria um streaming de video da nos dias atuais.
          </p>
          <span className="py-2 px-8 my-4 rounded-lg bg-second-dark hover:opacity-75 text-white flex justify-center">
            <a
              className="align-middle-text "
              href="https://github.com/goismurilo/clone-netflix"
            >
              Ver Projeto
            </a>
          </span>
          <span className="bg-primary-light p-2 mr-1 rounded-3xl text-white">
            HTML
          </span>
          <span className="bg-primary-light p-2 mr-1 rounded-3xl text-white">
            CSS
          </span>
          <span className="bg-primary-light p-2 mr-1 rounded-3xl text-white">
            Javascript
          </span>
        </div>
      </div>
    </div>
  );
}
