"use client"
import React, { useEffect, useState } from 'react'
import { TextField, MenuItem, Select, FormControl, InputLabel, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { usePathname } from 'next/navigation';
import ZohoForm from '@/app/component/ZohoForm'
import CustomRequestForm from '@/components/CustomRequestForm'







const locations = [
    {
        name: "Aster CMI",
        area: "Bangalore North",
        bgColor: "bg-primary-orange",
        location: "Banglore Aster CMI",
        whatsapp: +919663095632,
        call: +919663095632,
        params: "Bengaluru-Hebbal",
        displayName: "Hebbal, Bangalore",
        bookingUrl: "https://book.mindfultms.in/portal-embed#/mindfultmsneurocare"
    },
    {
        name: "Whitefield",
        area: "Bangalore North",
        bgColor: "bg-[#F8A51C]",
        location: "Banglore Whitefield",
        whatsapp: +919663095632,
        call: +919663095632,
        params: "Bengaluru-Whitefield",
        displayName: "Whitefield, Bangalore",
        bookingUrl: "https://book.mindfultms.in/portal-embed#/237416000000594004"
    },
    {
        name: "Greater Kailash 1",
        area: "Delhi",
        bgColor: "bg-primary-orange",
        location: "Delhi",
        whatsapp: +919663095632,
        call: +919663095632,
        params: "New-Delhi",
        displayName: "Greater Kailash 1, Delhi",
        bookingUrl: "https://book.mindfultms.in/portal-embed#/237416000000594024"
    }
];






// Pages that should be excluded from showing the booking interface
const EXCLUDED_PATH_PREFIXES = [
    '/services/rtms',
    '/ads/rtms',
    '/services/neurofeedback',
    '/ads/psychiatrist/general/wf'
];
const EXCLUDED_FULL_PATHS = [];

const RequestAppointment = ({ city, name, customStyle, iframeSrc, iconSize, icon, header, nfb, externalTrigger, onClose }) => {
    const [queryString, setQueryString] = useState("");
    const [currentUrl, setcurrentUrl] = useState("");
    const [finalIframeSrc, setFinalIframeSrc] = useState("");
    const [showCallbackForm, setShowCallbackForm] = useState(false);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [showLocationSelection, setShowLocationSelection] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const url = window.location.href;
            setQueryString(window.location.search);
            console.log(url)
            setcurrentUrl(url);
        }
    }, []);

    // Check if current path should show booking interface
    const shouldShowBookingInterface = () => {
        if (EXCLUDED_FULL_PATHS.includes(pathname)) {
            return false;
        }

        const matchesPrefix = EXCLUDED_PATH_PREFIXES.some(prefix =>
            pathname.startsWith(prefix)
        );

        return !matchesPrefix;
    };

    const showBooking = shouldShowBookingInterface();

    // ✅ UPDATED: Dynamic booking URL based on selected location
    const getBookingEmbedUrl = () => {
        if (!selectedLocation) return "";

        const baseUrl = selectedLocation.bookingUrl;
        if (!baseUrl) return "";

        return currentUrl
            ? `${baseUrl}?url=${encodeURIComponent(currentUrl)}&from=website${queryString ? `&${queryString.substring(1)}` : ''}`
            : baseUrl;
    };

    const callbackIframeSrc = currentUrl
        ? `https://forms.zohopublic.in/nikhilmindf1/form/NewWebsiteForm2025/formperma/c_0ekKg-MlfFH_W45sMaGGhHWxwaUHYKun261OA_QS4?zf_rszfm=1&url=${encodeURIComponent(currentUrl)}&from=website${queryString ? `&${queryString.substring(1)}` : ''}`
        : `https://forms.zohopublic.in/nikhilmindf1/form/NewWebsiteForm2025/formperma/c_0ekKg-MlfFH_W45sMaGGhHWxwaUHYKun261OA_QS4?zf_rszfm=1&from=website`;


    const [requestModal, setRequestModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        doctor: '',
        location: '',
        message: ''
    });
    const [isValid, setIsValid] = useState(false);
    const [isBusinessHours, setIsBusinessHours] = useState(false);

    const currentLocation = locations.find((location) => {
        if (city === location.params) {
            return location
        }
    });

    useEffect(() => {
        console.log("externalTrigger", externalTrigger)
        if (externalTrigger !== undefined) {
            setRequestModal(externalTrigger);
            // ✅ UPDATED: Auto-select location based on city param if available
            if (externalTrigger === true) {
                if (city && currentLocation) {
                    // If city is provided and location is found, auto-select it
                    setSelectedLocation(currentLocation);
                    if (currentLocation.bookingUrl && currentLocation.bookingUrl !== "") {
                        setShowBookingForm(true);
                        setShowLocationSelection(false);
                    } else {
                        // If no booking URL, show location selection
                        setShowLocationSelection(true);
                    }
                } else {
                    // If no city provided, show location selection
                    setShowLocationSelection(true);
                }
            }
        }
    }, [externalTrigger, city, currentLocation]);


    useEffect(() => {
        const handlePopState = () => {
            if (requestModal) {
                setRequestModal(false);
                setShowCallbackForm(false);
                setShowBookingForm(false);
                setShowLocationSelection(false);
                setSelectedLocation(null);
            }
        };

        if (requestModal) {
            window.history.pushState(null, '');
            window.addEventListener('popstate', handlePopState);
        }

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [requestModal]);

    useEffect(() => {
        const checkBusinessHours = () => {
            const now = new Date();
            const hours = now.getHours();
            if (hours >= 10 && hours < 16) {
                setIsBusinessHours(true);
            } else {
                setIsBusinessHours(false);
            }
        };
        checkBusinessHours();
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(value)) {
                setPhoneError("Phone number must be 10 digits.");
            } else {
                setPhoneError("");
            }
        }



        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleRequestModal();
    };


    const [phoneError, setPhoneError] = useState("");

    // ✅ UPDATED: Auto-select location based on city param
    const toggleRequestModal = () => {
        const newState = !requestModal;
        setRequestModal(prev => !prev);

        if (newState) {
            // ✅ UPDATED: Auto-select location based on city param if available
            if (city && currentLocation) {
                // If city is provided and location is found, auto-select it
                setSelectedLocation(currentLocation);
                if (currentLocation.bookingUrl && currentLocation.bookingUrl !== "") {
                    setShowBookingForm(true);
                    setShowLocationSelection(false);
                    setShowCallbackForm(false);
                } else {
                    // If no booking URL, show location selection
                    setShowLocationSelection(true);
                    setShowCallbackForm(false);
                    setShowBookingForm(false);
                }
            } else {
                // If no city provided, show location selection
                setShowLocationSelection(true);
                setShowCallbackForm(false);
                setShowBookingForm(false);
            }
        } else {
            // When closing, reset everything
            setShowCallbackForm(false);
            setShowBookingForm(false);
            setShowLocationSelection(false);
            setSelectedLocation(null);
        }

        setFormData({
            name: '',
            email: '',
            phone: '',
            doctor: '',
            location: currentLocation?.location || "",
            message: '',
            preferredTime: ''
        });

        if (onClose && !newState) {
            onClose();
        }
    };

    const isFormValid = () => {
        return formData.name && formData.phone && formData.location;
    };

    useEffect(() => {
        const isFormValidBool = isFormValid();
        setIsValid(isFormValidBool)
        if (isFormValidBool) {
            console.log('storedata', formData);
            console.log('isFormValid', isFormValidBool);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);


    useEffect(() => {
        const newWhatsappNumber = locations?.find((location) => {
            return location.location === formData?.location
        })?.whatsapp
        setFormData((prev) => ({
            ...prev,
            whatsapp: newWhatsappNumber,
        }))
    }, [formData?.location]);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            const baseUrl = iframeSrc || callbackIframeSrc;
            const currentQueryString = window.location.search;

            if (currentQueryString) {
                const separator = baseUrl.includes('?') ? '&' : '?';
                const cleanQueryString = currentQueryString.startsWith('?')
                    ? currentQueryString.substring(1)
                    : currentQueryString;
                setFinalIframeSrc(baseUrl + separator + cleanQueryString);
            } else {
                setFinalIframeSrc(baseUrl);
            }
        }
    }, [iframeSrc, currentUrl, queryString, callbackIframeSrc]);

    // ✅ Handle location selection
    const handleLocationSelect = (location) => {
        setSelectedLocation(location);

        // Check if booking URL is configured
        if (location.bookingUrl && location.bookingUrl !== "") {
            setShowLocationSelection(false);
            setShowBookingForm(true);
        } else {
            // Show message that this location is coming soon
            alert(`Booking for ${location.displayName} will be available soon. Please try another location or request a callback.`);
        }
    };

    return (
        <>
            {
                name ?
                    <button onClick={toggleRequestModal} className={`${customStyle ? customStyle : "bg-[#EF6623] hover:bg-orange-500 active:bg-orange-700 rounded-lg px-8 py-3 text-white text-sm font-semibold"} `}>
                        {icon ? <img src={icon} alt="icon" className={`${iconSize}`} /> : ""}
                        {name}
                    </button>
                    :
                    <button onClick={toggleRequestModal} className='text-xl w-full active:bg-orange-400 active:shadow-lg bg-primary-orange text-white px-6 py-2 rounded-lg font-semibold text-center'>
                        {icon ? <img src={icon} alt="icon" className={`w-${iconSize}`} /> : ""}
                        Book an Appointment
                    </button>
            }

            {requestModal && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
                        onClick={toggleRequestModal}
                    ></div>

                    {/* Modal */}
                    <div style={{ maxHeight: "90vh" }} className="relative bg-white rounded-lg shadow-xl w-full max-w-[500px] md:w-[80vw] md:max-w-[80vw] mx-4 md:mx-0 max-h-[90vh] overflow-hidden z-50 flex flex-col">
                        {/* Header - Fixed at top */}
                        <div className={`flex-shrink-0 flex items-start border-b border-gray-200 ${header || nfb ? "justify-between p-4" : "justify-between p-4"}`}>
                            {nfb ? (
                                <div className="flex flex-col">
                                    <h2 className="text-base font-semibold text-gray-900">
                                        Neurofeedback Consultation
                                    </h2>
                                    <span className="text-sm text-gray-800 italic">
                                        Book Now or Request a Callback
                                    </span>
                                </div>
                            ) : header ? (
                                <div className="flex flex-col">
                                    <h2 className="text-base font-semibold text-gray-900">
                                        rTMS Consultation
                                    </h2>
                                    <span className="text-sm text-gray-800 italic">
                                        Book Now or Request a Callback
                                    </span>
                                </div>
                            ) : (
                                <div className="flex flex-col">
                                    <h2 className="text-base font-semibold text-gray-900">
                                        {showBookingForm ? "Book an Appointment" : showCallbackForm ? "Request a Callback" : showLocationSelection ? "Select Location" : "Book an Appointment"}
                                    </h2>
                                    {(showBookingForm || showCallbackForm) && (
                                        <button
                                            onClick={() => {
                                                setShowBookingForm(false);
                                                setShowCallbackForm(false);
                                                setShowLocationSelection(true);
                                                setSelectedLocation(null);
                                            }}
                                            className="text-xs text-teal-600 hover:text-teal-700 mt-1 flex items-center gap-1"
                                        >
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                            </svg>
                                            Back
                                        </button>
                                    )}
                                </div>
                            )}
                            <button
                                onClick={toggleRequestModal}
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

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto">
                            {/* ✅ Show location selection screen */}
                            {showBooking && !showCallbackForm && !showBookingForm && showLocationSelection && (
                                <div className="p-6">
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Location</h3>
                                        <p className="text-sm text-gray-600">Select the clinic location nearest to you</p>
                                    </div>

                                    <div className="space-y-3">
                                        {locations.map((location, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleLocationSelect(location)}
                                                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${location.bookingUrl
                                                    ? 'border-gray-200 hover:border-teal-500 hover:bg-teal-50 cursor-pointer'
                                                    : 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
                                                    }`}
                                                disabled={!location.bookingUrl}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h4 className="font-semibold text-lg text-gray-900">{location.displayName}</h4>
                                                        <p className="text-sm text-gray-600 mt-1">{location.area}</p>
                                                    </div>
                                                    {location.bookingUrl ? (
                                                        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                        </svg>
                                                    ) : (
                                                        <span className="text-xs text-gray-500 font-medium">Coming Soon</span>
                                                    )}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* ✅ Show booking form in modal with Zoho Bookings embed URL */}
                            {showBookingForm && selectedLocation && (
                                <ZohoForm
                                    containerId="zf_div_booking_form"
                                    iframeSrc={getBookingEmbedUrl()}
                                />
                            )}

                            {/* Show callback form when button clicked OR when page is excluded */}
                            {(!showBooking || showCallbackForm) && !showBookingForm && (
                                <ZohoForm
                                    containerId="zf_div_callback_form"
                                    iframeSrc={finalIframeSrc || callbackIframeSrc}
                                />
                            )}
                        </div>

                        {/* ✅ Footer with callback link - Only show when booking interface is available */}
                        {showBooking && !showCallbackForm && (
                            <div className="flex-shrink-0 border-t border-gray-200 bg-gray-50 p-4 text-center">
                                <p className="text-sm text-gray-700">
                                    {showBookingForm ? "Can't find a suitable time? " : showLocationSelection ? "Can't find your location? " : "Prefer to be contacted? "}
                                    <button
                                        onClick={() => {
                                            setShowBookingForm(false);
                                            setShowLocationSelection(false);
                                            setSelectedLocation(null);
                                            setShowCallbackForm(true);
                                        }}
                                        className="text-[#EF6623] hover:text-[#d95a1e] font-semibold underline underline-offset-2 transition-colors inline-flex items-center gap-1"
                                    >
                                        Request a callback
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}




export default RequestAppointment
