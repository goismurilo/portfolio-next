import Image from 'next/image'
import xp from "../../src/images/experience.png"

export default function Experience() {
    return (
        <div id="experience" className="p-4 bg-primary-dark flex  flex-wrap justify-center">
            <h1 className="text-center font-bold text-4xl text-white pb-8">Experiências</h1>
            <Image
                className='w-8 h-auto'
                src={xp}
                alt="Pequeno gráfico de experiencias" />
        </div>
    )
}
