import React from 'react'
import Logos from '../Companies/Logos'
import Testimonials from '../Testimonials/Testimonials'
import styles from '../../styles/companies.module.css'

const Sponsors : React.FC = () => (
    <section className={`bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32
    ${styles.bg} `}>
        <div className='flex-1'> </div>
        <div className='flex flex-col justify-center items-center'>
            <h3 className='text-xl mb-10 font-bold text-center'>
                <span className='drop-shadow-[10px_0px_15px_rgba(255,255,255,1)] bg-white rounded-3xl pr-5 py-2'>
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