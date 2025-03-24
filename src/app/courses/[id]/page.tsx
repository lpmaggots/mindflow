'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { useCourseStore } from '@/store/courseStore'
// components
import BuyCourse from '@/components/BuyCourse/BuyCourse'
import WatchCourse from '@/components/WatchCourse/WatchCourse'

const CourseDetail: React.FC = () => {
  const { id } = useParams() 

  const course = useCourseStore((state: { courses: any[] }) => state.courses.find((course: { id: number }) => course.id === Number(id)))

  if (!course) {
    return <div>Curso não encontrado.</div>
  }

  return (
    <>
      {
        course.purchased ?
        <WatchCourse
            id={course.id}
            title={course.title}
            description={course.description}
            url={course.url}
            created_at={course.created_at}
          />
        :
        <BuyCourse
          id={course.id}
          title={course.title}
          description={course.description}
          purchased={course.purchased}
          created_at={course.created_at}
          price={course.price}
        />
      }
    </>
  )
}

export default CourseDetail