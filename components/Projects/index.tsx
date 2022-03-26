import Image from 'next/image';

import acessaBR from '../../src/images/acessabr.png';
import digitalCast from '../../src/images/digitalcast.png';
import manchete from '../../src/images/manchete.png';

export default function Projects() {
    return (
        <div className="p-4 bg-primary-medium">
            <h1 className="text-center font-bold text-4xl text-white">Projetos</h1>
            <div className="flex flex-wrap justify-center">

                <div className="w-64 bg-violet-200 p-4 rounded-lg mt-4">
                    <Image src={acessaBR} height={230} width={400} alt="" />
                    <strong>AcessaBR</strong>
                    <p className='py-2 h-40'>Projeto que lista os lugares públicos mais populares da cidade de
                        Eunápolis-BA e cataloga os itens de mobilidade urbana que existem lá.</p>
                    <span className='bg-primary-light p-2 mr-1 rounded-3xl text-white'>React</span>
                    <span className='bg-primary-light p-2 mr-1 rounded-3xl text-white'>Typescript</span>
                </div>
                <div className="w-64 bg-violet-200 p-4 rounded-lg mt-4">
                    <Image src={digitalCast} height={230} width={400} alt="" />
                    <strong>DigitalCast</strong>
                    <p className='py-2 h-40'>O projeto é uma aplicação React Native feita a partir da plataforma Expo. É um player  que executa algumas previas de músicas do Spotfy.</p>
                    <span className='bg-primary-light p-2 mr-1 rounded-3xl text-white'>ReactNative</span>
                    <span className='bg-primary-light p-2 mr-1 rounded-3xl text-white'>Typescript</span>
                </div>
                <div className="w-64 bg-violet-200 p-4 rounded-lg mt-4">
                    <Image src={manchete} height={250} width={400} alt="" />
                    <strong>MancheteFlix</strong>
                    <p className='py-2 h-40'>Transformando a antiga TV Manchete em um streaming de video.</p>
                    <span className='bg-primary-light p-2 mr-1 rounded-3xl text-white'>HTML</span>
                    <span className='bg-primary-light p-2 mr-1 rounded-3xl text-white'>CSS</span>
                    <span className='bg-primary-light p-2 mr-1 rounded-3xl text-white'>Javascript</span>
                </div>

            </div>
        </div>
    )
}