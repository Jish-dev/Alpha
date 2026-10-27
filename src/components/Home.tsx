
import { useContext, useState } from "react";
import { myContext } from "./context/context";
import { Link, useNavigate } from "react-router-dom";

type Product = {
  productName: string;
  price: number;
  category: string;
  image: string;
};

type ContextType = {
  products: Product[];
  login: any[];
  like: Product[];
  cart: Product[];
  setLike: React.Dispatch<React.SetStateAction<Product[]>>;
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

export default function Home() {
  const {
    products,
    login,
    like,
    cart,
    setLike,
    setCart,
  } = useContext(myContext) as ContextType;

  const nav = useNavigate();

  const [search, setSearch] = useState("");

  const [filterdata, setFilterdata] = useState<Product[]>(products);

  // ============================================================
  // LIKE
  // ============================================================

  const handleLike = (pdt: Product) => {
    if (like.some((item) => item.productName === pdt.productName)) {
      setLike(
        like.filter(
          (item) => item.productName !== pdt.productName
        )
      );
    } else {
      setLike([...like, pdt]);
    }
  };

  // ============================================================
  // CART
  // ============================================================

  const handleCart = (pdt: Product) => {
    if (cart.some((item) => item.productName === pdt.productName)) {
      setCart(
        cart.filter(
          (item) => item.productName !== pdt.productName
        )
      );
    } else {
      setCart([...cart, pdt]);
    }
  };

  // ============================================================
  // SEARCH
  // ============================================================

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = e.target.value;

    setSearch(query);

    const filtered = products.filter(
      (product) =>
        product.productName
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        product.price
          .toString()
          .includes(query) ||
        product.category
          .toLowerCase()
          .includes(query.toLowerCase())
    );

    setFilterdata(filtered);
  };

  // ============================================================
  // CATEGORIES
  // ============================================================

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const selectCategory = (category: string) => {
    if (!category) {
      setFilterdata(products);
      nav("/Display");
      return;
    }

    const filtered = products.filter(
      (product) => product.category === category
    );

    setFilterdata(filtered);
    nav(`/Display/${category}`);
  };

  // ============================================================
  // CATEGORY ICON
  // ============================================================

  const getCategoryIcon = (category: string) => {
    const name = category.toLowerCase();

    if (name.includes("phone") || name.includes("mobile")) {
      return "📱";
    }

    if (
      name.includes("laptop") ||
      name.includes("computer")
    ) {
      return "💻";
    }

    if (
      name.includes("audio") ||
      name.includes("headphone") ||
      name.includes("speaker")
    ) {
      return "🎧";
    }

    if (
      name.includes("watch") ||
      name.includes("wearable")
    ) {
      return "⌚";
    }

    if (
      name.includes("camera") ||
      name.includes("photo")
    ) {
      return "📷";
    }

    if (
      name.includes("gaming") ||
      name.includes("game")
    ) {
      return "🎮";
    }

    return "⚡";
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">

      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* LOGO */}

          <Link
            to="/Display"
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
              A
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight">
                Alpha
              </h1>

              <p className="-mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
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
                placeholder="Search products, brands and categories..."
                value={search}
                onChange={handleSearch}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />

            </div>

          </div>

          {/* ACTIONS */}

          <div className="flex items-center gap-2">

            {login?.length > 0 ? (
              <Link
                to="/logout"
                className="hidden rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700 sm:block"
              >
                Logout
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 sm:block"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </>
            )}

          </div>

        </div>

        {/* MOBILE SEARCH */}

        <div className="border-t border-gray-100 px-6 py-3 md:hidden">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleSearch}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-500"
          />

        </div>

      </nav>


      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="overflow-hidden bg-gray-950">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:py-28">

          <div>

            <span className="mb-5 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
              Next Generation Electronics
            </span>

            <h2 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
              Technology that
              <span className="block text-blue-500">
                fits your world.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
              Discover the latest smartphones, laptops, accessories,
              audio devices and smart technology — all in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#products"
                className="rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
              >
                Shop Products →
              </a>

              <a
                href="#categories"
                className="rounded-xl border border-gray-700 px-6 py-3.5 font-semibold text-white transition hover:border-gray-500 hover:bg-gray-900"
              >
                Explore Categories
              </a>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="relative hidden lg:block">

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative mx-auto flex h-[420px] max-w-md items-center justify-center rounded-[40px] border border-white/10 bg-gradient-to-br from-gray-800 to-gray-950 shadow-2xl">

              <div className="text-center">

                <div className="text-[130px] drop-shadow-2xl">
                  📱
                </div>

                <p className="mt-3 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                  Smart Technology
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          FEATURES
      ====================================================== */}

      <section className="border-b border-gray-200 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">

          <div className="flex items-center gap-3">
            <span className="text-2xl">🚚</span>
            <div>
              <p className="text-sm font-bold">Fast Delivery</p>
              <p className="text-xs text-gray-500">Quick & reliable</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">🔒</span>
            <div>
              <p className="text-sm font-bold">Secure Payment</p>
              <p className="text-xs text-gray-500">100% protected</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">✓</span>
            <div>
              <p className="text-sm font-bold">Quality Products</p>
              <p className="text-xs text-gray-500">Trusted products</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">↩</span>
            <div>
              <p className="text-sm font-bold">Easy Returns</p>
              <p className="text-xs text-gray-500">Simple process</p>
            </div>
          </div>

        </div>

      </section>


      {/* ======================================================
          CATEGORIES
      ====================================================== */}

      <section
        id="categories"
        className="mx-auto max-w-7xl px-6 py-16"
      >

        <div className="mb-8 flex items-end justify-between">

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Explore
            </p>

            <h2 className="text-3xl font-bold tracking-tight">
              Shop by Category
            </h2>
          </div>

          <select
            onChange={(e) =>
              selectCategory(e.target.value)
            }
            className="hidden rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none md:block"
          >
            <option value="">All Categories</option>

            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}

          </select>

        </div>


        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => selectCategory(category)}
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl transition group-hover:bg-blue-600">
                {getCategoryIcon(category)}
              </div>

              <p className="truncate text-sm font-semibold">
                {category}
              </p>

            </button>

          ))}

        </div>

      </section>


      {/* ======================================================
          PRODUCTS
      ====================================================== */}

      <section
        id="products"
        className="bg-white py-16"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-10 flex items-end justify-between">

            <div>

              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                Our Collection
              </p>

              <h2 className="text-3xl font-bold tracking-tight">
                Featured Products
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {filterdata.length} products available
              </p>

            </div>

            {search && (
              <button
                onClick={() => {
                  setSearch("");
                  setFilterdata(products);
                }}
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                Clear Search
              </button>
            )}

          </div>


          {filterdata.length === 0 ? (

            <div className="rounded-3xl border border-dashed border-gray-300 py-24 text-center">

              <div className="mb-4 text-5xl">
                🔍
              </div>

              <h3 className="text-xl font-bold">
                No products found
              </h3>

              <p className="mt-2 text-gray-500">
                Try searching for another product or category.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filterdata.map((item, index) => {

                const isLiked = like?.some(
                  (product) =>
                    product.productName ===
                    item.productName
                );

                const isInCart = cart?.some(
                  (product) =>
                    product.productName ===
                    item.productName
                );

                return (

                  <div
                    key={index}
                    className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >

                    {/* IMAGE */}

                    <div className="relative flex h-64 items-center justify-center bg-gray-50 p-8">

                      <img
                        src={item.image}
                        alt={item.productName}
                        className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                      />

                      {/* LIKE */}

                      <button
                        onClick={() =>
                          handleLike(item)
                        }
                        className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-md transition ${
                          isLiked
                            ? "text-red-500"
                            : "text-gray-500 hover:text-red-500"
                        }`}
                      >
                        {isLiked ? "♥" : "♡"}
                      </button>

                    </div>


                    {/* DETAILS */}

                    <div className="p-5">

                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                        {item.category}
                      </p>

                      <h3 className="mb-3 truncate text-base font-semibold text-gray-900">
                        {item.productName}
                      </h3>

                      <div className="flex items-center justify-between">

                        <p className="text-xl font-bold">
                          ₹{item.price.toLocaleString()}
                        </p>

                        <button
                          onClick={() =>
                            handleCart(item)
                          }
                          className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                            isInCart
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-900 text-white hover:bg-blue-600"
                          }`}
                        >
                          {isInCart
                            ? "Added ✓"
                            : "Add to Cart"}
                        </button>

                      </div>

                    </div>

                  </div>

                );
              })}

            </div>

          )}

        </div>

      </section>


      {/* ======================================================
          CTA
      ====================================================== */}

      <section className="bg-gray-950">

        <div className="mx-auto max-w-7xl px-6 py-20 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            Alpha Electronics
          </p>

          <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Upgrade the way you experience technology.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Find powerful devices and smart accessories designed
            for work, entertainment and everyday life.
          </p>

          <a
            href="#products"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500"
          >
            Start Shopping →
          </a>

        </div>

      </section>


      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-gray-800 bg-gray-950 text-gray-400">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between">

          <div>

            <p className="font-bold text-white">
              Alpha Electronics
            </p>

            <p className="mt-1 text-sm">
              Technology that fits your world.
            </p>

          </div>

          <p className="text-sm">
            © 2026 Alpha Electronics. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}
