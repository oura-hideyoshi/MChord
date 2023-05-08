import { SpeedDial as SpeedDialMui, SpeedDialIcon, SpeedDialAction } from '@mui/material'
import URL from '../../const/URL'
import { Icon } from '@iconify/react'

type Props = {}

const SpeedDial = ({ ...props }: Props) => {
  return (
    <SpeedDialMui ariaLabel={'speed dial'} icon={<SpeedDialIcon />}>
      <SpeedDialAction
        className="hover:text-black"
        tooltipTitle={'機能要望フォーム(外部リンク)'}
        icon={<Icon icon="icons8:idea" />}
        onClick={() => window.open(URL.functionForm)}
      />
      <SpeedDialAction
        className="hover:text-black"
        tooltipTitle={'バグ報告フォーム(外部リンク)'}
        icon={<Icon icon="material-symbols:bug-report-outline" />}
        onClick={() => window.open(URL.bugForm)}
      />
    </SpeedDialMui>
  )
}

export default SpeedDial
