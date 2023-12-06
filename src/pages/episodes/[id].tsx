import { NextPageWithLayout } from '@/shared/@types'
import { getData, getDataById } from '@/shared/getFetchData'
import { CharacterPage } from '@/views/character-view'
import { EpisodePage } from '@/views/episode-view'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { QueryClient, dehydrate, useQuery } from 'react-query'

export const getStaticPaths: GetStaticPaths = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('episode', () => getData('https://rickandmortyapi.com/api', 'episode'))
  const data = queryClient.getQueryData('episode') as any

  const paths = data.results.map((episode: any) => {
    return {
      params: { id: episode.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id as string
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('episode', () => getDataById('https://rickandmortyapi.com/api', 'episode', id))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Episode: NextPageWithLayout = () => {
  const { query } = useRouter()
  const { data: episode } = useQuery('episode', () =>
    getDataById('https://rickandmortyapi.com/api/', 'episode', query.id)
  )

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <EpisodePage episode={episode} />
    </div>
  )
}

export default Episode
