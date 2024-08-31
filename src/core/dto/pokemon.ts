type Pokemon = {
  id: string
  set: string
  name: string
  supertype: string
  subtypes: string[]
  types: string[]
  number: string
  rarity: string
  images: {
    small: string
    large: string
  }
}

const pokemon: Pokemon = {
  id: '',
  set: '',
  name: '',
  supertype: '',
  subtypes: [],
  types: [],
  number: '',
  rarity: '',
  images: {
    small: '',
    large: ''
  }
}

export { pokemon }
export type { Pokemon }
