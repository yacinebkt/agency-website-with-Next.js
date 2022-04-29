import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from '../Tile/Tile'
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLine,
  WorkRight,
} from '../Work/Work'
import Image from 'next/image'

const Works = () => (
  <TileWrapper numOfPages={4}>
    <TileBackground>
      <WorkBackground></WorkBackground>
    </TileBackground>
    <TileContent>
      {' '}
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div> 
              <WorkLine href='https://fihabox-yacinebkt.vercel.app/'>
                Full eCommerce 
                </WorkLine>

              </div>
              <div className="text-4xl font-semibold tracking-tighter md:text-5xl">
                A responsive e-commerce website with a comprehensive,
                {/* easy-to-use user interface and SEO, with a professionally
                designed backend and database to ensure the inclusion of all
                products of all types and scalable features. */}
              </div>
            </WorkLeft>

            <WorkRight progress={progress}
            
            >
              <img
                className=" h-[50vh] min-w-full overflow-hidden border-[rgba(0,0,0,.2)] 
                    object-cover HoverAnimation
                    
                    
                    "
                src="/assets/Portofolio/portofolio01.png"
                // layout='responsive'
                // width={840}
                // height={1600}
                // alt="porto 01"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div> Social Media App </div>
              <div className="text-4xl font-semibold tracking-tighter md:text-5xl">
                A responsive full stack Social 
                {/* Media web application using
                Next.js, Firebase, Tailwind CSS & NextAuth.js Authentication */}
              </div>
            </WorkLeft>

            <WorkRight progress={progress}>
              <img
                className=" h-[50vh] min-w-full overflow-hidden border-[rgba(0,0,0,.2)] 
                object-cover HoverAnimation
                
                    "
                src="/assets/Portofolio/portofolio02.png"
                // layout='responsive'
                // width={840}
                // height={1600}
                // alt="porto 02"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div> 
                <WorkLine href='https://fihabox-yacinebkt.vercel.app/'>
                  Hulu Clone 
                </WorkLine>
              </div>
              <div className="text-4xl font-semibold tracking-tighter md:text-5xl">
                Trying to make a copy of the popular existing library of live
                {/* broadcasts of TV episodes and movies. using ReactJ, NextJs and
                Tailwind CSS */}
              </div>
            </WorkLeft>

            <WorkRight progress={progress}>
              <img
                className=" h-[50vh] min-w-full overflow-hidden border-[rgba(0,0,0,.2)] 
                object-cover HoverAnimation
                
                    "
                src="/assets/Portofolio/portofolio03.JPG"
                // layout='intrinsic'
                // width={840}
                // height={1600}
                // alt="porto 02"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={3}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div> Custom Spotify Clone </div>
              <div className="text-4xl font-semibold tracking-tighter md:text-5xl">
                A full stack Custom SPOTIFY CLONE using React and Firebase.
              </div>
            </WorkLeft>

            <WorkRight progress={progress}>
              <img
                className=" h-[50vh] min-w-full overflow-hidden border-[rgba(0,0,0,.2)] 
                object-cover HoverAnimation

                    "
                src="/assets/Portofolio/portofolio04.png"
                // layout='responsive'
                // width={840}
                // height={1600}
                // alt="porto 02"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
    {/* <TileContent> tar </TileContent>
    <TileContent> bAR </TileContent> */}
  </TileWrapper>
)

export default Works
