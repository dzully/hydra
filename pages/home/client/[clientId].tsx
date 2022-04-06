import useClient from '../../../components/hook/useClient'
import useSelectedClient from '../../../components/hook/useSelectedClient'

const ClientId = () => {
  useClient()
  const { selectedClient } = useSelectedClient()

  return (
    <div
      style={{
        position: 'relative',
        bottom: 22,
        display: 'flex',
      }}
    >
      hello
    </div>
  )
}

export default ClientId
