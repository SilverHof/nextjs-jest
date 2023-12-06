import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

export const LocationsPage: FC<any> = ({ locations }) => {
  return (
    <section className='container flex flex-col min-w-[1440px] mt-[40px] pb-[50px]'>
      <h2 className='text-center mb-base'>Locations of serial Rick and Morty</h2>
      <div className='flex flex-col gap-4'>
        {locations !== null &&
          locations.map((location: any) => {
            return (
              <Link href={`/locations/${location.id}`} key={location.id}>
                <div className='flex flex-col gap-2 p-4 rounded-md bg-black cursor-pointer'>
                  <div className='flex gap-2'>
                    <h2 className='text-red'>Type:</h2>
                    <h2 className='text-white'>{location.type}</h2>
                  </div>
                  <div className='flex gap-2'>
                    <h2 className='text-red'>Dimesnion:</h2>
                    <h2 className='text-white'>{location.dimension}</h2>
                  </div>
                </div>
              </Link>
            )
          })}
      </div>
    </section>
  )
}
