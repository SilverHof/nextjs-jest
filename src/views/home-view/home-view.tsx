import { useAtom } from 'jotai'
import { FC, FormEvent, useState } from 'react'
import { searchAtom } from './model'

export const HomePage: FC = () => {

  const [value, setValue] = useState<boolean>(true)

  const handleClick = () => {
    setValue((prev) => !prev)
  }

  return (
    <section className='container flex flex-col min-w-[1440px] mt-[100px] pb-[50px]'>
      <h2 className='text-center mb-base'>Home</h2>
      <button disabled onClick={handleClick}>Click</button>
    </section>
  )
}
