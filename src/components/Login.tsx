
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Please enter your email and password.")
      return
    }

    // Temporary login
    // Replace this with your backend authentication later.
    navigate("/Display")
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

          <Link
            to="/signup"
            className="rounded-md border border-gray-600 px-5 py-2 text-sm font-semibold text-white transition hover:border-blue-400 hover:text-blue-400"
          >
            Create Account
          </Link>

        </div>
      </header>

      <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-5 py-12">

        <div className="w-full max-w-md">

          <div className="rounded-lg border border-gray-200 bg-white p-7 shadow-sm sm:p-9">

            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
                Welcome back
              </p>

              <h1 className="mt-2 text-3xl font-bold text-gray-900">
                Sign in
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Access your Alpha Electronics account.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-800">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-semibold text-blue-500 hover:text-blue-600"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {error && (
                <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 py-3.5 font-bold text-white transition hover:bg-blue-600"
              >
                Sign In
              </button>

            </form>

            {/* DIVIDER */}
            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-400">
                New to Alpha Electronics?
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* CREATE ACCOUNT */}
            <Link
              to="/signup"
              className="block w-full rounded-md border border-gray-300 py-3 text-center text-sm font-semibold text-gray-800 transition hover:border-blue-400 hover:bg-blue-50"
            >
              Create your Alpha account
            </Link>

          </div>

          <p className="mt-6 text-center text-xs leading-5 text-gray-500">
            By continuing, you agree to Alpha Electronics' Terms and
            Conditions and Privacy Policy.
          </p>

        </div>

      </main>

    </div>
  )
}

