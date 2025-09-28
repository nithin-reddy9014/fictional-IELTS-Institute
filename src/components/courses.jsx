import {
  FaBookReader,
  FaPencilAlt,
  FaHeadphones,
  FaMicrophone,
  FaLanguage,
  FaChalkboardTeacher,
} from "react-icons/fa";

const ieltsCourses = [
  {
    icon: <FaBookReader size={32} />,
    title: "Reading",
    description:
      "Master strategies to understand and answer reading passages efficiently.",
  },
  {
    icon: <FaPencilAlt size={32} />,
    title: "Writing",
    description:
      "Learn to write essays and reports that meet IELTS scoring criteria.",
  },
  {
    icon: <FaHeadphones size={32} />,
    title: "Listening",
    description:
      "Boost your listening skills with real test simulations and guided practice.",
  },
  {
    icon: <FaMicrophone size={32} />,
    title: "Speaking",
    description:
      "Improve fluency and pronunciation with 1-on-1 speaking practice sessions.",
  },
  {
    icon: <FaLanguage size={32} />,
    title: "Vocabulary",
    description:
      "Expand your vocabulary with curated word lists and daily quizzes.",
  },
  {
    icon: <FaChalkboardTeacher size={32} />,
    title: "Live Classes",
    description:
      "Join interactive live classes and get instant feedback from trainers.",
  },
];

function Courses() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">IELTS Courses</h2>
        <p className="text-gray-600 mt-2">
          Build all essential IELTS skills step by step to achieve your desired
          band score.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {ieltsCourses.map((course, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl text-center transition-all">
            <div className="text-indigo-600 mb-4 flex justify-center">
              {course.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 text-sm">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
