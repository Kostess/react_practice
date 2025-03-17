import Cart from "@/components/Cart/Cart"
import { CartProvider } from "@/components/contexts/CartContext"

export default function PageLabs4() {
    return (
        <CartProvider>
            <Cart/>
        </CartProvider>
        
    )
}