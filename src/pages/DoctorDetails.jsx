import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'

const DoctorDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [doctor, setDoctor] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        setLoading(true)
        setError(null)

        // public/data/doctors.json থেকে data fetch করুন
        const response = await fetch('/data/doctors.json')
        
        if (!response.ok) {
          throw new Error('Failed to fetch doctor data')
        }
        
        const data = await response.json()
        const foundDoctor = data.doctors.find(doc => doc.id === parseInt(id))
        
        if (!foundDoctor) {
          setError('Doctor not found')
          return
        }

        setDoctor(foundDoctor)

      } catch (err) {
        setError('Failed to load doctor details')
        console.error('Error fetching doctor details:', err)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchDoctorDetails()
    }
  }, [id])

  // Check if doctor is available today
  const isDoctorAvailableToday = () => {
    if (!doctor) return false
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
    return doctor.availability.includes(today) && doctor.isAvailable
  }

  // Handle booking appointment
  const handleBookAppointment = () => {
    // Check if user already has an appointment with this doctor
    const existingBookings = JSON.parse(localStorage.getItem('appointments') || '[]')
    const alreadyBooked = existingBookings.some(booking => booking.doctorId === doctor.id)

    if (alreadyBooked) {
      alert(`You already have an appointment with ${doctor.name}!`)
      return
    }

    // Create new appointment
    const newAppointment = {
      id: Date.now(),
      doctorId: doctor.id,
      doctorName: doctor.name,
      doctorSpeciality: doctor.speciality,
      doctorEducation: doctor.education,
      fee: doctor.fee,
      appointmentDate: new Date().toLocaleDateString(),
      status: 'confirmed'
    }

    // Save to localStorage
    const updatedBookings = [...existingBookings, newAppointment]
    localStorage.setItem('appointments', JSON.stringify(updatedBookings))

    // Show success message
    alert(`Appointment booked successfully with ${doctor.name}!`)
    
    // Redirect to bookings page
    navigate('/my-bookings')
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <LoadingSpinner size="lg" text="Loading doctor details..." />
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {error === 'Doctor not found' ? 'Doctor Not Found' : 'Something went wrong'}
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  if (!doctor) {
    return null
  }

  const isAvailableToday = isDoctorAvailableToday()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="breadcrumbs text-sm mb-6">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#doctors">Doctors</Link></li>
          <li>{doctor.name}</li>
        </ul>
      </div>

      {/* Doctor Profile Header */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Doctor's Profile Details
          </h1>
          <p className="text-gray-600">
            Your health is our priority - Meet our expert medical professional
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Doctor Information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Doctor Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-3xl font-bold text-gray-900">{doctor.name}</h2>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isAvailableToday 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {isAvailableToday ? 'Available Today' : 'Unavailable Today'}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">Education</h3>
                    <p className="text-gray-600">{doctor.education}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">Speciality</h3>
                    <p className="text-blue-600 font-medium">{doctor.speciality}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">Designation</h3>
                    <p className="text-gray-600">{doctor.designation}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">Workplace</h3>
                    <p className="text-gray-600">{doctor.workplace}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">Consultation Fee</h3>
                    <p className="text-2xl font-bold text-teal-600">৳{doctor.fee}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">Experience</h3>
                    <p className="text-gray-600">{doctor.experience}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">Registration Number</h3>
                    <p className="text-gray-600">{doctor.registrationNumber}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="font-semibold text-gray-700 mb-3">About Doctor</h3>
              <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
            </div>

            {/* Rating and Reviews */}
            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(doctor.rating) 
                            ? 'text-yellow-400' 
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-700">{doctor.rating}</span>
                </div>
                <div className="text-sm text-gray-500">
                  {doctor.totalPatients}+ Happy Patients
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Book Appointment</h3>
            
            {/* Availability */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-3">Available Days</h4>
              <div className="flex flex-wrap gap-2">
                {doctor.availability.map((day) => (
                  <span 
                    key={day}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="mb-6">
              <div className={`p-4 rounded-lg ${
                isAvailableToday 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                <p className={`text-sm font-medium ${
                  isAvailableToday ? 'text-green-800' : 'text-red-800'
                }`}>
                  {isAvailableToday 
                    ? '✅ Doctor is available today!' 
                    : '❌ Doctor is unavailable today'
                  }
                </p>
              </div>
            </div>

            {/* Book Now Button */}
            <button
              onClick={handleBookAppointment}
              disabled={!doctor.isAvailable}
              className={`w-full btn btn-lg ${
                doctor.isAvailable 
                  ? 'btn-primary' 
                  : 'btn-disabled'
              }`}
            >
              {doctor.isAvailable ? 'Book Now' : 'Currently Unavailable'}
            </button>

            <p className="text-xs text-gray-500 mt-2 text-center">
              * Booking confirmation will be sent via SMS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDetails