'use client'
import { useCourseStore } from '@/store/courseStore'
// components
import HeroSection from '@/components/HeroSection/HeroSection'
import CourseCard from '@/components/CourseCard/CourseCard'
import LearningSections from '@/components/LearningSections/LearningSections'

export default function Home() {
  const { courses } = useCourseStore()
  
  return (
    <>
      <HeroSection />
      <div className="container-fluid mb-3">
        <section className="row">
          {courses.slice(0, 4).map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              purchased={course.purchased}
              favorite={course.favorite}
              className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-md-6 mt-3"
            />
          ))}
        </section>
      </div>
      <LearningSections />
    </>
  )
}
