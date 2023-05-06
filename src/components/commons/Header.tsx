import { Chip, Switch } from '@mui/material'
import { useDisplayController } from '../../store'
import Link from 'next/link'

type Props = {}

const Header = ({ ...props }: Props) => {
  const { isRoman, toggleIsRoman } = useDisplayController()

  return (
    <div className="sticky flex items-center justify-between bg-primary-950 text-white shadow-md shadow-black">
      <h1>
        <Link className="p-4 text-2xl" href={'/'}>
          MChord
        </Link>
      </h1>
      <span className="m-1 flex items-center rounded-md bg-white p-1 font-extrabold">
        <Chip variant="filled" label="C#" className={`${!isRoman ? 'bg-primary-700 text-white' : 'bg-primary-200'}`} />
        <Switch checked={isRoman} onChange={toggleIsRoman} />
        <Chip variant="filled" label="I#" className={`${isRoman ? 'bg-primary-700 text-white' : 'bg-primary-200'}`} />
      </span>
    </div>
  )
}

export default Header
