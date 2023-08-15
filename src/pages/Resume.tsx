import { useData } from '../Context/DataContext'
import { Graphics } from '../components/Graphics'
import { Loading } from '../components/Loading'


const Resume = () => {

  const {data} = useData()
  
  if (data === null) return null
  return (
    <section >
      <div className='resumo flex mb'>
        
        <div className='box'>
          <h2>Received</h2>
          <span>
          {
          data
          .filter((d)=> d.status !=="falha")
          .reduce((acc,item)=> acc+item.preco, 0)
          .toLocaleString('pt-br', {
            style: 'currency',
            currency: 'brl'
          })
          }
          </span>
          
        </div>

        <div className='box'>
          <h2>Paid</h2>
          <span>
          {
          data
          .filter((d)=> d.status === 'pago')
          .reduce((acc,item)=> acc+item.preco, 0)
          .toLocaleString('pt-br', {
            style: 'currency',
            currency: 'brl'
          })
          }
          </span>
          
        </div>

        <div className='box'>
          <h2>Processing</h2>
          <span>
          {
          data
          
          .filter((d) => d.status === 'processando')
          .reduce((acc,item)=> acc+item.preco, 0)
          .toLocaleString('pt-br', {
            style: 'currency',
            currency: 'brl'
          })
          }
          </span>
          
        </div>
        
      </div>
      <div className="box mb "><Graphics data={data}/></div>
    </section>
  )
}

export default Resume