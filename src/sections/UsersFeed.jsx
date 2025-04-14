import { FaThumbsUp, FaShare, FaComment, FaRetweet } from "react-icons/fa";
import { useState } from "react";

const UsersFeed = () => {
  // Dummy array data for posts
  const posts = [
    {
      id: 1,
      name: "Aryan Tyagi",
      college: "Jabalpur Engineering College",
      description:
        "Aryan played a pivotal role in his team's participation at the Smart India Hackathon, a national-level competition focused on solving some of the country's most pressing challenges using technology. He was instrumental in developing machine learning models to optimize resource management for smart cities, a project aimed at enhancing urban efficiency and sustainability. Aryan's ability to analyze large datasets and build predictive models allowed his team to propose innovative solutions for traffic management, energy consumption, and waste reduction. His leadership in handling the AI-driven aspects of the project demonstrated his deep understanding of data science and practical implementation. The Hackathon experience not only honed his technical skills but also instilled in him a passion for using technology to create social impact, driving him to continue working on solutions that address real-world issues at scale.",
      profileImage: "/darshan.jpeg",
      postImage: "/sih.jpg",
    },
    {
      id: 2,
      name: "Priya Kapoor",
      college: "Jabalpur Engineering College",
      description:
        "Priya's passion for robotics and artificial intelligence has driven her to excel in designing smart systems that interact with the physical world. She has been involved in projects where AI-powered robots assist in automating repetitive tasks, improving operational efficiency in various sectors. Priya's expertise lies in combining machine learning algorithms with robotics, creating solutions that are not only intelligent but also adaptive to dynamic environments. Her innovative approach to solving real-world problems through AI showcases her dedication to advancing this transformative technology.",
      profileImage: "/priya.jpeg",
      postImage: "/blockchain.jpg",
    },
    {
      id: 3,
      name: "Rahul Mehta",
      college: "Jabalpur Engineering College",
      description:
        "Rahul is a blockchain enthusiast with a deep understanding of decentralized systems and cryptographic protocols. His passion lies in building secure and scalable blockchain networks that ensure transparency and trust. Rahul has developed multiple decentralized applications (dApps) that focus on enhancing the security of online transactions and data sharing. With a strong foundation in cryptography, Rahul continuously explores ways to improve the efficiency and scalability of blockchain systems. His work in this domain aims to democratize access to secure digital financial services for all.",
      profileImage: "/rahul.jpeg",
      postImage: "/web.jpg",
    },
    {
      id: 4,
      name: "Darshan Verma",
      college: "Jabalpur Engineering College",
      description:
        "Darshan's expertise in artificial intelligence and data science allows him to explore new ways of deriving actionable insights from vast datasets. His research focuses on the application of machine learning techniques to predict trends and behaviors, making him a valuable contributor in areas like healthcare and finance. Darshan is particularly skilled in deep learning, where he has designed neural networks that improve over time by learning from data. His innovative solutions help organizations harness the power of AI to solve complex, data-driven challenges with precision and accuracy.",
      profileImage: "/darshan.jpeg",
      postImage: "/ai.jpeg",
    },
    {
      id: 5,
      name: "Aman Singh",
      college: "Jabalpur Engineering College",
      description:
        "Aman is a skilled full-stack developer with a focus on creating responsive and user-centric web applications. His knowledge spans both front-end and back-end technologies, enabling him to build seamless digital experiences from the ground up. Aman has been involved in several projects where he designed and implemented dynamic web applications using modern frameworks like React and Node.js. His attention to detail in UI/UX design, combined with his strong coding skills, ensures that his applications are not only functional but also visually appealing and highly performant.",
      profileImage: "/aman.jpeg",
      postImage: "/laptop.avif",
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
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="max-w-2xl bg-white p-4 mx-auto my-4 rounded-xl border-2 h-fit"
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
          <img src={post.postImage} alt="Post content" className="w-full" />

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
  );
};

export default UsersFeed;
