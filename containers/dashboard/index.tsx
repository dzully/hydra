import Container from './Container'
import Overview from './Overview'
import WelcomeUser from './WelcomeUser'
import GraphVisualization from './GraphVisualization'

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Container>
        <WelcomeUser />
        <div style={{ margin: 2 }} />
        <Overview />
        <div style={{ margin: 2 }} />
        <GraphVisualization />
      </Container>
    </div>
  )
}

export default Dashboard
