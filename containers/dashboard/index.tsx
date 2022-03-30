import Container from './Container'
import Overview from './Overview'
import WelcomeUser from './WelcomeUser'

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Container>
        <WelcomeUser />
        <div style={{ margin: 2 }} />
        <Overview />
      </Container>
    </div>
  )
}

export default Dashboard
