"use client"
import React, { useState } from 'react';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';
// import TestRequestAppointmentGeneral from '../clinicLocation/[city]/RequestAppointmentGeneral';
import { therapyFaqs } from '@/data/therapyFaqs';

const AllTherapyWithSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expanded, setExpanded] = useState({});
    const [testsToShow, setTestsToShow] = useState(4);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const toggleExpand = (id) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [id]: !prevExpanded[id],
        }));
    };

    const filteredTests = allTest.filter((test) =>
        test.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const testsToDisplay = filteredTests;

    const quickLinks = [
        "Is therapy Confidential?",
        "How Long Does therapy Take?",
        "How Do I Get Started with therapy?"
    ];

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='mb-6 w-full'>
                <h1 className='text-3xl text-start md:text-5xl font-extrabold text-gray-700'>FAQs</h1>
            </div>
            <div className='md:w-full'>
                {/* Search Bar */}
                <div className="mb-6">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            className="w-full pr-10 pl-4 py-2 md:py-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <div className="absolute right-3">
                            <img src="/home/search.svg" alt="search" className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Search Results */}
                <div className="grid grid-cols-1 gap-5  md:gap-6 justify-center items-center mb-6  rounded-lg md:w-full">
                    {testsToDisplay.length > 0 ? (
                        testsToDisplay.map((test) => (
                            <div
                                key={test._id}
                                onClick={() => toggleExpand(test._id)}
                                className={`bg-white shadow-xl rounded-lg md:py-3 md:px-3 ${expanded[test._id] ? 'border-2 border-red-400' : ''} cursor-pointer`}
                            >
                                <div className='bg-white p-2 rounded-md flex justify-between items-center '>
                                <h3 className={`text-[14px] md:text-xl font-bold  md:font-semibold ${expanded[test._id] ? 'text-red-500' : 'text-gray-700'}`}>
                                        {test.name}
                                    </h3>
                                    {/* Arrow Icon */}
                                   <div>
                                 
                                    <svg className={`w-6 h-6 transform transition-transform ${
                                            expanded[test._id] ? 'rotate-180' : 'rotate-0'
                                        }`} fill="#ff0000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" space="preserve" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,0v512h512V0H0z M420.416,207.083L271.083,356.416c-4.16,4.16-9.621,6.251-15.083,6.251 c-5.462,0-10.923-2.091-15.083-6.251L91.584,207.083c-8.341-8.341-8.341-21.824,0-30.165c8.341-8.341,21.824-8.341,30.165,0 L256,311.168l134.251-134.251c8.341-8.341,21.824-8.341,30.165,0C428.757,185.259,428.757,198.741,420.416,207.083z"></path> </g> </g> </g></svg>
                                  
                                   </div>
                                </div>
                                {expanded[test._id] && (
                                   <>
                                    <div className='p-2'>
                                        <div dangerouslySetInnerHTML={{ __html: test.detail }} />
                                    </div>
                                    <div className='flex justify-center pb-2'>
                                                <div onClick={(e)=>e.stopPropagation()}>
                                                {/* <TestRequestAppointmentGeneral>
                                                    <div className="flex justify-center items-center gap-4 text-sm text-orange-600 border bg-orange-100 font-semibold shadow-md hover:shadow-sm px-3 py-1 rounded-lg hover:bg-orange-100">
                                                      Book a Therapy Session
                                                    </div>
                                                </TestRequestAppointmentGeneral> */}
                                                  <RequestAppointment
                                                name="Book a Therapy Session"
                                                customStyle="flex justify-center items-center gap-4 text-sm text-orange-600 border bg-orange-100 font-semibold shadow-md hover:shadow-sm px-3 py-1 rounded-lg hover:bg-orange-100"
                                            />
                                                </div>
                                               
                                            </div>
                                   </>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-gray-800">No Therapy found</h3>
                            <p className="text-gray-600 text-center mb-4">{`We couldn't find any Therapy matching your search.`}</p>
                            <RequestAppointment
                                name={"Contact Us"}
                                customStyle={" bg-[#EF6623] hover:bg-orange-500 text-lg font-semibold active:bg-orange-700 rounded-lg text-white py-2 px-4"}
                            />
                        </div>
                    )}
                </div>

                {/* <div className="flex justify-center">
                    <RequestAppointment
                        name={"Contact Us"}
                        customStyle={" bg-[#EF6623] hover:bg-orange-500 text-xl active:bg-orange-700 rounded-lg text-white py-1 px-2"}
                    />
                </div> */}
            </div>
        </div>
    );
};

export default AllTherapyWithSearch;

const allTest = therapyFaqs;
