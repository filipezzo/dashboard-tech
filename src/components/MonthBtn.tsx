import React from 'react'
import { useData } from '../Context/DataContext';

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  background: 'var(--color-3)',
  border:'none',
  borderRadius:  'var(--gap)',
  color: 'var(--color2)',
  fontWeight: '600',
  textTransform: 'capitalize',

}
function monthName(n:number){
  const date = new Date();
  date.setMonth(date.getMonth() + n );
  const name = new Intl.DateTimeFormat('eng', {
    month: "long"
  }).format(date)
  return name
}

function formattedDate(date:Date){
  
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`
}


export const MonthBtn = ({n} : {n:number}) => {

  const {setStart, setFinish} = useData()

  function setMonth(n:number){
    const date = new Date();
    date.setMonth(date.getMonth() + n );

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

     setStart(formattedDate(firstDay))
     setFinish(formattedDate(lastDay))
    
  }

  return (
    <button onClick={()=> setMonth(n)} style={style}>{monthName(n)}</button>
  )
}

