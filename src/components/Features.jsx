import {
  FaClipboardList,
  FaVideo,
  FaUserGraduate,
  FaFlag,
  FaQuestionCircle,
  FaRobot,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot size={32} />,
    title: "AI Band Score",
    subtitle: "Get instant feedback powered by AI.",
  },
  {
    icon: <FaUserGraduate size={32} />,
    title: "15+ Expert Teacher",
    subtitle: "Evaluations",
  },
  {
    icon: <FaClipboardList size={32} />,
    title: "100+ Full Length and Sectional",
    subtitle: "Mock Tests",
  },
  {
    icon: <FaVideo size={32} />,
    title: "Live Class",
    subtitle: "Recordings",
  },
  {
    icon: <FaFlag size={32} />,
    title: "Personalised",
    subtitle: "Study Plan",
  },
  {
    icon: <FaQuestionCircle size={32} />,
    title: "20 Doubt Solving",
    subtitle: "Sessions",
  },
];

function Features() {
  return (
    <section className="bg-blue-900 py-16 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Get everything you need for{" "}
          <span className="text-yellow-400">IELTS Prep</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="border border-yellow-400 rounded-lg p-6 text-center flex flex-col items-center bg-blue-800 hover:scale-105 transition-transform">
            <div className="mb-4 text-yellow-400">{feature.icon}</div>
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-sm text-gray-200">{feature.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-500">
          Start for FREE
        </button>
      </div>
    </section>
  );
}

export default Features;
