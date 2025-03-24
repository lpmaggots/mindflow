import React from 'react'
import Link from 'next/link'
import styles from '@/app/page.module.scss'

const HeroSection: React.FC = () => {
  return (
    <div className={`container-fluid mb-3 ${styles.containerBanner}`}>
      <section className="row">
        <div className="col">
          <div className="container">
            <section className="row">
              <div className="col pt-5">
                <div className="py-2"></div>
                <div className="mb-4">
                  <hr className={styles.titleLine} />
                  <h2>Prepare-se para o Futuro da Tecnologia</h2>
                </div>
                <p className="lead mb-4">
                  Junte-se a milhares de alunos que já estão mudando suas carreiras. <br />
                  Com um método inovador e conteúdo atualizado, preparamos você para enfrentar os desafios do <br />
                  mercado de tech e alcançar seus objetivos profissionais.
                </p>
                <Link href={`/courses`}>
                  <button className="purple-button-lg">Conheça nossos cursos</button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection