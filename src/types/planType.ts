interface IAddons {
  name: string
  description: string
  price: number
}

export interface IPlan {
  name: string
  type: string
  price: number
  addOns: IAddons[]
}
