import { product } from "./data/list"
import { myContext } from "./components/context/context"
import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Display from "./components/Display"
import Like from "./components/Like"
import Cart from "./components/Cart"
import Category from "./components/Category"
import Home from "./components/Home"
import Login from "./components/Login"
import New from "./components/New"
import Logout from "./components/Logout"


function App() {

    const [products, setProduct] = useState(product)
    const [like, setLike] = useState([])
    const [cart, setCart] = useState([])

    return (
        <myContext.Provider value={{ products, setProduct, like, setLike, cart, setCart }}>

            <BrowserRouter>
                <Routes>
                    <Route path="home" element={<Home/>}></Route>
                    <Route path="Display" element={<Display />}></Route>
                    <Route path="like" element={<Like></Like>}></Route>
                    <Route path="cart" element={<Cart/>}></Route>
                    <Route path="Display/:cat" element={<Category/>}></Route>
                    <Route path="login" element={<Login/>}></Route>
                    <Route path="signup" element={<New/>}></Route>
                    <Route path="logout" element={<Logout/>}></Route>
                </Routes>
            </BrowserRouter>


        </myContext.Provider>
    )
}

export default App
