import React, { useState } from "react";
import testimonials from "../testimonials";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";

const TestimonialSection = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(1);

  const handleChangeTestimonial = (direction) => {
    if (direction === "Next") {
      setTestimonialIndex((prevIndex) =>
        prevIndex < testimonials.length ? prevIndex + 1 : 1
      );
    } else if (direction === "Previous") {
      setTestimonialIndex((prevIndex) =>
        prevIndex > 1 ? prevIndex - 1 : testimonials.length
      );
    }
  };
  return (
    <div className="p-5">
      <div>
        <h2>What Clients Are Saying</h2>
      </div>
      <div
        className="flex items-center justify-between text-white py-5 bg-no-repeat bg-left bg-contain h-[200px]"
        style={{
          backgroundImage: "url('src/assets/icons/quote-left-100.png')",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
      >
        <div>
          <HiMiniChevronLeft
            color="white"
            size={24}
            onClick={() => handleChangeTestimonial("Previous")}
          />
        </div>
        {testimonials
          .filter((testimonial) => testimonial.id === testimonialIndex)
          .map((item) => (
            <div className="p-5" key={item.id}>
              <p>{item.feedback}</p>
              <p className="font-bold text-primary">{item.name}</p>
              <p className="text-white/50">{item.role}</p>
            </div>
          ))}
        <div>
          <HiMiniChevronRight
            color="white"
            size={24}
            onClick={() => handleChangeTestimonial("Next")}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
