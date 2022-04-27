import React from 'react'
import Member from '../Member/Member'

export default function About() {
  return (
    <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-11">
        <p className="mx-auto max-w-5xl text-4xl leading-tight tracking-tight lg:text-4xl ">
          <strong>we will help you ship better apps, faster.</strong>
          Our Team of expert engineers has created the best user experiences in
          some of the most popular apps.
        </p>
      </div>

      <div className="container mx-auto mt-28 px-11 text-center">
        <h2> Our Team</h2>
        <div className='mt-2'>the &ldquo;spec-ops&rdquo; </div>
        <div className='mt-10 grid grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-20'>
          
             <Member id='1' name='Ibrahim' link='https://github.com/yacinebkt' socialId='@Ibrahim14' />
             <Member id='2' name='Ibrahim' link='https://github.com/yacinebkt' socialId='@Ibrahim14' />
             <Member id='3' name='Ibrahim' link='https://github.com/yacinebkt' socialId='@Ibrahim14' />
             <Member id='4' name='Ibrahim' link='https://github.com/yacinebkt' socialId='@Ibrahim14' />
             <Member id='5' name='Ibrahim' link='https://github.com/yacinebkt' socialId='@Ibrahim14' />
             <Member id='6' name='Ibrahim' link='https://github.com/yacinebkt' socialId='@Ibrahim14' />
             <Member id='7' name='Ibrahim' link='https://github.com/yacinebkt' socialId='@Ibrahim14' />
             <Member id='8' name='Ibrahim' link='https://github.com/yacinebkt' socialId='@Ibrahim14' />
             
        </div>
      </div>
    </section>
  )
}
