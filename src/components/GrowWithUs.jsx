import {
  FaBookReader,
  FaPencilAlt,
  FaHeadphones,
  FaMicrophone,
  FaLanguage,
  FaChalkboardTeacher,
} from "react-icons/fa";

const skills = [
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
];

function GrowWithUs() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-gray-800 font-semibold">
          Build all essential IELTS skills step by step to achieve your desired
          band score
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl text-center transition-all">
            <div className="text-indigo-600 mb-4 flex justify-center">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-600 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GrowWithUs;
