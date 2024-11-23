"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import  VideoCard  from "@/components/common/video-card";
import {Subject, subjectTools} from "@/api/subjects";
import Link from "next/link";


export function SubjectDetail({ subject }: { subject: Subject }) {
  const [activeTab, setActiveTab] = useState("content");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{subject}</CardTitle>
        <CardDescription>
          Explore content and tools for {subject}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-2">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            {subjectTools[subject].subjectContent.length > 0 ? subjectTools[subject].subjectContent.map((s) => {
              return (
               <div className="mt-4" key={s.title}>
                    <VideoCard title={s.title} url={s.url} />
                </div> 
                
              )
            }) : <p>Here you can add your subject content, lectures, notes, etc.</p>}
           
          </TabsContent>
          <TabsContent value="tools">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              {subjectTools[subject].tools?.map((tool) => (
                <Card key={tool.name}>
                  <CardHeader>
                    <CardTitle className="leading-tight">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link href={"https://abhiquodes.github.io/Code-Converter/"} target="_blank"><Button>Launch Tool</Button></Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
