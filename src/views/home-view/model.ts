import { atom } from 'jotai'

interface Product {
  id: number
  title: string
}

const productsData: Product[] = [
  {
    id: 1,
    title: 'name1',
  },
  {
    id: 2,
    title: 'name2',
  },
  {
    id: 3,
    title: 'name3',
  },
  {
    id: 4,
    title: 'name4',
  },
  {
    id: 5,
    title: 'name5',
  },
]

// ** Simple atom
const priceAtom = atom<number>(0)

// ** Atom with Generics
type ThemeType = 'light' | 'dark'
export const theme = atom<ThemeType>('light')

// ** Setup atoms
export const searchAtom = atom<string>('')
export const productsAtom = atom<Product[]>(productsData)
export const resetSearchAtom = atom(null, (_get, set) => {
  set(searchAtom, '')
})

export const filteredProductsAtom = atom(get => {
  const search = get(searchAtom)
  const products = get(productsAtom)
  if (!search) return products
  return products.filter(product => product.title.includes(search))
})

export const informationBarAtom = atom((get) => {
  const totalProductsNumber = get(productsAtom).length;
  const filteredProductsNumber = get(filteredProductsAtom).length;
  return {
    totalProductsNumber,
    filteredProductsNumber
  }
})


