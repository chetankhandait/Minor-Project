import {
  FaEye,
  FaChartBar,
  FaSearch,
  FaThumbsUp,
  FaShare,
  FaComment,
  FaRetweet,
} from "react-icons/fa";
import { FaPencilAlt, FaCaretRight } from "react-icons/fa";
import { useState } from "react";

const Profile = () => {
  // Dummy array data for posts
  const posts = [
    {
      id: 1,
      name: "Aryan Tyagi",
      college: "Jabalpur Engineering College",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae in illo, aut velit quidem cumque aliquam hic iusto accusamus eum ad aperiam ipsam unde sunt obcaecati sapiente odit ducimus?",
      profileImage:
        "https://plus.unsplash.com/premium_photo-1723122130654-208636c5cba2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      postImage:
        "https://images.unsplash.com/photo-1718304775465-8496e07d6ba2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      name: "Aryan Tyagi",
      college: "Jabalpur Engineering College",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae in illo, aut velit quidem cumque aliquam hic iusto accusamus eum ad aperiam ipsam unde sunt obcaecati sapiente odit ducimus?",
      profileImage:
        "https://plus.unsplash.com/premium_photo-1723122130654-208636c5cba2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      postImage:
        "https://images.unsplash.com/photo-1718304775465-8496e07d6ba2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // State to track if the post is liked and comments
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");

  // Toggle like function
  const toggleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id], // Toggle like status
    }));
  };

  // Add comment function
  const addComment = (id) => {
    if (newComment.trim()) {
      setComments((prevComments) => ({
        ...prevComments,
        [id]: [...(prevComments[id] || []), newComment],
      }));
      setNewComment(""); // Clear input field
    }
  };

  return (
    <>
      <div className="mx-auto max-w-6xl h-96 border-2 overflow-hidden rounded-lg mt-12 bg-white">
        <div className="bg-purple-300 h-44"></div>
        <div className="-translate-y-20 mx-24 flex items-center flex-col justify-center">
          <img
            className="h-44 w-44  rounded-full"
            src="/avatar.png"
            alt="User Profile"
          />
          <h1
            className="text-2xl font-semibold
          "
          >
            Abhiraj Pandey
          </h1>
          <p className="text-center">
            As a Tech Analyst 8 years of experience in Software Development
            Expertise lies in project management, data analysis, marketing
            strategy, etc. where I have successfully led projects, driven
            growth, improved efficiency.
          </p>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-4 w-full mt-4 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">Analytics</h2>
        <p className="text-gray-500 mb-4">Private to you</p>

        <div className="flex justify-between items-center mb-4">
          {/* Profile Views */}
          <div className="flex flex-col items-start">
            <div className="flex items-center text-gray-800">
              <FaEye className="mr-2" />
              <span className="font-semibold">387 profile views</span>
            </div>
            <p className="text-gray-500 text-sm">
              Discover who's viewed your profile.
            </p>
          </div>

          {/* Post Impressions */}
          <div className="flex flex-col items-start">
            <div className="flex items-center text-gray-800">
              <FaChartBar className="mr-2" />
              <span className="font-semibold">2,442 post impressions</span>
            </div>
            <p className="text-gray-500 text-sm">
              Check out who's engaging with your posts.
            </p>
            <span className="text-gray-400 text-xs">Past 7 days</span>
          </div>

          {/* Search Appearances */}
          <div className="flex flex-col items-start">
            <div className="flex items-center text-gray-800">
              <FaSearch className="mr-2" />
              <span className="font-semibold">215 search appearances</span>
            </div>
            <p className="text-gray-500 text-sm">
              See how often you appear in search results.
            </p>
          </div>
        </div>

        <a href="#" className="text-blue-600 hover:underline font-semibold">
          Show all analytics &rarr;
        </a>
      </div>

      <div className="bg-white p-6 border rounded-lg max-w-6xl mt-4 mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">About</h2>
          <FaPencilAlt className="text-gray-500 cursor-pointer hover:text-gray-700" />
        </div>
        <p className="text-gray-800 mt-4">
          Hey everyone, myself ARYAN TYAGI
          <br />
          I am a B Tech undergraduate student at Jabalpur engineering college
          (JEC)
          <br />
          Graphic designer ...
          <span className="text-blue-600 cursor-pointer hover:underline">
            see more
          </span>
        </p>
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <FaCaretRight className="text-gray-600" />
            <span className="font-semibold text-gray-800">Top skills</span>
          </div>
          <p className="text-gray-700 mt-1">
            MERN Stack • Next.js • Node.js • JavaScript
          </p>
        </div>
      </div>

      <div className="flex mx-auto max-w-6xl">
        {posts.map((post) => (
          <div
            key={post.id}
            className="max-w-xl bg-white p-4 my-4 rounded-xl border-2 h-fit"
          >
            <div className="flex gap-4 pb-2 items-center">
              <img
                className="h-12 w-12 rounded-full"
                src={post.profileImage}
                alt={post.name}
              />
              <div className="flex flex-col">
                <h1 className="font-semibold">{post.name}</h1>
                <p className="text-sm">{post.college}</p>
              </div>
            </div>
            <p className="bg-zinc-200 w-fit px-2 text-sm rounded-lg">
              Web Devlopent
            </p>
            <p className="text-sm py-2">{post.description}</p>
            <img src={post.postImage} alt="Post content" />

            {/* Like, Share, Comment, Repost Section */}
            <div className="flex py-2 px-4 justify-between">
              {/* Like button with toggle functionality */}
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => toggleLike(post.id)}
              >
                <FaThumbsUp color={likes[post.id] ? "blue" : "gray"} />
                <h1 className={likes[post.id] ? "text-blue-500" : ""}>Like</h1>
              </div>
              <div className="flex items-center space-x-2">
                <FaShare />
                <h1>Share</h1>
              </div>
              <div className="flex items-center space-x-2">
                <FaComment />
                <h1>Comment</h1>
              </div>
              <div className="flex items-center space-x-2">
                <FaRetweet />
                <h1>Repost</h1>
              </div>
            </div>

            {/* Comment Section */}
            <div className="mt-4">
              <h2 className="font-semibold mb-2">Comments:</h2>
              {comments[post.id]?.length ? (
                comments[post.id].map((comment, index) => (
                  <p key={index} className="bg-gray-100 p-2 rounded mb-2">
                    {comment}
                  </p>
                ))
              ) : (
                <p className="text-gray-500">No comments yet.</p>
              )}

              <div className="flex items-center mt-2">
                <input
                  type="text"
                  className="border rounded px-3 py-1 flex-1 mr-2"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                  className="bg-purple-500 text-white px-4 py-1 rounded"
                  onClick={() => addComment(post.id)}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
