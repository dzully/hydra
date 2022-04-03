import DashboardCustomizeOutlined from '@mui/icons-material/DashboardCustomizeOutlined'
import SupportAgent from '@mui/icons-material/SupportAgent'
import Groups from '@mui/icons-material/Groups'
import Assignment from '@mui/icons-material/Assignment'
import Public from '@mui/icons-material/Public'

export interface Routes {
  id: number
  label: string
  path: string
  icon: any
}

export const routes: Routes[] = [
  {
    id: 0,
    label: 'Home',
    path: '/home/overview',
    icon: <DashboardCustomizeOutlined />,
  },
  {
    id: 1,
    label: 'Agent',
    path: '/home/agent',
    icon: <SupportAgent />,
  },
  {
    id: 2,
    label: 'Client',
    path: '/home/client',
    icon: <Groups />,
  },
  {
    id: 3,
    label: 'Policy',
    path: '/home/policy',
    icon: <Assignment />,
  },
  {
    id: 4,
    label: 'Smartview',
    path: '/home/smartview',
    icon: <Public />,
  },
]
