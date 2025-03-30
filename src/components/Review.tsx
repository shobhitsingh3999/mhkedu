"use client";

import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: number;
  name: string;
  reviewCount: number | null;
  rating: number;
  comment: string;
  date: string;
  isNew: boolean;
}

const ReviewsComponent: React.FC = () => {
  // All reviews data
  const allReviews: Review[] = [

    {
      id: 1,
      name: "Rose Satakala",
      reviewCount: 1,
      rating: 5,
      comment: "MHK Education and Consultant is really helpful! They give great advice, support, and make studying abroad easier. Super friendly and professional team!",
      date: "a week ago",
      isNew: true
    },

    {
      id: 2,
      name: "Shruti Narayan",
      reviewCount: 1,
      rating: 5,
      comment: "I had a great experience with MHK Education and Consultant. Their team is professional, knowledgeable, and genuinely cares about helping students achieve their academic and career goals. They provided clear guidance throughout the entire process, making it stress-free and efficient. The staff was always available to answer my questions and offered valuable advice tailored to my needs. I highly recommend them to anyone looking for expert educational and migration consulting services!.",
      date: "a month ago",
      isNew: true
    },
    {
      id: 3,
      name: "Asmit Chand",
      reviewCount: 3,
      rating: 5,
      comment: "I had an excellent experience with MHK Education and Consultants along with ISMT College. Their team is highly professional, knowledgeable, and dedicated to guiding students through every step of the education and visa process. They provided clear and accurate information, ensuring a smooth and stress-free journey. What sets MHK apart is their personalized approach—they genuinely care about their clients and go the extra mile to find the best opportunities suited to individual goals. Whether it is my visa applications or my partner's visa, I trusted them and they did not let me down. I will definitely engage them for my career counseling, their expertise is invaluable. I highly recommend MHK Education and Consultants to anyone looking for reliable and efficient education consultancy services. They truly make dreams come true!",
      date: "a week ago",
      isNew: true
    },
    {
      id: 4,
      name: "mele lavemai",
      reviewCount: 1,
      rating: 5,
      comment: "I had a very good experience with MHK Education and Consultants. Very helpful team, very professionals and knowledgeable. I’m so grateful for all the support I received.",
      date: "4 days ago",
      isNew: true
    },
    {
      id: 5,
      name: "Kashvi Sharma",
      reviewCount: 8,
      rating: 5,
      comment: "I am incredibly grateful to MHK Education and Consultant Group for their outstanding support in my student visa application process. Exactly a year ago, I received my visa approval, and it wouldn't have been possible without their expertise and guidance. From the very beginning, their team was professional, knowledgeable, and genuinely cared about my success. They patiently guided me through every step, ensuring all my documents were in order and that I met the requirements smoothly. Their clear communication and timely updates kept me confident throughout the process. Thanks to MHK, I am now pursuing my studies in Australia, and I highly recommend their services to anyone looking for a reliable and efficient education consultation. ⭐⭐⭐⭐⭐",
      date: "4 days ago",
      isNew: true
    },
    {
      id: 6,
      name: "Eshant Rao",
      reviewCount: 2,
      rating: 5,
      comment: "I had an amazing experience with MHK Education and Consultant. From the moment I reached out, their team was professional, knowledgeable, and incredibly helpful. They took the time to understand my goals and provided tailored advice and solutions to help me succeed. The entire process was smooth, and I felt supported every step of the way. Their expertise and dedication to their clients really set them apart. I highly recommend MHK Education and Consultant to anyone seeking reliable educational guidance and consultancy services!",
      date: "4 days ago",
      isNew: true
    },
    {
      id: 7,
      name: "Shivnesh Nadan",
      reviewCount: 1,
      rating: 5,
      comment: "I had a great experience with MHK Education and Consultant. Their team is professional, knowledgeable, and genuinely cares about helping students achieve their academic and career goals. They provided clear guidance throughout the entire process, making it stress-free and efficient. The staff was always available to answer my questions and offered valuable advice tailored to my needs. I highly recommend them to anyone looking for expert educational and migration consulting services!",
      date: "a month ago",
      isNew: false
    },
    {
      id: 8,
      name: "Nassihah Soogun",
      reviewCount: 1,
      rating: 5,
      comment: "Great experience. Very helpful team. Appreciate all the support I received. Keep up the good work. Thank you ☺️",
      date: "a month ago",
      isNew: false
    },
    {
      id: 9,
      name: "Agustín Cáceres",
      reviewCount: 1,
      rating: 5,
      comment: "Excellent service, they were really professional and straight forward. Completely recommended!",
      date: "2 Week ago",
      isNew: false
    }


  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
  const visibleReviews = 3; // Number of reviews to show at once on desktop
  
  // Calculate total pages for pagination dots
  const totalPages = Math.ceil(allReviews.length / visibleReviews);
  
  // Calculate the average rating
  const averageRating = 5.0;
  
  // Navigate through reviews
  const nextReviews = (): void => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (allReviews.length - visibleReviews + 1)
    );
  };
  
  const prevReviews = (): void => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, allReviews.length - visibleReviews) : prevIndex - 1
    );
  };
  
  // Toggle expanded state for a review
  const toggleExpand = (id: number): void => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter(expandedId => expandedId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };
  
  // Render stars based on rating
  const renderStars = (rating: number): React.ReactNode => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
      />
    ));
  };

  // Truncate comment for display
  const shouldTruncate = (comment: string): boolean => comment.length > 150;
  
  const getTruncatedComment = (comment: string): string => {
    if (comment.length <= 150) return comment;
    return comment.substring(0, 150) + "...";
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
              <span className="text-xl font-semibold text-[#1A2B3C] ml-2">{averageRating.toFixed(1)}</span>
            </div>
            <p className="text-[#1A2B3C]/70">Based on {allReviews.length} reviews</p>
          </div>
          
          {/* Reviews Card */}
          <div className="rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-white to-[#E5F9E0]/50">
            {/* Reviews content */}
            <div className="p-8 md:p-10">
              {/* Desktop view - grid */}
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                {allReviews.slice(currentIndex, currentIndex + visibleReviews).map((review) => (
                  <div key={review.id} className="flex flex-col p-6 rounded-xl bg-white shadow-sm h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#E5F9E0] flex items-center justify-center mr-3">
                        <Quote className="w-5 h-5 text-[#1A2B3C]/70" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-[#1A2B3C]">{review.name}</h4>
                          {review.isNew && <span className="ml-2 text-xs font-semibold text-green-500 px-1.5 py-0.5 bg-green-50 rounded">NEW</span>}
                        </div>
                        {review.reviewCount && (
                          <p className="text-xs text-[#1A2B3C]/60">{review.reviewCount} {review.reviewCount === 1 ? 'review' : 'reviews'}</p>
                        )}
                        <div className="flex mt-1">{renderStars(review.rating)}</div>
                      </div>
                    </div>
                    
                    <div className="text-[#1A2B3C]/80 flex-grow">
                      {expandedIds.includes(review.id) || !shouldTruncate(review.comment) ? (
                        <p>{review.comment}</p>
                      ) : (
                        <p>{getTruncatedComment(review.comment)}</p>
                      )}
                      
                      {shouldTruncate(review.comment) && (
                        <button 
                          className="text-[#1A2B3C] font-medium mt-2 hover:underline focus:outline-none"
                          onClick={() => toggleExpand(review.id)}
                        >
                          {expandedIds.includes(review.id) ? "Read less" : "Read more"}
                        </button>
                      )}
                    </div>
                    
                    <p className="text-xs text-[#1A2B3C]/60 mt-4">{review.date}</p>
                  </div>
                ))}
              </div>
              
              {/* Mobile view - single review */}
              <div className="md:hidden">
                {allReviews.length > 0 && (
                  <div className="flex flex-col p-6 rounded-xl bg-white shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#E5F9E0] flex items-center justify-center mr-3">
                        <Quote className="w-5 h-5 text-[#1A2B3C]/70" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-[#1A2B3C]">{allReviews[currentIndex].name}</h4>
                          {allReviews[currentIndex].isNew && <span className="ml-2 text-xs font-semibold text-green-500 px-1.5 py-0.5 bg-green-50 rounded">NEW</span>}
                        </div>
                        {allReviews[currentIndex].reviewCount && (
                          <p className="text-xs text-[#1A2B3C]/60">
                            {allReviews[currentIndex].reviewCount} {allReviews[currentIndex].reviewCount === 1 ? 'review' : 'reviews'}
                          </p>
                        )}
                        <div className="flex mt-1">{renderStars(allReviews[currentIndex].rating)}</div>
                      </div>
                    </div>
                    
                    <div className="text-[#1A2B3C]/80">
                      {expandedIds.includes(allReviews[currentIndex].id) || !shouldTruncate(allReviews[currentIndex].comment) ? (
                        <p>{allReviews[currentIndex].comment}</p>
                      ) : (
                        <p>{getTruncatedComment(allReviews[currentIndex].comment)}</p>
                      )}
                      
                      {shouldTruncate(allReviews[currentIndex].comment) && (
                        <button 
                          className="text-[#1A2B3C] font-medium mt-2 hover:underline focus:outline-none"
                          onClick={() => toggleExpand(allReviews[currentIndex].id)}
                        >
                          {expandedIds.includes(allReviews[currentIndex].id) ? "Read less" : "Read more"}
                        </button>
                      )}
                    </div>
                    
                    <p className="text-xs text-[#1A2B3C]/60 mt-4">{allReviews[currentIndex].date}</p>
                  </div>
                )}
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
                
                {/* Pagination dots for mobile */}
                <div className="flex items-center gap-1.5 md:hidden">
                  {Array.from({ length: allReviews.length }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentIndex === index ? "bg-[#1A2B3C]" : "bg-gray-300"
                      }`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Pagination dots for desktop */}
                <div className="hidden md:flex items-center gap-1.5">
                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageStartIndex = index * visibleReviews;
                    return (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(pageStartIndex)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentIndex === pageStartIndex ? "bg-[#1A2B3C]" : "bg-gray-300"
                        }`}
                        aria-label={`Go to page ${index + 1}`}
                      />
                    );
                  })}
                </div>
                
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
              href="https://www.google.com/maps/place/MHK+Education+and+Consultant/@-33.8478053,150.6023291,10z/data=!4m8!3m7!1s0x4552228663d69203:0x71cd4997afc9a846!8m2!3d-33.8482439!4d150.9319747!9m1!1b1!16s%2Fg%2F11ld2cvxks?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D" 
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
};

export default ReviewsComponent;