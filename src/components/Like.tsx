
import { useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "./context/context";

export default function Like() {

  const { like, setLike, cart, setCart } =
    useContext<any>(myContext);

  // ============================================================
  // REMOVE FROM WISHLIST
  // ============================================================

  const removeLike = (item: any) => {
    setLike(
      like.filter(
        (product: any) => product !== item
      )
    );
  };

  // ============================================================
  // ADD / REMOVE CART
  // ============================================================

  const handleCart = (item: any) => {

    if (
      cart.some(
        (product: any) =>
          product.productName === item.productName
      )
    ) {
      setCart(
        cart.filter(
          (product: any) =>
            product.productName !== item.productName
        )
      );
    } else {
      setCart([...cart, item]);
    }

  };

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

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
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


          {/* NAVIGATION */}

          <div className="flex items-center gap-2">

            <Link
              to="/Display"
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
            >
              Store
            </Link>

            <Link
              to="/like"
              className="relative rounded-xl bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-500"
            >
              ♡ Wishlist

              {like.length > 0 && (
                <span className="ml-2 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                  {like.length}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
            >
              🛒 Cart

              {cart.length > 0 && (
                <span className="ml-2 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white">
                  {cart.length}
                </span>
              )}
            </Link>

            <Link
              to="/logout"
              className="ml-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Logout
            </Link>

          </div>

        </div>

      </nav>


      {/* ======================================================
          PAGE HEADER
      ====================================================== */}

      <main className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              Saved Products
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              My Wishlist
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Keep track of products you love and want to buy later.
            </p>

          </div>


          {like.length > 0 && (

            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">

              <p className="text-xs text-gray-400">
                Wishlist items
              </p>

              <p className="mt-0.5 text-lg font-bold text-gray-900">
                {like.length}
              </p>

            </div>

          )}

        </div>


        {/* ====================================================
            WISHLIST PRODUCTS
        ==================================================== */}

        {like.length > 0 ? (

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {like.map(
              (item: any, index: number) => {

                const isInCart =
                  cart.some(
                    (product: any) =>
                      product.productName ===
                      item.productName
                  );

                return (

                  <div
                    key={index}
                    className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
                  >

                    {/* =========================================
                        IMAGE
                    ========================================= */}

                    <div className="relative flex h-[250px] items-center justify-center bg-gray-50 p-7">

                      <img
                        src={item.image}
                        alt={item.productName}
                        className="h-[190px] w-[190px] object-contain transition duration-500 group-hover:scale-105"
                      />


                      {/* REMOVE */}

                      <button
                        onClick={() =>
                          removeLike(item)
                        }
                        title="Remove from wishlist"
                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-red-500 shadow-sm transition hover:border-red-200 hover:bg-red-50"
                      >
                        ♥
                      </button>

                    </div>


                    {/* =========================================
                        PRODUCT DETAILS
                    ========================================= */}

                    <div className="p-5">

                      <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-blue-600">
                        {item.category}
                      </p>

                      <h2 className="truncate text-base font-semibold text-gray-900">
                        {item.productName}
                      </h2>


                      <div className="mt-4 flex items-center justify-between">

                        <p className="text-xl font-bold text-gray-900">
                          ₹{item.price.toLocaleString()}
                        </p>

                      </div>


                      {/* ACTIONS */}

                      <div className="mt-5 flex gap-2">

                        <button
                          onClick={() =>
                            handleCart(item)
                          }
                          className={`flex-1 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                            isInCart
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-900 text-white hover:bg-blue-600"
                          }`}
                        >
                          {isInCart
                            ? "✓ In Cart"
                            : "Add to Cart"}
                        </button>


                        <button
                          onClick={() =>
                            removeLike(item)
                          }
                          className="rounded-xl border border-gray-200 px-3 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                        >
                          Remove
                        </button>

                      </div>

                    </div>

                  </div>

                );

              }
            )}

          </div>

        ) : (

          /* ====================================================
             EMPTY WISHLIST
          ==================================================== */

          <div className="flex min-h-[480px] flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white px-6 text-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-3xl text-red-500">
              ♡
            </div>

            <h2 className="mt-7 text-2xl font-bold text-gray-900">
              Your wishlist is empty
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
              You haven't saved any products yet.
              Explore our store and add products you
              would like to keep for later.
            </p>

            <Link
              to="/Display"
              className="mt-7 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Products →
            </Link>

          </div>

        )}

      </main>


      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className="mt-10 border-t border-gray-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <p className="font-bold text-gray-900">
              Alpha Electronics
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Technology that fits your world.
            </p>

          </div>

          <p className="text-xs text-gray-400">
            © 2026 Alpha Electronics
          </p>

        </div>

      </footer>

    </div>
  );
}
