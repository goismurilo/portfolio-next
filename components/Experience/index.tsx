import Image from "next/image";
import xp from "../../assets/images/experience.png";

export default function Experience() {
  return (
    <div
      id="experience"
      className="w-screen p-4 bg-primary-dark items-center md:px-64"
    >
      <h1 className="text-center font-bold text-4xl text-white py-8">
        Experiências
      </h1>
      <Image
        //className='self-center'
        src={xp}
        alt="Pequeno gráfico de experiencias"
      />
    </div>
  );
}
