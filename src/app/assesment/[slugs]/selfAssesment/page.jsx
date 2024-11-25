"use client";

import { Container } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const tests = [
    {
        title: "PHQ-9 Depression Test",
        link: "/assesment/phq9/test",
        id: "phq9",
        condition:"Depression",
        paragraph: `The PHQ-9 consists of 9 questions that ask about feelings of sadness, hopelessness, and loss of interest in activities, among other symptoms.

By answering these questions, you can gain insights into your depressive symptoms and determine if you might benefit from further support or professional help.`,
    },
    {
        title: "PSS-10 Stress Assessment",
        link: "/assesment/pss10/test",
        id: "pss10",
        condition:"Stress",
        paragraph: `This test measures your perception of stress and how you handle life's challenges.

The PSS-10 consists of 10 questions that ask about your feelings and thoughts during the last month, including how often you felt nervous, stressed, or unable to control important things in your life.`,
    },
    {
        title: "GAD-7 Anxiety Test",
        link: "/assesment/gad7/test",
        id: "gad7",
        condition:"Anxiety",
        paragraph: `This questionnaire helps you evaluate the severity of your anxiety symptoms over the past two weeks.

The GAD-7 consists of 7 questions that ask about feelings of nervousness, worry, and restlessness, among other symptoms. By answering these questions honestly, you can get a clearer picture of your anxiety levels and determine if you might benefit from further support or professional help.`,
    },
    {
        title: "K10 (Kessler Psychological Distress Scale)",
        link: "/assesment/k10/test",
        id: "k10",
        paragraph: `The K10 is a simple and effective tool designed to measure your level of psychological distress over the past month. This test can help you gain insights into your mental health, especially if you're feeling anxious, depressed, or generally overwhelmed.

The K10 consists of 10 questions that ask about feelings of nervousness, hopelessness, restlessness, and fatigue, among other symptoms. By answering these questions, you can get a better understanding of your current emotional state and whether you might benefit from further support or professional help.`,
    },
];

const SelfAssesment = () => {
    const { slugs } = useParams();
    const router = useRouter();
    const test = tests.find((t) => t.id === slugs);
    const [isChecked, setChecked] = useState(false);

    return (
        <div>
            {/* <div className="flex p-6 items-center">
        <div className="mr" onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Self-Assessment</h1>
        </div>
      </div> */}
            <div className=" flex items-center justify-center bg-gray-100 px-2 py-2">
                <div className="bg-white p-2  rounded-lg w-full">
                    <h1 className="text-2xl font-bold mb-6">Test Instructions:</h1>

                    <h2 className="text-xl font-semibold mb-4 text-orange-500 underline">{test?.condition} Screener:</h2>

                    <p className="mb-4 text-gray-700">
                        This quiz is designed to help you assess your current levels of [condition]
                    </p>

                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li className="mb-2">
                            <span className="font-semibold">Answer Honestly:</span> Please respond to each question based on how you have been feeling over the past two weeks.
                        </li>
                        <li>
                            <span className="font-semibold">Multiple-Choice Format:</span> Select the option that best represents your experience for each statement.
                        </li>
                    </ul>

                    <p className="mb-4 text-gray-700">
                        After completing the quiz, you will receive a summary of your scores along with recommendations.
                    </p>

                    <p className="font-semibold text-lg text-black mt-6">
                        Please read the disclaimer and agree to get started with the assessment.
                    </p>
                </div>
            </div>
            <div className=" flex items-center justify-center bg-gray-100 p-2">
                <div className="bg-white p-2 md:p-8  rounded-lg max-w-xl w-full">
                    <h1 className="text-2xl font-bold mb-4 text-orange-500 md:mb-6">Disclaimer</h1>

                    <h2 className="text-lg font-semibold mb-3 md:mb-4">Important Notice</h2>

                    <p className="mb-4 text-gray-700 text-sm md:text-base">
                        The symptom checker, depression, anxiety, and stress screening self-assessments available on this website are designed solely for informational and educational purposes. While these quizzes are based on widely recognized assessment tools such as the <strong>PHQ-9</strong> (<em>Patient Health Questionnaire-9</em>), <strong>GAD-7</strong> (<em>Generalized Anxiety Disorder-7</em>), and <strong>PSS-10</strong> (<em>Perceived Stress Scale-10</em>), they <strong>do not constitute a professional diagnosis</strong> of any mental health condition.
                    </p>

                    {/* <p className="font-semibold mb-2 text-sm md:text-base">Read Full</p> */}

                    <div className="flex items-center mb-4 md:mb-6">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={()=>setChecked(!isChecked)}
                            className="w-4 h-4 md:w-5 md:h-5 mr-2"
                        />
                        <label className="text-gray-800 text-sm md:text-base">I agree</label>
                    </div>

                    <button
                          onClick={() => router.push(test.link)}
                        className={`w-full md:w-auto px-4 py-2 font-semibold text-white rounded ${isChecked ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-300 cursor-not-allowed'}`}
                      disabled={!isChecked}
                    >
                        Take Test
                    </button>
                </div>
            </div>

         
        </div>
    );
};

export default SelfAssesment;
