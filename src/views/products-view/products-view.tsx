import { Character } from '@/entities/viewer'
import { useAtom, useAtomValue } from 'jotai'
import Link from 'next/link'
import { FC } from 'react'
import { filteredProductsAtom, informationBarAtom, resetSearchAtom, searchAtom } from '../home-view'
import { useResetAtom } from 'jotai/utils'

export const ProducsPage: FC<any> = () => {
  const [search, setSearch] = useAtom(searchAtom)
  const [products] = useAtom(filteredProductsAtom)
  const resetSearch = useResetAtom(resetSearchAtom)
  const { totalProductsNumber, filteredProductsNumber } = useAtomValue(informationBarAtom)

  return (
    <section className='container flex flex-col gap-6 min-w-[1440px] mt-[40px] pb-[50px]'>
      <div className='flex gap-4'>
        <input
          type='text'
          className='flex-1 px-2 py-2 rounded-md'
          placeholder='Search'
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        <button onClick={resetSearch} className='px-2 py-2 bg-black text-white rounded-md'>
          Reset search
        </button>
      </div>
      <div className='flex gap-4'>
        <h2>Total Products: {totalProductsNumber}</h2>
        <h2>Found Products: {filteredProductsNumber}</h2>
      </div>
      <div className='flex flex-col gap-4'>
        {products !== null &&
          products?.map((product: any) => {
            return (
              <div className='flex flex-col gap-2 p-4 rounded-md bg-black cursor-pointer'>
                <h2 className='text-green'>{product.id}</h2>
                <p className='text-white'>{product.title}</p>
              </div>
            )
          })}
      </div>
    </section>
  )
}
