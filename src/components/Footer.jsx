"use client"
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import RequestAppointmentGeneral from '@/app/clinicLocation/[city]/RequestAppointmentGeneral';



function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const noFooterPaths = ["/ads", '/tests'];
  const shouldHideFooter = noFooterPaths.some((path) => pathname.startsWith(path));
  const [queryString, setQueryString] = useState("");
  const [currentUrl, setcurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = typeof window !== "undefined" ? window.location.href : "";
      setQueryString(window.location.search);
      setcurrentUrl(url);
    }
  }, []);

  // console.log(`https://forms.zohopublic.in/nikhilmindf1/form/OTPVerifiticationtest/formperma/uqvupaDUHDlIs1hLYWsCUIgydIk4e9EzI3T6ubRgt7Y?zf_rszfm=1&url=${encodeURIComponent(currentUrl)}&location=hebbal&from=website`)
  const locations = [
    {
      name: "Aster CMI",
      // iframeSrc: "https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationHebbalBangalore/formperma/RqE9YNKl1bYNAryFgvxELvCqhXm8xkK0jJYOcjk0Htc",
      iframeSrc: `https://forms.zohopublic.in/nikhilmindf1/form/OTPVerifiticationtest/formperma/uqvupaDUHDlIs1hLYWsCUIgydIk4e9EzI3T6ubRgt7Y?zf_rszfm=1&url=${encodeURIComponent(currentUrl)}&location=hebbal&from=website`,
      area: "Bangalore North",
      bgColor: "bg-orange-500",
      location: "Banglore Aster CMI",
      redirect: "Bengaluru-Hebbal",
      whatsapp: +919663095632,
      call: +919663095632,
      officeOpen: 10,
      officeClose: 18,
    },
    {
      name: "Whitefield",
      // iframeSrc: "https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationWhitefieldBangalore/formperma/n7UqoYroFADQJ-HqsYjiuY41_3pJKGRkwARxLp1vVDQ",
      iframeSrc: `https://forms.zohopublic.in/nikhilmindf1/form/OTPVerifiticationtest/formperma/uqvupaDUHDlIs1hLYWsCUIgydIk4e9EzI3T6ubRgt7Y?zf_rszfm=1&url=${encodeURIComponent(currentUrl)}&location=whitefield&from=website`,
      area: "Bangalore East ",
      bgColor: "bg-[#F8A51C]",
      location: "Banglore Whitefield",
      redirect: "Bengaluru-Whitefield",
      whatsapp: +919663095632,
      call: +919663095632,
      officeOpen: 10,
      officeClose: 18,
    },
    {
      name: "Greater Kailash 1",
      // iframeSrc: "https://forms.zohopublic.in/nikhilmindf1/form/ScheduleaConsultationLPGK/formperma/ZSzbxKx_hXcJlDGEB0w3ryiWi8oK-NfameMJkXw7mi4",
      iframeSrc: `https://forms.zohopublic.in/nikhilmindf1/form/OTPVerifiticationtest/formperma/uqvupaDUHDlIs1hLYWsCUIgydIk4e9EzI3T6ubRgt7Y?zf_rszfm=1&url=${encodeURIComponent(currentUrl)}&location=greaterkailash&from=website`,
      area: "Delhi",
      bgColor: "bg-orange-500",
      redirect: "New-Delhi",
      location: "Delhi",
      whatsapp: +919663095632,
      call: +919663095632,
      officeOpen: 10,
      officeClose: 18,
    }
  ];
  const LocationCard = ({ location }) => (
    <div style={{ backgroundColor: location.bgColor }} className={`${location.bgColor} py-3 px-3 rounded-lg shadow-lg select-none min-w-[250px]`}>
      <div className='flex flex-col justify-center items-center text-white mb-2'>
        <h1 className='text-2xl font-semibold'>{location.area}</h1>
        <p className='font-semibold text-sm'>{location.name}</p>
      </div>
      <div className='flex justify-center gap-6 mb-2'>
        <div className='cursor-pointer'>
          {/* <RequestAppointmentGeneral iframeSrc={location.iframeSrc}> */}
          <RequestAppointmentGeneral >
            <img
              src="https://ik.imagekit.io/mwpcmpi5v/wassup.jpeg?updatedAt=1734072263762"
              className="w-[60px] h-[60px] object-contain"
              alt="WhatsApp Icon"
              loading="lazy"
            />
          </RequestAppointmentGeneral>
        </div>
      </div>
      <div className='flex justify-center '>
        <button
          onClick={() => router.push(`/clinicLocation/${location.redirect}`)}
          className='text-orange-500 border-2 border-orange-500 bg-white flex gap-3 items-center px-4 py-2 rounded-lg hover:opacity-90 shadow-lg'>
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" fill='orange' width="24" height="24" viewBox="0 0 24 24">
            <g data-name="Circle kanan">
              <path d="M12 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8z" />
              <path d="M11 16a1 1 0 0 1-.707-1.707L12.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 11 16z" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <footer className="py-10 footer-gradient">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img
          className="h-[129px] w-[185px]"
          alt="Footer Logo"
          src="/home/footerLogo.svg"
          loading="lazy"
        />
      </div>

      {/* Multi-column Links Section */}
      {!shouldHideFooter && (
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12">
            {/* Locations Column */}
            <div>
              <h3 className="text-primary-orange font-bold text-lg mb-4">Locations</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/clinicLocation/New-Delhi" className="text-gray-600 hover:text-primary-orange hover:underline transition-colors text-sm">
                    Greater Kailash, New Delhi
                  </Link>
                </li>
                <li>
                  <Link href="/clinicLocation/Bengaluru-Whitefield" className="text-gray-600 hover:text-primary-orange hover:underline transition-colors text-sm">
                    Whitefield, Bengaluru
                  </Link>
                </li>
                <li>
                  <Link href="/clinicLocation/Bengaluru-Hebbal" className="text-gray-600 hover:text-primary-orange hover:underline transition-colors text-sm">
                    Hebbal, Bengaluru
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-primary-orange font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/therapy" className="text-gray-600 hover:text-primary-orange hover:underline transition-colors text-sm">
                    Therapy
                  </Link>
                </li>
                <li>
                  <Link href="/services/psychiatry" className="text-gray-600 hover:text-primary-orange hover:underline transition-colors text-sm">
                    Psychiatry
                  </Link>
                </li>
                <li>
                  <Link href="/clinicalAssessment" className="text-gray-600 hover:text-primary-orange hover:underline transition-colors text-sm">
                    Clinical Assessments
                  </Link>
                </li>
                <li>
                  <Link href="/services/rtms" className="text-gray-600 hover:text-primary-orange hover:underline transition-colors text-sm">
                    rTMS
                  </Link>
                </li>
                <li>
                  <Link href="/services/neurofeedback" className="text-gray-600 hover:text-primary-orange hover:underline transition-colors text-sm">
                    Neurofeedback
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Experts Column */}
            <div>
              <h3 className="text-primary-orange font-bold text-lg mb-4">Our Experts</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/pages/ourExpert" className="text-gray-600 hover:text-primary-orange hover:underline transition-colors text-sm">
                    Meet Our Experts
                  </Link>
                </li>
              </ul>
            </div>

            {/* Careers Column */}
            <div>
              <h3 className="text-primary-orange font-bold text-lg mb-4">Careers</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/careers" className="text-gray-600 hover:text-primary-orange hover:underline transition-colors text-sm">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Self Assessment Column */}
            <div>
              <h3 className="text-primary-orange font-bold text-lg mb-4">Self Assessment</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/assesment" className="text-gray-600 hover:text-primary-orange hover:underline transition-colors text-sm">
                    Take Assessment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="hidden">
              <h3 className="text-primary-orange font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms-and-conditions" className="text-gray-600 hover:text-primary-orange hover:underline transition-colors text-sm">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/cookies-policy" className="text-gray-600 hover:text-primary-orange hover:underline transition-colors text-sm">
                    Cookies Policy
                  </Link>
                </li>
                <li>
                  <Link href="/payment-terms" className="text-gray-600 hover:text-primary-orange hover:underline transition-colors text-sm">
                    Payment Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Career Link */}
      {!shouldHideFooter && (
        <div className="flex justify-center mb-3 text-center px-4">
          <p className="text-primary-orange text-sm">
            For queries related to careers{' '}
            <Link href="/careers" className="underline hover:text-orange-600 transition-colors">
              Click here
            </Link>{' '}
            to Explore Career Opportunities
          </p>
        </div>
      )}

      {/* Copyright */}
      <div className="flex justify-center mb-3 text-center px-4">
        <p className="text-primary-orange text-sm">
          Copyright © 2026 MindfulTMS | All rights reserved. Developed and Maintained by{' '}
          {!shouldHideFooter ? (
            <Link className="underline hover:text-orange-600 transition-colors" href="https://insideoutconsult.com/">
              InsideOut
            </Link>
          ) : (
            'InsideOut'
          )}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
