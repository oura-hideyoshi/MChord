import { Box, List, ListItem, Typography } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'

export const index: NextPage = () => {
  return (
    <Box>
      <Typography variant="h1">Welcome to MChord</Typography>
      <Typography>these are pages for development </Typography>
      <nav>
        <List>
          <ListItem>
            <Link href={'/dev/translate'}>/dev/translate</Link>
          </ListItem>
          <ListItem>
            <Link href={'/dev/tonaljs'}>/dev/tonaljs</Link>
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}

export default index
