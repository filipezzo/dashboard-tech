import React from 'react'
import { useData } from '../Context/DataContext'
import { DateWrapper } from './DateWrapper'
import { Months } from './Months'
import { useLocation } from 'react-router-dom'

export const Header = () => {

  const [title, setTitle] = React.useState('Dashboard')
  const location = useLocation()
  React.useEffect(() => {
      if(location.pathname === '/') {
        setTitle("Dashboard")
      }
      if(location.pathname === '/vendas') {
        setTitle("Sells")
      }
      
  }, [location])
  return (
   <header className='mb'>
   <div className='mb daterange'>
   <DateWrapper/>
   <h1 className='box bg-3'>{title}</h1>
   </div>
    
    <Months/>
   </header>
  )
}
