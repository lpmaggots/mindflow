import React from 'react'
import Link from 'next/link'
import styles from './courseCard.module.scss'
// components
import FavoriteCourse from '@/components/FavoriteCourse/FavoriteCourse'

interface CourseCardProps {
  id: number
  title: string
  description: string,
  purchased: boolean,
  favorite: boolean,
  className: string
}

const CourseCard: React.FC<CourseCardProps> = ({ id, title, description, purchased, favorite, className }) => {
  return (
    <div className={className} key={id as number}>
      <div className={`card bg-grey h-100 ${styles.courseCard}`}>
        <div className="card-body px-3">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className='d-flex align-items-center'>
              <div className="title-circle-dark"></div>
              <h6 className="card-title mb-0">
                {title}
              </h6>
            </div>
            <FavoriteCourse
              id={id}
              favorite={favorite}
            />
          </div>
          <p className="card-text text-justify">
            {description}
          </p>
        </div>
        <div className="card-body d-flex align-items-end">
          {
            <Link href={`/courses/${id}`}>
              <button className={purchased ? 'green-button-md' : 'purple-button-md'}>
                {purchased ? 'Acessar o Curso' : 'Comprar Curso'}
              </button>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

export default CourseCard