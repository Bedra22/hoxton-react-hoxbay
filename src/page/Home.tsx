import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
type ProductsItem = {
    id: number,
    title: string,
    image: string
}
export function Home() {

    const [products, setProducts] = useState<ProductsItem[]>([])

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(resp => resp.json())
            .then(productsFromServer => setProducts(productsFromServer))
    }, [])

    return (
        <div>
            <ul className="products-container">
                {products.map(item => (
                    <li className="products-container__list">
                        <Link to={`/home/${item.id}`} >
                            <div className="product-item">
                                <img src={item.image} />
                                <h3>{item.title}</h3>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    )
}