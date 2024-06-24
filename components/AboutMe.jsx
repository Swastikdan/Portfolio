import Image from 'next/image';
import { ArrowDownToLine } from 'lucide-react';
export default function AboutMe() {
  return (
    <>
      <section className='flex flex-col md:flex-row gap-10 mx-auto w-full justify-center items-center '>
        <div className=''>
          <Image
            className='transition-all duration-200 aspect-auto rounded-2xl object-cover bg-gray-600 max-w-60 w-[300px] h-full'
            src='/profile-pic-final.jpg'
            width={300}
            height={500}
            quality={30}
            priority={true}
            alt='Profile picture of Spencer Sharp'
          />
        </div>
        <div className='w-full md:w-7/12 lg:w-2/3'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl pt-4 font-bold'>
            So, Who Am I?
          </h2>
          <p className='my-4 text-gray-300 gotham'>
            A web development enthusiast currently pursuing a B.Tech in CSE. I'm
            all about coding, design, and, of course music. As an individual, I
            take pride in my laid-back and down-to-earth nature. I approach life
            with an open mind and a welcoming spirit, always eager to embrace
            fresh challenges and opportunities who loves taking on new
            challenges.
          </p>

          <a
            href='https://drive.google.com/file/d/1dx5ataTxlMMYRiT3CjMg7vlNILzYWHeN/view?usp=drive_link'
            download='Resume.pdf'
            aria-label='Download Resume'
            className='group inline-flex py-2 items-center gap-2.5 rounded-md px-4 transition-all duration-500 bg-gray-600 hover:bg-gray-700'>
            <ArrowDownToLine aria-hidden='true' />
            <span className='text-lg  lg:text-xl font-medium tracking-normal '>
              Resume
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
