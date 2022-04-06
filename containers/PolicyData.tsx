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
    images: '/life-insurance.jpeg',
    title: 'Life Insurance',
    description:
      'Life insurance is a contract between an insurer and a policy owner. A life insurance policy guarantees the insurer pays a sum of money to named beneficiaries when the insured dies in exchange for the premiums paid by the policyholder during their lifetime.',
  },
  {
    id: 1,
    images: '/transport-private.jpeg',
    title: 'Private Vehicle Insurance',
    description:
      'Private vehicle insurance protects you against damages to other people’s vehicles and injuries they may sustain. You and any additional drivers named in the policy will also be covered for loss, theft or damage to your car and any injuries caused by an accident',
  },
  {
    id: 2,
    images: '/boat-insurance.png',
    title: 'Shop Insurance',
    description: 'Policy 1 description',
  },
  {
    id: 3,
    images: '/health-insurance.jpeg',
    title: 'Health Insurance',
    description:
      'Health insurance is a type of insurance that covers medical expenses that arise due to an illness. These expenses could be related to hospitalisation costs, cost of medicines or doctor consultation fees.',
  },
  {
    id: 5,
    images: '/home-insurance.jpeg',
    title: 'Homeowner Insurance',
    description:
      "Homeowners insurance is a form of property insurance that covers losses and damages to an individual's residence, along with furnishings and other assets in the home. Homeowners insurance also provides liability coverage against accidents in the home or on the property.",
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
