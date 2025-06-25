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
    <section className="rounded-2xl pb-16 pt-5 px-4 md:px-20  text-center dark:text-black">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 dark:text-white">What our </h2>
      <h3 className=" text-xl md:text-3xl font-bold italic dark:text-white hover:text-emerald-600 cursor-pointer">
        fellow gardeners Are Saying
      </h3>
      <div
        className="h-30 mb-5 rounded-3xl"
        style={{
          backgroundImage: 'url(https://i.ibb.co/LXRSNWP7/Adobe-Express-file-6.png)',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 1,
        }}
      ></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between  bg-green-50 transition-transform hover:scale-105 bg-gray-50 p-6 rounded-xl hover:shadow "
          >
           <div>
           <h4 className="text-xl font-semibold mb-2">{review.title}</h4>
           <p className="text-gray-600 italic mb-4">“{review.text}”</p>
           </div>
           <div>
           <p className="text-emerald-600 font-semibold">{review.name}</p>
           <p className="text-sm text-gray-500">{review.time}</p>
           </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
