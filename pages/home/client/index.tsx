import useClient from '../../../components/hook/useClient'
import MultipleCard from '../../../containers/MultipleCard'

const Client = () => {
  const { listClient } = useClient()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MultipleCard tableData={listClient} />
    </div>
  )
}

export default Client
