
import { Link, useNavigate } from "react-router-dom"

export default function Logout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Remove login information
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/home")
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <header className="bg-gray-950">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4">

          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-white"
          >
            Alpha<span className="text-blue-400">.</span>
            <span className="ml-2 text-xs font-medium tracking-[0.2em] text-gray-400">
              ELECTRONICS
            </span>
          </Link>

        </div>
      </header>

      {/* LOGOUT CARD */}
      <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-5">

        <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">

          <h1 className="mt-6 text-2xl font-bold text-gray-900">
            Ready to leave?
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Are you sure you want to sign out of your Alpha Electronics
            account?
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            <button
              onClick={handleLogout}
              className="flex-1 rounded-md bg-blue-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600"
            >
              Yes, Logout
            </button>

            <Link
              to="/Display"
              className="flex-1 rounded-md border border-gray-300 px-5 py-3 text-sm font-bold text-gray-800 transition hover:border-gray-400 hover:bg-gray-50"
            >
              Cancel
            </Link>

          </div>

        </div>

      </main>

    </div>
  )
}

