import React from "react";

const BlogPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 sm:py-16">
      {/* Blog Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Preparing for Your First Marathon: A Complete Guide to Success
      </h1>

      {/* Author & Date */}
      <div className="flex items-center space-x-4 mb-10 text-gray-600">
        <img
          src="https://i.pravatar.cc/60?img=15"
          alt="Author: Ahs Hasibul"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">Ahs Hasibul</p>
          <p className="text-sm">Published on August 11, 2025</p>
        </div>
      </div>

      {/* Blog Content */}

      {/* Intro Paragraph */}
      <section className="mb-10 space-y-6">
        <p className="text-lg leading-relaxed text-gray-800">
          Running a marathon is a monumental achievement that combines physical
          endurance, mental toughness, and proper preparation. Whether you’re
          an aspiring athlete or simply aiming to conquer your first 26.2 miles,
          this guide will walk you through the essential steps to ensure your
          marathon journey is a rewarding experience.
        </p>

        <img
          src="https://images.unsplash.com/photo-1508606572321-901ea4437074?auto=format&fit=crop&w=800&q=80"
          alt="Marathon runners on the starting line"
          className="w-full rounded-lg shadow-lg"
        />
      </section>

      {/* Training Section */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Building Your Training Plan</h2>
        <p className="text-gray-800 leading-relaxed">
          The foundation of marathon success lies in a well-structured training
          plan. Gradually increase your mileage over weeks to avoid injury,
          incorporating rest days and cross-training activities like cycling or
          swimming. Consistency and patience are key — listen to your body and
          adjust as needed.
        </p>
        <img
          src="https://images.unsplash.com/photo-1526403227232-b35f4d3f6d2e?auto=format&fit=crop&w=800&q=80"
          alt="Runner training outdoors"
          className="w-full rounded-lg shadow-lg"
        />
      </section>

      {/* Nutrition Section */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Nutrition & Hydration Tips</h2>
        <p className="text-gray-800 leading-relaxed">
          Fueling your body properly is crucial for training and race day. Focus
          on balanced meals rich in carbohydrates, lean proteins, and healthy
          fats. Stay hydrated throughout your training and learn how to
          replenish electrolytes during long runs. Avoid trying new foods close
          to race day.
        </p>
        <img
          src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80"
          alt="Healthy running snacks"
          className="w-full rounded-lg shadow-lg"
        />
      </section>

      {/* Mental Preparation Section */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Mental Preparation & Motivation</h2>
        <p className="text-gray-800 leading-relaxed">
          Running a marathon challenges not only your body but your mind. Develop
          strategies to stay motivated during tough moments—set mini goals,
          visualize your success, and remember why you started. Surround yourself
          with supportive friends or join a running group to keep spirits high.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-20 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Final Thoughts</h2>
        <p className="text-gray-800 leading-relaxed">
          Completing your first marathon is a life-changing accomplishment.
          With the right preparation, nutrition, and mindset, you’ll cross the
          finish line stronger and more confident. Remember to enjoy the
          journey—every step is progress toward your goal.
        </p>
      </section>
    </main>
  );
};

export default BlogPage;
