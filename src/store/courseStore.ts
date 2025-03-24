import { create } from 'zustand'
import { useUserStore } from './userStore'

interface Course {
  [x: string]: any
  purchased: boolean
  id: number
  title: string
  description: string
  price: number
  favorite: boolean
  created_at: string
  url: string
}

interface CourseStore {
  courses: Course[]
  setCourses: (courses: Course[]) => void
  syncPurchasedCourses: () => void
  toggleFavorite: (courseId: number) => void
}

export const useCourseStore = create<CourseStore>((set, get) => ({
  courses: [
    {
      id: 1,
      title: 'Introdução à Programação com Python',
      description: 'Aprenda os fundamentos da programação utilizando Python, uma das linguagens mais populares e versáteis.',
      price: 49.99,
      created_at: '2023-01-15',
      purchased: false,
      favorite: false,
      url: 'https://www.youtube.com/watch?v=DXmCU7v9glM&pp=ygUoSW50cm9kdcOnw6NvIMOgIFByb2dyYW1hw6fDo28gY29tIFB5dGhvbg%3D%3D'
    },
    {
      id: 2,
      title: 'Desenvolvimento Web com React',
      description: 'Construa interfaces modernas e interativas para a web utilizando React e suas melhores práticas.',
      price: 69.99,
      created_at: '2023-02-10',
      purchased: false,
      favorite: false,
      url: 'https://www.youtube.com/watch?v=NhUr8cwDiiM&ab_channel=C%C3%B3digoFonteTV'
    },
    {
      id: 3,
      title: 'JavaScript Avançado',
      description: 'Aprofunde seus conhecimentos em JavaScript, abordando conceitos avançados e boas práticas.',
      price: 59.99,
      created_at: '2023-03-05',
      purchased: false,
      favorite: false,
      url: 'https://www.youtube.com/watch?v=6YwbZbHRQ8w&ab_channel=AttekitaDev'
    },
    {
      id: 4,
      title: 'Desenvolvimento Mobile com React Native',
      description: 'Crie aplicativos móveis para Android e iOS utilizando React Native e compartilhando código entre as plataformas.',
      price: 79.99,
      created_at: '2023-03-20',
      purchased: false,
      favorite: false,
      url: 'https://www.youtube.com/watch?v=CO4C9UVaFKk&ab_channel=Rocketseat'
    },
    {
      id: 5,
      title: 'Banco de Dados com SQL',
      description: 'Aprenda a criar, consultar e gerenciar bancos de dados utilizando SQL.',
      price: 39.99,
      created_at: '2023-04-01',
      purchased: false,
      favorite: false,
      url: 'https://www.youtube.com/watch?v=kMznyI7r2Tc&pp=ygUWQmFuY28gZGUgRGFkb3MgY29tIFNRTA%3D%3D'
    },
    {
      id: 6,
      title: 'DevOps para Desenvolvedores',
      description: 'Entenda os fundamentos de DevOps e como implementar práticas de integração e entrega contínuas.',
      price: 89.99,
      created_at: '2023-04-15',
      purchased: false,
      favorite: false,
      url: 'https://www.youtube.com/watch?v=3V66zQJj-zQ&ab_channel=balta.io'
    },
    {
      id: 7,
      title: 'Desenvolvimento de APIs com Node.js',
      description: 'Construa APIs robustas e escaláveis utilizando Node.js e Express.',
      price: 54.99,
      created_at: '2023-05-10',
      purchased: false,
      favorite: false,
      url: 'https://www.youtube.com/watch?v=PyrMT0GA3sE&t=1s&ab_channel=DevClub%7CPrograma%C3%A7%C3%A3o'
    },
    {
      id: 8,
      title: 'Cibersegurança para Desenvolvedores',
      description: 'Aprenda práticas e conceitos essenciais de segurança cibernética para proteger suas aplicações.',
      price: 74.99,
      created_at: '2023-05-25',
      purchased: false,
      favorite: false,
      url: 'https://www.youtube.com/watch?v=PyrMT0GA3sE&ab_channel=DevClub%7CPrograma%C3%A7%C3%A3o'
    },
    {
      id: 9,
      title: 'Desenvolvimento de Jogos com Unity',
      description: 'Crie jogos incríveis utilizando Unity, uma das engines mais populares do mercado.',
      price: 99.99,
      created_at: '2023-06-05',
      purchased: false,
      favorite: false,
      url: 'https://www.youtube.com/watch?v=Tw0o1KarOG8&ab_channel=DesenvolvedorUnity'
    },
    {
      id: 10,
      title: 'Machine Learning com Python',
      description: 'Introdução ao aprendizado de máquina utilizando bibliotecas como Scikit-Learn e TensorFlow.',
      price: 109.99,
      created_at: '2023-06-20',
      purchased: false,
      favorite: false,
      url: 'https://www.youtube.com/watch?v=eqaskloXzgY&ab_channel=CaioDallaqua'
    }
  ],

  setCourses: (courses) => set({ courses }),

  syncPurchasedCourses: () => {
    const user = useUserStore.getState().user
    const purchasedCourseIds = new Set(user.courses.map(course => course.courseId))

    set({
      courses: get().courses.map(course => ({
        ...course,
        purchased: purchasedCourseIds.has(course.id),
      }))
    })
  },
  toggleFavorite: (courseId: number) => {
    set(state => ({
      courses: state.courses.map(course =>
        course.id === courseId ? { ...course, favorite: !course.favorite } : course
      ),
    }))
  }
}))