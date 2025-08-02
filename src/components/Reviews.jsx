import { Star } from "lucide-react";
import React from "react";
import images from "../assets/images";

function Reviews() {
  const reviews = [
    {
      rating: 5,
      comment:
        "I had an amazing experience working with this team. They delivered my project on time and exceeded my expectations. Highly recommend!",
      customer: {
        name: "John Doe",
        position: "CEO, Example Co.",
        image: images.review1,
      },
    },
    {
      rating: 4,
      comment:
        "Great service and support throughout the project. The team was very responsive and attentive to our needs.",
      customer: {
        name: "Jane Smith",
        position: "CTO, Tech Solutions",
        image: images.review1,
      },
    },
  ];

  return (
    <section>
      <div className="container mx-auto p-2 md:px-14 mt-20 mb-20">
        <div className="mb-4">
          <span className="text-sm bg-cyan-800/40 rounded-md p-2  text-neutral-200">
            My Reviews
          </span>
        </div>
        <h1 className="text-2xl">What Our Customers Says</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col h-full bg-neutral-800 border-1 border-neutral-500/35 rounded-2xl p-4">
              <div className="mb-2 flex space-x-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={18} color="yellow" />
                ))}
              </div>

              <div className="flex-grow">
                <p className="text-neutral-300 mb-4">{review.comment}</p>
              </div>

              <div className="flex items-center mt-auto">
                <img
                  src={review.customer.image}
                  alt={review.customer.name}
                  className="w-12 h-12 rounded-md mr-4"
                />
                <div>
                  <h3 className="text-sm">{review.customer.name}</h3>
                  <span className="text-sm text-neutral-400">
                    {review.customer.position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
