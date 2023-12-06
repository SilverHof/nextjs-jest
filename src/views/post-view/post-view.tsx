import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const PostPage: FC<any> = ({ post }) => {
  return (
    <section className='container flex flex-col min-w-[1440px] mt-[40px] pb-[50px]'>
      <Link href={'/'}>Back</Link>
      <div className='flex flex-col gap-4 rounded-lg p-4 bg-black items-center'>
        <div className='flex flex-col justify-start gap-2'>
          <h2 className='text-green'>{post.title}</h2>
          <h2 className='text-white'>{post.body}</h2>
        </div>
      </div>
    </section>
  )
}
