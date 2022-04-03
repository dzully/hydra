import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { startCase } from 'lodash'
import CountUp from 'react-countup'

interface statisticProps {
  id: number
  title: string
  value: string
}

interface OverviewProps {
  statistic?: statisticProps[]
}

const Overview = ({
  statistic = [
    {
      id: 0,
      title: 'Yearly Total Policies Premium (EUR)',
      value: '2843',
    },
    {
      id: 1,
      title: 'Yearly Total Policies Sold',
      value: '845',
    },
    { id: 2, title: 'Yearly Total Quotes Generated', value: '1504' },
    { id: 3, title: 'Conversion Rate (%)', value: '56.18' },
  ],
}: OverviewProps) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {statistic?.map((item) => (
      <div
        key={item.id}
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          margin: 2,
          position: 'relative',
          bottom: 22,
        }}
      >
        <Card sx={{ minWidth: 275, bgcolor: 'primary.main' }} elevation={0}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="subtitle1" color="text.secondary">
              {startCase(item.title?.toLowerCase())}
            </Typography>
            <CountUp
              start={0}
              end={Number(item.value)}
              duration={2.75}
              separator=","
            >
              {({ countUpRef }) => (
                <Typography
                  variant="h1"
                  sx={{ fontWeight: 'bold' }}
                  color="text.secondary"
                  ref={countUpRef}
                />
              )}
            </CountUp>
          </CardContent>
        </Card>
      </div>
    ))}
  </div>
)

export default Overview
