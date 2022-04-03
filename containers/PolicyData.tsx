import { useRouter } from 'next/router'
import Overview from '../components/Overview'
import PolicyCard from '../components/PolicyCard'

const statistic = [
  {
    id: 0,
    title: 'total agent',
    value: '2843',
  },
  {
    id: 1,
    title: 'total policy sold',
    value: '61840',
  },
  { id: 2, title: 'new agent this month', value: '57' },
  { id: 3, title: 'policy sold this month', value: '214' },
]

const data = [
  {
    id: 0,
    images: 'https://source.unsplash.com/random',
    title: 'Life Insurance',
    description: 'Policy 1 description',
  },
  {
    id: 1,
    images: 'https://source.unsplash.com/random',
    title: 'Private Vehicle Insurance',
    description: 'Policy 1 description',
  },
  {
    id: 2,
    images: 'https://source.unsplash.com/random',
    title: 'Boat Insurance',
    description: 'Policy 1 description',
  },
  {
    id: 3,
    images: 'https://source.unsplash.com/random',
    title: 'Health Insurance',
    description: 'Policy 1 description',
  },
  {
    id: 4,
    images: 'https://source.unsplash.com/random',
    title: 'Health Insurance',
    description: 'Policy 1 description',
  },
  {
    id: 5,
    images: 'https://source.unsplash.com/random',
    title: 'Homeowner Insurance',
    description: 'Policy 1 description',
  },
  {
    id: 6,
    images: 'https://source.unsplash.com/random',
    title: 'Health Insurance',
    description: 'Policy 1 description',
  },
]

const PolicyData = () => {
  const router = useRouter()

  const handleSelected = (userId: number) => {
    router.push(`${window.location.pathname}/${userId}`)
  }

  return (
    <>
      <Overview statistic={statistic} />
      <PolicyCard data={data} />
    </>
  )
}

export default PolicyData
