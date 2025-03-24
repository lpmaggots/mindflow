import { useCourseStore } from '@/store/courseStore'

interface CourseProp {
  id: number
  favorite: boolean
}

const CourseCard: React.FC<CourseProp> = ({ id,favorite }) => {
  const { toggleFavorite } = useCourseStore()

  return (
    <>
      <button onClick={() => toggleFavorite(id)} className="fab-btn">
        {
          favorite ?
          <i className="bi bi-star-fill text-warning"></i>
          :
          <i className="bi bi-star text-warning"></i>
        }
      </button>
    </>
  )
}

export default CourseCard