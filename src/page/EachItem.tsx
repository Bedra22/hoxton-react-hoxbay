import { useEffect, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"

type ItemINStore = {
    id: number,
    title: string,
    price: number,
    description: string,
    categoryId: number,
    image: string
}

export function EachItem() {
    const [storeitem, setStoreitem] = useState<null | ItemINStore>(null)
    const params = useParams()
    console.log('params:', params)

    useEffect(() => {
        fetch(`http://localhost:4000/products/${params.id}`)
            .then(resp => resp.json())
            .then(productdetailsFromServer => setStoreitem(productdetailsFromServer))
    }, [])

    if (storeitem === null) return (
        <div>Loading...</div>
    )

    if (storeitem.id === undefined) return <Navigate to="/home" />

    return (
        <div className="product-detail">
            <img src={storeitem.image} />
            <div className="product-detail__side">
                <h2>{storeitem.title}</h2>
                <h3>{storeitem.description}</h3>
                <h3>£{storeitem.price}</h3>
                <link rel="stylesheet" href="" />
                <Link to={`/basket`} >
                    <button>Add to basket</button>
                </Link>
            </div>
        </div>
    )
}