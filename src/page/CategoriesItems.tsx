import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { EachItem } from "./EachItem"

type ItemINStore = {
    id: number,
    title: string,
    price: number,
    description: string,
    categoryId: number,
    image: string
}

export function CategoriesItems() {
    const [inCategories, setinCategories] = useState<ItemINStore[]>([])
    const params = useParams()
    console.log('params:', params)

    useEffect(() => {
        fetch(`http://localhost:4000/products?_expand=category&categoryId=${params.id}`)
            .then(resp => resp.json())
            .then(itemsInCategoriesFromServer => setinCategories(itemsInCategoriesFromServer))
    }, [])

    if (inCategories === null) return (
        <div>Loading...</div>
    )
    return (
        <div>
            <ul className="products-container">
                {inCategories.map(item => (
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
        </div>
    )
}