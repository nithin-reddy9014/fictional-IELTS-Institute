function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://ik.imagekit.io/onsnhxjshmp/SEO_project/Ielts-landing-page/Hero%20Images/hero_Web_Tu1KGc25N.png"
            alt="About IELTSPro"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-indigo-600">IELTSPro</span>
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            At IELTSPro, we are committed to helping students achieve their
            dream IELTS scores. With a team of experienced instructors,
            innovative teaching methods, and personalized learning plans, we
            make IELTS preparation simple and effective.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Our mission is to empower students with confidence and skills in
            reading, writing, listening, and speaking, so they can excel in
            exams and achieve their global aspirations.
          </p>

          {/* Highlights */}
          <ul className="space-y-2 text-gray-700">
            <li>✅ 10,000+ Students Trained</li>
            <li>✅ Personalized Study Plans</li>
            <li>✅ Live & Interactive Classes</li>
            <li>✅ 100+ Mock Tests & Evaluations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
