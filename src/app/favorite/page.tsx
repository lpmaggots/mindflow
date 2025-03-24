'use client'
import CourseCard from '@/components/CourseCard/CourseCard'
import { useCourseStore } from '@/store/courseStore'

export default function Courses() {
  const { courses } = useCourseStore()
  const favoriteCourses = courses.filter(course => course.favorite)

  return (
    <>
      <div className={favoriteCourses.length > 0 ? 'container-fluid my-5' : 'container my-5'}>
        <section className="row">
          <div className="col text-center">
            <h2>Revise seus cursos favoritos e continue sua jornada de <br /> aprendizado com o que mais te interessa!</h2>
          </div>
        </section>
        <section className="row">
          <div className="col">
            <section className="row">

              {
                favoriteCourses.length > 0 ?
                favoriteCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    purchased={course.purchased}
                    favorite={course.favorite}
                    className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4"
                  />
                ))
                :
                <div className="col text-center text-muted">
                  <i className="bi bi-emoji-frown" style={{ fontSize: "15em" }}></i>
                  <p className='lead'>
                    Parece que você ainda não tem nenhum curso favorito. Navegue pelos nossos cursos e clique no ícone <br /> de estrela para adicionar seus preferidos! Comece agora e personalize sua jornada de aprendizado.
                  </p>
                </div>
              }
            </section>
          </div>
        </section>
      </div>
    </>
  )
}
