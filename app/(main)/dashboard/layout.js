import React, { Suspense } from 'react'
import DashboardPage from './page'
import { BarLoader } from 'react-spinners'

const DashboardLayout = () => {
  return (
    <div className="px-5">
      <h1 className="text-6xl font-bold mb-5" style={{ color: '#134e4a' }}>
        Dashboard
      </h1>


      {/* Dashboard Page */}
      <Suspense fallback={<BarLoader className="mx-auto" color="#046307" width={100} />}>
        <DashboardPage />
      </Suspense>
    </div>
  )
}

export default DashboardLayout