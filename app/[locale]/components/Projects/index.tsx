import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button } from "../Button";
import { CardProject } from "./CardProject";
import { projects } from "../../utils/projectsList";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <div
      id="projects"
      className="flex flex-col mx-auto max-w-7xl gap-10 py-12 md:py-20 px-6 md:px-28 items-center"
    >
      <div className="flex flex-col gap-2 text-center">
        <span className="font-cursive text-secondary-color">
          {
            //? i18n: Projects
            t("section")
          }
        </span>
        <h2>
          {
            //? i18n: Take a look at my highlighted projects
            t("title")
          }
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        {projects.map((p, key) => {
          return <CardProject key={key} project={p} />;
        })}
      </div>
      <Button className="w-36">
        <p className="font-bold">
          {
            //? i18n: See all
            t("button")
          }
        </p>
        <ArrowRightIcon className="h-6 w-6" />
      </Button>
    </div>
  );
}
