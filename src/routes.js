import { Navigate, useRoutes }
  from 'react-router-dom'

export default function () {
  return useRoutes([{
    path:'*',
    element: <Navigate to='/'/>
  }])

}