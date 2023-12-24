import Image from "next/image";
import { IProject } from "../../utils/projectsList";

interface ICardProjectProps {
  project: IProject;
}

export const CardProject = ({ project }: ICardProjectProps) => {
  return (
    <div className="flex flex-col gap-4 w-full p-4 bg-surface-primary rounded-2xl">
      <Image
        src={project.thumb}
        alt="Image Project"
        className="rounded-tl-2xl rounded-tr-2xl"
      />
      <div className="flex justify-between">
        <p className="text-text-secondary">{project.date}</p>
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
        <p className="">{project.resume}</p>
      </div>
    </div>
  );
};
