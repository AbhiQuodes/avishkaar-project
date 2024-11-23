"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {subjects} from "@/api/subjects";


export function Dashboard({ course = "bca" }: { course?: "bsc" | "bca" | "bcs" }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {subjects[course].map((subject) => (
        <Card key={subject} >
          <CardHeader>
            <CardTitle>{subject}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Click to view subject details and tools</CardDescription>
            <Link href={`/subject/${encodeURIComponent(subject)}`}>
              <Button className="mt-2">View Subject</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

