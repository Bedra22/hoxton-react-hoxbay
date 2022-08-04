import Header from './components/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './page/Home'
import { Categories } from './page/Categories'
import { Basket } from './page/Basket'
import { EachItem } from './page/EachItem'
import { CategoriesItems } from './page/CategoriesItems'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to='/home' />} />
          <Route path='home' element={<Home />} />
          <Route path='home/:id' element={<EachItem />} />
          <Route path='categories' element={<Categories />} />
          <Route path='categories/:id' element={<CategoriesItems />} />
          <Route path='basket' element={<Basket />} />
        </Routes>
      </main>
    </>
  )
}

export default App
