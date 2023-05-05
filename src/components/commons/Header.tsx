import { AppBar, Grid, Switch, Typography } from '@mui/material'
import { useDisplayController } from '../../store'

type Props = {}

const Header = ({ ...props }: Props) => {
  const { isRoman, toggleIsRoman } = useDisplayController()

  return (
    <AppBar position="sticky">
      <Grid container>
        <Grid item sm={6}>
          <Typography variant="h1" py={1}>
            MChord
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <nav>
            <a href={'/dev'}>dev</a>
          </nav>
          <Switch checked={isRoman} onChange={toggleIsRoman} color="secondary" />
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Header
