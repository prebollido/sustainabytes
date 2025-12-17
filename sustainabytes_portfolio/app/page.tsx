"use client";

import Image from "next/image";
import { getImagePath } from "../utils/imagePath";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

import Intro from "./intro";
import Data from "./data";
import Method from "./methods";
import Discussion from "./discussion";
import Conclusion from "./conclusion";
import About from "./about";

const navLinks = [
  { label: "Home", href: "#intro" },
  { label: "Data", href: "#data" },
  { label: "Methodology", href: "#methodology" },
  { label: "Discussion", href: "#discussion" },
  { label: "Conclusion", href: "#conclusion" },
  { label: "About", href: "#team" },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const totalSections = 6;

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < totalSections && !isScrolling) {
      setIsScrolling(true);
      setCurrentSection(index);
      
      const section = sectionRefs.current[index];
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  const scrollToTop = () => {
    const section = sectionRefs.current[0];
    if (section) {
      section.scrollTop = 0;
    }
    scrollToSection(0);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Don't prevent default - let browser handle smooth scrolling
      const section = sectionRefs.current[currentSection];
      if (!section) return;

      const hasScroll = section.scrollHeight > section.clientHeight;
      const scrollTop = section.scrollTop;
      const scrollHeight = section.scrollHeight;
      const clientHeight = section.clientHeight;
      
      const isAtTop = scrollTop <= 1;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if (e.deltaY > 0) {
        // Scrolling down
        if (hasScroll && !isAtBottom) {
          // Has content to scroll - let browser handle it naturally
          return;
        } else if (isAtBottom || !hasScroll) {
          // At bottom or no scroll needed, go to next section
          e.preventDefault();
          if (currentSection < totalSections - 1 && !isScrolling) {
            scrollToSection(currentSection + 1);
          }
        }
      } else {
        // Scrolling up
        if (hasScroll && !isAtTop) {
          // Has content to scroll - let browser handle it naturally
          return;
        } else if (isAtTop || !hasScroll) {
          // At top or no scroll needed, go to previous section
          e.preventDefault();
          if (currentSection > 0 && !isScrolling) {
            scrollToSection(currentSection - 1);
          }
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSection < totalSections - 1) {
          scrollToSection(currentSection + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSection > 0) {
          scrollToSection(currentSection - 1);
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSection(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSection(totalSections - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling]);

  // Handle navigation clicks
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const sectionMap: { [key: string]: number } = {
        '#intro': 0,
        '#data': 1,
        '#methodology': 2,
        '#discussion': 3,
        '#conclusion': 4,
        '#team': 5,
      };
      
      if (hash && sectionMap[hash] !== undefined) {
        const targetIndex = sectionMap[hash];
        scrollToSection(targetIndex);
      }
    };

    // Handle link clicks directly
    const navLinks = document.querySelectorAll('#ribbon a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (href) {
          window.location.hash = href;
          handleHashChange();
        }
      });
    });

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="h-screen overflow-hidden"
    >
      <div id="ribbon" className="fixed top-0 left-0 z-20">
        <Image src={getImagePath("/brand.svg")} width={200} height={200} alt="logo" className="p-5"/>
      </div>

      <div ref={(el) => {sectionRefs.current[0] = el;}} className="h-screen overflow-y-auto slide-scroll">
        <Intro />
      </div>
      
      <div ref={(el) => {sectionRefs.current[1] = el;}} className="h-screen pt-30 overflow-y-auto slide-scroll">
        <Data />
      </div>
      
      <div ref={(el) => {sectionRefs.current[2] = el;}} className="h-screen pt-30 overflow-y-auto slide-scroll">
        <Method />
      </div>
      
      <div ref={(el) => {sectionRefs.current[3] = el;}} className="h-screen pt-30 overflow-y-auto slide-scroll">
        <Discussion />
      </div>
      
      <div ref={(el) => {sectionRefs.current[4] = el;}} className="h-screen pt-25 overflow-y-auto slide-scroll">
        <Conclusion />
      </div>
      
      <div ref={(el) => {sectionRefs.current[5] = el;}} className="h-screen overflow-y-auto slide-scroll">
        <About />
      </div>
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 font-quicksand font-bold text-[20px] mx-6 my-3 transition delay-150 z-30">
        <Image src={getImagePath("/up-arrow.png")} width={30} height={30} alt="arrow" />
      </button>

      {/* Section indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 flex flex-col gap-3">
        {Array.from({ length: totalSections }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSection === i ? 'bg-teal-600 scale-125' : 'bg-gray-400 hover:bg-gray-300'
            }`}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}