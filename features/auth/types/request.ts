export type TLoginRequest = {
  email: string
  password: string
}

export type TRegisterRequest = TLoginRequest & { name: string }

export type TChangePasswordRequest = {
  currentPassword: string
  password: string
  password_confirmation: string
}
