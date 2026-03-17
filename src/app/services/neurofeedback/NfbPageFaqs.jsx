"use client"
import React, { useState } from 'react';
import RequestAppointment from '@/app/clinicLocation/[city]/RequestAppointment';
import { Container } from '@mui/material';
import { nfbFaqs } from '@/data/nfbFaqs';

const NfbPageFaqs = () => {
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

    const allFaqs = nfbFaqs;

    const filteredFaqs = allFaqs.filter((faq) =>
        faq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.detail.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <Container maxWidth="lg">
                    <div className='mb-4 md:mb-6'>
                        <h2 className='text-xl md:text-3xl font-bold text-gray-700'>
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className='md:w-full'>
                        {/* Search Bar */}
                        <div className="mb-4 md:mb-6">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    className="w-full pr-10 pl-3 md:pl-4 py-2.5 md:py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF6623] text-sm md:text-base"
                                    placeholder="Search FAQs..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    aria-label="Search frequently asked questions"
                                />
                                <div className="absolute right-3">
                                    <svg 
                                        className="w-4 h-4 md:w-5 md:h-5 text-gray-400" 
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
                        <div className="grid grid-cols-1 gap-3 md:gap-4 justify-center items-center mb-6 rounded-lg md:w-full">
                            {filteredFaqs.length > 0 ? (
                                filteredFaqs.map((faq) => (
                                    <div
                                        key={faq._id}
                                        className={`bg-white shadow-lg rounded-lg py-2 px-3 md:py-3 md:px-4 ${
                                            expanded[faq._id] ? 'border-2 border-[#EF6623]' : 'border border-gray-200'
                                        } transition-all hover:shadow-xl`}
                                        itemScope
                                        itemProp="mainEntity"
                                        itemType="https://schema.org/Question"
                                    >
                                        <button
                                            onClick={() => toggleExpand(faq._id)}
                                            className='bg-white rounded-md flex justify-between items-center w-full text-left'
                                            aria-expanded={expanded[faq._id]}
                                            aria-controls={`faq-answer-${faq._id}`}
                                            id={`faq-question-${faq._id}`}
                                        >
                                            <h3 
                                                className={`text-[14px] md:text-xl font-bold md:font-semibold ${
                                                    expanded[faq._id] ? 'text-red-500' : 'text-gray-700'
                                                }`}
                                                itemProp="name"
                                            >
                                                {faq.name}
                                            </h3>

                                            <div>
                                                <svg
                                                    className={`w-5 h-5 md:w-6 md:h-6 transform transition-transform ${
                                                        expanded[faq._id] ? 'rotate-180' : 'rotate-0'
                                                    }`}
                                                    fill="#EF6623"
                                                    viewBox="0 0 512 512"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M0,0v512h512V0H0z M420.416,207.083L271.083,356.416c-4.16,4.16-9.621,6.251-15.083,6.251 c-5.462,0-10.923-2.091-15.083-6.251L91.584,207.083c-8.341-8.341-8.341-21.824,0-30.165c8.341-8.341,21.824-8.341,30.165,0 L256,311.168l134.251-134.251c8.341-8.341,21.824-8.341,30.165,0C428.757,185.259,428.757,198.741,420.416,207.083z"></path>
                                                </svg>
                                            </div>
                                        </button>
                                        
                                        <div
                                            id={`faq-answer-${faq._id}`}
                                            role="region"
                                            aria-labelledby={`faq-question-${faq._id}`}
                                            className={`pt-2 md:pt-3 ${!expanded[faq._id] ? 'hidden' : ''}`}
                                            itemScope
                                            itemProp="acceptedAnswer"
                                            itemType="https://schema.org/Answer"
                                        >
                                            <div className="text-gray-700 text-sm md:text-lg">
                                                <p className="mb-3" itemProp="text">
                                                    {faq.detail}
                                                </p>
                                            </div>
                                            <div className='flex justify-center mt-3'>
                                                <div onClick={(e) => e.stopPropagation()}>
                                                    <RequestAppointment
                                                        name="Book NFB Consultation"
                                                        customStyle="flex justify-center items-center gap-2 text-xs md:text-sm text-orange-600 border bg-orange-100 shadow-md hover:shadow-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-semibold transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 md:p-6">
                                    <h3 className="text-base md:text-lg font-semibold text-gray-800">No Question found</h3>
                                    <p className="text-gray-600 text-center mb-4 text-sm md:text-base">
                                      {`  We couldn't find any Question matching your search.`}
                                    </p>
                                    <RequestAppointment
                                        name="Contact Us"
                                        customStyle="bg-[#EF6623] hover:bg-orange-500 text-sm md:text-base font-semibold active:bg-orange-700 rounded-lg text-white py-2 px-4"
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

export default NfbPageFaqs;
