class RestaurantModel {
  id: number
  image: string
  title: string
  rate: number
  description: string
  page: string

  constructor(
    id: number,
    image: string,
    title: string,
    rate: number,
    description: string,
    page: string,
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.rate = rate
    this.description = description
    this.page = page
  }
}

export default RestaurantModel
