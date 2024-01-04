import Image from "next/image";
import { IProject } from "../../constants/projectsList";
import { useTranslations } from "next-intl";

interface ICardProjectProps {
  project: IProject;
}

export const CardProject = ({ project }: ICardProjectProps) => {
  const t = useTranslations(`Projects.jobs.${project.name}`);

  return (
    <div className="flex flex-col gap-4 w-full p-4 bg-surface-primary rounded-2xl cursor-pointer">
      <Image
        src={project.thumb}
        alt="Image Project"
        className="rounded-tl-2xl rounded-tr-2xl"
      />
      <div className="flex justify-between">
        <p className="text-text-secondary">{t("date")}</p>
        <div className="flex gap-4">
          {project.stacks.map((stack, key) => {
            return (
              <Image
                key={key}
                src={stack.icon}
                alt="Project stack icon"
                className="w-6 h-6"
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-bold text-2xl">{project.name}</span>
        <p className="">{t("resume")}</p>
      </div>
    </div>
  );
};
