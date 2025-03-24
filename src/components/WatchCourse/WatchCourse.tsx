import Link from 'next/link'
import styles from '@/app/page.module.scss'
import stylesModule from './watchCourse.module.scss'
import ReactPlayer from 'react-player'

interface CourseProps {
  id: number
  title: string
  description: string,
  created_at: Date,
  url: string
}

const Course: React.FC<CourseProps> = ({ title, description, created_at, url }) => {
  return (
    <div className="container mt-5">
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
              <div className={stylesModule.playerWrapper}>
                <ReactPlayer
                  url={url}
                  className={stylesModule.reactPlayer}
                  controls={true} // Ativa os controles
                  width="100%"
                  height="100%"
                  playing={false}
                  config={{
                    file: {
                      attributes: {
                        controlsList: "nodownload"
                      },
                    },
                    youtube: {
                      playerVars: {
                        modestbranding: 1,
                        rel: 0,
                        showinfo: 0
                      },
                    }
                  }}
                />
              </div>
              <p className='mt-2 mb-5'>
                <strong>Publicado em:</strong> {new Date(created_at).toLocaleDateString()}
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Course