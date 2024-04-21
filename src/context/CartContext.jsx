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
            inCart.quantity += quantity;
            setCart(newCart);
        }else{
            setCart([...cart, addedItem])
        }
        alert("the product was added to the cart")
    }
    // Eliminar para entregar
    console.log(cart)
    
    const removeItem = (i) => {
        const filterCart = cart.filter((item) => item.id !== id);
        setCart(filterCart)
    };


    return(
        <CartContext.Provider value={{addItem, removeItem, clear, cart}}>
            {children}
        </CartContext.Provider>
    )
}


