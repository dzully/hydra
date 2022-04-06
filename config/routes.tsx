import DashboardCustomizeOutlined from '@mui/icons-material/DashboardCustomizeOutlined'
import SupportAgent from '@mui/icons-material/SupportAgent'
import Groups from '@mui/icons-material/Groups'

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
]
