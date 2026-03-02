"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EXPERT_BOOKING_URLS = {
  "Dr. Sandeep Govil": "https://book.mindfultms.in/#/237416000000631008",
  "Dr. Shubham Narnoli": "https://book.mindfultms.in/#/237416000000621008",
  "Ms. Mamatha S": "https://book.mindfultms.in/#/237416000000616008",
  "Ms. Sadaf Rais": "https://book.mindfultms.in/#/237416000000602026",
  "Ms. Shilpi Sharma": "https://book.mindfultms.in/#/237416000000602018",
  "Ms. Navya Shree": "https://book.mindfultms.in/#/237416000000654376",
  "Ms Swati Agarwal": "https://book.mindfultms.in/#/237416000000651116",
  "Ms. Aanshi Taneja Yadahalli": "https://book.mindfultms.in/#/237416000000634182",
};

const CALLBACK_ONLY_EXPERTS = {
  "Ms. Kavya K": "https://forms.zohopublic.in/nikhilmindf1/form/NewWebsiteForm2025/formperma/c_0ekKg-MlfFH_W45sMaGGhHWxwaUHYKun261OA_QS4?zf_rszfm=1",
  "Dr. Abhishek": "https://forms.zohopublic.in/nikhilmindf1/form/NewWebsiteForm2025/formperma/c_0ekKg-MlfFH_W45sMaGGhHWxwaUHYKun261OA_QS4?zf_rszfm=1"
};

const DoctorsSection = ({ expertService, location, expertText, excludedDoctors }) => {
  const [loading, setLoading] = useState(true);
  const [psychiatrists, setPsychiatrists] = useState([]);
  const [psychologists, setPsychologists] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [callbackIframeSrc, setCallbackIframeSrc] = useState('');

  const doctorFees = {
    "Ms. Shilpi Sharma": "Rs 2500 / Hr",
    "Ms. Mamatha S": "Rs. 1800 / Hr",
    "Ms. Sadaf Rais": "Rs. 1800 / Hr",
    "Dr. Sandeep Govil": "Rs. 2500 for 30 minutes",
    "Dr. Shubham Narnoli": "Rs. 1800 for 30 minutes",
  };

  useEffect(() => {
    if (expertService === "general") {
      setLoading(true);
      Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}doctors/search/doctors?location=${location}&designation=Psychiatrist`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}doctors/search/doctors?location=${location}&designation=Psychologist`)
      ])
        .then(([resPsychiatrist, resPsychologist]) => {
          setPsychiatrists(resPsychiatrist.data.filter(doctor => !excludedDoctors.includes(doctor.name)));
          setPsychologists(resPsychologist.data.filter(doctor => !excludedDoctors.includes(doctor.name)));
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching doctors:", err);
          setLoading(false);
        });
    } else {
      let designation;
      if (expertService === "psychologist") {
        designation = "Psychologist";
      } else if (expertService === "psychiatrist") {
        designation = "Psychiatrist";
      } else {
        designation = expertText === "therapist" ? "Psychologist" : expertText;
      }
      setLoading(true);
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}doctors/search/doctors?location=${location}&designation=${designation}`)
        .then((res) => {
          setDoctors(res.data.filter(doctor => !excludedDoctors.includes(doctor.name)));
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching doctors:", err);
          setLoading(false);
        });
    }
  }, [expertService, location, expertText]);

  const buildCallbackIframeSrc = (baseUrl) => {
    if (typeof window === 'undefined') return baseUrl;
    const currentUrl = window.location.href;
    const queryString = window.location.search;
    const separator = baseUrl.includes('?') ? '&' : '?';
    return currentUrl
      ? `${baseUrl}${separator}url=${encodeURIComponent(currentUrl)}&from=website${queryString ? `&${queryString.substring(1)}` : ''}`
      : baseUrl;
  };

  const handleDoctorClick = (doctor) => {
    const isCallbackOnly = Boolean(CALLBACK_ONLY_EXPERTS[doctor.name]);
    const bookingUrl = EXPERT_BOOKING_URLS[doctor.name];
    if (isCallbackOnly || bookingUrl) {
      setSelectedDoctor(doctor);
      setShowModal(true);
    }
  };

  const handleBookAppointment = () => {
    if (!selectedDoctor) return;
    const isCallbackOnly = Boolean(CALLBACK_ONLY_EXPERTS[selectedDoctor.name]);
    if (isCallbackOnly) {
      const baseUrl = CALLBACK_ONLY_EXPERTS[selectedDoctor.name];
      setCallbackIframeSrc(buildCallbackIframeSrc(baseUrl));
      setShowModal(false);
      setSelectedDoctor(null);
      setShowCallbackModal(true);
    } else {
      const baseUrl = EXPERT_BOOKING_URLS[selectedDoctor.name];
      const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
      const queryString = typeof window !== 'undefined' ? window.location.search : '';
      const separator = baseUrl.includes('?') ? '&' : '?';
      const bookingUrl = currentUrl
        ? `${baseUrl}${separator}url=${encodeURIComponent(currentUrl)}&from=website${queryString ? `&${queryString.substring(1)}` : ''}`
        : baseUrl;
      window.open(bookingUrl, '_blank', 'noopener,noreferrer');
      setShowModal(false);
      setSelectedDoctor(null);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDoctor(null);
  };

  const closeCallbackModal = () => {
    setShowCallbackModal(false);
    setCallbackIframeSrc('');
  };

  const ExpertStyle = {
    "mobile": {
      "image_div": "mb-2 h-[120px] w-[120px] md:h-[230px] md:w-[230px]",
      "doctor_name": "font-semibold text-lg text-gray-800 max-w-[150px]",
      "designation": "text-[13px] lg:text-[15px] text-gray-700 max-w-[200px]",
    },
    "desktop": {
      "image_div": "mb-2 h-[230px] w-[230px]",
      "doctor_name": "font-semibold text-lg text-gray-800 max-w-[150px]",
      "designation": "text-[13px] lg:text-[15px] text-gray-700 max-w-[200px]",
    }
  };

  const DoctorGridSkeleton = () => (
    <div className="hidden md:flex flex-wrap justify-center gap-[90px] animate-pulse">
      {[...Array(5)].map((_, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="mb-2 h-[130px] w-[130px] md:h-[150px] md:w-[150px] bg-gray-300 rounded-full border-[3px] border-orange-200" />
          <div className="mb-1 mt-2 text-center">
            <div className="h-4 w-32 bg-gray-300 rounded mb-2" />
            <div className="h-3 w-28 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );

  const MobileDoctorGridSkeleton = () => (
    <div className="block md:hidden">
      <div className="flex flex-wrap gap-6 justify-center animate-pulse">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="h-[120px] w-[120px] bg-gray-300 rounded-full border-[3px] border-orange-200 mb-2" />
            <div className="mb-1 text-center">
              <div className="h-4 w-24 bg-gray-300 rounded mb-2" />
              <div className="h-3 w-20 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Shared doctor card — clickable if has booking/callback URL
  const DoctorCard = ({ doctor, sizeClass, nameClass }) => {
    const isClickable = Boolean(CALLBACK_ONLY_EXPERTS[doctor.name]) || Boolean(EXPERT_BOOKING_URLS[doctor.name]);
    return (
      <div
        key={doctor._id}
        onClick={() => isClickable && handleDoctorClick(doctor)}
        className={`flex flex-col items-center ${isClickable ? 'cursor-pointer hover:opacity-80 transition-opacity duration-200 group' : ''}`}
      >
        <div className={sizeClass}>
          <img
            className={`h-full w-full object-cover border-[3px] border-orange-400 rounded-full ${isClickable ? 'group-hover:border-orange-500 transition-colors duration-200' : ''}`}
            src={doctor.image}
            alt={doctor.name}
            style={{ objectPosition: "center top" }}
          />
        </div>
        <div className="mb-1 text-center">
          <p className={`${nameClass} ${isClickable ? 'group-hover:text-orange-600 transition-colors duration-200' : ''}`}>
            {doctor.name}
          </p>
          <label className="text-[13px] lg:text-[15px] text-gray-700 max-w-[200px]">
            {doctor.designation}
          </label>
          {doctorFees[doctor.name] && (
            <p className="text-[12px] lg:text-[14px] font-medium text-gray-900 mt-1">
              {doctorFees[doctor.name]}
            </p>
          )}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <>
        <div className="mb-6 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Our Experts</h1>
        </div>
        <MobileDoctorGridSkeleton />
        <DoctorGridSkeleton />
      </>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Our Experts</h1>
        </div>

        {expertService === "general" ? (
          <>
            {/* MOBILE */}
            <div className="block md:hidden">
              {psychologists.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-700 text-center my-4">Psychologists</h2>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {psychologists.map((doctor) => (
                      <DoctorCard
                        key={doctor._id}
                        doctor={doctor}
                        sizeClass={ExpertStyle["mobile"]["image_div"]}
                        nameClass="font-semibold text-lg text-center text-gray-800 max-w-[150px]"
                      />
                    ))}
                  </div>
                </div>
              )}
              {psychiatrists.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 text-center my-4">Psychiatrists</h2>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {psychiatrists.map((doctor) => (
                      <DoctorCard
                        key={doctor._id}
                        doctor={doctor}
                        sizeClass={ExpertStyle["mobile"]["image_div"]}
                        nameClass="font-semibold text-lg text-gray-800 max-w-[150px]"
                      />
                    ))}
                  </div>
                </div>
              )}
              {psychologists.length === 0 && psychiatrists.length === 0 && (
                <p className="text-center mt-6">No doctors available at this time.</p>
              )}
            </div>

            {/* DESKTOP */}
            <div className="hidden md:flex flex-wrap justify-center gap-[90px]">
              {(() => {
                const allDoctors = [...psychologists, ...psychiatrists];
                if (allDoctors.length === 0) return <p className="text-center mt-6">No doctors available at this time.</p>;
                return allDoctors.map((doctor) => (
                  <DoctorCard
                    key={doctor._id}
                    doctor={doctor}
                    sizeClass="mb-2 h-[130px] w-[130px] md:h-[150px] md:w-[150px]"
                    nameClass="font-semibold text-lg text-start lg:text-[18px] text-gray-800 max-w-[200px]"
                  />
                ));
              })()}
            </div>
          </>
        ) : (
          <>
            {/* MOBILE */}
            <div className="block md:hidden">
              <div className="flex flex-wrap gap-6 justify-center">
                {doctors.map((doctor) => (
                  <DoctorCard
                    key={doctor._id}
                    doctor={doctor}
                    sizeClass={ExpertStyle["mobile"]["image_div"]}
                    nameClass="font-semibold text-sm md:text-lg text-center text-gray-800 max-w-[150px]"
                  />
                ))}
                {doctors.length === 0 && <p className="text-center w-full mt-6">No doctors available at this time.</p>}
              </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:flex flex-wrap justify-center gap-[90px]">
              {doctors.map((doctor) => (
                <DoctorCard
                  key={doctor._id}
                  doctor={doctor}
                  sizeClass="mb-2 h-[130px] w-[130px] md:h-[150px] md:w-[150px]"
                  nameClass="font-semibold text-lg text-center lg:text-[18px] text-gray-800 max-w-[200px]"
                />
              ))}
              {doctors.length === 0 && <p className="text-center w-full mt-6">No doctors available at this time.</p>}
            </div>
          </>
        )}
      </div>

      {/* Book Appointment / Request Callback Modal */}
      {showModal && selectedDoctor && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          ></div>

          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-[500px] mx-4 z-50 p-6">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-1 rounded hover:bg-gray-100 transition"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="flex flex-col items-center mb-6">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="h-[120px] w-[120px] object-cover border-[3px] border-orange-400 rounded-full mb-3"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-1">{selectedDoctor.name}</h2>
              <p className="text-gray-600">{selectedDoctor.designation}</p>
            </div>

            <button
              onClick={handleBookAppointment}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {CALLBACK_ONLY_EXPERTS[selectedDoctor.name] ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              )}
              {CALLBACK_ONLY_EXPERTS[selectedDoctor.name] ? 'Request Callback' : 'Book Appointment'}
            </button>
          </div>
        </div>
      )}

      {/* Callback iframe Modal */}
      {showCallbackModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeCallbackModal}
          ></div>

          <div
            style={{ maxHeight: "90vh" }}
            className="relative bg-white rounded-lg shadow-xl w-full max-w-[500px] mx-4 overflow-hidden z-50 flex flex-col"
          >
            <div className="flex-shrink-0 flex items-start justify-between border-b border-gray-200 p-4">
              <h2 className="text-base font-semibold text-gray-900">Request a Callback</h2>
              <button
                onClick={closeCallbackModal}
                className="p-1 rounded hover:bg-gray-100 transition"
                aria-label="Close modal"
              >
                <img
                  className="w-6 h-6"
                  src="https://ik.imagekit.io/mwpcmpi5v/iconsNew/closee.svg?updatedAt=1733748343028"
                  alt="Close"
                />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <iframe
                src={callbackIframeSrc}
                style={{ height: "600px", width: "100%", border: "none" }}
                title="Request Callback Form"
                aria-label="Request Callback Form"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorsSection;
