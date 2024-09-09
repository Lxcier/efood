import { Container } from '../../styles'
import { List, MenuContainer } from './styles'

import MenuItem from '../MenuItem'
import MenuModel from '../../models/Menu'

export type Props = {
  menus: MenuModel[]
}

const MenuList = ({ menus }: Props) => {
  return (
    <MenuContainer>
      <Container>
        <List>
          {menus.map((menu) => (
            <MenuItem
              key={menu.id}
              title={menu.title}
              description={menu.description}
              image={menu.image}
            />
          ))}
        </List>
      </Container>
    </MenuContainer>
  )
}
export default MenuList
