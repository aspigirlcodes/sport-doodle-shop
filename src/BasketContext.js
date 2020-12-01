import React,{useState} from "react"


const BasketContext = React.createContext();

function useBasket(){
  const [basket, setBasket] = useState([])
  const [nextId, setNextId] = useState(0)
  const addItem = (item) => {
    const id = nextId
    setBasket(basket.concat({...item, id}))
    setNextId(id + 1)
    return id
  }
  const removeItem = (id) => setBasket((basket) => basket.filter((item) => item.id!==id))
  const clear = () => {
    setBasket([])
    setNextId(0) 
  }
  return {basket, addItem, removeItem, clear}
}


export {BasketContext, useBasket}
