import { useState } from "react"

type ItemINStore = {
    id: number,
    title: string,
    price: number,
    description: string,
    categoryId: number,
    image: string
}
export function Basket() {
    const [storeitem, setStoreitem] = useState([])


    return (

        <div className="basket-container">
            <ul>
                {storeitem.map(item => (
                    <li>
                        <div className="basket-container__item">
                            <img src={item.image} />
                            <h3>{item.title}</h3>
                            <h3>{item.price}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}