'use client'
import CourseCard from '@/components/CourseCard/CourseCard'
import { useCourseStore } from '@/store/courseStore'

export default function Courses() {
  const { courses } = useCourseStore()

  return (
    <>
      <div className="container-fluid my-5">
        <section className="row">
          <div className="col text-center">
            <h2>Aprenda conosco e avance em sua carreira com nossos <br /> caminhos de aprendizado elaborados.</h2>
          </div>
        </section>
        <section className="row">
          <div className="col-xl-12 col-lg-12">
            <section className="row">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  purchased={course.purchased}
                  favorite={course.favorite}
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4"
                />
              ))}
            </section>
          </div>
        </section>
      </div>
    </>
  )
}
