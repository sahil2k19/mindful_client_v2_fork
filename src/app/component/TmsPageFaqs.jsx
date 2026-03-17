"use client"
import React, { useState } from 'react';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';
import { Container } from '@mui/material';
import TestRequestAppointmentGeneral from '../clinicLocation/[city]/RequestAppointmentGeneral';
import { rtmsFaqs } from '@/data/rtmsFaqs';

const TmsPageFaqs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expanded, setExpanded] = useState({});

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const toggleExpand = (id) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [id]: !prevExpanded[id],
        }));
    };

    const allTest = rtmsFaqs;

    // Helper function to strip HTML tags for schema
    const stripHtml = (html) => {
        return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    };

    const filteredTests = allTest.filter((test) =>
        test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stripHtml(test.detail).toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <Container maxWidth="lg">
                    <div className='mb-6'>
                        <h1 className='text-3xl md:text-5xl font-extrabold text-gray-700'>FAQs</h1>
                    </div>
                    <div className='md:w-full'>
                        {/* Search Bar */}
                        <div className="mb-6">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    className="w-full pr-10 pl-4 py-2 md:py-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Search FAQs..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    aria-label="Search frequently asked questions"
                                />
                                <div className="absolute right-3">
                                    <svg 
                                        className="w-5 h-5 text-gray-400" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Results */}
                        <div className="grid grid-cols-1 gap-5 md:gap-6 justify-center items-center mb-6 rounded-lg md:w-full">
                            {filteredTests.length > 0 ? (
                                filteredTests.map((test) => (
                                    <div
                                        key={test._id}
                                        className={`bg-white shadow-xl rounded-lg md:py-3 md:px-3 ${
                                            expanded[test._id] ? 'border-2 border-red-400' : 'border border-gray-200'
                                        } transition-all hover:shadow-2xl`}
                                        itemScope
                                        itemProp="mainEntity"
                                        itemType="https://schema.org/Question"
                                    >
                                        <button
                                            onClick={() => toggleExpand(test._id)}
                                            className='bg-white p-2 rounded-md flex justify-between items-center w-full text-left'
                                            aria-expanded={expanded[test._id]}
                                            aria-controls={`faq-answer-${test._id}`}
                                            id={`faq-question-${test._id}`}
                                        >
                                            <h3 
                                                className={`text-[14px] md:text-xl font-bold md:font-semibold ${
                                                    expanded[test._id] ? 'text-red-500' : 'text-gray-700'
                                                }`}
                                                itemProp="name"
                                            >
                                                {test.name}
                                            </h3>

                                            <div>
                                                <svg 
                                                    className={`w-6 h-6 transform transition-transform ${
                                                        expanded[test._id] ? 'rotate-180' : 'rotate-0'
                                                    }`} 
                                                    fill="#ff0000" 
                                                    viewBox="0 0 512 512"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M0,0v512h512V0H0z M420.416,207.083L271.083,356.416c-4.16,4.16-9.621,6.251-15.083,6.251 c-5.462,0-10.923-2.091-15.083-6.251L91.584,207.083c-8.341-8.341-8.341-21.824,0-30.165c8.341-8.341,21.824-8.341,30.165,0 L256,311.168l134.251-134.251c8.341-8.341,21.824-8.341,30.165,0C428.757,185.259,428.757,198.741,420.416,207.083z"></path>
                                                </svg>
                                            </div>
                                        </button>
                                        
                                        <div
                                            id={`faq-answer-${test._id}`}
                                            role="region"
                                            aria-labelledby={`faq-question-${test._id}`}
                                            className={`p-2 ${!expanded[test._id] ? 'hidden' : ''}`}
                                            itemScope
                                            itemProp="acceptedAnswer"
                                            itemType="https://schema.org/Answer"
                                        >
                                            <div itemProp="text" dangerouslySetInnerHTML={{ __html: test.detail }} />
                                            <div className='flex justify-center mt-4'>
                                                <div onClick={(e) => e.stopPropagation()}>
                                                    <TestRequestAppointmentGeneral>
                                                        <div className="flex justify-center items-center gap-2 text-xs md:text-sm text-orange-600 border bg-orange-100 shadow-md hover:shadow-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-semibold transition-all">
                                                            Book an rTMS Consultation
                                                        </div>
                                                    </TestRequestAppointmentGeneral>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 md:p-6">
                                    <h3 className="text-base md:text-lg font-semibold text-gray-800">No Question found</h3>
                                    <p className="text-gray-600 text-center mb-4 text-sm md:text-base">
                                        {`We couldn't find any Question matching your search.`}
                                    </p>
                                    <RequestAppointment
                                        name="Contact Us"
                                        customStyle="bg-[#EF6623] hover:bg-orange-500 text-sm md:text-lg font-semibold active:bg-orange-700 rounded-lg text-white py-2 px-4"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default TmsPageFaqs;
