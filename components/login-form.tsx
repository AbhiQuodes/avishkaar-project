"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"

export function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Here you would typically send the data to your backend API for authentication
      // For now, we'll just simulate a successful login
      console.log("Login data:", formData)
      toast({
        title: "Logged in successfully!",
        description: "Welcome back to your account.",
      })
      router.push("/dashboard")
    } catch (error) {
      console.log(error)
      toast({
        title: "Error",
        description: "There was a problem logging into your account.",
        variant: "destructive",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        <div className="py-2">
          <Label htmlFor="email" className="sr-only">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-t-md"
            placeholder="Email address"
            onChange={handleChange}
          />
        </div>
        <div className="py-2">
          <Label htmlFor="password" className="sr-only">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            className="rounded-b-md"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
          <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </Label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </div>
    </form>
  )
}

