// import Image from "next/image"
import { SignUpForm } from "@/components/signup-form"

export default function SignUp() {
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
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Join our community of learners today
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}

