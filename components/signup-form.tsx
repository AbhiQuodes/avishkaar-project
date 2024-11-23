"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { courses } from "@/api/subjects"

export function SignUpForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
    year: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Here you would typically send the data to your backend API
      // For now, we'll just simulate a successful sign-up
      console.log("Sign-up data:", formData)
      toast({
        title: "Account created successfully!",
        description: "You can now log in to your account.",
      })
      router.push("/login")
    } catch (error) {
      console.log(error)
      toast({
        title: "Error",
        description: "There was a problem creating your account.",
        variant: "destructive",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        <div className="py-2">
          <Label htmlFor="name" className="sr-only">Full Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Full Name"
            onChange={handleChange}
          />
        </div>
        <div className="py-2">
          <Label htmlFor="email" className="sr-only">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
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
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="py-2">
          <Label htmlFor="course" className="sr-only">Course</Label>
          <Select name="course" onValueChange={(value) => handleSelectChange("course", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent>
              { courses.map((c) => {
                  return (
                    <SelectItem value={c.value} key={c.name}>{c.name}</SelectItem>
                  )
                })}
            </SelectContent>
          </Select>
        </div>
        <div className="py-2">
          <Label htmlFor="year" className="sr-only">Year of Study</Label>
          <Select name="year" onValueChange={(value) => handleSelectChange("year", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1st Year</SelectItem>
              <SelectItem value="2">2nd Year</SelectItem>
              <SelectItem value="3">3rd Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="py-2">
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </div>
    </form>
  )
}

