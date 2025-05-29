import CountUp from 'react-countup';

// Import your success icons from assets
import doctorIcon from '../assets/success-doctor.png';
import reviewIcon from '../assets/success-review.png';
import caseIcon from '../assets/success-patients.png';
import staffIcon from '../assets/success-staffs.png';

const SuccessSection = () => {
  const stats = [
    {
      icon: doctorIcon,
      label: 'Total Lawyer',
      count: 199,
    },
    {
      icon: reviewIcon,
      label: 'Total Reviews',
      count: 1207,
    },
    {
      icon: caseIcon,
      label: 'Cases Initiated',
      count: 3900,
    },
    {
      icon: staffIcon,
      label: 'Total Staffs',
      count: 300,
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-12 text-center bg-white shadow-md rounded-2xl">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">
        We Provide Best Law Services
      </h2>
      <p className="text-gray-500 text-sm sm:text-base mb-10 max-w-2xl mx-auto">
        Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl border border-gray-200 p-6 flex flex-col items-center hover:shadow-xl transition"
          >
            <img src={stat.icon} alt={stat.label} className="h-14 mb-4" />
            <h3 className="text-3xl font-bold text-gray-800">
              <CountUp end={stat.count} duration={5} />+
            </h3>
            <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessSection;
