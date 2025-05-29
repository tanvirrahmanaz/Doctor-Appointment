import React from 'react';

const Bookings = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">My Bookings</h1>
            <div className="text-center">
                <p className="text-gray-600 mb-4">You haven't made any appointments yet.</p>
                <Link to="/" className="btn btn-primary">Book Your First Appointment</Link>
            </div>
        </div>
    );
};

export default Bookings;