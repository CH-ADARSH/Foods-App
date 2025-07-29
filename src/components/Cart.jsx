import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return <div className='text-center pt-1 dark:text-white dark:bg-slate-600'>
        <h1 className='text-2xl font-bold'>Cart</h1>

        <div className='m-auto w-6/12 '>
            <button className='p-2 m-2 shadow-lg rounded-md bg-green-100 dark:bg-slate-400'
             onClick={handleClearCart}
            >Clear Cart</button>
            {cartItems.length === 0 && <h1>Cart is Empty.Add items to the cart </h1>}
            <div className='dark:bg-gray-500 dark:text-white
                         dark:shadow-xl'>
                <ItemList items={cartItems} />
            </div>
        </div>
    </div>
      
  
}


export default Cart;