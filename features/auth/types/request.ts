export type TLoginRequest = {
  email: string
  password: string
}

export type TRegisterRequest = TLoginRequest & { name: string }
