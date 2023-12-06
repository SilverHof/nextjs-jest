import { useCurrentAlbum } from '@/entities/album/model/get-current-album-query'
import { AlbumCard } from '@/entities/album/ui/album-card'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

export const AlbumPage: FC<any> = () => {
  const {
    query: { id },
  } = useRouter()

  const { data: album, isLoading } = useCurrentAlbum(id as string)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <section className='container flex flex-col justify-start min-w-[1440px] mt-[40px] pb-[50px]'>
      {album && <AlbumCard backHref={'/albums'} id={album.id} title={album.title} />}
    </section>
  )
}
