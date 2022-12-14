import { Grid } from '@mui/material'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const TonaljsPage = ({ children, ...props }: Props) => {
  return (
    <Grid container>
      <Link href={'/'}>back to home</Link>
    </Grid>
  )
}

export default TonaljsPage
