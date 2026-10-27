
import { useContext } from "react"
import { Link } from "react-router-dom"
import { myContext } from "./context/context"

export default function Cart() {

    const {
        cart,
        setCart,
        like
    } = useContext<any>(myContext)


    // ============================================================
    // REMOVE PRODUCT
    // ============================================================

    const removeFromCart = (item: any) => {

        setCart(
            cart.filter(
                (product: any) =>
                    product !== item
            )
        )

    }


    // ============================================================
    // TOTAL
    // ============================================================

    const total = cart.reduce(
        (sum: number, item: any) =>
            sum + Number(item.price),
        0
    )


    // ============================================================
    // FORMAT PRICE
    // ============================================================

    const formatPrice = (price: number) => {

        return price.toLocaleString("en-IN")

    }


    return (

        <div className="min-h-screen bg-[#f6f7fb]">


            {/* ==================================================
                NAVBAR
            ================================================== */}

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
                            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                        >
                            ♡ Wishlist

                            {like?.length > 0 && (

                                <span className="ml-2 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                                    {like.length}
                                </span>

                            )}

                        </Link>


                        <Link
                            to="/cart"
                            className="rounded-xl bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-600"
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


            {/* ==================================================
                MAIN
            ================================================== */}

            <main className="mx-auto max-w-7xl px-6 py-10">


                {/* ==================================================
                    HEADER
                ================================================== */}

                <div className="mb-10">

                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                        Your Selection
                    </p>

                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

                        <div>

                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                                Shopping Cart
                            </h1>

                            <p className="mt-2 text-sm text-gray-500">
                                Review your selected products before checkout.
                            </p>

                        </div>


                        {cart.length > 0 && (

                            <div className="rounded-xl border border-gray-200 bg-white px-5 py-3">

                                <p className="text-xs text-gray-400">
                                    Items in cart
                                </p>

                                <p className="mt-0.5 text-lg font-bold text-gray-900">
                                    {cart.length}
                                </p>

                            </div>

                        )}

                    </div>

                </div>


                {/* ==================================================
                    EMPTY CART
                ================================================== */}

                {cart.length === 0 ? (

                    <div className="flex min-h-[480px] flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white px-6 text-center">


                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-3xl">
                            🛒
                        </div>


                        <h2 className="mt-7 text-2xl font-bold text-gray-900">
                            Your cart is empty
                        </h2>


                        <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
                            You haven't added anything to your cart yet.
                            Explore Alpha Electronics and find something
                            you'll love.
                        </p>


                        <Link
                            to="/Display"
                            className="mt-7 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                            Continue Shopping →
                        </Link>

                    </div>

                ) : (


                    /* ==================================================
                       CART CONTENT
                    ================================================== */

                    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">


                        {/* ==================================================
                            PRODUCTS
                        ================================================== */}

                        <div className="space-y-4">


                            {/* CART HEADER */}

                            <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4">

                                <div>

                                    <p className="text-sm font-semibold text-gray-900">
                                        Cart Items
                                    </p>

                                    <p className="mt-1 text-xs text-gray-500">
                                        {cart.length} product
                                        {cart.length !== 1 && "s"} selected
                                    </p>

                                </div>


                                <Link
                                    to="/Display"
                                    className="text-sm font-semibold text-blue-600 hover:underline"
                                >
                                    + Add More
                                </Link>

                            </div>


                            {/* PRODUCTS */}

                            {cart.map(
                                (item: any, index: number) => (

                                    <div
                                        key={index}
                                        className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:border-gray-300 hover:shadow-md"
                                    >

                                        <div className="flex flex-col gap-5 sm:flex-row">


                                            {/* PRODUCT IMAGE */}

                                            <div className="flex h-36 w-full shrink-0 items-center justify-center rounded-xl bg-gray-50 sm:h-32 sm:w-32">

                                                <img
                                                    src={item.image}
                                                    alt={item.productName}
                                                    className="h-28 w-28 object-contain transition duration-300 group-hover:scale-105"
                                                />

                                            </div>


                                            {/* PRODUCT INFO */}

                                            <div className="flex flex-1 flex-col">


                                                <div className="flex justify-between gap-4">

                                                    <div>

                                                        <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600">
                                                            {item.category}
                                                        </p>

                                                        <h2 className="mt-1 text-lg font-semibold text-gray-900">
                                                            {item.productName}
                                                        </h2>

                                                    </div>


                                                    {/* REMOVE */}

                                                    <button
                                                        onClick={() =>
                                                            removeFromCart(item)
                                                        }
                                                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                                                        title="Remove item"
                                                    >
                                                        ✕
                                                    </button>

                                                </div>


                                                {/* PRICE */}

                                                <div className="mt-5 flex items-end justify-between">

                                                    <div>

                                                        <p className="text-xs text-gray-400">
                                                            Price
                                                        </p>

                                                        <p className="mt-1 text-xl font-bold text-gray-900">
                                                            ₹{formatPrice(Number(item.price))}
                                                        </p>

                                                    </div>


                                                    {/* QUANTITY */}

                                                    <div className="flex items-center rounded-xl border border-gray-200">

                                                        <button
                                                            className="flex h-9 w-9 items-center justify-center text-gray-500 transition hover:bg-gray-100"
                                                        >
                                                            −
                                                        </button>

                                                        <span className="flex h-9 w-10 items-center justify-center border-x border-gray-200 text-sm font-semibold">
                                                            1
                                                        </span>

                                                        <button
                                                            className="flex h-9 w-9 items-center justify-center text-gray-500 transition hover:bg-gray-100"
                                                        >
                                                            +
                                                        </button>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                )
                            )}

                        </div>


                        {/* ==================================================
                            ORDER SUMMARY
                        ================================================== */}

                        <div className="h-fit lg:sticky lg:top-28">


                            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">


                                {/* SUMMARY HEADER */}

                                <div className="border-b border-gray-100 p-6">

                                    <h2 className="text-xl font-bold text-gray-900">
                                        Order Summary
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Review your order details.
                                    </p>

                                </div>


                                {/* SUMMARY DETAILS */}

                                <div className="space-y-5 p-6">


                                    <div className="flex justify-between text-sm">

                                        <span className="text-gray-500">
                                            Subtotal
                                        </span>

                                        <span className="font-semibold text-gray-900">
                                            ₹{formatPrice(total)}
                                        </span>

                                    </div>


                                    <div className="flex justify-between text-sm">

                                        <span className="text-gray-500">
                                            Delivery
                                        </span>

                                        <span className="font-semibold text-green-600">
                                            Free
                                        </span>

                                    </div>


                                    <div className="flex justify-between text-sm">

                                        <span className="text-gray-500">
                                            Discount
                                        </span>

                                        <span className="font-semibold text-gray-400">
                                            —
                                        </span>

                                    </div>


                                    <div className="border-t border-gray-100 pt-5">

                                        <div className="flex items-center justify-between">

                                            <span className="text-base font-bold text-gray-900">
                                                Total
                                            </span>

                                            <span className="text-2xl font-bold text-gray-900">
                                                ₹{formatPrice(total)}
                                            </span>

                                        </div>

                                        <p className="mt-1 text-right text-xs text-gray-400">
                                            Inclusive of applicable taxes
                                        </p>

                                    </div>


                                    {/* CHECKOUT */}

                                    <button
                                        className="w-full rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700 active:scale-[0.98]"
                                    >
                                        Proceed to Checkout
                                    </button>


                                    {/* CONTINUE SHOPPING */}

                                    <Link
                                        to="/Display"
                                        className="block w-full rounded-xl border border-gray-200 px-5 py-3.5 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                                    >
                                        Continue Shopping
                                    </Link>


                                </div>


                                {/* SECURITY */}

                                <div className="border-t border-gray-100 bg-gray-50 px-6 py-5">

                                    <div className="flex gap-3">

                                        <span className="text-lg">
                                            🔒
                                        </span>

                                        <div>

                                            <p className="text-xs font-bold text-gray-800">
                                                Secure Checkout
                                            </p>

                                            <p className="mt-1 text-[11px] leading-5 text-gray-500">
                                                Your payment information is protected
                                                with secure encryption.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                )}

            </main>


            {/* ==================================================
                FOOTER
            ================================================== */}

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
    )
}

