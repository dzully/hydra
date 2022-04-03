import { useRouter } from 'next/router'
import CustomTable from '../components/CustomTable'
import Overview from '../components/Overview'

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

const MultipleCard = () => {
  const router = useRouter()

  const handleSelected = (userId: number) => {
    router.push(`${window.location.pathname}/${userId}`)
  }

  return (
    <>
      <Overview statistic={statistic} />
      <CustomTable handleSelected={handleSelected} />
    </>
  )
}

export default MultipleCard
