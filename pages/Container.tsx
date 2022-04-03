import { ReactNode, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'
import { useRouter } from 'next/router'
import CustomDrawerHeader from '../components/CustomDrawerHeader'
import CustomDrawer from '../components/CustomDrawer'
import CustomAppBar from '../components/CustomAppBar'
import { Routes, routes } from '../config/routes'
import { text } from 'stream/consumers'

interface ContainerProps {
  headerTitle?: string
  children?: ReactNode
}

const Container = ({ headerTitle = 'Insurae', children }: ContainerProps) => {
  const router = useRouter()
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <CustomAppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {headerTitle}
          </Typography>
          <Box sx={{ position: 'absolute', right: 25 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </CustomAppBar>
      <CustomDrawer variant="permanent" open={open}>
        <CustomDrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </CustomDrawerHeader>
        <Divider />
        <List style={{ padding: 2 }}>
          {routes.map((item: Routes) => (
            <ListItemButton
              disabled={item.path === router.pathname}
              key={item.id}
              style={{ marginBottom: 2, borderRadius: 3, opacity: 1 }}
              sx={{
                bgcolor:
                  router.asPath === item.path ? 'primary.dark' : 'transparent',
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                p: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          ))}
        </List>
      </CustomDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <CustomDrawerHeader />
        {children}
      </Box>
    </Box>
  )
}

export default Container
