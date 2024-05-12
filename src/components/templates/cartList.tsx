import React from 'react';
import CartItem from '@/components/templates/cartItem';
import { Cart } from '@/entities/cart';

const CartList = ({ carts, displayToast, formatPrice, updateCartQuantityInState }: { carts: Cart[], displayToast: (message: string) => void, formatPrice: (price: number) => string, updateCartQuantityInState: (cartId: number, newQuantity: number) => void }) => (
    <>
        {carts.map((cart: Cart) => (
            <div key={cart.id} className="flex flex-row gap-4 px-8 items-center">
                <div className="flex-1 justify-start">
                    <input type="checkbox" className="w-5 h-5" />
                </div>
                <div className="flex flex-1 flex-row gap-4 justify-items-start">
                    <div>
                        <img src={cart.product.productImageUrl} className="w-40 h-24" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span>{cart.product.title}</span>
                        <span>{formatPrice(cart.product.price)}</span>
                    </div>
                </div>
                <CartItem key={cart.id} cartId={cart.id} productId={cart.product.id} initialQuantity={cart.quantity} displayToast={displayToast} updateCartQuantityInState={updateCartQuantityInState} />            </div>
        ))}
    </>
);

export default CartList;