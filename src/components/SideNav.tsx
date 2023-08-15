import React from 'react'
import fintech from '../assets/fintech.svg'
import resumo from '../assets/icons/resumo.svg'
import vendas from '../assets/icons/vendas.svg'
import webhooks from '../assets/icons/webhooks.svg'
import sair from '../assets/icons/sair.svg'
import configuracoes from '../assets/icons/configuracoes.svg'
import Resume from '../pages/Resume'
import FintechSVG from '../assets/FintechSVG'
import { NavLink } from 'react-router-dom'



export const SideNav = () => {
  return (
    <nav className=' sidenav box bg-3'>
      <FintechSVG title='fintech'/>
      <ul>
        <li>
          <span>
            <img src={resumo} alt=""  />
          </span>
          <NavLink to='/' >Dashboard</NavLink>
          </li>

          <li>
          <span>
            <img src={vendas} alt=""  />
          </span>
          <NavLink to='/vendas' >Sells</NavLink>
          </li>

          <li>
          <span>
            <img src={webhooks} alt=""  />
          </span>
          <a href="">Webhooks</a>
          </li>

          <li>
          <span>
            <img src={configuracoes} alt=""  />
          </span>
          <a href="">Config</a>
          </li>

          <li>
          <span>
            <img src={sair} alt=""  />
          </span>
          <a href="">Leave</a>
          </li>

          
      </ul>
    </nav>
  )
}
