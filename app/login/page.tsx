// import Image from "next/image"
import { LoginForm } from "@/components/login-form"

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div className="text-center">
          {/* <Image
            src="/placeholder.svg?height=100&width=100"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto h-12 w-auto"
          /> */}
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back to your learning journey
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

