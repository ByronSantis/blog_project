import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const d = new Date('yyyy-MM-dd');

export function PostCard({ post }) {

  const navigate = useNavigate()


  return (
    <div className='p-4 bg-white hover:bg-slate-100 hover:cursor-pointer text-slate-950 roun'
      onClick={() => {
        navigate(`/posts/${post.id}`)
      }}
    >
      <Card className='border-none'>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{post.content}</p>
        </CardContent>
        <CardFooter>
          <p className='font-semibold'>Autor: {post.author}</p>
        </CardFooter>
        <CardFooter>
          <p className='font-light'>Fecha de publicacion: {post.created_at.toString(d)}</p>
        </CardFooter>
      </Card>

    </div>
  )
}