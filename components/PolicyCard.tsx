import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

interface PolicyCardProps {
  data?: any
}

const PolicyCard = ({ data }: PolicyCardProps) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data && data?.length > 0
        ? data?.map((item: any) => (
            <Card
              key={item.id}
              sx={{ width: 370 }}
              style={{ marginRight: 10, marginBottom: 10 }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.images}
                alt={item.images}
                sx={{ objectFit: 'scale-down' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))
        : null}
    </div>
  )
}

export default PolicyCard
