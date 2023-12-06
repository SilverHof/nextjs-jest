import { getSingleRequestTarget, queryFetchFactory } from '@/shared/lib'
import { Album, SINGLE_ALBUM_REQUEST_TARGET } from '../lib'

export const queryFetchAlbum = (id: string) => queryFetchFactory<Album>(getSingleRequestTarget(id, SINGLE_ALBUM_REQUEST_TARGET))
