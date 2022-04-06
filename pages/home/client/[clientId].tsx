import useClient from '../../../hook/useClient'
import useSelectedClient from '../../../hook/useSelectedClient'
import WelcomeUser from '../../../components/WelcomeUser'
import OverviewComponent from '../../../components/Overview'
import ClientTab from '../../../containers/ClientTab'

const ClientId = () => {
  useClient()
  const { selectedClient } = useSelectedClient()

  const statistic = [
    {
      id: 1,
      title: 'Coverage Start',
      value: selectedClient?.start_coverage_period || '',
    },
    {
      id: 2,
      title: 'Coverage End',
      value: selectedClient?.end_coverage_period || '',
    },
    {
      id: 3,
      title: 'Total Claim',
      value: selectedClient?.total_claim || '',
    },
  ]

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <WelcomeUser
        username={selectedClient?.name}
        subHeading={selectedClient?.id}
      />
      <div style={{ margin: 2 }} />
      <OverviewComponent
        countUpStyle={false}
        statistic={statistic}
        countUpSeparator=""
      />
      <ClientTab />
    </div>
  )
}

export default ClientId
