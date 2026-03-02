"use client"
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

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

const ClinicLocationDoctors = ({ city }) => {
    const router = useRouter()
    const [ourExperts, setOurExperts] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [selectedExpert, setSelectedExpert] = useState(null)
    const [showCallbackModal, setShowCallbackModal] = useState(false)
    const [callbackExpert, setCallbackExpert] = useState(null)
    const [callbackIframeSrc, setCallbackIframeSrc] = useState('')

    const slugify = (name) =>
        name
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')

    const getOurExperts = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}doctors`, {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            },
        })

        const filteredExperts = res.data.filter(expert => {
            if (city === "New-Delhi") {
                return expert.location === "New Delhi - Greater Kailash 1"
            } else if (city === "Bengaluru-Whitefield") {
                return expert.location === "Bengaluru - Whitefield"
            } else if (city === "Bengaluru-Hebbal") {
                return expert.location === "Bengaluru - Hebbal"
            }
            return true
        })

        setOurExperts(filteredExperts)
    }

    useEffect(() => {
        getOurExperts()
    }, [])

    const buildCallbackIframeSrc = (baseUrl) => {
        if (typeof window === 'undefined') return baseUrl
        const currentUrl = window.location.href
        const queryString = window.location.search
        const separator = baseUrl.includes('?') ? '&' : '?'
        return currentUrl
            ? `${baseUrl}${separator}url=${encodeURIComponent(currentUrl)}&from=website${queryString ? `&${queryString.substring(1)}` : ''}`
            : baseUrl
    }

    const handleExpertClick = (expert) => {
        const isCallbackOnly = Boolean(CALLBACK_ONLY_EXPERTS[expert.name])
        const bookingUrl = EXPERT_BOOKING_URLS[expert.name]

        if (isCallbackOnly || bookingUrl) {
            setSelectedExpert(expert)
            setShowModal(true)
        } else {
            router.push(`/doctor/${expert._id}/${slugify(expert.name)}`)
        }
    }

    const handleViewProfile = () => {
        if (selectedExpert) {
            setShowModal(false)
            router.push(`/doctor/${selectedExpert._id}/${slugify(selectedExpert.name)}`)
        }
    }

    const handleBookAppointment = () => {
        if (selectedExpert) {
            const isCallbackOnly = Boolean(CALLBACK_ONLY_EXPERTS[selectedExpert.name])
            if (isCallbackOnly) {
                const baseUrl = CALLBACK_ONLY_EXPERTS[selectedExpert.name]
                setCallbackExpert(selectedExpert)
                setCallbackIframeSrc(buildCallbackIframeSrc(baseUrl))
                setShowModal(false)
                setSelectedExpert(null)
                setShowCallbackModal(true)
            } else {
                const baseUrl = EXPERT_BOOKING_URLS[selectedExpert.name]
                const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
                const queryString = typeof window !== 'undefined' ? window.location.search : ''
                const separator = baseUrl.includes('?') ? '&' : '?'
                const bookingUrl = currentUrl
                    ? `${baseUrl}${separator}url=${encodeURIComponent(currentUrl)}&from=website${queryString ? `&${queryString.substring(1)}` : ''}`
                    : baseUrl
                window.open(bookingUrl, '_blank', 'noopener,noreferrer')
                setShowModal(false)
                setSelectedExpert(null)
            }
        }
    }

    const closeModal = () => {
        setShowModal(false)
        setSelectedExpert(null)
    }

    const closeCallbackModal = () => {
        setShowCallbackModal(false)
        setCallbackExpert(null)
        setCallbackIframeSrc('')
    }

    return (
        <section className='py-8 px-4'>
            <div className='mb-11 flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-semibold text-gray-800 text-center'>Our Experts</h1>
            </div>
            <div className={`grid grid-cols-3 md:grid-cols-4 gap-4 text-center ${ourExperts?.length < 2 ? 'justify-center' : ''}`}>
                {ourExperts?.map((expert, index) => (
                    <div
                        key={index}
                        onClick={() => handleExpertClick(expert)}
                        className={`flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity duration-200 group ${ourExperts.length < 2 ? 'col-start-2' : ''}`}
                    >
                        <div className='mb-2 h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px] flex flex-col items-center'>
                            <Image
                                height={500}
                                width={500}
                                className='h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px] object-cover border-[3px] border-orange-400 rounded-full pointer-events-none group-hover:border-orange-500 transition-colors duration-200'
                                style={{ objectPosition: "top" }}
                                src={expert?.image}
                                alt={expert?.name}
                                onError={(e) => {
                                    e.target.src = `https://avatar.iran.liara.run/username?username=${expert?.name}`
                                }}
                            />
                        </div>
                        <div className='mb-1'>
                            <p className='font-semibold text-[14px] md:text-[16px] lg:text-[18px] text-gray-800 max-w-[150px] md:max-w-[180px] lg:max-w-[200px] group-hover:text-orange-600 transition-colors duration-200'>{expert?.name}</p>
                            <p className='text-[11px] md:text-[13px] lg:text-[15px] text-gray-900 max-w-[150px] md:max-w-[180px] lg:max-w-[200px]'>{expert?.designation}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Expert Options Modal */}
            {showModal && selectedExpert && (
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
                            <Image
                                height={120}
                                width={120}
                                className="h-[120px] w-[120px] object-cover border-[3px] border-orange-400 rounded-full mb-3"
                                style={{ objectPosition: "top" }}
                                src={selectedExpert.image}
                                alt={`${selectedExpert.name}'s profile`}
                                onError={(e) => {
                                    e.target.src = `https://avatar.iran.liara.run/username?username=${selectedExpert.name}`
                                }}
                            />
                            <h2 className="text-2xl font-bold text-gray-800 mb-1">{selectedExpert.name}</h2>
                            <p className="text-gray-600">{selectedExpert.designation}</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <button
                                onClick={handleBookAppointment}
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                {CALLBACK_ONLY_EXPERTS[selectedExpert.name] ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                )}
                                {CALLBACK_ONLY_EXPERTS[selectedExpert.name] ? 'Request Callback' : 'Book Appointment'}
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

            {/* Request Callback Modal */}
            {showCallbackModal && callbackExpert && (
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
        </section>
    )
}

export default ClinicLocationDoctors
