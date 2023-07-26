import { createContext, useState, useContext } from "react";
import CartModal from "./components/CartModal";
const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false)
  const [cart, setCart] = useState([])

  const handleAdd = (prod) => {
    
    const found = cart.findIndex((item)=>item.id === prod.id)
    if(found===-1){
      setCart([...cart, {...prod,qty:1}])
      setTotal(total +prod.price);
    }else{
      cart[found].qty++;
      setCart(cart)
      setTotal(total + cart[found].price);
    }
    setItem(item + 1);
  };

  const handleRemove = (id) => {
    const found = cart.findIndex((item)=>item.id === id)
    if(found!==-1){
      if(cart[found].qty > 0){
        cart[found].qty--;
        setItem(item - 1);
        setTotal(total-cart[found].price);
      }else{
        cart.splice(found,1)
      }
      setCart(cart)
    }
  };

  const clear = () => {
    setTotal(0);
    setItem(0);
    setCart([])
  };

  const toggle = ()=>{
    setShowCart(!showCart)
  }

  return (
    <itemContext.Provider
      value={{ cart, total, item, handleAdd, handleRemove, clear, toggle }}
    >
      {showCart&&<CartModal/>}
      {children}
    </itemContext.Provider>
  );
}

export { useValue };
export default CustomItemContext;
