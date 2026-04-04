'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import ParkinsonsInlineZoho from './ParkinsonsInlineZoho';
import '../parkinsons-html-landing.css';

/** min-h 48px = WCAG touch target; active state for touch feedback */
const tealBtn =
  'flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border-0 bg-[#1a7a6d] px-5 py-3.5 text-base font-semibold text-white shadow-[0_4px_16px_rgba(26,122,109,0.25)] transition-all duration-200 hover:-translate-y-px hover:bg-[#0f5c52] hover:shadow-[0_6px_24px_rgba(26,122,109,0.35)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#1a7a6d] focus:ring-offset-2 sm:px-6 sm:py-4';

const PhoneGlyph = () => (
  <svg className="h-[18px] w-[18px] shrink-0" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const BENEFIT_IMAGES = {
  Walking: {
    src: '/ads/rtms-parkinsons/walking.png',
    alt: 'Illustration relating to walking and leg movement for Parkinson\'s',
  },
  Tremor: {
    src: '/ads/rtms-parkinsons/tremor.png',
    alt: 'Illustration of hands with tremor lines',
  },
  'Low Mood': {
    src: '/ads/rtms-parkinsons/low-mood.png',
    alt: 'Illustration representing low mood and Parkinson-related burden',
  },
  'Daily Tasks': {
    src: '/ads/rtms-parkinsons/daily-tasks.png',
    alt: 'Illustration of daily tasks while experiencing tremors',
  },
};

export default function ParkinsonsHtmlLanding({ data }) {
  const formSectionRef = useRef(null);
  const floatingRef = useRef(null);

  useEffect(() => {
    const els = document.querySelectorAll('.phl-root .phl-fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('phl-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));

    const formEl = formSectionRef.current;
    const floating = floatingRef.current;
    if (!formEl || !floating) return;

    const formObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            floating.classList.add('phl-hidden');
          } else {
            floating.classList.remove('phl-hidden');
          }
        });
      },
      { threshold: 0.2 }
    );
    formObserver.observe(formEl);
    return () => {
      observer.disconnect();
      formObserver.disconnect();
    };
  }, []);

  const phoneDisplay = data?.phone ? `+91 ${data.phone}` : '';

  return (
    <div className="phl-root">
      <div className="phl-awareness-bar">
        <span>Parkinson&apos;s Awareness Week · April 2026</span>
      </div>

      <section className="phl-hero">
        <div className="phl-container">
          <h1 className="phl-fade-up">
            Living with Parkinson&apos;s is not easy.
            <br />
            But there are options you may not know about.
          </h1>
          <p className="phl-fade-up">
            rTMS is a safe, painless brain stimulation treatment that may help with movement, stiffness, and mood. No surgery. No extra medicines.
          </p>
          <div className="phl-btn-primary-wrap phl-fade-up">
            <a href="#form" className={`${tealBtn} text-[15px] no-underline md:text-base`}>
              <PhoneGlyph />
              Talk to Us (Free Call)
            </a>
          </div>
        </div>
      </section>

      <section className="phl-empathy">
        <div className="phl-container">
          <div className="phl-empathy-inner phl-fade-up">
            <div className="phl-empathy-icon">
              <svg width="20" height="20" fill="none" stroke="#1a7a6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </div>
            <p>
              If someone in your family has Parkinson&apos;s, you already know how hard every day can be. We want to help you understand one more option that may help.
            </p>
          </div>
        </div>
      </section>

      <section className="phl-what-section">
        <div className="phl-container">
          <div className="phl-fade-up">
            <div className="phl-section-label">Understanding the treatment</div>
            <h2 className="phl-section-heading">What is rTMS?</h2>
            <p>
              rTMS uses gentle magnetic pulses on the brain. It is not surgery. There are no injections. There is no pain. Each sitting takes about 20 minutes. You can go home right after.
            </p>
          </div>
          <div className="phl-what-visual phl-fade-up">
            <img
              src="/ads/rtms-parkinsons/what-is-rtms.png"
              alt="Clinician performing rTMS with a patient using MagVenture equipment"
              className="phl-what-rtms-photo"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="phl-benefits">
        <div className="phl-container">
          <div className="phl-fade-up">
            <div className="phl-section-label">How it may help</div>
            <h2 className="phl-section-heading">What can rTMS do for Parkinson&apos;s?</h2>
          </div>
          <div className="phl-benefits-grid">
            {[
              {
                title: 'Walking',
                body: 'May help with stiffness and difficulty walking',
              },
              {
                title: 'Tremor',
                body: 'May help with better control of movement',
              },
              {
                title: 'Low Mood',
                body: 'May help with sadness and poor sleep',
              },
              {
                title: 'Daily Tasks',
                body: 'May support doing more things on your own',
              },
            ].map((b) => {
              const img = BENEFIT_IMAGES[b.title];
              return (
                <div key={b.title} className="phl-benefit-card phl-fade-up">
                  <div className="phl-benefit-icon phl-benefit-icon--img">
                    <img src={img.src} alt={img.alt} className="phl-benefit-img" loading="lazy" decoding="async" />
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              );
            })}
          </div>
          <p className="phl-benefits-note phl-fade-up">Results are different for each person. Based on published medical research (45+ clinical studies).</p>
        </div>
      </section>

      <section className="phl-trust">
        <div className="phl-container">
          <div className="phl-trust-numbers phl-fade-up">
            <div className="phl-trust-item">
              <div className="phl-number">9</div>
              <div className="phl-label">Years</div>
            </div>
            <div className="phl-trust-item">
              <div className="phl-number">10+</div>
              <div className="phl-label">Clinics in India & USA</div>
            </div>
            <div className="phl-trust-item">
              <div className="phl-number">20,000</div>
              <div className="phl-label">Treatments given</div>
            </div>
          </div>
          <p className="phl-trust-text phl-fade-up">
            MindfulTMS is India&apos;s first clinic chain that focuses mainly on rTMS. We do one thing, and we try to do it well.
          </p>
        </div>
      </section>

      <section className="phl-steps">
        <div className="phl-container">
          <div className="phl-fade-up">
            <div className="phl-section-label">What happens next</div>
            <h2 className="phl-section-heading">Three simple steps</h2>
          </div>
          <div className="phl-steps-list">
            <div className="phl-step phl-fade-up">
              <div className="phl-step-num">1</div>
              <div className="phl-step-content">
                <h3>Fill this short form</h3>
                <p>Takes less than 30 seconds.</p>
              </div>
            </div>
            <div className="phl-step phl-fade-up">
              <div className="phl-step-num">2</div>
              <div className="phl-step-content">
                <h3>Our team calls you</h3>
                <p>They will listen, answer your questions. No pressure.</p>
              </div>
            </div>
            <div className="phl-step phl-fade-up">
              <div className="phl-step-num">3</div>
              <div className="phl-step-content">
                <h3>Take the next step if it feels right</h3>
                <p>We help you meet a doctor near you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="phl-form-section scroll-mt-4" id="form" ref={formSectionRef}>
        <div className="phl-container">
          <div className="phl-form-box phl-fade-up">
            <h2>We will call you.</h2>
            <p className="phl-form-subtitle">No cost. No pressure.</p>
            <ParkinsonsInlineZoho iframeSrc={data?.zohoForm} />
            <div className="phl-form-trust">
              <svg width="14" height="14" fill="none" stroke="#7a8e87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              Your details stay private. We call within 24 hours.
            </div>
            {phoneDisplay ? (
              <p className="mt-4 text-center text-sm text-[#4a5c56]">
                Or call us:{' '}
                <Link href={`tel:+91${data.phone}`} className="font-semibold text-[#1a7a6d] hover:underline">
                  {phoneDisplay}
                </Link>
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="phl-locations">
        <div className="phl-container">
          <div className="phl-fade-up">
            <div className="phl-section-label">Where to find us</div>
            <h2 className="phl-section-heading">Our Clinics</h2>
          </div>
          <div className="phl-location-cards">
            <div className="phl-location-card phl-fade-up">
              <div className="phl-location-pin">
                <svg width="18" height="18" fill="none" stroke="#1a7a6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3>New Delhi</h3>
                <p>Greater Kailash 1</p>
              </div>
            </div>
            <div className="phl-location-card phl-fade-up">
              <div className="phl-location-pin">
                <svg width="18" height="18" fill="none" stroke="#1a7a6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3>Bangalore</h3>
                <p>Whitefield & Aster CMI, Hebbal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="phl-floating-cta" id="floatingCta" ref={floatingRef}>
        <div className="phl-floating-inner">
          <a href="#form" className={`${tealBtn} py-3.5 text-[15px] no-underline`}>
            Request Free Call
          </a>
        </div>
      </div>
    </div>
  );
}
