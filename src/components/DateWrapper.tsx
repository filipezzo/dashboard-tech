
import { DateInput } from './DateInput'
import { useData } from '../Context/DataContext'

export const DateWrapper = () => {
  
  const {start, setStart, finish, setFinish} = useData()

  return (
    <form className='box flex' onSubmit={(e)=> e.preventDefault()}>
      <DateInput label='Start' value={start} onChange={({target})=> {
        setStart(target.value)
      }}/>

      
      <DateInput  label='Finish' value={finish} onChange={({target})=> {
        setFinish(target.value)
      }} />
     
    </form>
  )
}
