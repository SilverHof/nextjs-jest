import { useCurrentAlbums } from '@/entities/album/model'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

export const AlbumsPage: FC = () => {
  const {isFallback} = useRouter()
  
  const { data: albums, isLoading } = useCurrentAlbums()

  if(isLoading) return <>Loading</>

  if (isFallback) return <>fallback</>

  return (
    <section className='container flex flex-col min-w-[1440px] mt-[40px] pb-[50px]'>
      <h2 className='text-center mb-base'>Albums</h2>
      <div className='flex flex-col gap-4'>
        {!!albums?.length &&
          albums?.map((album: any) => {
            return (
              <Link href={`/albums/${album.id}`} key={album.id}>
                <div className='flex flex-col gap-2 p-4 rounded-md bg-black cursor-pointer'>
                  <h2 className='text-green'>{album.id}</h2>
                  <p className='text-white'>{album.title}</p>
                </div>
              </Link>
            )
          })}
      </div>
    </section>
  )
}
