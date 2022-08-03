import { useEffect, useState } from "react"
type Kategorite = {
    id: number,
    name: string
}
export function Categories() {
    const [categories, setCategories] = useState<Kategorite[]>([])

    useEffect(() => {
        fetch('http://localhost:4000/categories')
            .then(resp => resp.json())
            .then(categoriesFromServer => setCategories(categoriesFromServer))
    }, [])
    return (
        <div className="categories-container">

            <ul className="categories-container__list">
                {categories.map(kategori => (
                    <li  >
                        <a>
                            {kategori.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>

    )
}