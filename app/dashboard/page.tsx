import { Dashboard } from "@/components/dashboard"

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-[100vh]">
      <h1 className="text-2xl font-bold mb-4">Your Subjects</h1>
      <Dashboard course="bcs"/>
    </div>
  )
}

