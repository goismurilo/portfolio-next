import AngularIcon from "../assets/icons/angular.svg";
import ReactIcon from "../assets/icons/React.svg";
import TailwindIcon from "../assets/icons/Tailwind.svg";
import JavaScriptIcon from "../assets/icons/JavaScript.svg";
import TypeScriptIcon from "../assets/icons/typescript.svg";
import ExpoIcon from "../assets/icons/expo.svg";
import CSSIcon from "../assets/icons/css3.svg";
import HTMLIcon from "../assets/icons/html5.svg";
import { StaticImageData } from "next/image";

export interface IStack {
  name: string;
  icon: StaticImageData;
}

type IStackT = {
  [key: string]: IStack;
};

export const stacks: IStackT = {
  angular: { name: "Angular", icon: AngularIcon },
  react: { name: "React", icon: ReactIcon },
  tailwind: { name: "Tailwind", icon: TailwindIcon },
  javascript: { name: "JavaScript", icon: JavaScriptIcon },
  typescript: { name: "TypeScript", icon: TypeScriptIcon },
  expo: { name: "Expo", icon: ExpoIcon },
  html: { name: "HTML", icon: CSSIcon },
  css: { name: "CSS", icon: HTMLIcon },
};

export const mainStacks: Array<IStack> = [
  stacks.angular,
  stacks.javascript,
  stacks.react,
  stacks.tailwind,
];
