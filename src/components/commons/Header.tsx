import { Switch } from '@mui/material'
import { useDisplayController } from '../../store'

type Props = {}

const Header = ({ ...props }: Props) => {
  const { isRoman, toggleIsRoman } = useDisplayController()

  return (
    <div className="sticky flex items-center justify-between bg-primary text-white shadow-md shadow-black">
      <h1 className="text-2xl">MChord</h1>
      <div className="flex">
        <nav>
          <a href={'/dev'}>dev</a>
        </nav>
        <Switch checked={isRoman} onChange={toggleIsRoman} />
      </div>
    </div>
  )
}

export default Header
