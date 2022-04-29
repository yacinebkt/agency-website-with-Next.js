import React from 'react'
import Image from 'next/image'
import SlideContainer, { SliderItem } from '../Slider/Slider'

const Logos : React.FC = () => (
 <>
     <SlideContainer className='' contentWidth={1290} initialOffsetX={0}>
         <SliderItem width={150}>
            <Image src='/assets/logos/01.png' width={150} height={50} alt='logo' objectFit='contain' />
         </SliderItem>
           <SliderItem width={150}>
               <Image src='/assets/logos/02.png' width={150} height={50} alt='logo' objectFit='contain' />
            </SliderItem>
           <SliderItem width={150}>
               <Image src='/assets/logos/03.png' width={150} height={50} alt='logo' objectFit='contain' />
            </SliderItem>
           <SliderItem width={150}>
               <Image src='/assets/logos/04.png' width={150} height={50} alt='logo' objectFit='contain' />
            </SliderItem>
           <SliderItem width={150}>
               <Image src='/assets/logos/05.png' width={150} height={50} alt='logo' objectFit='contain' />
            </SliderItem>
           <SliderItem width={150}>
               <Image src='/assets/logos/06.png' width={150} height={50} alt='logo' objectFit='contain' />
            </SliderItem>
           <SliderItem width={150}>
               <Image src='/assets/logos/07.png' width={150} height={50} alt='logo' objectFit='contain' />
            </SliderItem>

     </SlideContainer>


     <SlideContainer className='' contentWidth={1290} initialOffsetX={0}>
         
          
           <SliderItem width={150}>
               <Image src='/assets/logos/05.png' width={150} height={50} alt='logo' objectFit='contain' />
            </SliderItem>
            <SliderItem width={150}>
               <Image src='/assets/logos/03.png' width={150} height={50} alt='logo' objectFit='contain' />
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/logos/01.png' width={150} height={50} alt='logo' objectFit='contain' />
         </SliderItem>
           <SliderItem width={150}>
               <Image src='/assets/logos/02.png' width={150} height={50} alt='logo' objectFit='contain' />
            </SliderItem>
           
           <SliderItem width={150}>
               <Image src='/assets/logos/06.png' width={150} height={50} alt='logo' objectFit='contain' />
            </SliderItem>
           <SliderItem width={150}>
               <Image src='/assets/logos/07.png' width={150} height={50} alt='logo' objectFit='contain' />
            </SliderItem>
            <SliderItem width={150}>
               <Image src='/assets/logos/04.png' width={150} height={50} alt='logo' objectFit='contain' />
            </SliderItem>
            
     </SlideContainer>
 </>   
)

export default Logos