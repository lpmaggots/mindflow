import Image from 'next/image'

export default function About() {
  const logos = [
    { name: 'Vue', path: '/images/react-logo.png' },
    { name: 'Vuetify', path: '/images/next-logo.png' },
    { name: 'PWA', path: '/images/bootstrap-logo.png' },
    { name: 'Netlify', path: '/images/netlify-logo.png' }
  ]

  return (
    <>
      <div className="container my-5">
        <section className="row">
          <div className="col mb-3">
            <h2 className='text-center'>Sobre o Projeto</h2>
            <p className='lead'>
              Este projeto é um desafio de front-end que tem como objetivo a criação de uma interface simples, mas eficiente, para exibição de cursos e interação com informações relacionadas. Desenvolvido com Next.js, TypeScript, e Zustand para gerenciamento de estado, a aplicação permite ao usuário visualizar os cursos disponíveis e favoritar, de maneira fácil e dinâmica. <br />
              Além disso, foi utilizado Bootstrap para garantir um design responsivo e elegante, com componentes prontos que facilitam a construção da interface. O Bootstrap proporciona uma base sólida para a construção de layouts modernos e adaptáveis, tornando o processo de desenvolvimento mais rápido e eficiente. <br />
              Como extra, foi criada uma Home Page para simular um site real, proporcionando uma experiência completa e mais imersiva para o usuário. Essa página inicial inclui uma apresentação geral do site e serve como ponto de entrada para o conteúdo principal, como os cursos e funcionalidades relacionadas. <br />
              Para a publicação do projeto, foi utilizado o Netlify, uma plataforma de deploy que permite o envio e hospedagem rápida e segura do site. O uso do Netlify garante uma experiência de navegação fluida e performance otimizada, com deploy contínuo sempre que houver alterações no código.
            </p>
          </div>
        </section>
        <section className="row">
          <div className="col">
            <h2 className="text-center mb-3">Tecnologias utilizadas</h2>
            <section className="row">
              {logos.map((logo, index) => (
                <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-12 text-center mb-3">
                  <Image
                    src={logo.path}
                    alt={logo.name}
                    width={150}
                    height={150}
                    objectFit="contain"
                  />
                </div>
              ))}
            </section>
          </div>
        </section>
      </div>
    </>
  )
}
