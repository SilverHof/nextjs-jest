import { Character } from '@/entities/viewer'
import Link from 'next/link'
import { FC } from 'react'

export const EpisodesPage: FC<any> = ({ episodes }) => {
  return (
    <section className='container flex flex-col min-w-[1440px] mt-[40px] pb-[50px]'>
      <h2 className='text-center mb-base'>Episodes of serial Rick and Morty</h2>
      <div className='flex flex-col gap-4'>
        {episodes !== null &&
          episodes?.map((episode: any) => {
            return (
              <Link href={`/episodes/${episode.id}`} key={episode.id}>
                <div className='flex flex-col gap-2 p-4 rounded-md bg-black cursor-pointer' key={episode.id}>
                  <div className='flex gap-2'>
                    <h2 className='text-green'>Name:</h2>
                    <h2 className='text-white'>{episode.name}</h2>
                  </div>
                  <div className='flex gap-2'>
                    <h2 className='text-green'>Episode:</h2>
                    <h2 className='text-white'>{episode.episode}</h2>
                  </div>
                </div>
              </Link>
            )
          })}
      </div>
    </section>
  )
}
