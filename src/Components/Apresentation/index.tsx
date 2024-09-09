import { Banner, BannerContainer, Diet, Title } from './styles'

type Props = {
  title: string
  diet: string
  banner: string
}

const Apresentation = ({ title, diet, banner }: Props) => {
  return (
    <BannerContainer>
      <Banner src={banner} alt={title} />
      <Diet>{diet}</Diet>
      <Title>{title}</Title>
    </BannerContainer>
  )
}

export default Apresentation
