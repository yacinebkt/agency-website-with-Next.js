import React, {useContext, useRef} from 'react'
import style from '../../styles/skills.module.css'
import { ScrollContext } from '../../utils/scroll-observer'

const opacityForBllock  = (sectionProgress: number, blockNo: number ) => {
    const progress = sectionProgress - blockNo
    if (progress >=0 && progress<1 ) {
        return 1
    }else {
        return  .2
    }
}

const Skills :React.FC = () => {

    const {scrollY} = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    const numberOfPages =3
    let progress = 0

    
    const { current: elContainer } = refContainer
    if (elContainer) {
    //   progress = Math.min(1, scrollY / elContainer.clientHeight)
    // console.log('elContainer', elContainer)
        const {clientHeight, offsetTop} = elContainer
        const screenH = window.innerHeight
        const halfH = screenH/2
        const percentY = Math.min(clientHeight + halfH, 
            Math.max(-screenH, scrollY-offsetTop ) + halfH ) /clientHeight  
        progress = Math.min (numberOfPages - 0.5, Math.max(.5, percentY * numberOfPages))
    }
  



    return (
        <section ref={refContainer} className= 'bg-black text-white'>
            <div className='min-h-screen max-w-5xl mx-auto  px-10 lg:px-20 py-24 md:py-28 lg:py-36
            flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight
            font-semibold
            '>
                <div className='leading-[1.15] '>
                    <div className={style.skillText} style={{
                        opacity : opacityForBllock(progress, 0)
                    }}>
                        We Know our tools inside out.
                    </div>
                    <span  className={`${style.skillText} inline-block after:content-['_']`}
                    style={{
                        opacity : opacityForBllock(progress, 1)
                    }}
                    >
                    Our team has contributed 284 commits to React Native core, powering thousands of apps worldwide.
                    </span>
                    <span className={`${style.skillText} inline-block `}
                    style={{
                        opacity : opacityForBllock(progress, 2)
                    }}
                    >
                    We&apos;re maintaining some of the most popular open-source projects, with over <strong>255</strong> downloads.
                    </span>
                </div>
               
            </div>
        </section>
    )
}

export default Skills