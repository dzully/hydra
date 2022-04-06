import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useState } from 'react'
import CustomTabPanelProps from '../components/CustomTabPanel'
import ClientDriving from './ClientDriving'
import ClientLifestyle from './ClientLifestyle'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const ClientTab = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            '.css-avssbr-MuiButtonBase-root-MuiTab-root.Mui-selected': {
              color: 'black',
              borderRadius: 1,
            },
            '.css-avssbr-MuiButtonBase-root-MuiTab-root': {
              color: 'primary.dark',
              borderRadius: 1,
            },
          }}
        >
          <Tab label="Driving Performance" {...a11yProps(0)} />
          <Tab label="Lifestyle Performance" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <CustomTabPanelProps value={value} index={0}>
        <ClientDriving />
      </CustomTabPanelProps>
      <CustomTabPanelProps value={value} index={1}>
        <ClientLifestyle />
      </CustomTabPanelProps>
    </Box>
  )
}

export default ClientTab
