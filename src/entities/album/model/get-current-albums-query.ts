import { useRouter } from 'next/router'
import { queryFactory, QueryParams } from '@/shared/lib'
import { queryFetchAlbums } from './albums-request'
import { Album, ALBUMS_PRIMARY_KEY } from '../lib'

const albumsQuery = queryFactory(ALBUMS_PRIMARY_KEY, queryFetchAlbums)()

export const prefetchAlbums = albumsQuery.prefetch

export const useCurrentAlbums = (params?: QueryParams<Album[]>) => {
  const { locale } = useRouter()

  return albumsQuery.useHookInitializer({
    ...params,
    filters: {
      locale,
      ...params?.filters,
    },
  })
}
