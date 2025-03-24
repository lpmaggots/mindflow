'use client'

import { useEffect } from 'react'
import { useCourseStore } from '@/store/courseStore'

export default function ClientProvider() {
  const syncPurchasedCourses = useCourseStore(state => state.syncPurchasedCourses)

  useEffect(() => {
    syncPurchasedCourses()
  }, [syncPurchasedCourses])

  return null
}
