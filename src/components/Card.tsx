import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Prop = {
    href: string,
    text: string,
    title: string,
    image: string
  }

export default function Card({ title,href,text,image }:Prop) {
    return (
      <div className="bg-gray-100 p-4 m-10 rounded-md text-center">
        <Link href={href}>
            <div className='flex items-center'>
            <Image
      src={image}
      width={90}
      height={90}
      alt="Picture of the author"
    />
            <h1 className='text-xl ml-12'>{title}</h1>
            </div>

            <p className='text-gray-400 text-sm mt-4'>{text}</p>
        </Link>
      </div>
    )
  }