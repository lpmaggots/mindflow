'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './navbar.module.scss'
import { useUserStore } from '@/store/userStore'

export default function Navbar() {
  const { user } = useUserStore()
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()
  
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-black navbar-dark z-5`}>
        <div className="container-fluid">
          <Link
            href="/"
            className="navbar-brand"
          >
            <img src="/images/mindflow-logo.png" alt="Logotipo Mindflow" width={80} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>Sobre</Link>
              </li>
              <li className="nav-item">
                <Link href="/courses" className={`nav-link d-flex align-items-center justify-content-start ${pathname === '/courses' ? 'active' : ''}`}>
                  <div className="link-circle-purple"></div>
                  Conheça nossos cursos
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link
                href="/favorite"
                className="no-text-decoration d-flex align-items-center justify-content-between"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <i className={`bi ${isHovered || pathname === '/favorite' ? 'bi-star-fill' : 'bi-star'} text-warning`}></i>
                <span className="px-1"></span>
                <span
                  className={`${isHovered || pathname === '/favorite' ? 'text-white' : 'text-grey-light'}`}
                >
                  Favoritos
                </span>
              </Link>
              <div className="px-2"></div>
              <div className="dropdown">
                <button type="button" className={`btn text-light dropdown-toggle ${styles.customDropdownChevron}`} data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-circle"></i>
                  <span className='px-1'></span>
                  <span className='ml-3'>{user.name}</span>
                </button>
                <div className="dropdown-menu dropdown-menu-dark" style={{ left: '-30px' }}>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-box-arrow-left"></i>
                      <span className='px-1'></span>
                      Sair
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}