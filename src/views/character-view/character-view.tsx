import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const CharacterPage: FC<any> = ({ character }) => {
  return (
    <section className='container flex flex-col min-w-[1440px] mt-[40px] pb-[50px]'>
      <Link href={'/'}>Back</Link>
      <div className='flex flex-col gap-4 rounded-lg p-4 bg-black items-center'>
        <div className='width-[400] heigth-[400] rounded-lg overflow-hidden'>
          <Image src={character.image} width={400} height={400} objectFit='cover' />
        </div>
        <div className='flex flex-col justify-start'>
          <div className='flex gap-2'>
            <h2 className='text-green'>Name:</h2>
            <h2 className='text-white'>{character.name}</h2>
          </div>
          <div className='flex gap-2'>
            <h2 className='text-green'>Status:</h2>
            <h2 className='text-white'>{character.status}</h2>
          </div>
          <div className='flex gap-2'>
            <h2 className='text-green'>Species:</h2>
            <h2 className='text-white'>{character.species}</h2>
          </div>
          <div className='flex gap-2'>
            <h2 className='text-green'>Name:</h2>
            <h2 className='text-white'>{character.name}</h2>
          </div>
          <div className='flex gap-2'>
            <h2 className='text-green'>Name:</h2>
            <h2 className='text-white'>{character.name}</h2>
          </div>
          <div className='flex gap-2'>
            <h2 className='text-green'>Location:</h2>
            <h2 className='text-white'>{character.location.name}</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
