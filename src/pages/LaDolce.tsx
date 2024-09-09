import MenuModel from '../models/Menu'

import Apresentation from '../Components/Apresentation'
import Header from '../Components/Header'
import MenuList from '../Components/MenuList'

import banner from '../assets/images/laDolceBanner.png'
import margherita from '../assets/images/image 3.png'

const menus: MenuModel[] = [
  {
    id: 1,

    title: 'Pizza Margherita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: margherita,
  },
  {
    id: 2,

    title: 'Pizza Margherita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: margherita,
  },
  {
    id: 3,

    title: 'Pizza Margherita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: margherita,
  },
  {
    id: 4,

    title: 'Pizza Margherita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: margherita,
  },
  {
    id: 5,

    title: 'Pizza Margherita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: margherita,
  },
  {
    id: 6,

    title: 'Pizza Margherita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: margherita,
  },
]

const LaDolce = () => {
  return (
    <div>
      <Header />
      <Apresentation
        title="La Dolce Vita Trattoria"
        diet="Italiana"
        banner={banner}
      />
      <MenuList menus={menus} />
    </div>
  )
}

export default LaDolce
