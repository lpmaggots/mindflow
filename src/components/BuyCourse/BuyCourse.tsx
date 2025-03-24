import Link from 'next/link'
import styles from '@/app/page.module.scss'

interface CourseProps {
  id: number
  title: string
  description: string,
  created_at: Date,
  price: number,
  purchased: boolean
}

const Course: React.FC<CourseProps> = ({ id, title, description, created_at, price }) => {
  return (
    <>
      <div className="container fix-spacing-footer-course mt-5">
        <section className="row">
          <div className="col mb-5">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item" aria-current="page">
                  <Link href="../courses" className='text-purple'>
                    Voltar para Cursos
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">{title}</li>
              </ol>
            </nav>
          </div>
        </section>
        <section className="row">
          <div className="col">
            <div className="d-flex align-items-center justify-content-start mb-3">
              <div className="title-circle-dark"></div>
              <h5 className="card-title mb-0">
                Mindflow
              </h5>
            </div>
            <section className="row">
              <div className="col">
                <hr className={styles.titleLine} />
                <h2 className="card-title mb-3">{title}</h2>
                <p className="lead mb-3">{description}</p>
                <p>
                  <strong>Publicado em:</strong> {new Date(created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="col d-flex flex-column align-items-end text-justify">
                <p className='mb-0'>Valor do curso:</p>
                <h1 className='display-4 text-purple mb-3'>R${price}</h1>
                <Link href={`/courses/${id}`}>
                  <button className="green-button-lg">
                    Comprar Agora
                  </button>
                </Link>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  )
}

export default Course