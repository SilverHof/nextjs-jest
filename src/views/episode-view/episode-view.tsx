import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const EpisodePage: FC<any> = ({ episode }) => {
  return (
    <section className='container flex flex-col min-w-[1440px] mt-[40px] pb-[50px]'>
      <Link href={'/'}>Back</Link>
      <div className='flex flex-col gap-4 rounded-lg p-4 bg-black items-center'>
        <div className='flex flex-col justify-start'>
          <div className='flex gap-2'>
            <h2 className='text-green'>Name:</h2>
            <h2 className='text-white'>{episode.name}</h2>
          </div>
          <div className='flex gap-2'>
            <h2 className='text-green'>Status:</h2>
            <h2 className='text-white'>{episode.episode}</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
