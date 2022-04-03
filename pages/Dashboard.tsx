import GraphVisualization from '../components/GraphVisualization'
import Overview from '../components/Overview'
import WelcomeUser from '../components/WelcomeUser'

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <WelcomeUser />
      <div style={{ margin: 2 }} />
      <Overview />
      <div style={{ margin: 2 }} />
      <GraphVisualization />
    </div>
  )
}

export default Dashboard
