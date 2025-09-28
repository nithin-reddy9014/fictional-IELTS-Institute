import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Nithin Reddy",
    score: "7.5",
    feedback:
      "The practice materials were spot-on. My tutor guided me through every challenge with patience and clarity.",
  },
  {
    name: "Tejaswini",
    score: "8",
    feedback:
      "I felt confident on test day thanks to the structured lessons and personalized feedback from my instructors.",
  },
  {
    name: "Pavan Kumar",
    score: "7.5",
    feedback:
      "The mock exams mirrored the real test. Supportive teachers helped me sharpen my writing and speaking skills.",
  },
  {
    name: "Sai charan",
    score: "8.5",
    feedback:
      "Every session was focused and productive. I improved my grammar and vocabulary with expert guidance.",
  },
  {
    name: "Nishitha",
    score: "7.5",
    feedback:
      "The coaching was excellent. I learned how to manage time better and tackle tricky reading passages.",
  },
  {
    name: "Rama Krishna",
    score: "7",
    feedback:
      "Speaking practice boosted my fluency. The trainers were encouraging and gave me useful tips throughout.",
  },
  {
    name: "Rahul",
    score: "8.5",
    feedback:
      "I struggled with writing at first, but the feedback was detailed and helped me improve quickly.",
  },
];

function Testimonials() {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-6">
        What Our Students Say
      </h2>

      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop={true}>
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-lg p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div>
                    <h3 className="font-semibold">{t.name}</h3>
                    <p className="text-sm text-blue-600 font-bold">
                      Band Score: {t.score}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">{t.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
