import { BaseEntity, FileModel, Nullable } from '@/shared/@types'

export interface User extends BaseEntity {
  name: string
  publicName: string
  firstName: string
  lastName: string
  middleName: string
  avatar: Nullable<FileModel>
  experience: number
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}
