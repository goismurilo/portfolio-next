import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Contact() {

    return (
        <div className="bg-primary-medium pb-10 px-4">
            <h1 className="text-center font-bold text-4xl text-white py-8">Contato</h1>
            <div className="flex flex-wrap lg:justify-center">
                <a className="p-4 w-full md:w-auto hover:bg-primary-light rounded-md" href='https://api.whatsapp.com/send?phone=5573999768043' target="_blank" rel="noopener noreferrer">
                    <div className='flex flex-wrap lg:justify-start  '>
                        <div className='bg-primary-dark rounded-full w-12 h-12 flex justify-center items-center'>
                            <FaWhatsapp className='w-8 h-8' color='#9A77CF' />
                        </div>
                        <div className='px-2'>
                            <p className='text-white font-extralight text-xs'>Whatsapp</p>
                            <strong className='text-white font-semibold text-2xl'>(73) 99976-8043</strong>
                        </div>
                    </div>
                </a>
                <a className="p-4 w-full md:w-auto hover:bg-primary-light rounded-md" href='mailto:murilodevs@gmail.com' target="_blank" rel="noopener noreferrer">
                    <div className='flex flex-wrap justify-start'>
                        <div className='bg-primary-dark rounded-full w-12 h-12 flex justify-center items-center'>
                            <HiOutlineMail className='w-8 h-8' color='#9A77CF' />
                        </div>
                        <div className='px-2'>
                            <p className='text-white font-extralight text-xs'>Email</p>
                            <strong className='text-white font-semibold text-2xl'>murilodevs@gmail.com</strong>
                        </div>
                    </div>
                </a>
                <a className="p-4 w-full md:w-auto hover:bg-primary-light rounded-md" href='https://github.com/goismurilo' target="_blank" rel="noopener noreferrer">
                    <div className='flex flex-wrap justify-start '>
                        <div className='bg-primary-dark rounded-full w-12 h-12 flex justify-center items-center'>
                            <FaGithub className='w-8 h-8' color='#9A77CF' />
                        </div>
                        <div className='px-2 hover:bg-primary-light'>
                            <p className='text-white font-extralight text-xs'>GitHub</p>
                            <strong className='text-white font-semibold text-2xl'>/goismurilo</strong>
                        </div>
                    </div>
                </a>
                <a className="p-4 w-full md:w-auto hover:bg-primary-light rounded-md" href='https://www.linkedin.com/in/goismurilo/' target="_blank" rel="noopener noreferrer">
                    <div className='flex flex-wrap justify-start '>
                        <div className='bg-primary-dark rounded-full w-12 h-12 flex justify-center items-center'>
                            <FaLinkedin className='w-8 h-8' color='#9A77CF' />
                        </div>
                        <div className='px-2 hover:bg-primary-light'>
                            <p className='text-white font-extralight text-xs'>LinkedIn</p>
                            <strong className='text-white font-semibold text-2xl'>/in/goismurilo</strong>
                        </div>
                    </div>
                </a>
            </div>
        </div >
    );
    // TODO: Create components for contacts items
}