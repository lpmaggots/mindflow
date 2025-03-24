'use client'

import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@popperjs/core'

export default function BootstrapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, [])

  return <>{children}</>
}