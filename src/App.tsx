import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from './layout/Layout'

import ClientsPage from './pages/ClientsPage'
import UsersPage from './pages/UsersPage'
import Dashboard from './components/Dashboard/Dashboard'
import Profile from './components/Profile/Profile'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/clients"
          element={<ClientsPage />}
        />

        <Route
          path="/users"
          element={<UsersPage />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />
      </Route>

      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />
    </Routes>
  )
}