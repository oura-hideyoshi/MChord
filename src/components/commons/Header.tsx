import { AppBar, Grid, Typography } from '@mui/material'

type Props = {}

const Header = ({ ...props }: Props) => {
  return (
    <AppBar position="sticky">
      <Grid container>
        <Grid item sm={6}>
          <Typography variant="h1">MChord</Typography>
        </Grid>
        <Grid item sm={6}>
          <nav>
            <a href={'/dev'}>dev</a>
          </nav>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Header
