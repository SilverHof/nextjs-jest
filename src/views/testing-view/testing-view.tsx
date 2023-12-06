import { Character } from '@/entities/viewer'
import { useAtom, useAtomValue } from 'jotai'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { filteredProductsAtom, informationBarAtom, resetSearchAtom, searchAtom } from '../home-view'
import { useResetAtom } from 'jotai/utils'
import { testingDelayRequest } from '@/entities/testing/model'
import { getDataRequest } from '@/entities/testing/model/get-data-request'

export const TestingPage: FC<any> = () => {
  const [valueByDelay, setValueByDelay] = useState<any>()
  const [axiosData, setAxiosData] = useState<any>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    testingDelayRequest(() => 10 + 10, 2000).then(data => {
      setValueByDelay(data)
    })

    getDataRequest('https://jsonplaceholder.typicode.com/users').then(data => {
      setAxiosData(data)
      setIsLoading(true)
    })
  }, [])

  return (
    <section className='container flex flex-col gap-6 min-w-[1440px] mt-[40px] pb-[50px]'>
      <div className='flex flex-col gap-4'>
        <h2>Axios testing</h2>
        {isLoading &&
          axiosData?.map((item: any, index: number) => {
            return <li key={index}>{item.name}</li>
          })}
      </div>
      <div className='flex flex-col gap-4'>
        <h2>Custom hook</h2>
      </div>
    </section>
  )
}
