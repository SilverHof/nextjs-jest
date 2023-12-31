import Head from 'next/head'
import { NextPageWithLayout } from '@/shared/@types'
import { GetStaticProps } from 'next'
import { getData } from '@/shared/getFetchData'
import { QueryClient, dehydrate, useQuery } from 'react-query'
import { AlbumsPage } from '@/views/albums-view'
import { prefetchAlbums, queryFetchAlbums, useCurrentAlbums } from '@/entities/album/model'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient()

  const { response } = await prefetchAlbums(queryClient, { locale })


  if (!response) {
    return {
      notFound: true
    }
  }
  
  return {
    props: {
      pageProps: response,
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Albums: NextPageWithLayout = () => {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <AlbumsPage />
    </div>
  )
}

export default Albums
