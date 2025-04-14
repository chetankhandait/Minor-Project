
import { useState } from "react";
import {
  FaRegThumbsUp,
  FaRegTrashAlt,
  FaRegEdit,
  FaUserPlus,
  FaShareAlt,
  FaRegComment,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import Sidebar from "../components/Sidebar";
// import Sidebar from "../components/Sidebar";

const QnASection = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What are the best resources for preparing for the JEC placement exams?",
      answers: [
        {
          text: "Seniors often recommend practicing previous year papers and focusing on core subjects like Data Structures and Algorithms.",
          image: null,
        },
        {
          text: "Online platforms like GeeksforGeeks, LeetCode, and CodeChef are useful for sharpening coding skills.",
          image: null,
        },
      ],
      followCount: 120,
      requestCount: 15,
      answerCount: 64,
      upvoteCount: 340,
      showAnswers: false,
    },
    {
      id: 2,
      question: "How is the hostel life at Jabalpur Engineering College?",
      answers: [
        {
          text: "Hostel life at JEC offers a lot of camaraderie, with various events organized for students. However, facilities can be improved.",
          image: null,
        },
        {
          text: "The hostel renovations are ongoing, and there are active fundraising initiatives for upgrading facilities.",
          image: null,
        },
      ],
      followCount: 98,
      requestCount: 10,
      answerCount: 43,
      upvoteCount: 280,
      showAnswers: false,
    },
    {
      id: 3,
      question: "Which clubs and societies are active at Jabalpur Engineering College?",
      answers: [
        {
          text: "There are various active clubs like the Coding Club, Robotics Club, and Cultural Societies which provide great exposure.",
          image: null,
        },
        {
          text: "The Entrepreneurship Cell is also quite popular for students interested in startups and networking.",
          image: null,
        },
      ],
      followCount: 56,
      requestCount: 8,
      answerCount: 31,
      upvoteCount: 150,
      showAnswers: false,
    },
    {
      id: 4,
      question: "What are the common challenges faced by first-year students at JEC?",
      answers: [
        {
          text: "Adapting to the academic rigor and balancing extracurriculars can be a challenge for many first-year students.",
          image: null,
        },
        {
          text: "Navigating through administrative processes for hostels and libraries is also something first-year students often struggle with.",
          image: null,
        },
      ],
      followCount: 77,
      requestCount: 9,
      answerCount: 44,
      upvoteCount: 210,
      showAnswers: false,
    },
    {
      id: 5,
      question: "What are the best ways to prepare for the semester exams at JEC?",
      answers: [
        {
          text: "Students recommend focusing on class notes, previous year question papers, and core textbooks.",
          image: null,
        },
        {
          text: "Group studies with friends can help in understanding difficult topics, especially in subjects like Engineering Mathematics.",
          image: null,
        },
      ],
      followCount: 89,
      requestCount: 11,
      answerCount: 38,
      upvoteCount: 190,
      showAnswers: false,
    },
    {
      id: 6,
      question: "How to apply for internships while studying at JEC?",
      answers: [
        {
          text: "It's important to maintain a strong LinkedIn profile and reach out to alumni for internship opportunities.",
          image: null,
        },
        {
          text: "Using platforms like Internshala, Indeed, and leveraging campus placement cells are effective ways to apply for internships.",
          image: null,
        },
      ],
      followCount: 102,
      requestCount: 12,
      answerCount: 55,
      upvoteCount: 275,
      showAnswers: false,
    },
    {
      id: 7,
      question: "What is the process for changing your branch at Jabalpur Engineering College?",
      answers: [
        {
          text: "Branch change is allowed based on academic performance, and students usually apply after the first year.",
          image: null,
        },
        {
          text: "Students need to submit an application to the academic office. The cutoff varies depending on the branch's availability and demand.",
          image: null,
        },
      ],
      followCount: 85,
      requestCount: 14,
      answerCount: 29,
      upvoteCount: 165,
      showAnswers: false,
    },
    {
      id: 8,
      question: "How does the placement cell at JEC assist students?",
      answers: [
        {
          text: "The placement cell conducts various pre-placement training, mock interviews, and workshops to prepare students.",
          image: null,
        },
        {
          text: "They also bring companies to campus and assist students in resume building and interview preparation.",
          image: null,
        },
      ],
      followCount: 110,
      requestCount: 13,
      answerCount: 62,
      upvoteCount: 320,
      showAnswers: false,
    },
    {
      id: 9,
      question: "What is the best way to prepare for technical interviews for core engineering jobs?",
      answers: [
        {
          text: "Focus on your core subjects and practice technical questions from platforms like InterviewBit, LeetCode, and GeeksforGeeks.",
          image: null,
        },
        {
          text: "Joining coding clubs and participating in hackathons also helps build problem-solving skills.",
          image: null,
        },
      ],
      followCount: 95,
      requestCount: 10,
      answerCount: 50,
      upvoteCount: 295,
      showAnswers: false,
    },
    {
      id: 10,
      question: "What scholarships are available for JEC students?",
      answers: [
        {
          text: "Students can apply for government scholarships like NSP, MP Government Scholarships, and JEC merit-based scholarships.",
          image: null,
        },
        {
          text: "Several NGOs and private organizations also provide scholarships based on merit and financial need.",
          image: null,
        },
      ],
      followCount: 67,
      requestCount: 7,
      answerCount: 42,
      upvoteCount: 175,
      showAnswers: false,
    },
  ]);
  

  const [showModal, setShowModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [newAnswer, setNewAnswer] = useState("");
  const [image, setImage] = useState(null);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [activeTab, setActiveTab] = useState("question");
  const [newQuestion, setNewQuestion] = useState("");

  const openAnswerModal = (question) => {
    setCurrentQuestion(question);
    setShowModal(true);
  };

  const handleAnswerSubmit = () => {
    if (newAnswer.trim()) {
      const updatedQuestions = questions.map((q) =>
        q.id === currentQuestion.id
          ? { ...q, answers: [...q.answers, { text: newAnswer, image }] }
          : q
      );
      setQuestions(updatedQuestions);
      setShowModal(false);
      setNewAnswer("");
      setImage(null);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const deleteAnswer = (questionId, answerIndex) => {
    const updatedQuestions = questions.map((q) => {
      if (q.id === questionId) {
        const updatedAnswers = q.answers.filter(
          (_, index) => index !== answerIndex
        );
        return { ...q, answers: updatedAnswers };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const handleUpvote = (questionId) => {
    const updatedQuestions = questions.map((q) =>
      q.id === questionId ? { ...q, upvoteCount: q.upvoteCount + 1 } : q
    );
    setQuestions(updatedQuestions);
  };

  const toggleAnswers = (questionId) => {
    const updatedQuestions = questions.map((q) =>
      q.id === questionId ? { ...q, showAnswers: !q.showAnswers } : q
    );
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setShowQuestionModal(true);
  };

  const handleCloseQuestionModal = () => {
    setShowQuestionModal(false);
  };

  const handleQuestionSubmit = () => {
    if (newQuestion.trim()) {
      const newQuestionObj = {
        id: questions.length + 1,
        question: newQuestion,
        answers: [],
        followCount: 0,
        requestCount: 0,
        answerCount: 0,
        upvoteCount: 0,
        showAnswers: false,
      };
      setQuestions([newQuestionObj, ...questions]); // Add new question to the top
      setNewQuestion(""); // Clear the new question state
      handleCloseQuestionModal(); // Close the modal
    }
  };

  return (
    <div className="flex justify-center w-full items-start min-h-screen">
      <div className="w-80 mx-4">
      <Sidebar/>
      </div>
      <div className="w-2/3 space-y-8">
      <div className="w-full flex justify-between">
<h1 className="text-4xl text-purple-500 underline font-semibold">Ask A Question</h1>
        <button
          className="bg-purple-600 p-2 rounded-xl text-white "
          onClick={handleAddQuestion}
          >
          Write Question
        </button>
          </div>

        {/* List of Questions */}
        <div className="space-y-4">
          {questions.map((q) => (
            <div
              key={q.id}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
            >
              <h2 className="text-lg font-semibold text-purple-700">
                {q.question}
              </h2>
              <div className="flex items-center justify-between text-gray-600 mt-2">
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-1">
                    <FaUserPlus className="text-gray-600" />
                    <span>{q.followCount}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaShareAlt className="text-gray-600" />
                    <span>{q.requestCount}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaRegComment className="text-gray-600" />
                    <span>{q.answerCount} answers</span>
                  </div>
                </div>

                {/* Upvote */}
                <div className="flex items-center space-x-1">
                  <FaRegThumbsUp
                    className="text-gray-600 hover:text-purple-600 cursor-pointer"
                    onClick={() => handleUpvote(q.id)}
                  />
                  <span>{q.upvoteCount}</span>
                </div>
              </div>

              {/* Answer button */}
              <div className="mt-2 flex justify-between items-center">
                <button
                  onClick={() => openAnswerModal(q)}
                  className="py-1 px-3 flex items-center bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all"
                >
                  <FaRegEdit className="mr-1" />
                  Answer
                </button>

                {/* Toggle Previous Answers */}
                <button
                  onClick={() => toggleAnswers(q.id)}
                  className="py-1 px-3 flex items-center bg-gray-200 rounded-md hover:bg-gray-300 transition-all"
                >
                  {q.showAnswers ? (
                    <>
                      <FaAngleUp className="mr-1" />
                      Hide Answers
                    </>
                  ) : (
                    <>
                      <FaAngleDown className="mr-1" />
                      Previous Answers
                    </>
                  )}
                </button>
              </div>

              {/* Display answers when toggled */}
              {q.showAnswers && (
                <div className="mt-4 space-y-2">
                  {q.answers.length > 0 ? (
                    q.answers.map((answer, idx) => (
                      <div
                        key={idx}
                        className="text-gray-700 bg-gray-100 p-3 rounded-md space-y-2 relative"
                      >
                        <p>{answer.text}</p>
                        {answer.image && (
                          <img
                            src={answer.image}
                            alt="Uploaded"
                            className="w-full h-auto rounded-md"
                          />
                        )}

                        {/* Delete Answer */}
                        <button
                          onClick={() => deleteAnswer(q.id, idx)}
                          className="absolute top-2 right-2 text-gray-400 hover:text-red-600"
                        >
                          <FaRegTrashAlt />
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No answers yet.</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add Question Modal */}
        {showQuestionModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
              <button
                onClick={handleCloseQuestionModal}
                className="absolute top-2 right-4 text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>

              {/* Tabs for switching between Question and Post */}
              <div className="flex space-x-4 mb-4">
                <button
                  className={`font-semibold text-lg ${
                    activeTab === "question"
                      ? "text-purple-600 border-b-2 border-purple-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("question")}
                >
                  Add Question
                </button>
                <button
                  className={`font-semibold text-lg ${
                    activeTab === "post"
                      ? "text-purple-600 border-b-2 border-purple-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("post")}
                >
                  Create Post
                </button>
              </div>

              {/* Content Switching Based on Active Tab */}
              {activeTab === "question" ? (
                <div className="space-y-4">
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="What is your question?"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                  />

                  <div className="flex items-center">
                    <select className="p-2 border border-gray-300 rounded-md">
                      <option>Public</option>
                      <option>Private</option>
                    </select>
                  </div>

                  {/* Suggested Questions */}
                  <div className="mt-4">
                    <h4 className="text-gray-600 text-sm font-semibold mb-2">
                      Suggested Questions
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
                        <span>What is React Native?</span>
                        <button className="text-sm text-purple-600">Add</button>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
                        <span>How does React work?</span>
                        <button className="text-sm text-purple-600">Add</button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleQuestionSubmit}
                    className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all"
                  >
                    Add Question
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Say something..."
                  />

                  {/* Image Upload Option */}
                  <div className="flex items-center space-x-4">
                    <input
                      type="file"
                      onChange={handleImageUpload}
                      className="border border-gray-300 rounded-md p-2"
                    />
                    {image && (
                      <div className="mt-4">
                        <img
                          src={image}
                          alt="Uploaded"
                          className="w-32 h-32 object-cover rounded-md"
                        />
                      </div>
                    )}
                  </div>

                  <button className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all">
                    Create Post
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Answer Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-4 text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>
              <h3 className="font-semibold text-lg mb-4">Add Answer</h3>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                rows="4"
                placeholder="Write your answer..."
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
              />

              {/* Image Upload */}
              <div className="mt-2">
                <label className="text-gray-600">Upload Image:</label>
                <input
                  type="file"
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                  onChange={handleImageUpload}
                />
              </div>

              {/* Submit Answer */}
              <button
                onClick={handleAnswerSubmit}
                className="w-full py-2 mt-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all"
              >
                Submit Answer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QnASection;
