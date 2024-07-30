"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [randomQuestions, setRandomQuestions] = useState<quiz_questions[]>([]);
  // types
  interface quiz_questions {
    question: string;
    options: string[];
  }

  // questions
  const questions: quiz_questions[] = [
    {
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Processor Utility",
      ],
    },
    {
      question: "Which of the following is an input device?",
      options: ["Monitor", "Keyboard", "Printer"],
    },
    {
      question: "What is the main purpose of an operating system?",
      options: [
        "Play games",
        "Manage hardware and software resources",
        "Create documents",
      ],
    },
    {
      question: "Which of these is not a web browser?",
      options: ["Chrome", "Firefox", "Photoshop"],
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyper Transfer Markup Logic",
      ],
    },
    {
      question: "Which unit of computer memory is the largest?",
      options: ["Gigabyte (GB)", "Megabyte (MB)", "Terabyte (TB)"],
    },
    {
      question: "What is the function of RAM in a computer?",
      options: ["Permanent storage", "Temporary storage", "Display graphics"],
    },
    {
      question: "Which of these is a type of malware?",
      options: ["Firewall", "Virus", "Bandwidth"],
    },
    {
      question: "What does PDF stand for?",
      options: [
        "Portable Document Format",
        "Personal Data File",
        "Program Data Form",
      ],
    },
    {
      question: "Which of these is cloud storage service?",
      options: ["Dropbox", "Microsoft Word", "Photoshop"],
    },
    {
      question: "What is the purpose of a firewall?",
      options: [
        "Speed up internet",
        "Protect against unauthorized access",
        "Increase storage capacity",
      ],
    },
    {
      question: "Which of these is not an example of social media?",
      options: ["Facebook", "Twitter", "Microsoft Excel"],
    },
    {
      question: "What does Wi-Fi stand for?",
      options: ["Wireless Fidelity", "Wide Frequency", "Wired Filter"],
    },
    {
      question: "Which of these is a programming language?",
      options: ["Python", "Cobra", "Cheetah"],
    },
    {
      question: "What is the primary function of a GPU?",
      options: ["Handle network traffic", "Process graphics", "Store data"],
    },
  ];

  useEffect(() => {
    const getRandomQuestions = () => {
      let selectedQuestions: quiz_questions[] = [];
      let tempQuestions: quiz_questions[] = [...questions];

      while (selectedQuestions.length < 10 && tempQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * tempQuestions.length);
        selectedQuestions.push(tempQuestions[randomIndex]);
        tempQuestions.splice(randomIndex, 1);
      }

      setRandomQuestions(selectedQuestions);
    };

    getRandomQuestions();
  }, []);

  return (
    <div className="bg-white text-black h-full p-10">
      <h1>Basic Computing Quiz</h1>
      {randomQuestions.map((q, index) => (
        <div key={index} className="my-10">
          <h3>
            {index + 1}. {q.question}
          </h3>
          <ul>
            {q.options.map((option, optIndex) => (
              <li key={optIndex}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
