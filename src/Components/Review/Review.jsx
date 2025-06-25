import React from "react";
import { Star } from "lucide-react";

const Review = () => {
  const reviews = [
    {
      rating: 5,
      title: "Transformed my rooftop into a green oasis!",
      text: "Thanks to the tips and expert advice here, I was able to turn my dull rooftop into a beautiful herb and flower garden. Everything was beginner-friendly!",
      name: "Mrs. Anika Rahman",
      time: "2 days ago",
    },
    {
      rating: 4,
      title: "Perfect for new gardeners!",
      text: "As someone just starting out, this website has been a blessing. The guides are easy to follow, and I even found local gardeners to consult with.",
      name: "Mr. Rafiq Ahmed",
      time: "About 3 hours ago",
    },
    {
      rating: 5,
      title: "My plants finally thrive!",
      text: "I struggled for months with my balcony plants until I followed the watering and soil tips from here. The results were visible in just a week!",
      name: "Mrs. Nusrat Hossain",
      time: "5 days ago",
    },
  ];

  return (
    <section className="rounded-2xl pb-16 pt-5 px-4 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-green-900 dark:text-white">
        What our
      </h2>
      <h3 className="text-xl md:text-3xl font-bold italic dark:text-white hover:text-emerald-600 transition cursor-pointer">
        fellow gardeners are saying
      </h3>

      {/* Decorative Background Image */}
      <div
        className="h-32 my-8 rounded-3xl"
        style={{
          backgroundImage: 'url(https://i.ibb.co/LXRSNWP7/Adobe-Express-file-6.png)',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 0.7,
        }}
      ></div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="flex border border-green-500 flex-col justify-between bg-green-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105"
          >
            <div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-yellow-400" />
                ))}
              </div>
              <h4 className="text-lg font-semibold text-green-900 dark:text-green-200 mb-2">
                {review.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 italic">“{review.text}”</p>
            </div>
            <div className="mt-4 text-center">
              <p className="text-emerald-600 font-semibold">{review.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{review.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
