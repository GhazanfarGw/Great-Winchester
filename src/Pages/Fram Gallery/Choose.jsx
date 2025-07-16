import React from 'react';

export default function Choose() {
  return (
    <>
    <section className='mx-auto justify-center scroll-smooth duration-500 text-[#e0e0e0] lg:pt-40 md:pt-20 pt-10'>
        <div className='mx-auto lg:px-10 sm:px-10 md:px-10 px-5 max-w-screen-2xl'>
            <div className='justify-center w-full mx-auto text-[#fff]'>
                <h1 className='md:text-4xl text-xl mx-auto text-[#fff] justify-center md:text-center'>
                    What We Offer?
                </h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 md:gap-x-5 justify-between mx-auto md:pt-10'>
                    
                    <div className='md:py-10 md:max-w-sm hover:bg-white duration-200 border-opacity-40 py-5 border-b border-[#d8bb6c] hover:translate-y-1 hover:px-5 md:mx-5 hover:text-black cursor-wait'>
                        <h1 className='font-semibold md:text-xl pt-5 text-lg'>
                            Curated Contemporary Art
                        </h1>
                        <p className='text-[#999] md:text-base text-sm pt-3 hover:text-black'>
                            Thoughtfully selected works blending heritage, innovation, and social commentary.
                        </p>
                    </div>
                    <div className='md:py-10 md:max-w-sm hover:bg-white duration-200 border-opacity-40 py-5 border-b border-[#d8bb6c] hover:translate-y-1 hover:px-5 md:mx-5 hover:text-black cursor-wait'>
                        <h1 className='font-semibold md:text-xl pt-5 text-lg'>
                            Advisory & Sales
                        </h1>
                        <p className='text-[#999] md:text-base text-sm pt-3 hover:text-black'>
                            Expert guidance and access to collector-grade, investment-worthy pieces.
                        </p>
                    </div>
                    <div className='md:py-10 md:max-w-sm hover:bg-white duration-200 border-opacity-40 py-5 border-b border-[#d8bb6c] hover:translate-y-1 hover:px-5 md:mx-5 hover:text-black cursor-wait'>
                        <h1 className='font-semibold md:text-xl pt-5 text-lg'>
                            Corporate & Hospitality Solutions
                        </h1>
                        <p className='text-[#999] md:text-base text-sm pt-3 hover:text-black'>
                            Bespoke art programs that align with your brand and elevate your environment.
                        </p>
                    </div>
                    <div className='md:py-10 md:max-w-sm hover:bg-white duration-200 border-opacity-40 py-5 border-b border-[#d8bb6c] hover:translate-y-1 hover:px-5 md:mx-5 hover:text-black cursor-wait'>
                        <h1 className='font-semibold md:text-xl pt-5 text-lg'>
                            Custom Framing
                        </h1>
                        <p className='text-[#999] md:text-base text-sm pt-3 hover:text-black'>
                            Designed to complement and protect your chosen artwork.
                        </p>
                    </div>
                </div>
                <div className='justify-center mx-auto w-full bg-[#101010] px-5 md:mt-10 mt-5'>
                    <div className='text-[#aaa] max-w-screen-xl mx-auto justify-center md:py-20 py-10 text-center md:text-xl text-xs'>
                        <p>
                            Whether for private collections, corporate projects, or hospitality spaces, our partnership delivers contemporary art that makes an impact.
                        </p>

                        <p className='pt-5 text-sm'>
                            Explore our collection online or book a private viewing. Let Great Winchester Group and Framed Gallery help you bring exceptional contemporary art into your world.
                        </p>
                        <a 
                            href="mailto:zoaib@greatwinchester.com"
                            className="
                                flex items-center justify-center flex-row
                                h-8 pt-0.5 px-4 md:px-6 lg:px-10
                                text-base text-[#fff] tracking-wide
                                bg-[#d8bb6c] border-[#d8bb6c]
                                md:hover:border-b duration-200
                                max-w-xs mx-auto mt-5 relative
                            "
                            >
                            Discover more...
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}