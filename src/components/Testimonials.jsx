import React, { useState, useEffect, useRef } from 'react'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      quote: "Very patient and understanding! Nick makes sure that you're completely pleased with the end result and is super friendly and professional. Always love working with Nick. He easily understands your vision and the communication and quality is always amazing! Highly recommend!",
      author: "Soki Yue, indie pop artist"
    },
    {
      id: 2,
      quote: "Nick was exceptional, not only for his mastering/mixing skills but also his friendly, organized and professional manner. He understood the assignment, what we wanted from our project, and used his creativity to really bring the most out of our song. Would highly recommend.",
      author: "inotherwords, indie band"
    },
    {
      id: 3,
      quote: "Nick did a great mix of my song! He was very easy to deal with and delivered my revisions with a quick turnaround. He had some really good ideas for reverb/delay throws to add some interest, and helped add in an extra synth part to complete the song. He made the guitars sound amazing too! I'm so happy with the final mix! I will definitely be getting Nick to mix more songs and highly recommend him.",
      author: "Ben Camden, artist"
    },
    {
      id: 4,
      quote: "Nick did a solid job mastering my track! He turned it around super quick, was open and responsive to my questions/requests, and seemed pretty knowledgable about the whole process. A pleasure to work with!",
      author: "Josh Elson, indie artist"
    },
    {
      id: 5,
      quote: "Nick is amazing! He is super easy to communicate with regarding the project and always gets back to me promptly. He is also always super helpful with any questions I ever have about my DAW. I'm always super happy with the quality of my music after working with him!",
      author: "DANE, indie pop artist"
    },
    {
      id: 6,
      quote: "I strongly recommend working with Nick! We've collaborated on multiple projects and he always goes above and beyond expectations, bringing a level of dedication and professionalism that truly sets him apart. I 10/10 recommend him!",
      author: "Melanie Gillott, pop artist"
    },
    {
      id: 7,
      quote: "Nick is awesome to work with! Very efficient and easy to communicate with. Works hard to ensure you are happy with the product and will help to achieve your vision working on a full album project. Would highly recommend Nick!",
      author: "Jordon Hudson, indie artist"
    },
    {
      id: 8,
      quote: "Nick is a true pro. He understands what it takes to bring a song to life and shows immense dedication when mixing a project. His turnaround time is very quick but that doesn't take away from his attention to detail. Definitely recommend.",
      author: "Kenton Edward, music producer"
    },
    {
      id: 9,
      quote: "Nick is a great mixing engineer! He gave so much life and warmth to my song in a matter of days. It was so easy to communicate my ideas and he implemented them with ease. Highly recommended!",
      author: "Sebastien R., indie artist"
    },
    {
      id: 10,
      quote: "Working with Nick was a pleasure. He has excellent attention to detail and delivers very quickly. He was easy to work with and made the process enjoyable. I highly recommend him to anyone looking for a skilled and dedicated engineer.",
      author: "Leonardo G., indie pop artist"
    }
  ]

  // Adjust bottom padding based on content height
  const adjustPadding = () => {
    if (containerRef.current) {
      const currentTestimonialSlide = containerRef.current.children[0].children[currentSlide]
      if (currentTestimonialSlide) {
        const testimonialContent = currentTestimonialSlide.querySelector('.testimonial-content')
        if (testimonialContent) {
          const contentHeight = testimonialContent.scrollHeight
          // Calculate padding: shorter content gets more padding, longer content gets less
          // Base padding of 40px, reduced by 1px for every 10px of content height over 200px
          const basePadding = 40
          const heightThreshold = 200
          const paddingReduction = Math.max(0, (contentHeight - heightThreshold) / 10)
          const bottomPadding = Math.max(10, basePadding - paddingReduction)
          
          console.log(`Testimonial ${currentSlide + 1}: height=${contentHeight}px, padding=${bottomPadding}px`)
          currentTestimonialSlide.style.paddingBottom = `${bottomPadding}px !important`
        }
      }
    }
  }

  // Auto-rotate testimonials every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  // Adjust padding when slide changes
  useEffect(() => {
    // Small delay to ensure DOM is updated
    setTimeout(adjustPadding, 50)
  }, [currentSlide])

  // Initial padding adjustment on mount
  useEffect(() => {
    setTimeout(adjustPadding, 100)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-slider">
          <button className="slider-arrow arrow-left" onClick={goToPrevious}>
            <span>‹</span>
          </button>
          
          <div className="testimonials-container" ref={containerRef}>
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-content">
                    <blockquote>
                      "{testimonial.quote}"
                    </blockquote>
                    <cite>— {testimonial.author}</cite>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="slider-arrow arrow-right" onClick={goToNext}>
            <span>›</span>
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials