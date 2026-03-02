"use client"
import { Container } from '@mui/material'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment'
import TestimonialComponentSlideV2 from './TestimonialComponentSlideV2'

const CALLBACK_FORM_URL = "https://forms.zohopublic.in/nikhilmindf1/form/NewWebsiteForm2025/formperma/c_0ekKg-MlfFH_W45sMaGGhHWxwaUHYKun261OA_QS4?zf_rszfm=1";

const psychiatryData = [
    {
        id: 1,
        name: "Dr Shubham",
        img: "https://mindfultms2.s3.us-east-1.amazonaws.com/1756967000604-Dr%20Subham%20%281%29.webp",
        location: "New Delhi - Greater Kailash 1",
        link: '/doctor/66ffa1856a3f2ccdb194b61d',
        bookingUrl: "https://book.mindfultms.in/#/237416000000621008",
    },
    {
        id: 2,
        name: "Dr Sandeep Govil",
        img: "https://mindfultms2.s3.us-east-1.amazonaws.com/1756967022829-Dr%20Sandeep%20Govil%20Pictures%20%281%29%20%281%29.webp",
        location: "New Delhi - Greater Kailash 1",
        link: "/doctor/66ffa28f6a3f2ccdb194b62a",
        bookingUrl: "https://book.mindfultms.in/#/237416000000631008",
    },
    {
        id: 3,
        name: "Dr. Abhishek",
        img: "https://mindfultms2.s3.us-east-1.amazonaws.com/1756967041780-Dr%20Abhishek%20%20%281%29%20%281%29.webp",
        location: "Bengaluru - Whitefield",
        link: "/doctor/66ffa2e86a3f2ccdb194b632",
        callbackUrl: CALLBACK_FORM_URL,
    },
]

const doctorArray = psychiatryData.map(item => ({
    _id: item.link.split('/').pop()
}));

const DoctorCard = ({ item, onClick, cardClass }) => (
    <div
        onClick={() => onClick(item)}
        className={`flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity duration-200 group ${cardClass}`}
    >
        <div className='w-[70px] md:w-[150px] h-[70px] md:h-[150px]'>
            <img
                src={item.img}
                alt={item.name}
                className='w-full h-full object-cover rounded-full border-2 border-orange-500 group-hover:border-orange-600 transition-colors duration-200'
            />
        </div>
        <div className='mt-4 text-center'>
            <span className='text-sm font-semibold text-gray-800 truncate block w-[100px] group-hover:text-orange-600 transition-colors duration-200'>
                {item.name}
            </span>
            <p className='text-[12px] text-gray-500'>
                {item.location}
            </p>
        </div>
    </div>
)

const MobileView = ({ onDoctorClick }) => {
    return (
        <>
            <div className='mt-8 mb-8'>
                <Container maxWidth="lg">
                    <div className='px-3 text-start'>
                        <h1 className='text-3xl md:text-5xl text-gray-700 font-bold'>
                            Expert Psychiatric Services
                        </h1>
                        <p className='text-lg md:text-xl text-gray-600 mt-4 mb-5'>
                            {` Our experienced psychiatrists offer personalized treatment plans and medication management to help you navigate your mental health journey.`}
                        </p>
                        <div className="flex justify-start ">
                            <RequestAppointment name="Book a Consultation" customStyle="px-6 py-3 rounded-full text-lg transition bg-primary-orange text-white font-semibold hover:bg-orange-500 active:bg-orange-600" />
                        </div>
                    </div>
                </Container>

                <div className='mt-12 bg-primary-div px-3 pt-4 pb-8 '>
                    <h3 className='text-3xl md:text-4xl text-center text-gray-700 font-semibold'>
                        Our Psychiatrists
                    </h3>
                    <div className='grid grid-cols-3 gap-2 md:gap-8 mt-4 '>
                        {psychiatryData.map((item) => (
                            <DoctorCard
                                key={item.id}
                                item={item}
                                onClick={onDoctorClick}
                                cardClass="bg-white rounded-lg px-6 py-6 md:p-3"
                            />
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6  mx-auto rounded-lg ">
                    <h3 className='text-2xl md:text-3xl text-center text-[#f6881f] font-bold mb-4'>
                        When should I consider seeing a psychiatrist?
                    </h3>
                    <div className="space-y-6 text-center">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                {` Therapy hasn't provided expected relief`}
                            </h2>
                            <p className="text-gray-600 mt-2">
                                {`  If you're not finding the support you need through therapy, a psychiatrist can offer additional options.`}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                {` You feel emotionally overwhelmed`}
                            </h2>
                            <p className="text-gray-600 mt-2">
                                {` Constant feelings of sadness or anxiety are interfering with your daily life.`}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                {`You notice major changes in your behavior`}
                            </h2>
                            <p className="text-gray-600 mt-2">
                                {` Withdrawing from activities or experiencing changes in sleep or appetite can be signs that you need help.`}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                {`You are struggling with harmful thoughts`}
                            </h2>
                            <p className="text-gray-600 mt-2">
                                {` Racing, distressing or intrusive thoughts that disrupt your peace of mind.`}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                {`You need help with medication`}
                            </h2>
                            <p className="text-gray-600 mt-2">
                                {`  If you have a mental health condition requiring medication management, we're here for you.`}
                            </p>
                        </div>
                        <div className="text-orange-600 font-bold text-xl">
                            {`If you're uncertain about what you need, our team will guide you.`}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <RequestAppointment name="Book a Consultation" customStyle="px-6 py-3 rounded-full text-lg transition bg-primary-orange text-white font-semibold hover:bg-orange-500 active:bg-orange-600" />
                </div>
            </div>

            <div className='bg-primary-div py-4'>
                <Container maxWidth="lg">
                    <h2 className="text-2xl font-bold text-center mb-6">Testimonials</h2>
                    <TestimonialComponentSlideV2
                        smallDevice={true}
                        mobileView={false}
                        doctorArray={doctorArray}
                        loadingDoctor={false}
                    />
                </Container>
            </div>
        </>
    )
}

const DesktopView = ({ onDoctorClick }) => {
    return (
        <>
            <div className='mt-8 mb-8'>
                <Container maxWidth="lg">
                    <div className='px-3 text-center'>
                        <h1 className='text-3xl md:text-4xl text-gray-700 font-bold'>
                            Expert Psychiatric Services
                        </h1>
                        <p className='text-lg md:text-xl text-gray-600 mt-4 mb-5'>
                            {` Our experienced psychiatrists offer personalized treatment plans and medication management to help you navigate your mental health journey.`}
                        </p>
                        <div className="flex justify-center ">
                            <RequestAppointment name="Book a Consultation" customStyle="px-6 py-3 rounded-full text-lg transition bg-primary-orange text-white font-semibold hover:bg-orange-500 active:bg-orange-600" />
                        </div>
                    </div>
                </Container>

                <div className='mt-12 bg-primary-div px-3 pt-8 pb-11 '>
                    <Container maxWidth="lg">
                        <h3 className='text-3xl md:text-4xl text-center text-gray-700 font-semibold'>
                            Our Psychiatrists
                        </h3>
                        <div className='grid grid-cols-3 gap-2 md:gap-8 mt-4 '>
                            {psychiatryData.map((item) => (
                                <DoctorCard
                                    key={item.id}
                                    item={item}
                                    onClick={onDoctorClick}
                                    cardClass="bg-white rounded-lg px-6 py-6 md:p-3"
                                />
                            ))}
                        </div>
                    </Container>
                </div>

                <Container maxWidth="lg">
                    <div className="bg-white p-6  mx-auto rounded-lg ">
                        <h3 className='text-2xl md:text-3xl text-center text-[#f6881f] font-bold mb-4'>
                            When should I consider seeing a psychiatrist?
                        </h3>
                        <div className="space-y-6 text-center">
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">
                                    {` Therapy hasn't provided expected relief`}
                                </h2>
                                <p className="text-gray-600 mt-2">
                                    {`  If you're not finding the support you need through therapy, a psychiatrist can offer additional options.`}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">
                                    {` You feel emotionally overwhelmed`}
                                </h2>
                                <p className="text-gray-600 mt-2">
                                    {` Constant feelings of sadness or anxiety are interfering with your daily life.`}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">
                                    {`You notice major changes in your behavior`}
                                </h2>
                                <p className="text-gray-600 mt-2">
                                    {` Withdrawing from activities or experiencing changes in sleep or appetite can be signs that you need help.`}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">
                                    {`You are struggling with harmful thoughts`}
                                </h2>
                                <p className="text-gray-600 mt-2">
                                    {` Racing, distressing or intrusive thoughts that disrupt your peace of mind.`}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">
                                    {`You need help with medication`}
                                </h2>
                                <p className="text-gray-600 mt-2">
                                    {`  If you have a mental health condition requiring medication management, we're here for you.`}
                                </p>
                            </div>
                            <div className="text-orange-600 font-bold text-xl">
                                {`If you're uncertain about what you need, our team will guide you.`}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center ">
                        <RequestAppointment name="Book a Consultation" customStyle="px-6 py-3 rounded-full text-lg transition bg-primary-orange text-white font-semibold hover:bg-orange-500 active:bg-orange-600" />
                    </div>
                </Container>
            </div>

            <div className='bg-primary-div py-8'>
                <Container maxWidth="lg">
                    <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
                    <TestimonialComponentSlideV2
                        smallDevice={true}
                        mobileView={false}
                        doctorArray={doctorArray}
                        loadingDoctor={false}
                    />
                </Container>
            </div>
        </>
    )
}

const PsychiatryPage = () => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [showCallbackModal, setShowCallbackModal] = useState(false);
    const [callbackIframeSrc, setCallbackIframeSrc] = useState('');

    const buildCallbackIframeSrc = (baseUrl) => {
        if (typeof window === 'undefined') return baseUrl;
        const currentUrl = window.location.href;
        const queryString = window.location.search;
        const separator = baseUrl.includes('?') ? '&' : '?';
        return currentUrl
            ? `${baseUrl}${separator}url=${encodeURIComponent(currentUrl)}&from=website${queryString ? `&${queryString.substring(1)}` : ''}`
            : baseUrl;
    };

    const handleDoctorClick = (item) => {
        setSelectedDoctor(item);
        setShowModal(true);
    };

    const handleViewProfile = () => {
        if (selectedDoctor) {
            setShowModal(false);
            router.push(selectedDoctor.link);
        }
    };

    const handleBookAppointment = () => {
        if (selectedDoctor) {
            if (selectedDoctor.callbackUrl) {
                setCallbackIframeSrc(buildCallbackIframeSrc(selectedDoctor.callbackUrl));
                setShowModal(false);
                setShowCallbackModal(true);
            } else if (selectedDoctor.bookingUrl) {
                const baseUrl = selectedDoctor.bookingUrl;
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
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedDoctor(null);
    };

    const closeCallbackModal = () => {
        setShowCallbackModal(false);
        setSelectedDoctor(null);
        setCallbackIframeSrc('');
    };

    return (
        <>
            <div className='hidden md:block'>
                <DesktopView onDoctorClick={handleDoctorClick} />
            </div>
            <div className='md:hidden'>
                <MobileView onDoctorClick={handleDoctorClick} />
            </div>

            {/* Expert Options Modal */}
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
                                src={selectedDoctor.img}
                                alt={selectedDoctor.name}
                                className="h-[120px] w-[120px] object-cover border-[3px] border-orange-400 rounded-full mb-3"
                                style={{ objectFit: 'cover', objectPosition: 'top' }}
                            />
                            <h2 className="text-2xl font-bold text-gray-800 mb-1">{selectedDoctor.name}</h2>
                            <p className="text-gray-600">{selectedDoctor.location}</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <button
                                onClick={handleBookAppointment}
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                {selectedDoctor.callbackUrl ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                )}
                                {selectedDoctor.callbackUrl ? 'Request Callback' : 'Book Appointment'}
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
    )
}

export default PsychiatryPage
