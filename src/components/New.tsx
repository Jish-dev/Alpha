
import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function New() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleCreateAccount = (e: FormEvent) => {
    e.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.")
      return
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    // Temporary account creation
    // Connect this to your backend later.
    navigate("/login")
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
            to="/login"
            className="rounded-md border border-gray-600 px-5 py-2 text-sm font-semibold text-white transition hover:border-blue-400 hover:text-blue-400"
          >
            Sign In
          </Link>

        </div>
      </header>

      {/* CREATE ACCOUNT */}
      <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-5 py-12">

        <div className="w-full max-w-md">

          <div className="rounded-lg border border-gray-200 bg-white p-7 shadow-sm sm:p-9">

            <div className="mb-7">
              <p className=" font-bold  uppercase tracking-[0.1em] text-blue-500">
                Alpha Electronics
              </p>

              <h1 className="mt-2 text-3xl font-bold text-gray-900">
                Create account
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Join Alpha Electronics and start shopping.
              </p>
            </div>

            <form onSubmit={handleCreateAccount} className="space-y-5">

              {/* NAME */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Full Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

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

              {/* PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <p className="mt-1.5 text-xs text-gray-400">
                  Password must be at least 6 characters.
                </p>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Confirm Password
                </label>

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* ERROR */}
              {error && (
                <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* CREATE ACCOUNT BUTTON */}
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 py-3.5 font-bold text-white transition hover:bg-blue-600"
              >
                Create Account
              </button>

            </form>

            {/* LOGIN */}
            <div className="mt-7 border-t border-gray-200 pt-6 text-center">

              <p className="text-sm text-gray-500">
                Already have an account?
              </p>

              <Link
                to="/login"
                className="mt-2 inline-block text-sm font-bold text-blue-500 hover:text-blue-600"
              >
                Sign in to your account →
              </Link>

            </div>

          </div>

          <p className="mt-6 text-center text-xs leading-5 text-gray-500">
            By creating an account, you agree to Alpha Electronics' Terms
            and Conditions and Privacy Policy.
          </p>

        </div>

      </main>

    </div>
  )
}
