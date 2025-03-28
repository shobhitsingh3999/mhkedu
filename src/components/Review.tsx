"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Sample review data - replace with your actual reviews
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Fantastic service! They guided me through the entire visa application process with expertise and patience. Highly recommend!",
    date: "March 2025"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    comment: "I was nervous about applying for my work visa, but their team made it so easy. Professional, efficient, and friendly service.",
    date: "February 2025"
  },
  {
    id: 3,
    name: "Priya Patel",
    rating: 4,
    comment: "Very knowledgeable team that helped me navigate the complex immigration process. Would definitely use their services again.",
    date: "January 2025"
  },
  {
    id: 4,
    name: "James Rodriguez",
    rating: 5,
    comment: "Exceptional service from start to finish. They were responsive to all my questions and made the visa application process stress-free.",
    date: "December 2024"
  },
  {
    id: 5,
    name: "Emma Wilson",
    rating: 5,
    comment: "Their expertise in visa applications is unmatched. They handled everything professionally and got my visa approved quickly.",
    date: "November 2024"
  }
];

export default function ReviewsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleReviews = 3; // Number of reviews to show at once
  
  // Calculate the average rating
//   const averageRatingString = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);
//   const averageRating = Number(averageRatingString);

const averageRatingString = "5.0";
const averageRating = Number(averageRatingString);


  
  // Navigate through reviews
  const nextReviews = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (reviews.length - visibleReviews + 1)
    );
  };
  
  const prevReviews = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - visibleReviews : prevIndex - 1
    );
  };
  
  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Review Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A2B3C] mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {renderStars(Math.round(averageRating))}
              <span className="text-xl font-semibold text-[#1A2B3C] ml-2">{averageRating}</span>
            </div>
            <p className="text-[#1A2B3C]/70">Based on {reviews.length} reviews</p>
          </div>
          
          {/* Reviews Card */}
          <div className="rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-white to-[#E5F9E0]/50">
            {/* Reviews content */}
            <div className="p-8 md:p-10">
              {/* Desktop view - grid */}
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                {reviews.slice(currentIndex, currentIndex + visibleReviews).map((review) => (
                  <div key={review.id} className="flex flex-col p-6 rounded-xl bg-white shadow-sm h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#E5F9E0] flex items-center justify-center mr-3">
                        <Quote className="w-5 h-5 text-[#1A2B3C]/70" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1A2B3C]">{review.name}</h4>
                        <div className="flex">{renderStars(review.rating)}</div>
                      </div>
                    </div>
                    <p className="text-[#1A2B3C]/80 flex-grow">{review.comment}</p>
                    <p className="text-xs text-[#1A2B3C]/60 mt-4">{review.date}</p>
                  </div>
                ))}
              </div>
              
              {/* Mobile view - single review */}
              <div className="md:hidden">
                <div className="flex flex-col p-6 rounded-xl bg-white shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#E5F9E0] flex items-center justify-center mr-3">
                      <Quote className="w-5 h-5 text-[#1A2B3C]/70" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1A2B3C]">{reviews[currentIndex].name}</h4>
                      <div className="flex">{renderStars(reviews[currentIndex].rating)}</div>
                    </div>
                  </div>
                  <p className="text-[#1A2B3C]/80">{reviews[currentIndex].comment}</p>
                  <p className="text-xs text-[#1A2B3C]/60 mt-4">{reviews[currentIndex].date}</p>
                </div>
              </div>
              
              {/* Navigation controls */}
              <div className="flex justify-center mt-8 gap-4">
                <button 
                  onClick={prevReviews}
                  className="p-2 rounded-full bg-[#E5F9E0] hover:bg-[#E5F9E0]/70 transition-colors"
                  aria-label="Previous reviews"
                >
                  <ChevronLeft className="w-5 h-5 text-[#1A2B3C]/70" />
                </button>
                <button 
                  onClick={nextReviews}
                  className="p-2 rounded-full bg-[#E5F9E0] hover:bg-[#E5F9E0]/70 transition-colors"
                  aria-label="Next reviews"
                >
                  <ChevronRight className="w-5 h-5 text-[#1A2B3C]/70" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-8">
            <a 
              href="https://g.page/r/yourcompanylink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#1A2B3C] font-medium hover:text-[#1A2B3C]/70 transition-colors"
            >
              View all reviews on Google
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}