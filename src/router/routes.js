import {
  HomeView,
  MultimediaView,
  LightsView,
  CameraView,
  CalendarView,
} from '../views'
import { DefaultLayout } from '../layouts'

import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: '/multimedia',
        element: <MultimediaView />,
      },
      {
        path: '/lights',
        element: <LightsView />,
      },
      {
        path: '/cameras',
        element: <CameraView />,
      },
      {
        path: '/calendar',
        element: <CalendarView />,
      },
    ],
  },
])
