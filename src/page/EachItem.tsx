import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"

type ItemsINStore = {
    id: number,
    title: string,
    price: number,
    description: string,
    categoryId: number,
    image: string
}

export function EachItem() {
    const [storeitems, setStoreitems] = useState<null | ItemsINStore>(null)
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/products/${params.id}`)
            .then(resp => resp.json())
            .then(productdetailsFromServer => setStoreitems(productdetailsFromServer))
    }, [])

    if (storeitems === null) return (
        <div>Loading...</div>
    )

    if (storeitems === undefined) return <Navigate to="/home" />

    return (
        <div>
            <img src={storeitems.image} />
            <h3>{storeitems.title}</h3>
            <p>{storeitems.description}</p>
            <p>{storeitems.price}</p>
            <button>Add to basket</button>
        </div>
    )
}