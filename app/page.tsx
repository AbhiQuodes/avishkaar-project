import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, Users, MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background pattern"
            width={1920}
            height={1080}
            className="opacity-10 object-cover w-full h-full"
          /> */}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">Welcome to Your University Portal</h1>
            <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">Empowering students with knowledge, tools, and community.</p>
            <div className="space-x-4 animate-fade-in-up animation-delay-400">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">Sign Up</Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="text-blue-600 border-white hover:bg-white hover:text-blue-800">Log In</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Portal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-blue-500" />}
              title="Comprehensive Courses"
              description="Access a wide range of subjects tailored for BSc and BCA students."
            />
            <FeatureCard
              icon={<GraduationCap className="h-10 w-10 text-blue-500" />}
              title="Interactive Learning"
              description="Engage with course materials through our integrated learning tools."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-blue-500" />}
              title="Collaborative Community"
              description="Connect with peers and instructors to enhance your learning experience."
            />
            <FeatureCard
              icon={<MessageCircle className="h-10 w-10 text-blue-500" />}
              title="Instant Support"
              description="Get your doubts cleared quickly through our chat feature."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join thousands of students already learning on our platform.</p>
          <Link href="/signup">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Get Started Now</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 University Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

