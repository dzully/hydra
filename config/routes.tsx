import { DashboardCustomizeOutlined } from '@mui/icons-material'
import { ReactNode } from 'react'

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
    path: '/Dashboard',
    icon: <DashboardCustomizeOutlined />,
  },
  {
    id: 1,
    label: 'Agent',
    path: '/Dashboard/agent',
    icon: <DashboardCustomizeOutlined />,
  },
]
