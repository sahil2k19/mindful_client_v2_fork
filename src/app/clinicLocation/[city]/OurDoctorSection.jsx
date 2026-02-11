"use client";
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Booking URL mapping for experts with direct booking
// Names must match exactly with API data
const EXPERT_BOOKING_URLS = {
  "Dr. Sandeep Govil": "https://book.mindfultms.in/#/237416000000631008",
  "Dr. Shubham Narnoli": "https://book.mindfultms.in/#/237416000000621008",
  "Ms. Mamatha S": "https://book.mindfultms.in/#/237416000000616008",
  "Ms. Sadaf Rais": "https://book.mindfultms.in/#/237416000000602026",
  "Ms. Shilpi Sharma": "https://book.mindfultms.in/#/237416000000602018",
  "Ms. Navya Shree": "https://book.mindfultms.in/#/237416000000654376",
  "Ms Swati Agarwal": "https://book.mindfultms.in/#/237416000000651116",
  "Ms. Aanshi Taneja Yadahalli": "https://book.mindfultms.in/#/237416000000634182"
};

const OurDoctorSection = ({ designation }) => {
  const router = useRouter();
  const [ourExperts, setOurExperts] = useState([]);
  const [filteredExperts, setFilteredExperts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);

  const slugify = (name) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

  const apiUrl = designation
    ? `${process.env.NEXT_PUBLIC_API_URL}doctors/search/doctors?designation=${designation === 'therapist' ? 'Psychologist' : designation}`
    : `${process.env.NEXT_PUBLIC_API_URL}doctors`;

  const getOurExperts = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(apiUrl, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      });

      // Group doctors by location
      const groupedExperts = res.data.reduce((acc, expert) => {
        if (expert.location === "Bengaluru - Whitefield") {
          acc["Bengaluru - Whitefield"] = [...(acc["Bengaluru - Whitefield"] || []), expert];
        } else if (expert.location === "Bengaluru - Hebbal") {
          acc["Bengaluru - Hebbal"] = [...(acc["Bengaluru - Hebbal"] || []), expert];
        } else if (expert.location === "New Delhi - Greater Kailash 1") {
          acc["New Delhi - GK 1"] = [...(acc["New Delhi - GK 1"] || []), expert];
        }
        return acc;
      }, {});

      setFilteredExperts(groupedExperts);
      setOurExperts(res.data);
    } catch (error) {
      console.error("Error fetching experts:", error);
      setError(error.message || "Failed to fetch doctor data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOurExperts();
  }, [apiUrl]); // Added apiUrl as dependency to refetch when designation changes

  // Handler for expert click
  const handleExpertClick = (expert) => {
    const bookingUrl = EXPERT_BOOKING_URLS[expert.name];

    if (bookingUrl) {
      // Expert has booking URL - show modal with options
      setSelectedExpert(expert);
      setShowModal(true);
    } else {
      // No booking URL - navigate directly to detail page
      router.push(`/doctor/${expert._id}/${slugify(expert.name)}`);
    }
  };

  // Handler for viewing expert profile
  const handleViewProfile = () => {
    if (selectedExpert) {
      setShowModal(false);
      router.push(`/doctor/${selectedExpert._id}/${slugify(selectedExpert.name)}`);
    }
  };

  // Handler for booking appointment
  const handleBookAppointment = () => {
    if (selectedExpert) {
      const bookingUrl = getBookingUrl();
      window.open(bookingUrl, '_blank', 'noopener,noreferrer');
      setShowModal(false);
      setSelectedExpert(null);
    }
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedExpert(null);
  };



  // Get booking URL with query params
  const getBookingUrl = () => {
    if (!selectedExpert) return "";
    const baseUrl = EXPERT_BOOKING_URLS[selectedExpert.name];
    if (!baseUrl) return "";

    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const queryString = typeof window !== 'undefined' ? window.location.search : '';

    return currentUrl
      ? `${baseUrl}?url=${encodeURIComponent(currentUrl)}&from=website${queryString ? `&${queryString.substring(1)}` : ''}`
      : baseUrl;
  };

  // Loading state
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-8 pb-4 px-1">
          <div className="mb-11 flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Our Experts</h1>
          </div>
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-400 mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Loading our experts...</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-8 pb-4 px-1">
          <div className="mb-11 flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Our Experts</h1>
          </div>
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="text-center">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Experts</h2>
              <p className="text-gray-600 mb-4">{error}</p>
              <button
                onClick={() => getOurExperts()}
                className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // No experts found state
  if (Object.keys(filteredExperts).length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-8 pb-4 px-1">
          <div className="mb-11 flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Our Experts</h1>
          </div>
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="text-center">
              <div className="text-gray-400 text-6xl mb-4">👨‍⚕️</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">No Experts Found</h2>
              <p className="text-gray-600">
                {designation
                  ? `No ${designation} experts available at the moment.`
                  : "No experts available at the moment."
                }
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-8 pb-4 px-1">
        <div className="mb-11 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Our Experts</h1>
        </div>

        {Object.entries(filteredExperts).map(([location, experts], index) => (
          <div key={index} className="mb-5 md:mb-8 md:mx-[80px] lg:mx-[120px]">
            {/* Location Header */}
            <h2 className="text-2xl md:text-2xl font-semibold text-center text-gray-600 mb-4 md:mb-6">{location}</h2>

            {/* Experts Grid - Changed to grid layout for 4 items per row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 place-items-center">
              {experts.map((expert, idx) => (
                <div
                  key={`${expert?._id}-${idx}`}
                  onClick={() => handleExpertClick(expert)}
                  className="flex flex-col items-center mb-2 cursor-pointer hover:opacity-80 transition-opacity duration-200 w-full group"
                >
                  <div className="mb-2 h-[75px] w-[75px] md:h-[120px] md:w-[120px] lg:h-[140px] lg:w-[140px] flex items-center justify-center">
                    <Image
                      height={500}
                      width={500}
                      className="h-[75px] w-[75px] md:h-[120px] md:w-[120px] lg:h-[140px] lg:w-[140px] object-cover border-[3px] border-orange-400 rounded-full pointer-events-none group-hover:border-orange-500 transition-colors duration-200"
                      style={{ objectPosition: "top" }}
                      src={expert?.image}
                      alt={`${expert?.name}'s profile`}
                      priority={false}
                      onError={(e) => {
                        e.target.src = `https://avatar.iran.liara.run/username?username=${expert?.name}`; // Add fallback image
                      }}
                    />
                  </div>
                  <div className="mb-1 text-center">
                    <p className="font-semibold text-[14px] md:text-[16px] lg:text-[18px] text-gray-800 max-w-[150px] md:max-w-[180px] lg:max-w-[200px] text-nowrap overflow-hidden text-ellipsis group-hover:text-orange-600 transition-colors duration-200">
                      {expert?.name}
                    </p>
                    <p className="text-[11px] md:text-[13px] lg:text-[15px] text-gray-900 max-w-[150px] md:max-w-[180px] lg:max-w-[200px] overflow-hidden text-ellipsis">
                      {expert?.designation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Expert Options Modal */}
      {showModal && selectedExpert && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          ></div>

          {/* Modal */}
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-[500px] mx-4 z-50 p-6">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-1 rounded hover:bg-gray-100 transition"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Expert Info */}
            <div className="flex flex-col items-center mb-6">
              <Image
                height={120}
                width={120}
                className="h-[120px] w-[120px] object-cover border-[3px] border-orange-400 rounded-full mb-3"
                style={{ objectPosition: "top" }}
                src={selectedExpert.image}
                alt={`${selectedExpert.name}'s profile`}
                onError={(e) => {
                  e.target.src = `https://avatar.iran.liara.run/username?username=${selectedExpert.name}`;
                }}
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-1">{selectedExpert.name}</h2>
              <p className="text-gray-600">{selectedExpert.designation}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleBookAppointment}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book Appointment
              </button>
              <button
                onClick={handleViewProfile}
                className="w-full bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                View Profile
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default OurDoctorSection;
