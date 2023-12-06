import Link from 'next/link'
import { FC } from 'react'

export const Error404Page: FC<any> = () => {
  return (
    <section className='container flex flex-col min-w-[1440px] mt-[40px] pb-[50px]'>
      <h2>Oooops...</h2>
      <h2>That page cannot be found</h2>
      <Link href={'/'}>Return to Home page</Link>
    </section>
  )
}
