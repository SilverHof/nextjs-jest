import { useRouter } from 'next/router'
import { filterAtomsFactory, queryFactory, QueryParams } from '@/shared/lib'
import { Album, ALBUM_PRIMARY_KEY } from '../lib'
import { queryFetchAlbum } from './album-request'
import { useAtom } from 'jotai'

const albumQuery = (id: string) => queryFactory(ALBUM_PRIMARY_KEY, queryFetchAlbum(id))()

const InitialFiltersObject = {
  page: 10,
  perPage: 10
}

export const {page, perPage} = filterAtomsFactory(InitialFiltersObject)

export const prefetchAlbum = (id: string) => albumQuery(id).prefetch

export const useCurrentAlbum = (id: string, params?: QueryParams<Album>) => {
  const { locale } = useRouter()
  
  const dependentFilters = {
    page, perPage
  }
  
  return albumQuery(id).useHookInitializer({
    ...params,
    filters: {
      locale,
      ...dependentFilters,
      ...params?.filters,
    },
  })
}
