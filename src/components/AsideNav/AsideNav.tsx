import { Link, useLocation } from 'react-router-dom'
import './aside-nav.styles.scss'
import { useMemo } from 'react'

export const AsideNav = () => {
  const location = useLocation()

  const ROUTES = [
    {
      path: '/',
      label: 'Snapshot',
    },
    {
      path: '/multimedia',
      label: 'Multimedia',
    },
    {
      path: '/lights',
      label: 'Lights',
    },
    {
      path: '/cameras',
      label: 'Cameras',
    },
    {
      path: '/calendar',
      label: 'Calendar',
    },
  ]

  const paths = useMemo(() => {
    return ROUTES.map(r => ({ ...r, active: r.path === location.pathname }))
  }, [ROUTES, location.pathname])

  return (
    <div className="nav">
      <ul className="list">
        {paths.map(p => (
          <li
            key={p.label}
            className={p.active ? 'active' : ''}>
            <Link to={p.path}>{p.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
