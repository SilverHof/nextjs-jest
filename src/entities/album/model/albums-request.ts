import { queryFetchFactory } from '@/shared/lib'
import { Album, ALBUMS_REQUEST_TARGET } from '../lib'

export const queryFetchAlbums = queryFetchFactory<Album[]>(ALBUMS_REQUEST_TARGET)
