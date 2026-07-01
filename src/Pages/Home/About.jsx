import React from 'react'

export default function About() {
  return (
    <>
    <section id='about' className='mx-auto items-center justify-center overflow-hidden scroll-smooth duration-500 text-[#e0e0e0] lg:py-20 md:py-16'>
        <div className='mx-auto justify-center max-w-screen-xl md:px-10 px-5 md:pt-10 lg:pt-0'>
            <div className='mx-auto text-[#fff] lg:grid-cols-2 lg:flex gap-x-20 items-center'>
                <div className='block lg:hidden mt-5'>
                    <img src='./build.jpg' alt='buildingimage'/>
                </div>
                <div className='lg:max-w-lg lg:pt-5 pt-10 pb-8'>
                    <h1 className='md:text-5xl text-3xl mx-auto text-[#d8bb6c]'>
                        About Us
                    </h1>
                    <p className='pt-3 tracking-wide text-sm md:text-base text-[#e0e0e0]'>
                    Great Winchester Group LLC is a technology-focused company providing modern solutions in IT services, AI automation, private server hosting, cyber security, and EV charging infrastructure.
We help businesses, property owners, startups, and organizations build secure, reliable, and future-ready digital systems. Our goal is to make technology easier to use, safer to manage, and more effective for business growth.
At Great Winchester Group LLC, we focus on practical solutions that solve real business problems. From setting up private servers and improving cyber security to automating daily operations with AI, we support clients with technology that improves efficiency, reduces manual work, and strengthens digital operations.
We also support EV charging infrastructure for commercial properties, residential communities, and business locations, helping clients prepare for the future of clean transportation.
Our approach combines innovation, security, reliability, and long-term value. We believe every business needs strong digital infrastructure, smart automation, and secure systems to grow with confidence in today’s fast-changing world. <br/>
Great Winchester Group LLC is committed to helping clients build smarter, safer, and more scalable technology solutions.
                    </p>
                </div>
                <div className='hidden lg:block mt-10'>
                    <img src='./build.jpg' alt='buildingimage'/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
