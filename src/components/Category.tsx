import { useContext } from "react"
import { myContext } from "./context/context"
import { useParams } from "react-router-dom"

export default function Category() {

    const { products } = useContext<any>(myContext)

    const { cat } = useParams()

    const product = products.filter(
        pdt => pdt.category === cat
    )

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">

            <div className="mx-auto mb-10 max-w-7xl">

                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-400">
                    Category
                </p>

                <h1 className="text-3xl font-bold capitalize text-gray-900">
                    {cat}
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                    {product.length} products available
                </p>

            </div>


            
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {product.map((item, index) => (

                    <div
                        key={index}
                        className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >

                        
                        <div className="flex h-240px items-center justify-center bg-gray-50 p-6">

                            <img
                                src={item.image}
                                alt={item.productName}
                                className="h-[190px] w-[190px] object-contain transition duration-500 group-hover:scale-105"
                            />

                        </div>


                    
                        <div className="p-5">

                            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">
                                {item.category}
                            </p>

                            <h2 className="h-7 truncate text-lg font-semibold text-gray-900">
                                {item.productName}
                            </h2>

                            <div className="mt-4 flex items-center justify-between">

                                <p className="text-xl font-bold text-gray-900">
                                    ₹{item.price.toLocaleString("en-IN")}
                                </p>

                                <button className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800">
                                    Add to Cart
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>


        
            {product.length === 0 && (

                <div className="mx-auto max-w-7xl rounded-2xl bg-white px-6 py-20 text-center shadow-sm">

                    <div className="mb-4 text-4xl">
                        📦
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900">
                        No products found
                    </h2>

                    <p className="mt-2 text-gray-500">
                        There are no products available in this category.
                    </p>

                </div>

            )}

        </div>
    )
}

