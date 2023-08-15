import React from "react";
import useFetch from "../hooks/useFetch";

interface IDataContext  {
  data: Isell[]| null
  loading: boolean
  error: string | null
  start: string
  finish: string
  setStart: React.Dispatch<React.SetStateAction<string>>
  setFinish: React.Dispatch<React.SetStateAction<string>>
}

export interface Isell{
id: string
nome: string
preco: number
status: "pago" | "processando " | "falha"
pagamento: "boleto" | "pix " | "cartao"
parcelas: number  | null
data: string 
}


const DataContext = React.createContext<IDataContext | null >(null);

export const useData =  () => {
  const context = React.useContext(DataContext)

  if(!context) throw new Error('unable to find context')
  return context
}

function getDate(n:number){
  const date = new Date();
  date.setDate(date.getDate() - n)
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`
}




export const DataContextProvider = ({ children }: React.PropsWithChildren) => {

  const [start, setStart] = React.useState(getDate(14))
  const [finish, setFinish] = React.useState(getDate(0))
  const {data, loading, error} = useFetch<Isell[]>(`https://data.origamid.dev/vendas/?inicio=${start}&final=${finish}`)

  return <DataContext.Provider 
  value={{data, loading, error, start,setStart, finish, setFinish }}>
    {children}
  </DataContext.Provider>;
};
