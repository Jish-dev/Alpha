
import { useContext, useState } from "react"
import { myContext } from "./context/context"
import { Link, useNavigate } from "react-router-dom"

type User = any

export default function Display() {

  const {
    products,
    like,
    setLike,
    cart,
    setCart
  } = useContext<User>(myContext)

  const nav = useNavigate()

  const [search, setSearch] = useState("")
  const [filterdata, setFilterdata] = useState(products)

  // ============================================================
  // LIKE
  // ============================================================

  const handleLike = (pdt: any) => {

    if (like.includes(pdt)) {
      setLike(like.filter((item: any) => item !== pdt))
    } else {
      setLike([...like, pdt])
    }

  }

  // ============================================================
  // CART
  // ============================================================

  const handleCart = (pdt: any) => {

    if (cart.includes(pdt)) {
      setCart(cart.filter((item: any) => item !== pdt))
    } else {
      setCart([...cart, pdt])
    }

  }

  // ============================================================
  // SEARCH
  // ============================================================

  const handleSearch = (e: any) => {

    const query = e.target.value

    setSearch(query)

    const filtered = products.filter((product: any) =>
      product.productName
        .toLowerCase()
        .includes(query.toLowerCase()) ||

      product.price
        .toString()
        .includes(query) ||

      product.category
        .toLowerCase()
        .includes(query.toLowerCase())
    )

    setFilterdata(filtered)

  }

  // ============================================================
  // CATEGORY
  // ============================================================

  const categories = [
    ...new Set(
      products.map((product: any) => product.category)
    )
  ]

  const select = (e: any) => {

    const query = e.target.value

    if (!query) {
      setFilterdata(products)
      return
    }

    const filtered = products.filter(
      (product: any) =>
        product.category === query
    )

    setFilterdata(filtered)

    nav(`/Display/${query}`)

  }

  // ============================================================
  // CLEAR SEARCH
  // ============================================================

  const clearSearch = () => {

    setSearch("")
    setFilterdata(products)

  }

  return (

    <div className="min-h-screen bg-[#f6f7fb]">

      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">

        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">

          {/* LOGO */}

          <Link
            to="/Display"
            className="flex items-center gap-3"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-sm">
              A
            </div>

            <div>

              <h1 className="text-lg font-bold leading-none text-gray-900">
                Alpha
              </h1>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                Electronics
              </p>

            </div>

          </Link>


          {/* SEARCH */}

          <div className="mx-8 hidden max-w-xl flex-1 md:block">

            <div className="relative">

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>

              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search products..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-10 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />

              {search && (

                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-800"
                >
                  ✕
                </button>

              )}

            </div>

          </div>


          {/* RIGHT ACTIONS */}

          <div className="flex items-center gap-2">

            {/* LIKE */}

            <Link
              to="/like"
              className="relative flex h-11 items-center gap-2 rounded-xl px-3 text-gray-600 transition hover:bg-gray-100"
            >

              <span className="text-lg">
                ♡
              </span>

              <span className="hidden text-sm font-semibold sm:block">
                Wishlist
              </span>

              {like.length > 0 && (

                <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                  {like.length}
                </span>

              )}

            </Link>


            {/* CART */}

            <Link
              to="/cart"
              className="relative flex h-11 items-center gap-2 rounded-xl px-3 text-gray-600 transition hover:bg-gray-100"
            >

              <span className="text-lg">
                🛒
              </span>

              <span className="hidden text-sm font-semibold sm:block">
                Cart
              </span>

              {cart.length > 0 && (

                <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                  {cart.length}
                </span>

              )}

            </Link>


            {/* ACCOUNT */}

            <Link
              to="/logout"
              className="ml-2 flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
            >

              <span>
                Logout
              </span>

            </Link>

          </div>

        </div>


        {/* MOBILE SEARCH */}

        <div className="border-t border-gray-100 px-6 py-3 md:hidden">

          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search products..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-500"
          />

        </div>

      </nav>


      {/* ======================================================
          WELCOME HEADER
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 pt-10">

        <div className="overflow-hidden rounded-3xl bg-gray-950">

          <div className="relative px-7 py-12 md:px-12 md:py-16">

            {/* Background decoration */}

            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="absolute -bottom-40 right-40 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />


            <div className="relative max-w-2xl">

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Welcome back
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Find the technology
                <span className="block text-blue-500">
                  you need.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-gray-400 md:text-base">
                Explore our collection of smartphones, laptops,
                accessories and everyday electronics.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({
                      behavior: "smooth"
                    })
                }
                className="mt-7 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Browse Products →
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          CATEGORY BAR
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-5 flex items-center justify-between">

          <div>

            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              Explore
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900">
              Categories
            </h2>

          </div>


          <select
            onChange={select}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 outline-none focus:border-blue-500"
          >

            <option value="">
              All Categories
            </option>

            {categories.map((e: any) => (

              <option
                key={e}
                value={e}
              >
                {e}
              </option>

            ))}

          </select>

        </div>


        <div className="flex gap-3 overflow-x-auto pb-2">

          {categories.map((category: any) => (

            <button
              key={category}
              onClick={() => {

                const filtered =
                  products.filter(
                    (product: any) =>
                      product.category === category
                  )

                setFilterdata(filtered)

              }}
              className="whitespace-nowrap rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
            >
              {category}
            </button>

          ))}

        </div>

      </section>


      {/* ======================================================
          PRODUCTS
      ====================================================== */}

      <section
        id="products"
        className="mx-auto max-w-7xl px-6 pb-20"
      >

        <div className="mb-7 flex items-end justify-between">

          <div>

            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              Store
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900">
              All Products
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Showing {filterdata.length} products
            </p>

          </div>


          {search && (

            <button
              onClick={clearSearch}
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              Clear search
            </button>

          )}

        </div>


        {/* PRODUCT GRID */}

        {filterdata.length === 0 ? (

          <div className="rounded-3xl border border-dashed border-gray-300 bg-white py-24 text-center">

            <div className="text-5xl">
              🔍
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              No products found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try searching with a different product name,
              price or category.
            </p>

            <button
              onClick={clearSearch}
              className="mt-6 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white"
            >
              View All Products
            </button>

          </div>

        ) : (

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filterdata.map(
              (item: any, index: number) => {

                const isLiked =
                  like.includes(item)

                const isCart =
                  cart.includes(item)

                return (

                  <div
                    key={index}
                    className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
                  >

                    {/* IMAGE */}

                    <div className="relative flex h-[240px] items-center justify-center bg-gray-50 p-7">

                      <img
                        src={item.image}
                        alt={item.productName}
                        className="h-[190px] w-[190px] object-contain transition duration-500 group-hover:scale-105"
                      />


                      {/* LIKE */}

                      <button
                        onClick={() =>
                          handleLike(item)
                        }
                        className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border bg-white text-lg shadow-sm transition ${
                          isLiked
                            ? "border-red-200 text-red-500"
                            : "border-gray-200 text-gray-500 hover:border-red-200 hover:text-red-500"
                        }`}
                      >
                        {isLiked ? "♥" : "♡"}
                      </button>

                    </div>


                    {/* DETAILS */}

                    <div className="p-5">

                      <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-blue-600">
                        {item.category}
                      </p>

                      <h3 className="h-6 truncate text-base font-semibold text-gray-900">
                        {item.productName}
                      </h3>


                      <div className="mt-5 flex items-center justify-between">

                        <div>

                          <p className="text-xl font-bold text-gray-900">
                            ₹{item.price.toLocaleString()}
                          </p>

                        </div>


                        <button
                          onClick={() =>
                            handleCart(item)
                          }
                          className={`rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                            isCart
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-900 text-white hover:bg-blue-600"
                          }`}
                        >
                          {isCart
                            ? "✓ Added"
                            : "Add to Cart"}
                        </button>

                      </div>

                    </div>

                  </div>

                )

              }
            )}

          </div>

        )}

      </section>


      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-gray-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <h3 className="font-bold text-gray-900">
              Alpha Electronics
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Technology that fits your world.
            </p>

          </div>

          <div className="text-xs text-gray-400">
            © 2026 Alpha Electronics
          </div>

        </div>

      </footer>

    </div>
  )
}
