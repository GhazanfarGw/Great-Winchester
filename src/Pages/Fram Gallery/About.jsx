import React from 'react'

export default function About() {
  return (
    <>
        <section id='about' className='mx-auto items-center justify-center overflow-hidden pt-10 md:pt-32 scroll-smooth duration-500 md:mt-32 text-[#e0e0e0] max-w-screen-xl md:px-10 px-5'>
            <div className='md:flex md:grid-cols-2 mx-auto justify-between md:gap-x-10'>
                <div className='mx-auto justify-center'>
                    <h1 className='font-semibold block md:hidden lg:hidden xl:hidden'>
                        Great Winchester Group & Framed Gallery: Contemporary Art That Transforms Spaces
                    </h1>
                    <div className='justify-center mx-auto items-center md:pt-32'>
                        <p className='uppercase font-semibold text-[#D8BB6C] pt-10 text-xs'>
                            WHAT WE DO
                        </p>
                        <h1 className='md:text-4xl text-xl mx-auto md:pt-10 pt-3 text-[#fff]'>
                            In Partnership with Framed Gallery
                        </h1>
                    </div>
                    <div className='block md:hidden lg:hidden md:py-0 md:pt-10 pt-5'>
                        <img className='mx-auto' src='./contemplation.jpg' alt='logo'/>
                    </div>
                    <div className='mx-auto md:pt-8 pt-3'>
                        <div className='max-w-4xl justify-center mx-auto tracking-wide'>
                            <p className='md:text-lg text-sm text-[#999]'>
                                Great Winchester Group proudly partners with Framed Gallery to bring contemporary art to life. Together, we curate and present dynamic works that spark dialogue, celebrate culture, and redefine the spaces they inhabit.
                            </p>
                            <br />
                            <p className='md:text-lg text-sm text-[#999]'>
                                Our collaboration connects collectors, designers, and businesses with acclaimed and emerging artists working across painting, photography, mixed media, sculpture, and installation.
                            </p>

                        </div>
                    </div>
                </div>
                <div className='hidden md:block lg:block md:py-0 py-10 mt-40'>
                    <img className='mx-auto' src='./contemplation.jpg' alt='logo'/>
                </div>
            </div>
    </section>
    </>
  )
}