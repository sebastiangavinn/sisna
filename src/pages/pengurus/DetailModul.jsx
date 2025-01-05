import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";

import { useNavigate } from "react-router";

export default function DetailModul() {
  const navigate = useNavigate();
  const [questions] = useState([
    {
      id: 1,
      text: "Apa itu kalimat fi'il?",
      options: [
        "kalimat yang bersamaan dengan 3 zaman, yaitu madhi, hal, dan istiqbal",
        "kalimat yang tidak bersamaan dengan 3 zaman, yaitu madhi, hal, istiqbal",
        "kalimat yang memiliki arti kata sambung",
        "kalimat yang berupa perintah",
      ],
      correctAnswer: 0,
    },
    {
      id: 2,
      text: "Apa itu kalimat isim?",
      options: [
        "kalimat yang bersamaan dengan 3 zaman, yaitu madhi, hal, dan istiqbal",
        "kalimat yang tidak bersamaan dengan 3 zaman, yaitu madhi, hal, istiqbal",
        "kalimat yang memiliki arti kata sambung",
        "kalimat yang berupa perintah",
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      text: "Apa itu kalimat isim?",
      options: [
        "kalimat yang bersamaan dengan 3 zaman, yaitu madhi, hal, dan istiqbal",
        "kalimat yang tidak bersamaan dengan 3 zaman, yaitu madhi, hal, istiqbal",
        "kalimat yang memiliki arti kata sambung",
        "kalimat yang berupa perintah",
      ],
      correctAnswer: 2,
    },
    {
      id: 4,
      text: "Apa itu kalimat isim?",
      options: [
        "kalimat yang bersamaan dengan 3 zaman, yaitu madhi, hal, dan istiqbal",
        "kalimat yang tidak bersamaan dengan 3 zaman, yaitu madhi, hal, istiqbal",
        "kalimat yang memiliki arti kata sambung",
        "kalimat yang berupa perintah",
      ],
      correctAnswer: 3,
    },
  ]);

  const [selectedAnswers, setSelectedAnswers] = useState({});

  return (
    <div className="py-5">
      <div className="border border-[#C3C3C3] rounded-3xl bg-white">
        <header className="flex items-center justify-between p-4 border-b">
          <h3
            onClick={() => navigate(-1)}
            className="text-[#347928] flex items-center gap-1 font-extrabold text-base mb-3 cursor-pointer"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 font-extrabold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Mata Pelajaran Nahwu
          </h3>

          <button className="flex items-center px-3 py-1.5 text-sm text-white bg-[#347928] font-bold rounded-lg hover:bg-green-700">
            <FiEdit3 className="w-4 h-4 mr-1" />
            Ubah Materi
          </button>
        </header>

        <main className="py-4 lg:px-12 px-4">
          <h1 className="text-xl text-center font-medium mb-4">
            Memahami Kalimah Fi'il, Isim dan Huruf
          </h1>

          <div className="mb-6">
            <img
              src="/empuan (3) 1.png"
              alt="image"
              className="mx-auto rounded-lg grayscale"
            />
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-blue-50 p-3 border-b">
              <h2 className="font-medium">Latihan Soal</h2>
            </div>

            <div className="divide-y">
              {questions.map((question, questionIndex) => (
                <div key={question.id} className="p-4">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <p className="font-medium">
                      {question.id}. {question.text}
                    </p>
                    {selectedAnswers[question.id] !== undefined && (
                      <span
                        className={`px-3 py-1 text-sm text-white rounded-lg
                        ${
                          selectedAnswers[question.id] ===
                          question.correctAnswer
                            ? "bg-green-600"
                            : "bg-red-600"
                        }`}
                      >
                        {selectedAnswers[question.id] === question.correctAnswer
                          ? "Benar"
                          : "Salah"}
                      </span>
                    )}
                  </div>
                  <div className="space-y-3">
                    {question.options.map((option, optionIndex) => (
                      <label
                        key={optionIndex}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer
                        ${
                          selectedAnswers[question.id] === optionIndex
                            ? selectedAnswers[question.id] ===
                              question.correctAnswer
                              ? "bg-green-50 border-green-200 border"
                              : "bg-red-50 border-red-200 border"
                            : "hover:bg-gray-50 border border-gray-200"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          checked={selectedAnswers[question.id] === optionIndex}
                          onChange={() =>
                            setSelectedAnswers((prev) => ({
                              ...prev,
                              [question.id]: optionIndex,
                            }))
                          }
                          className={`w-4 h-4 border-gray-300 
                          ${
                            selectedAnswers[question.id] ===
                            question.correctAnswer
                              ? "text-green-600 focus:ring-green-500"
                              : "text-red-600 focus:ring-red-500"
                          }`}
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
