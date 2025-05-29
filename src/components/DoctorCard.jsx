import React from 'react'
import { useNavigate } from 'react-router-dom'

const DoctorCard = ({ doctor }) => {
    const navigate = useNavigate()

    const {
        id,
        image,
        name,
        education,
        speciality,
        experience,
        registrationNumber,
    } = doctor

    return (
        <div className="card bg-white shadow-md rounded-lg p-4 flex flex-col h-full">
            {/* Doctor Image - Fixed container with aspect ratio */}
            <div className="relative pt-[100%] mb-4 rounded-lg overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* Badges */}
            <div className="flex gap-2 mb-2">
                <span className="badge badge-success badge-sm">Available</span>
                <span className="badge badge-info badge-sm">{experience} Experience</span>
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold mb-1">{name}</h3>

            {/* Education & Speciality */}
            <p className="text-sm text-gray-600 mb-2">
                {education} - {speciality}
            </p>

            {/* Registration Number */}
            <div className="text-sm text-gray-500 flex items-center mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11zM12 14v7m0 0H8m4 0h4"
                    />
                </svg>
                <span>Reg No: <strong>{registrationNumber}</strong></span>
            </div>

            {/* View Details Button */}
            <button
                onClick={() => navigate(`/doctors/${id}`)}
                className="btn btn-outline btn-primary mt-auto"
            >
                View Details
            </button>
        </div>
    )
}

export default DoctorCard