import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const colors = [
  '#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#ff0000',
  '#00c0ff', '#ff6f61', '#ff00ff', '#006400', '#1e90ff',
  '#f0e68c', '#ff1493'
]

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width},${y + height}
   Z`

const TriangleBar = (props) => {
  const { x, y, width, height, index } = props
  return (
    <path
      d={getPath(x, y, width, height)}
      stroke="none"
      fill={colors[index % colors.length]}
    />
  )
}

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || []
    setAppointments(savedAppointments)
    setLoading(false)
  }, [])

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter(item => item.id !== appointmentId)
    setAppointments(updatedAppointments)
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments))
    toast.success('Appointment cancelled successfully.')
  }

  const chartData = appointments.map((appointment, index) => ({
    ...appointment,
    index,
  }))

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-20 h-20 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
      </div>
    )
  }

  if (appointments.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen space-y-6 px-4">
        <h2 className="text-3xl font-bold text-center">No Appointments Booked Yet</h2>
        <p className="text-gray-600 max-w-md text-center">
          You haven't booked any appointments yet. Start booking to see your lawyer consultation fees visualized here!
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="btn btn-primary px-6 py-3 rounded-full"
        >
          Return to Homepage
        </button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <h2 className="text-3xl font-bold text-center mb-8">My Appointments</h2>

      {/* Chart Section */}
      <section className="mb-10 p-6 bg-white rounded-xl shadow">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Lawyer Appointment Fees
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 14 }} />
            <YAxis tick={{ fontSize: 14 }} />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="fee"
              shape={(props) => <TriangleBar {...props} index={props.payload.index} />}
            />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Appointments List */}
      <section className="space-y-6">
        {appointments.map((appointment) => (
          console.log(appointment),
          <div
            key={appointment.id}
            className="flex flex-col md:flex-row md:justify-between md:items-center bg-white rounded-xl shadow p-6"
          >
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-semibold text-black">
                Name: {appointment.doctorName}
              </h4>
              <h4 className="text-xl font-semibold text-black">
                Speciality: {appointment.doctorSpeciality}
              </h4>
              <p className="text-gray-600">{appointment.speciality}</p>
              <p className="text-lg font-semibold mt-1 text-black">Fee: Taka {appointment.fee}</p>
            </div>
            <button
              onClick={() => handleCancel(appointment.id)}
              className="btn btn-error hover:bg-red-700 transition w-full md:w-auto"
            >
              Cancel Appointment
            </button>
          </div>
        ))}

      </section>
    </div>
  )
}

export default MyAppointments
