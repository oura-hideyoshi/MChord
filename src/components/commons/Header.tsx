import { Chip, Switch, Tooltip } from '@mui/material'
import { useDisplayController } from '../../store'
import Link from 'next/link'

type Props = {}

const Header = ({ ...props }: Props) => {
  const { isRoman, toggleIsRoman } = useDisplayController()

  return (
    <div className="sticky flex items-center justify-between bg-primary-950 text-white shadow-md shadow-black">
      <h1 className="m-2 rounded bg-white text-primary-950">
        <Tooltip title={'HPを開きます'}>
          <Link
            className="p-4 text-2xl font-extrabold"
            target="_blank"
            href={'https://wandering-whimsey-6e0.notion.site/MChord-a257b5ac07fd43e9afc17cc5b1088531'}
          >
            MChord
          </Link>
        </Tooltip>
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
