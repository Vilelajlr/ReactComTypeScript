import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductProps } from '../home';
import { BsCartPlus } from "react-icons/bs"
import { api } from '../../services/api';
import { CartContext } from "../../contexts/CartContext"
import toast from "react-hot-toast"


export function Product(){

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<ProductProps>();
    const {addItemCart} = useContext(CartContext)

    useEffect(() => {
        async function getProduct(){
            const response = await api.get(`products/${id}`)
            setProduct(response.data)
            console.log(response.data)
        }

        getProduct()
    }, [id])


    function handleCart(product: ProductProps){
        toast.success('Produto adicionado ao carrinho', {
            style: {
                borderRadius: '10px',
                background: '#121212',
                color: '#fff',
            }
        })
        addItemCart(product);
        navigate('/cart')
    }


    return(
        <div>
            <main className='w-full max-w-7xl px-4 mx-auto my-6'>
                {product && (
                    <section className='w-full'>
                        <div className='flex flex-col lg:flex-row '>

                            <img
                                className='flex-1 w-full max-h-72 object-contain'
                                src={product?.cover}
                                alt={product?.title}
                            />
                            
                            <div className='flex-1'>
                                <h1 className='font-bold text-2xl mt-4 mb-2'>{product?.title}</h1>
                                <p className='my-4'>{product?.description}</p>

                                <div className='flex gap-3 items-center'>

                                    <strong className='' >
                                        {product?.price.toLocaleString("pt-BR",{style: "currency", currency: "BRL"})}
                                    </strong>
                                    
                                    
                                        
                                    <button
                                        className='flex items-center gap-4 bg-zinc-900 px-4 py-2 rounded text-white hover:bg-green-600 transition duration-500 cursor-pointer'
                                        onClick={() => product && handleCart(product)}
                                    >
                                        Adicionar ao carrinho
                                        <BsCartPlus />
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>
            
        </div>
    )
}