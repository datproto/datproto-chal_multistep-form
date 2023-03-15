export interface NavItemType {
  id: number
  name: string
  active?: boolean
}

export interface NavType {
  items: NavItemType[]
}
