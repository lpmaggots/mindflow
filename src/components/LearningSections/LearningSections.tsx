import Image from 'next/image'
import styles from '@/app/page.module.scss'

export default function LearningSections() {  
  return (
    <>
      <div className="container">
        <section className="row">
          <div className="col text-body py-5 px-5">
            <h2 className='text-center mb-3'>Independente do seu nível, aqui você tem garantia de aprendizado!</h2>
            <section className='row mb-5'>
              <div className="col-xl-6">
                <hr className={styles.titleLine}></hr>
                <h3>Para começar do zero</h3>
                <p>Domine os conceitos essenciais e construa uma base sólida em tecnologia com conteúdos que vão desde lógica de programação até desenvolvimento completo de aplicações.</p>
                <hr className={styles.titleLine}></hr>
                <h3>Para acelerar sua evolução</h3>
                <p>Aprofunde-se nas melhores práticas do mercado com trilhas avançadas e projetos práticos que colocam você um passo à frente na sua carreira.</p>
                <hr className={styles.titleLine}></hr>
                <h3>Para aprender sem riscos</h3>
                <p>Nossa garantia de satisfação total permite que você experimente sem preocupação! Se, em até 7 dias, não sentir que esse é o caminho certo para você, devolvemos 100% do seu investimento.</p>
              </div>
              <div className="col-xl-6 d-flex justify-content-center align-items-center">
                <div className="position-relative">
                  <div className={`position-absolute ${styles.customSquare}`}></div>
                  <Image
                    src="/images/study-guy.jpg"
                    alt="Study guy"
                    className={`position-relative rounded ${styles.customSquareImage}`}
                    width={500}
                    height={300}
                    priority
                  />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  )
}
