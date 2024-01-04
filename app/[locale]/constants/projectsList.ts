import { StaticImageData } from "next/image";
import acessaBR from "../assets/images/acessabr.png";
import digitalCast from "../assets/images/digitalcast.png";
import manchete from "../assets/images/manchete.png";
import { IStack, stacks } from "./stacks";

export interface IProject {
  name: string;
  thumb: StaticImageData;
  resume: string;
  stacks: Array<IStack>;
  repository: string;
  deploy: string;
  date: string;
}

export const projects: Array<IProject> = [
  {
    name: "AcessaBR",
    thumb: acessaBR,
    resume:
      "Projeto que lista os lugares públicos mais populares da cidade de Eunápolis-BA e cataloga os itens de mobilidade urbana que existem lá.",
    stacks: [stacks.react, stacks.typescript],
    repository: "",
    deploy: "https://acessabr-flame.vercel.app/BA/Eun%C3%A1polis",
    date: "Nov - Dec 2022",
  },
  {
    name: "DigitalCast",
    thumb: digitalCast,
    resume:
      " O projeto é uma aplicação React Native feita a partir da plataforma Expo. É um player que executa algumas previas de músicas do Spotfy.",
    stacks: [stacks.react, stacks.typescript, stacks.expo],
    repository: "https://github.com/goismurilo/digital-cast",
    deploy: "",
    date: "Jan - Fev 2022",
  },
  {
    name: "MancheteFlix",
    thumb: manchete,
    resume:
      "Esse projeto tem o intuito de revitalizar a antiga TV Manchete e simular como seria um streaming de video da nos dias atuais.",
    stacks: [stacks.javascript, stacks.css, stacks.html],
    repository: "https://github.com/goismurilo/clone-netflix",
    deploy: "",
    date: "Jan 2022",
  },
];
