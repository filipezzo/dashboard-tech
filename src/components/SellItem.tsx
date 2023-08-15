import React from 'react'
import { Isell } from '../Context/DataContext'
import { NavLink } from 'react-router-dom'

export const SellItem = ({sell}: {sell:Isell}) => {
  return (
    
          <div className="box flex sell">
            
             <NavLink to={`/vendas/${sell.id}`} style={{fontFamily: 'monospace'}}>
              {sell.id}
             </NavLink>
             <div>
                {sell.nome}
             </div>
             <div>  
              {sell.preco.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
              })}
             </div>
          </div>
        
  )
}
