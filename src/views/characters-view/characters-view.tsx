import { Character } from '@/entities/viewer'
import Link from 'next/link'
import { FC } from 'react'

export const CharactersPage: FC<any> = ({ characters }) => {
  return (
    <section className='container flex flex-col min-w-[1440px] mt-[40px] pb-[50px]'>
      <h2 className='text-center mb-base'>Characters of serial Rick and Morty</h2>
      <div className='flex flex-col gap-4'>
        {characters !== null &&
          characters?.map((character: Character) => {
            return (
              <Link href={`/characters/${character.id}`} key={character.id}>
                <div className='flex flex-col gap-2 p-4 rounded-md bg-black cursor-pointer'>
                  <div className='flex gap-2'>
                    <h2 className='text-green'>Name:</h2>
                    <h2 className='text-white'>{character.name}</h2>
                  </div>
                  <div className='flex gap-2'>
                    <h2 className='text-red'>Status:</h2>
                    <h2 className='text-white'>{character.status}</h2>
                  </div>
                </div>
              </Link>
            )
          })}
      </div>
    </section>
  )
}
