import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const clear = () => setCart([]);

    const addItem = (item, quantity) =>{
        const addedItem = {...item, quantity};
        const newCart = [...cart];
        const inCart = newCart.find((product) => product.id === addedItem.id);
        if(inCart){
            console.log("estaba y se suma")
            inCart.quantity += quantity;
            setCart(newCart);
        }else{
            console.log("no taba y se agrega")
            setCart([...cart, addedItem])
        }
    }
    console.log(cart)


    return(
        <CartContext.Provider value={{addItem, clear, cart}}>
            {children}
        </CartContext.Provider>
    )
}


