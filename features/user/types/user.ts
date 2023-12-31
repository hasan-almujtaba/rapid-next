export type TGeo = {
  lat: string
  lng: string
}

export type TAddress = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: TGeo
}

export type TCompany = {
  name: string
  catchPhrase: string
  bs: string
}

export type TUser = {
  id: number
  name: string
  username: string
  email: string
  address: TAddress
  phone: string
  website: string
  company: TCompany
}
