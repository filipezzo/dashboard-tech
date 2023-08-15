import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Isell } from '../Context/DataContext'
import { Loading } from '../components/Loading'

export const Sell = () => {
 const {id}  = useParams()
  const {data,loading} = useFetch<Isell>(`https://data.origamid.dev/vendas/${id}`)

  if(loading === true ) return <Loading/>
  if(data === null) return null;

  return (
    <div>
      <div className='box mb'>
        ID: {data.id}
      </div>

      <div className='box mb'>
       Name: {data.nome}
      </div>
      <div className='box mb'>
       Price: {data.preco.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
       })}
      </div>

      <div className='box mb'>
         Status: {data.status}
      </div>
      <div className='box mb'>
       Payment: {data.pagamento}
      </div>

    </div>
  )
}
