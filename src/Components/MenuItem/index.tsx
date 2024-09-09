import { Item, ItemContent, ItemDescription, ItemTitle } from './styles'

import Button from '../Button'

type Props = {
  title: string
  description: string
  image: string
}

const MenuItem = ({ title, description, image }: Props) => {
  return (
    <Item>
      <ItemContent>
        <img src={image} alt={title} />
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
        <Button text="Adicionar ao carrinho" link="/" />
      </ItemContent>
    </Item>
  )
}

export default MenuItem
