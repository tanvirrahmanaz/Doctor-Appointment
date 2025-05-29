const DoctorAppointmentsBlog = () => {
  const blogPosts = [
    {
      id: 1,
      question: "What is a Doctor Appointment System?",
      answer:
        "A Doctor Appointment System is an online platform that allows patients to schedule, reschedule, and manage appointments with healthcare providers. It streamlines communication, reduces wait times, and improves clinic efficiency.",
    },
    {
      id: 2,
      question: "Why is Online Appointment Booking Important?",
      answer:
        "Online booking systems provide convenience to patients, allowing 24/7 access to schedule appointments without calling the clinic. It also reduces administrative workload and helps healthcare providers optimize their time and resources.",
    },
    {
      id: 3,
      question: "How Does Appointment Scheduling Work?",
      answer:
        "Patients select a doctor and available time slot based on the doctor's schedule. The system confirms the booking, sends notifications or reminders, and updates the doctor’s calendar to avoid conflicts.",
    },
    {
      id: 4,
      question: "What Features Should a Doctor Appointment System Have?",
      answer:
        "Key features include calendar integration, patient notifications, cancellation/rescheduling options, doctor availability management, payment processing, and analytics to track appointment trends.",
    },
    {
      id: 5,
      question: "Benefits of Using a Doctor Appointment System",
      answer:
        "It improves patient satisfaction by making booking easier, increases operational efficiency, minimizes no-shows through reminders, and offers valuable data insights for healthcare providers.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md my-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Understanding Doctor Appointment Systems</h2>
      <div className="space-y-8">
        {blogPosts.map(({ id, question, answer }) => (
          <article key={id} className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold mb-2">{question}</h3>
            <p className="text-gray-700 leading-relaxed">{answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DoctorAppointmentsBlog;
