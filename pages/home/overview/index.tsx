import GraphVisualization from '../../../components/GraphVisualization'
import WelcomeUser from '../../../components/WelcomeUser'
import OverviewComponent from '../../../components/Overview'

const Overview = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <WelcomeUser />
    <div style={{ margin: 2 }} />
    <OverviewComponent />
    <div style={{ margin: 2 }} />
    <GraphVisualization />
  </div>
)

export default Overview
