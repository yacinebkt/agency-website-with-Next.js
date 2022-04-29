import React from 'react'
import Logos from '../Companies/Logos'
import Testimonials from '../Testimonials/Testimonials'

const Sponsors : React.FC = () => (
    <section className='bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32'>
        <div className='flex-1'> </div>
        <div className='flex flex-col justify-center items-center'>
            <h3 className='text-xl mb-10 font-bold text-center'>
                <span>
                    Featured Companies
                </span>
            </h3>

           <Logos />
        </div>

        <div className='flex flex-col justify-center items-center'>
            <div className='container mx-auto lg:max-w-[70%] lg:px-10'>
                <h3 className='text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem] '>
                    We believe in good comunication and a fully transparent development process.
                </h3>

            </div>
        </div>


      <Testimonials />

        <div className='flex-1 bg-black'> </div>

    </section>
)


export default Sponsors