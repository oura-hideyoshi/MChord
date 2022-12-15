import { ReactNode } from 'react'
import InputPage from '../../components/template/dev/input'

type Props = {
  children?: ReactNode
}

const input = ({ children, ...props }: Props) => {
  return <InputPage />
}

export default input
