import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

interface WelcomeUserProps {
  username?: string
  subHeading?: string
}

const WelcomeUser = ({
  username = 'Dzul Syakimin',
  subHeading = 'Have a nice day to work',
}: WelcomeUserProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
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
          <Typography
            sx={{ fontWeight: 'bold' }}
            variant="h4"
            color="text.secondary"
          >
            Hello {username}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {subHeading}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default WelcomeUser
