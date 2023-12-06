import Link from 'next/link'
import React, { FC, useState } from 'react'
import { AlbumButton } from './album-button'

interface AlbumCardProps {
  backHref: string
  id: number
  title: string
}

export const AlbumCard: FC<AlbumCardProps> = ({ backHref, id, title }) => {
  const [isLike, setIsLike] = useState<boolean>(false)

  const handleClick = () => {
    setIsLike(prev => !prev)
  }

  return (
    <>
      <Link href={backHref}>Back</Link>
      <div className='flex flex-col gap-4 rounded-lg p-4 bg-black items-start'>
        <h2 className='text-green'>{id}</h2>
        <p className='text-white'>{title}</p>
        <p className='text-green'>{isLike ? 'Album is liked' : "Album doesn't like"}</p>
        {/* <button className='py-2 px-4 rounded-md bg-white text-black' onClick={handleClick}>
          Like album
        </button> */}
        <AlbumButton onClick={() => alert("button was clicked")}>Like button</AlbumButton>
      </div>
    </>
  )
}
