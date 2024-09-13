import { ButtonLink } from './styles'

type Props = {
  text: string
  link: string
}

const Button = ({ text, link }: Props) => (
  <ButtonLink to={link}>{text}</ButtonLink>
)

export default Button
