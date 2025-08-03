import React from "react";
import Reviews from "../components/Reviews";

function ReviewPage() {
  return (
    <section className="">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center bg-gradient-tob from-cyan-900/60  pt-30">
          <h2 className="text-2xl font-bold">Reviews</h2>
          <p className="mt-4 text-gray-300">
            You can learn more about my work through the reviews.
          </p>
        </div>

        <Reviews />
      </div>
    </section>
  );
}

export default ReviewPage;
