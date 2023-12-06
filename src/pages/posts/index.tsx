import Head from 'next/head'
import { NextPageWithLayout } from '@/shared/@types'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { FC } from 'react'
import { getData } from '@/shared/getFetchData'
import { QueryClient, dehydrate, useQuery } from 'react-query'
import { PostsPage } from '@/views/posts-view'

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('posts', () => getData('https://jsonplaceholder.typicode.com', 'posts'))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Posts: NextPageWithLayout = () => {
  const { data: posts } = useQuery('posts', () => getData('https://jsonplaceholder.typicode.com', 'posts'))

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <PostsPage posts={posts} />
    </div>
  )
}

export default Posts
