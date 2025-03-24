import styles from './footer.module.scss'

export default function Footer() {
  return (
    <>
      <div>
        <div className="container-fluid">
          <section className="row">
            <div className="col pb-5 text-center">
              <p className='lead mb-0'>🚀 O próximo passo para o seu futuro começa agora! Inscreva-se e evolua com segurança!</p>
            </div>
          </section>
        </div>
        <footer className={`text-light py-5 ${styles.containerFooter}`}>
          <div className="container">
            <div className="text-center">
              <p className='mb-0'>&copy; 2024 Mindflow. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

