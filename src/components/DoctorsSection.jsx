import { useState, useEffect } from 'react'
import DoctorCard from './DoctorCard'
import LoadingSpinner from './LoadingSpinner'

const DoctorsSection = () => {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Correct fetch path for Vite public folder
        const response = await fetch('/data/doctors.json')
        
        if (!response.ok) {
          throw new Error('Failed to fetch doctors data')
        }
        
        const data = await response.json()
        setDoctors(data.doctors)
        
      } catch (err) {
        setError('Failed to load doctors. Please try again.')
        console.error('Error fetching doctors:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchDoctors()
  }, [])

  const displayedDoctors = showAll ? doctors : doctors.slice(0, 6)

  if (loading) {
    return (
      <section className="py-16 bg-gray-50" data-section="doctors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Best Doctors
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
            </p>
          </div>
          <LoadingSpinner size="lg" text="Loading our best doctors..." />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50" data-section="doctors">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="btn btn-primary"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50" data-section="doctors">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Best Doctors
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine check-up or urgent consultation, book appointments in minutes and receive quality care you can trust.
          </p>
        </div>

        {/* Statistics */}
        <div className="flex justify-center mb-8">
          <div className="bg-blue-50 rounded-lg px-6 py-3 text-center">
            <span className="text-2xl font-bold text-blue-600">{doctors.length}</span>
            <span className="text-gray-700 ml-2">Expert Doctors Available</span>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {/* Show All / Show Less Buttons */}
        {!showAll && doctors.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="btn btn-primary btn-lg px-8"
            >
              View All Doctors ({doctors.length})
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center">
            <button
              onClick={() => {
                setShowAll(false)
                const section = document.querySelector('[data-section="doctors"]')
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn btn-outline btn-primary btn-lg px-8"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default DoctorsSection
