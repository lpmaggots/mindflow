import { create } from 'zustand'

interface UserCourse {
  courseId: number
  dateJoined: string
}

interface User {
  id: number
  name: string
  courses: UserCourse[]
}

interface UserStore {
  user: User
  addUserCourse: (courseId: number) => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    id: 1,
    name: 'John Doe',
    courses: [
      { courseId: 1, dateJoined: '2023-02-15' },
      { courseId: 3, dateJoined: '2023-03-10' },
      { courseId: 5, dateJoined: '2023-03-10' }
    ],
  },
  addUserCourse: (courseId: number) =>
    set((state) => ({
      user: {
        ...state.user,
        courses: [
          ...state.user.courses,
          { courseId, dateJoined: new Date().toISOString().split("T")[0] },
        ]
      }
    }))
}))