import { SubjectDetail } from "@/components/subject-detail"
import { Chat } from "@/components/chat"
import { Subject } from "@/api/subjects"

export default function SubjectPage({ params }: { params: { name: string } }) {
  const subjectName = decodeURIComponent(params.name) as Subject

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">{subjectName}</h1>
      <div className="grid gap-8 md:grid-cols-[65%_35%]">
        <div className="md:max-h-[85vh] md:overflow-y-auto lg:max-h-[82vh] lg:overflow-y-auto">
          <SubjectDetail subject={subjectName} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Ask your doubts</h2>
          <Chat />
        </div>
      </div>
    </div>
  )
}

