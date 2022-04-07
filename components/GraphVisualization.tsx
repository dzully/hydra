import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import LineGraph from './Graph/Line'
import PieChart from './Graph/PieChart'

const GraphVisualization = () => (
  <div
    style={{
      display: 'flex',
      flex: 1,
      margin: 2,
      position: 'relative',
      bottom: 22,
    }}
  >
    <Card
      sx={{ minWidth: 275, width: '100%', bgcolor: 'primary.main' }}
      elevation={0}
    >
      <CardContent
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '500px',
        }}
      >
        <Typography
          variant="h5"
          style={{ textAlign: 'center' }}
          color="text.secondary"
        >
          Monthly Sales Amount
        </Typography>
        <LineGraph />
      </CardContent>
    </Card>
    <div style={{ margin: 2 }} />
    <Card
      sx={{ minWidth: 275, width: '100%', bgcolor: 'primary.main' }}
      elevation={0}
    >
      <CardContent
        sx={{
          alignItems: 'center',
          height: '500px',
        }}
      >
        <Typography
          variant="h5"
          style={{ textAlign: 'center' }}
          color="text.secondary"
        >
          Monthly Policies Sold
        </Typography>
        <PieChart />
      </CardContent>
    </Card>
  </div>
)

export default GraphVisualization
