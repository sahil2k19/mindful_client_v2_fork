import React from 'react';
import AllTestWithSearch from './AllTestWithSearch';
import RequestAppointment from '../clinicLocation/[city]/RequestAppointment';
import { Container } from '@mui/material';
const ClinicalAssessment = () => {

    const MobileView = () => {
        return (
            <>
                <div className="mx-auto py-8 ">
                    {/* Main Heading */}
                    <div className="text-start  px-4 mb-8 ">
                        <h1 className="text-2xl font-bold text-primary-orange mb-2">Comprehensive Clinical Assessments</h1>
                        <p className="text-gray-600 text-start">Whether for a diagnosis or progress tracking, our therapists and RCI-certified Clinical Psychologists will provide you with evidence-based, effective care that is customized to meet your needs.</p>
                    </div>

                    <div className="flex justify-center md:justify-start mb-5">
                        <RequestAppointment name="Get a Professional Assessment" customStyle="px-6 py-3 rounded-full text-lg transition bg-primary-orange text-white font-semibold hover:bg-orange-500 active:bg-orange-600" />
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center mb-5">
                        <img className="w-full md:w-[400px] lg:w-[450px] transition-transform duration-300 transform " alt="Therapy Banner" src="/assessment/clinicalAssessment.jpg" />
                    </div>

                    <div className=''>

                        {/* Featured Assessments Heading */}

                        {/* Grid of Assessments */}
                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-2 mb-8 px-10 bg-primary-div p-6">
                    <div className="mb-4 text-center">
                        <h3 className="text-xl text-center font-semibold text-gray-700 mb-2">Featured Assessments</h3>
                        
                    </div>

                    {tests.map((test, index) => (
                        <div
                            key={index}
                            className="bg-orange-100  p-4 rounded-lg flex  items-center justify-start  w-full"
                        >
                            <h1 className='text-xl font-semibold whitespace-nowrap'>{test.shortForm} -</h1>
                            <div className='p-2'>
                                <h3 className="text-sm  text-gray-800 capitalize">{test.name}</h3>
                            </div>
                        </div>
                    ))}
                </div> */}
                    </div>

                    <div className='text-center mb-6'>
                        <p className="text-gray-600">We offer over 90 assessments </p>
                    </div>
                    <AllTestWithSearch />

                    <div className='flex justify-center '>
                        <RequestAppointment name={"Book Consultation"} customStyle={"bg-[#EF6623] uppercase hover:bg-orange-500 active:bg-orange-700 rounded-lg px-10 py-3 text-white text-sm font-semibold"} />
                    </div>

                </div>
            </>
        )
    }

    const DesktopView = () => {
        return (
            <>
               <Container maxWidth="lg">
               <div className=" py-8 ">
                    {/* Main Heading */}
                    <div className="text-center  px-4 mb-8 ">
                        <h1 className="text-4xl font-bold text-primary-orange mb-2">Comprehensive Clinical Assessments</h1>
                        <p className="text-xl text-start text-gray-600">Whether for a diagnosis or progress tracking, our therapists and RCI-certified Clinical Psychologists will provide you with evidence-based, effective care that is customized to meet your needs.</p>
                    </div>

                    <div className="flex justify-center  mb-6">
                        <RequestAppointment name="Get a Professional Assessment" customStyle="px-6 py-3 rounded-full text-lg transition bg-primary-orange text-white font-semibold hover:bg-orange-500 active:bg-orange-600" />
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center mb-5">
                        <img className=" h-[400px]  object-cover w-full rounded-lg" alt="Therapy Banner" src="/assessment/clinicalAssessment.jpg" />
                    </div>


                    <div className='text-center mb-6 mt-6 font-semibold'>
                        <p className="text-gray-600 text-xl">We offer over 90 assessments </p>
                    </div>
                    <div className=''>
                    <AllTestWithSearch />
                    </div>

                    <div className='flex justify-center '>
                        <RequestAppointment name={"Book Consultation"} customStyle={"bg-[#EF6623] uppercase hover:bg-orange-500 active:bg-orange-700 rounded-lg px-10 py-3 text-white text-sm font-semibold"} />
                    </div>

                </div>
               </Container>
            </>
        )
    }
    return (
        <>
            <div className='md:hidden '>
                <MobileView />
            </div>
            <div className='md:block hidden '>
                <DesktopView />
            </div>
        </>
    );
};






export default ClinicalAssessment;
