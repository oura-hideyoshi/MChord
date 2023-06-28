import { Chip, Switch, Tooltip } from '@mui/material'
import { useDisplayController } from '../../../store'
import Link from 'next/link'
import URL from '../../../const/URL'
import { useReactflowLayout } from './hooks'
import { useStorage } from '@/hooks/useStorage'
import { useReactFlow } from 'reactflow'

type Props = {}

const Header = ({ ...props }: Props) => {
  const { isRoman, toggleIsRoman } = useDisplayController()
  const { cleanLayout } = useReactflowLayout()
  const { save, loadAndSet } = useStorage()
  const { getNodes, getEdges } = useReactFlow()

  return (
    <div className="sticky flex items-center justify-between bg-primary-950 text-white shadow-md shadow-black">
      <h1 className="m-2 rounded bg-white text-primary-950">
        <Tooltip title={'HPを開きます'}>
          <Link className="p-4 text-2xl font-extrabold" target="_blank" href={URL.homepage}>
            MChord
          </Link>
        </Tooltip>
      </h1>
      <span>
        dev:
        <button className="m-2 rounded-md bg-slate-50 p-2 text-primary-950" onClick={() => console.log(getNodes())}>
          nodes
        </button>
        <button className="m-2 rounded-md bg-slate-50 p-2 text-primary-950" onClick={() => console.log(getEdges())}>
          edges
        </button>
      </span>
      <span className="flex">
        <button className="m-2 rounded-md bg-slate-50 p-2 text-primary-950 active:translate-y-1" onClick={save}>
          save
        </button>
        <button className="m-2 rounded-md bg-slate-50 p-2 text-primary-950 active:translate-y-1" onClick={loadAndSet}>
          load
        </button>
        <button className="m-2 rounded-md bg-slate-50 p-2 text-primary-950 active:translate-y-1" onClick={cleanLayout}>
          layout
        </button>
        <span className="m-1 flex items-center rounded-md bg-white p-1 font-extrabold">
          <Chip variant="filled" label="C#" className={`${!isRoman ? 'bg-primary-700 text-white' : 'bg-primary-200'}`} />
          <Switch checked={isRoman} onChange={toggleIsRoman} />
          <Chip variant="filled" label="I#" className={`${isRoman ? 'bg-primary-700 text-white' : 'bg-primary-200'}`} />
        </span>
      </span>
    </div>
  )
}

export default Header
