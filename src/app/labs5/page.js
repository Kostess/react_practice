import Cart from "@/components/Cart/Cart"
import { CartProvider } from "@/contexts/CartContext"

export default function PageLabs5() {
    return (
        <CartProvider>
            <Cart/>
        </CartProvider>
        
    )
}