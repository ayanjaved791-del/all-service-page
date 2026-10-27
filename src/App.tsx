import React, { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  CheckCircle2,
  ArrowUpRight,
  Check,
} from "lucide-react";
import {
  HERO_DATA,
  SERVICES_ITEMS,
  STRATEGY_DATA,
  type ServiceItem,
} from "./data/ourServicesData";
import { cn } from "./lib/utils";

const CALENDLY = "https://calendly.com/six2eight-sales/web-discovery-call";

// Dropdown sub-services
const dropdownMenuServices = [
  {
    category: "Design Services",
    items: [
      {
        title: "UI & UX Design Services",
        desc: "Web & Mobile app design",
        href: "#service-741",
        icon: "https://cms.six2eight.com/wp-content/uploads/2026/07/ui-ux-design.svg",
      },
      {
        title: "Web Design Services",
        desc: "Modern websites that convert.",
        href: "#service-189",
        icon: "https://cms.six2eight.com/wp-content/uploads/2026/07/web-design.svg",
      },
      {
        title: "Mobile App Design Services",
        desc: "Seamless iOS & Android design.",
        href: "#service-188",
        icon: "https://cms.six2eight.com/wp-content/uploads/2026/07/mobile-app.svg",
      },
      {
        title: "Branding Identity & Design",
        desc: "Identity that stands out.",
        href: "#service-183",
        icon: "https://cms.six2eight.com/wp-content/uploads/2026/07/branding.svg",
      },
    ],
  },
  {
    category: "Development Services",
    items: [
      {
        title: "Web Development Services",
        desc: "Built for speed & growth.",
        href: "#service-759",
        icon: "https://cms.six2eight.com/wp-content/uploads/2026/07/web-development.svg",
      },
      {
        title: "WordPress Development Services",
        desc: "Easy to manage & scale.",
        href: "#service-185",
        icon: "https://cms.six2eight.com/wp-content/uploads/2026/07/wordpress-1.svg",
      },
      {
        title: "Shopify Development Services",
        desc: "Sell more with Shopify.",
        href: "#service-184",
        icon: "https://cms.six2eight.com/wp-content/uploads/2026/07/shopify-1.svg",
      },
      {
        title: "Webflow Development Company",
        desc: "Custom sites, no compromises.",
        href: "#service-186",
        icon: "https://cms.six2eight.com/wp-content/uploads/2026/07/webflow-1.svg",
      },
    ],
  },
];

// Testimonials matching Screenshot 2
const horizontalTestimonials = [
  {
    id: 1,
    company: "DailyTime",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/03/Container-9.webp",
    rating: "5.0 ★",
    headline: "Really good experience overall.",
    quote:
      "Responses were fast, things didn’t get messy, and the process actually made sense. You don’t always get that with designers, so it was refreshing.",
  },
  {
    id: 2,
    company: "GunMade",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/06/Container-7.webp",
    rating: "5.0 ★",
    headline: "The designers had some solid ideas and didn't just hand us one option.",
    quote:
      "They explained things in plain English, which made choices easy. Felt like a real collaboration, not a cookie-cutter process.",
  },
  {
    id: 3,
    company: "Vizerto",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/03/Container-8.webp",
    rating: "5.0 ★",
    headline: "Sean and the six2eight crew were super flexible.",
    quote:
      "They made sure the app felt simple to use without losing any of the bells and whistles. Everything just worked better after their touch.",
  },
  {
    id: 4,
    company: "Storytime Owls",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/06/Story.webp",
    rating: "5.0 ★",
    headline: "Honestly, working with this team was way easier than we expected.",
    quote:
      "They actually get how users think, and the onboarding ended up feeling really smooth. We liked it so much we’re already planning the next round of changes.",
  },
  {
    id: 5,
    company: "Fiction Profits",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/12/Container-10.webp",
    rating: "5.0 ★",
    headline: "Got exactly what we needed, on time.",
    quote:
      "Communication was easy and we didn’t have to chase anyone. It’s nice when a project just clicks like that.",
  },
];

// FAQs matching Screenshot 3
const exactFaqs = [
  {
    q: "What UI/UX design services does six2eight provide?",
    a: "We provide complete UX and UI design services for web, SaaS, and mobile products. This includes user research, wireframing, prototyping, usability testing, and polished UI design. We also create scalable design systems that ensure consistency across products and platforms. Our goal is to deliver intuitive, conversion-driven designs that drive growth and engagement.",
  },
  {
    q: "How does six2eight approach user-centered design?",
    a: "We follow a human-centered design process focused on real user needs and behaviors. We conduct detailed user research, competitor analysis, and usability testing before making design decisions. We continuously gather user feedback and iterate on designs based on real-world interactions and outcomes. The result is an intuitive and accessible experience that aligns with user expectations and business objectives.",
  },
  {
    q: "What industries does six2eight specialize in?",
    a: "Our team has expertise across SaaS, fintech, healthcare, eCommerce, and enterprise platforms. We understand the unique challenges and user needs within each industry we serve. We tailor every UX/UI solution to align with specific industry goals and audience expectations. Our work delivers digital experiences that feel seamless and deliver measurable business results.",
  },
  {
    q: "How does six2eight balance UI/UX design with technical development?",
    a: "We align design and development from the start through close collaboration between both teams. Our designers create interfaces with development feasibility and performance in mind from day one. Developers provide ongoing input during design phases to ensure seamless implementation and technical excellence. This process delivers visually beautiful, high-performing websites that meet both design and code standards.",
  },
  {
    q: "What is six2eight’s process for building high-performing websites?",
    a: "Our process starts with UX strategy, research, and wireframing based on user insights. We then move to detailed UI design aligned with brand guidelines and usability best practices. Our development team builds the site with clean, optimized code for speed and SEO. Finally, we test extensively before launch to ensure flawless performance across all devices and browsers.",
  },
  {
    q: "How long does a typical website design and development project take?",
    a: "Project timelines typically range from 8 to 12 weeks, depending on project complexity and scope. We begin with in-depth discovery and research to align strategy with business and user goals. Our agile workflow allows flexibility while maintaining clear milestones and predictable delivery timelines. This ensures high-quality outcomes with realistic project schedules that meet client expectations.",
  },
  {
    q: "How does six2eight ensure quality during development?",
    a: "We conduct thorough QA testing on all browsers, screen sizes, and device types before launch. Performance optimization, accessibility compliance, and cross-browser compatibility are key parts of our QA process. We also involve stakeholders in testing through user acceptance tests to validate functionality and usability. This ensures every product we deliver performs reliably and provides an exceptional user experience.",
  },
  {
    q: "Does six2eight provide post-launch optimization and support?",
    a: "Yes, we offer ongoing optimization, UX improvements, and support after the project launch. We help monitor site performance using analytics and user behavior insights to guide improvements. Our team refines design elements and functionality based on evolving user needs and feedback. This approach keeps your website competitive, high-performing, and aligned with your business growth goals.",
  },
];

// Contact left card testimonials matching Screenshot 4
const contactSliderQuotes = [
  {
    initial: "C",
    company: "Core & More",
    headline: "15 years in business and I rarely say this, but this team nailed it.",
    body: "Issues were fixed fast, and the work was solid. Will definitely reach out for the next project.",
    logo: "https://cms.six2eight.com/wp-content/uploads/2025/12/Container-11.webp",
  },
  {
    initial: "D",
    company: "DailyTime",
    headline: "Really good experience overall.",
    body: "Responses were fast, things didn’t get messy, and the process actually made sense. You don’t always get that with designers, so it was refreshing.",
    logo: "https://cms.six2eight.com/wp-content/uploads/2025/03/Container-9.webp",
  },
  {
    initial: "F",
    company: "Fiction Profits",
    headline: "Got exactly what we needed, on time.",
    body: "Communication was easy and we didn’t have to chase anyone. It’s nice when a project just clicks like that.",
    logo: "https://cms.six2eight.com/wp-content/uploads/2025/12/Container-10.webp",
  },
  {
    initial: "G",
    company: "GunMade",
    headline: "The designers had some solid ideas and didn't just hand us one option.",
    body: "They explained things in plain English, which made choices easy. Felt like a real collaboration, not a cookie-cutter process.",
    logo: "https://cms.six2eight.com/wp-content/uploads/2025/06/Container-7.webp",
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);

  // Accordion state for services
  const [expandedPoints, setExpandedPoints] = useState<Record<string, boolean>>({
    "759-0": true,
  });

  // Video state
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Testimonials carousel track
  const testimonialsTrackRef = useRef<HTMLDivElement>(null);
  const [testimonialsProgress, setTestimonialsProgress] = useState(0);

  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Contact form state matching Screenshot 4 & image_9f61b00e.png
  const [contactSlide, setContactSlide] = useState(0);
  const [selectedBudget, setSelectedBudget] = useState("$1k to 10k");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Web Development",
  ]);
  const [secondaryServiceLabel, setSecondaryServiceLabel] = useState("Wo ...");
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const serviceDropdownRef = useRef<HTMLDivElement>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const contactServiceOptions = [
    "Web Development",
    "WordPress Development",
    "UI & UX Design",
    "SaaS Product Design",
    "Shopify Development",
    "Webflow Development",
    "Branding Identity",
    "Mobile App Design",
  ];

  const removeContactService = (service: string) => {
    setSelectedServices((prev) => prev.filter((s) => s !== service));
  };

  const toggleContactService = (service: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(service)) {
        return prev.filter((s) => s !== service);
      } else {
        return [...prev, service];
      }
    });
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServiceDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isVideoMuted;
    setIsVideoMuted(!isVideoMuted);
  };

  const togglePointExpand = (key: string) => {
    setExpandedPoints((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const scrollTestimonials = (direction: "left" | "right") => {
    const el = testimonialsTrackRef.current;
    if (!el) return;
    const amount = 380;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleTestimonialsScroll = () => {
    const el = testimonialsTrackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setTestimonialsProgress(0);
      return;
    }
    const current = (el.scrollLeft / maxScroll) * 100;
    setTestimonialsProgress(Math.min(100, Math.max(0, current)));
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff] font-sans antialiased selection:bg-[#9AFD0D] selection:text-black">
      {/* =========================================================================
          SITE HEADER
          ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
        <div className="container mx-auto px-4 md:px-0 pt-4 md:pt-6 text-center">
          <div
            className={cn(
              "inline-flex items-center rounded-full p-2.5 md:p-3 md:pl-6 backdrop-blur-md transition-all duration-300 border",
              scrolled
                ? "bg-[#111111]/90 border-[#222321] shadow-2xl"
                : "bg-[#111111]/80 border-[#222321]/60"
            )}
          >
            <div className="flex items-center justify-between w-full lg:w-auto lg:gap-14">
              <a href="#top" className="flex items-center" aria-label="six2eight home">
                <OfficialSix2EightLogo />
              </a>

              <nav className="hidden lg:flex items-center gap-1.5">
                {/* Services Dropdown */}
                <div
                  className="relative group/nav"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <a
                    href="#services"
                    className="relative inline-flex items-center gap-1.5 px-4 py-2.5 text-[15px] font-medium transition-colors text-[#929292] hover:text-[#9AFD0D] cursor-pointer"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-200",
                        dropdownOpen && "rotate-180 text-[#9AFD0D]"
                      )}
                    />
                  </a>

                  <div
                    className={cn(
                      "absolute left-1/2 top-full -translate-x-1/2 pt-4 w-[680px] z-50 transition-all duration-200",
                      dropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="rounded-3xl border border-white/10 bg-[#14161e]/98 p-6 shadow-2xl backdrop-blur-2xl text-left">
                      <div className="grid grid-cols-2 gap-8">
                        {dropdownMenuServices.map((col) => (
                          <div key={col.category}>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[#9AFD0D] mb-4">
                              {col.category}
                            </h4>
                            <div className="space-y-3">
                              {col.items.map((it) => (
                                <a
                                  key={it.title}
                                  href={it.href}
                                  onClick={() => setDropdownOpen(false)}
                                  className="group/item flex items-center gap-3 p-2 rounded-xl transition-colors hover:bg-white/5"
                                >
                                  <div className="size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <img src={it.icon} alt="" className="size-5" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <h5 className="text-sm font-semibold text-white group-hover/item:text-[#9AFD0D] transition-colors truncate">
                                      {it.title}
                                    </h5>
                                    <p className="text-xs text-white/50 truncate">{it.desc}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#strategy"
                  className="inline-flex items-center gap-1 px-4 py-2.5 text-[15px] font-medium transition-colors text-[#929292] hover:text-[#9AFD0D]"
                >
                  Strategy
                </a>
                <a
                  href="#testimonials"
                  className="inline-flex items-center gap-1 px-4 py-2.5 text-[15px] font-medium transition-colors text-[#929292] hover:text-[#9AFD0D]"
                >
                  Reviews
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center gap-1 px-4 py-2.5 text-[15px] font-medium transition-colors text-[#929292] hover:text-[#9AFD0D]"
                >
                  FAQs
                </a>
              </nav>

              <div className="header-button">
                <a
                  href="#contact"
                  className="inline-block rounded-full bg-white hover:bg-[#9AFD0D] text-[#111111] font-bold text-sm sm:text-base px-6 py-2.5 transition-colors duration-300 shadow-md"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section
        id="top"
        className="pt-[110px] sm:pt-[130px] md:pt-[160px] pb-[20px] sm:pb-[24px] md:pb-[24px] bg-[#111111] relative"
      >
        <div className="container mx-auto px-[16px] 2xl:px-0 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] md:gap-[48px]">
            <div className="flex flex-col justify-start gap-[8px] md:gap-[16px] md:col-span-8">
              <h1 className="text-left text-[#fff] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.12] tracking-tight">
                Digital Product Design &amp; Web Development{" "}
                <span className="inline-flex align-middle mx-1 -translate-y-1">
                  <img
                    src="https://cms.six2eight.com/wp-content/uploads/2025/07/heading-icons.webp"
                    className="inline-block size-10 sm:size-14 md:size-16 lg:size-20 object-contain"
                    alt="heading icon"
                  />
                </span>{" "}
                Services!
              </h1>
            </div>

            <div className="flex flex-col justify-start gap-[8px] md:gap-[16px] md:col-span-4">
              <p className="text-left text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-[#B5B5B5]">
                {HERO_DATA.description}
              </p>
              <div className="mt-6 mb-4">
                <a
                  href="#contact"
                  className="inline-block px-7 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 bg-[#9AFD0D] hover:bg-white text-[#111111] shadow-lg"
                >
                  Reach Out to Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HERO VIDEO REEL
          ========================================================================= */}
      <section className="pt-[20px] sm:pt-[30px] pb-[40px] sm:pb-[60px] md:pb-[100px] bg-[#111111]">
        <div className="container mx-auto px-[16px] 2xl:px-0 max-w-7xl">
          <div className="relative aspect-video w-full rounded-[20px] md:rounded-[28px] overflow-hidden group shadow-2xl border border-white/10">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={HERO_DATA.videoUrl}
              poster={HERO_DATA.posterUrl}
              preload="metadata"
              muted={isVideoMuted}
              autoPlay
              loop
              playsInline
            />

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleVideoPlay}
                  className="size-10 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
                  aria-label={isVideoPlaying ? "Pause Video" : "Play Video"}
                >
                  {isVideoPlaying ? <Pause className="size-4" /> : <Play className="size-4 fill-white ml-0.5" />}
                </button>
                <button
                  onClick={toggleVideoMute}
                  className="size-10 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
                  aria-label={isVideoMuted ? "Unmute" : "Mute"}
                >
                  {isVideoMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
                </button>
              </div>
              <span className="text-xs text-white/70 font-semibold bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
                six2eight Showreel
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES LIST (Alternating Light & Dark Rows with Video Behavior)
          ========================================================================= */}
      <section id="services" className="relative">
        {SERVICES_ITEMS.map((service) => {
          const isDark = service.theme === "dark";

          return (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className={cn(
                "py-20 sm:py-24 lg:py-28 border-t transition-colors",
                isDark
                  ? "bg-[#0c0d10] text-white border-white/10"
                  : "bg-white text-black border-[#e5e7eb]"
              )}
            >
              <div className="container mx-auto px-[16px] 2xl:px-0 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  {/* Left Column */}
                  <div className="lg:col-span-7">
                    <h2
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      className={cn(
                        "text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.18]",
                        isDark ? "text-white" : "text-black"
                      )}
                    >
                      {service.title}
                    </h2>

                    <p
                      className={cn(
                        "mt-4 mb-8 text-sm sm:text-base leading-relaxed max-w-xl",
                        isDark ? "text-white/70" : "text-[#4b5563]"
                      )}
                    >
                      {service.excerpt}
                    </p>

                    {/* Accordion List with circular +/- buttons */}
                    {service.points && service.points.length > 0 && (
                      <div className="space-y-0">
                        {service.points.map((point, idx) => {
                          const pointKey = `${service.id}-${idx}`;
                          const isOpen = !!expandedPoints[pointKey];

                          return (
                            <div
                              key={idx}
                              className={cn(
                                "border-b transition-colors",
                                isDark ? "border-white/10" : "border-[#e5e7eb]"
                              )}
                            >
                              <button
                                type="button"
                                onClick={() => togglePointExpand(pointKey)}
                                className="w-full py-4 text-left flex items-center justify-between gap-4 cursor-pointer group select-none"
                              >
                                <span
                                  className={cn(
                                    "text-base sm:text-[17px] font-semibold transition-colors",
                                    isDark
                                      ? "text-white group-hover:text-[#9AFD0D]"
                                      : "text-black group-hover:text-neutral-800"
                                  )}
                                >
                                  {point.title}
                                </span>
                                <span
                                  className={cn(
                                    "size-6 sm:size-7 rounded-full border flex items-center justify-center font-bold text-sm shrink-0 transition-all",
                                    isDark
                                      ? "border-white/20 text-white/70 group-hover:border-white group-hover:text-white"
                                      : "border-neutral-300 text-neutral-600 group-hover:border-black group-hover:text-black",
                                    isOpen &&
                                      (isDark
                                        ? "bg-white text-black border-white"
                                        : "bg-black text-white border-black")
                                  )}
                                >
                                  {isOpen ? "−" : "+"}
                                </span>
                              </button>

                              {isOpen && (
                                <div
                                  className={cn(
                                    "pt-1 pb-4 text-sm leading-relaxed pr-8 animate-in fade-in duration-200",
                                    isDark ? "text-white/70" : "text-[#4b5563]"
                                  )}
                                >
                                  {point.content}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    <div>
                      <button
                        type="button"
                        onClick={() => setActiveServiceModal(service)}
                        className="mt-8 inline-flex items-center justify-center rounded-full bg-[#9AFD0D] hover:bg-[#8cee05] text-black px-7 py-3 text-xs sm:text-sm font-bold transition-transform hover:scale-105 active:scale-95 shadow-xs cursor-pointer font-['Inter']"
                      >
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Image */}
                  <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
                    <div
                      className={cn(
                        "relative w-full max-w-[500px] aspect-[4/3] sm:aspect-square lg:aspect-[4/3] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)]",
                        isDark ? "bg-[#14161e] border border-white/10" : "bg-neutral-100"
                      )}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* =========================================================================
          SCREENSHOT 1: STRATEGY SECTION (100% Exact match to Screenshot_2026-10-27_141542_2454e8da.png)
          ========================================================================= */}
      <section id="strategy" className="bg-[#000000] py-20 sm:py-28 lg:py-36 relative border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Top Pill Badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#6060603D] px-4 py-1.5 text-xs font-semibold text-white tracking-wide">
              <span className="size-2 rounded-full bg-[#9AFD0D]" />
              Strategy
            </span>
          </div>

          {/* Main Title */}
          <h2
            className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white text-center leading-[1.14] max-w-3xl mx-auto mb-16 font-['Inter']"
          >
            Why choose us for your UI UX design &amp;
            <br />
            web development needs?
          </h2>

          {/* 6 Cards Grid (3x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRATEGY_DATA.items.map((card, idx) => (
              <div
                key={idx}
                className="rounded-[24px] border border-white/10 bg-white/5 p-7 sm:p-8 flex flex-col justify-between min-h-[340px] transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07]"
              >
                <div>
                  <h3
                    className="text-2xl sm:text-[28px] font-medium text-white leading-tight tracking-tight whitespace-pre-line font-['Inter']"
                  >
                    {card.heading}
                  </h3>
                </div>

                {/* Animated Graphic Center */}
                <div className="my-auto py-6 flex items-center justify-center bg-transparent">
                  {card.videoUrl ? (
                    <video
                      src={card.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-28 sm:h-32 w-auto object-contain pointer-events-none mix-blend-screen contrast-[1.35]"
                    />
                  ) : (
                    <div className="size-20 rounded-full bg-transparent flex items-center justify-center text-[#9AFD0D]">
                      <Sparkles className="size-8" />
                    </div>
                  )}
                </div>

                <p className="text-sm sm:text-[15px] text-[#929292] leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREENSHOT 2: TESTIMONIALS SECTION (100% Exact match to Screenshot_2026-10-27_141553_af51b91d.png)
          ========================================================================= */}
      <section
        id="testimonials"
        className="bg-white text-black py-20 sm:py-28 overflow-hidden select-none"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Main Title Centered */}
          <h2
            className="text-3xl sm:text-4xl lg:text-[54px] font-bold tracking-tight text-black text-center mb-16 leading-[1.14] font-['Inter']"
          >
            150+ projects done with
            <br />
            5.0 ★ AVG
          </h2>

          {/* Horizontal Drag/Scroll Carousel Track */}
          <div
            ref={testimonialsTrackRef}
            onScroll={handleTestimonialsScroll}
            className="flex gap-6 overflow-x-auto pb-4 pt-1 cursor-grab active:cursor-grabbing no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {horizontalTestimonials.map((item) => (
              <div
                key={item.id}
                className="w-[340px] sm:w-[380px] shrink-0 rounded-[24px] border border-[#E5E7EB] bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between min-h-[230px] transition-all hover:shadow-md"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full overflow-hidden border border-neutral-100 bg-neutral-100 shrink-0">
                        <img
                          src={item.avatar}
                          alt={item.company}
                          className="size-full object-cover"
                        />
                      </div>
                      <h4 className="text-base sm:text-[17px] font-semibold text-black tracking-tight font-['Inter']">
                        {item.company}
                      </h4>
                    </div>

                    <span className="text-xs sm:text-[13px] font-bold text-black font-['Inter']">{item.rating}</span>
                  </div>

                  <h5 className="text-base sm:text-[18px] font-semibold text-[#0C0C0C] mt-4 mb-2 leading-snug tracking-tight font-['Inter']">
                    {item.headline}
                  </h5>

                  <p className="text-sm sm:text-[15px] text-[#414141] leading-relaxed font-normal font-['Inter']">
                    {item.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls Row */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollTestimonials("left")}
                aria-label="Previous testimonials"
                className="size-10 rounded-full border border-neutral-300 bg-white text-black flex items-center justify-center hover:bg-neutral-100 hover:border-black active:scale-95 transition-all cursor-pointer shadow-xs"
              >
                <ArrowLeft className="size-4 stroke-[2]" />
              </button>
              <button
                type="button"
                onClick={() => scrollTestimonials("right")}
                aria-label="Next testimonials"
                className="size-10 rounded-full border border-neutral-300 bg-white text-black flex items-center justify-center hover:bg-neutral-100 hover:border-black active:scale-95 transition-all cursor-pointer shadow-xs"
              >
                <ArrowRight className="size-4 stroke-[2]" />
              </button>
            </div>

            {/* Slider Track Line */}
            <div className="relative h-[2px] w-full max-w-[500px] rounded-full bg-[#E5E7EB] overflow-hidden">
              <div
                className="absolute top-0 bottom-0 bg-black rounded-full transition-all duration-200"
                style={{
                  width: "25%",
                  left: `${(testimonialsProgress / 100) * 75}%`,
                }}
              />
            </div>
          </div>

          {/* Bottom Rating Summary */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-4xl sm:text-5xl font-bold text-black">5.0/5</span>
            <p className="text-xs sm:text-sm text-[#4A4A4A] leading-tight font-normal">
              Trusted by 100+ businesses for
              <br />
              exceptional design &amp; service.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREENSHOT 3: FAQS SECTION (100% Exact match to Screenshot_2026-10-27_141606_fc61bd45.png)
          ========================================================================= */}
      <section id="faq" className="bg-white text-black py-20 sm:py-28 border-t border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column (Sticky 3D Question Mark & CTA) */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <img
                  src="https://cms.six2eight.com/wp-content/uploads/2025/03/image-419.webp"
                  alt="FAQ support icon"
                  className="size-28 sm:size-36 object-contain mb-8"
                />

                <h3
                  className="text-3xl sm:text-4xl font-bold text-black leading-[1.16] mb-8 font-['Inter']"
                >
                  Clear answers
                  <br />
                  to move forward
                  <br />
                  confidently
                </h3>

                <a
                  href="#contact"
                  className="inline-block rounded-full bg-[#9AFD0D] hover:bg-[#8cee05] text-black font-bold px-6 py-2.5 text-sm shadow-xs transition-transform hover:scale-105 active:scale-95"
                >
                  See FAQs
                </a>
              </div>
            </div>

            {/* Right Column (Accordion Cards) */}
            <div className="lg:col-span-8">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#1C1A1A] px-3.5 py-1 text-xs font-semibold text-white">
                  <span className="size-2 rounded-full bg-[#9AFD0D]" />
                  FAQs
                </span>
              </div>

              <h2
                className="text-3xl sm:text-5xl font-bold tracking-tight text-black mb-8 leading-tight font-['Inter']"
              >
                Got Questions? Let’s
                <br />
                Clear Things Up.
              </h2>

              <div className="space-y-3.5">
                {exactFaqs.map((faq, i) => {
                  const isOpen = openFaqIndex === i;

                  return (
                    <div
                      key={i}
                      className="border border-[#E7E7E7] rounded-[16px] p-5 sm:p-6 transition-all bg-white hover:border-neutral-400"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        className="w-full flex items-center justify-between text-left cursor-pointer select-none"
                      >
                        <span className="text-base sm:text-[17px] font-semibold text-black pr-4 leading-snug">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={cn(
                            "size-4 text-neutral-500 transition-transform duration-200 shrink-0",
                            isOpen && "rotate-180 text-black"
                          )}
                        />
                      </button>

                      {isOpen && (
                        <div className="mt-4 pt-3 border-t border-neutral-100 text-sm text-[#4b5563] leading-relaxed animate-in fade-in duration-200">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREENSHOT 4: CONTACT & FOOTER (100% Exact match to Screenshot_2026-10-27_141623_a6a284c4.png)
          ========================================================================= */}
      <section id="contact" className="bg-[#000000] py-20 sm:py-28 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          {/* Floating Dual-Panel Contact Card */}
          <div className="rounded-[32px] overflow-hidden bg-white shadow-2xl flex flex-col lg:flex-row border border-neutral-200 mb-24">
            {/* Left Half: Testimonial Quote Showcase */}
            <div className="w-full lg:w-1/2 bg-[#f5f5f5] p-8 sm:p-12 flex flex-col justify-between text-black">
              <div>
                {/* Header initial & company */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="size-8 rounded-full bg-white flex items-center justify-center font-bold text-xs text-[#c05230] border border-neutral-200 font-['Inter']">
                    {contactSliderQuotes[contactSlide].initial}
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-neutral-900 font-['Inter']">
                    {contactSliderQuotes[contactSlide].company}
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-[30px] lg:text-[32px] font-semibold text-[#050414] leading-[1.3] mb-4 tracking-[-0.02em] font-['Inter']"
                >
                  {contactSliderQuotes[contactSlide].headline}
                </h3>

                <p className="text-sm sm:text-[16px] text-[#535862] leading-[1.6] font-normal font-['Inter']">
                  {contactSliderQuotes[contactSlide].body}
                </p>

                {/* Company Logo and Rating */}
                <div className="mt-10">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={contactSliderQuotes[contactSlide].logo}
                      alt=""
                      className="size-10 rounded-full object-cover border border-neutral-200"
                    />
                    <span className="font-semibold text-base sm:text-[18px] text-[#050414] font-['Inter']">
                      {contactSliderQuotes[contactSlide].company}
                    </span>
                  </div>

                  <div className="text-black text-sm tracking-widest font-bold mb-1 font-['Inter']">
                    ★★★★★
                  </div>
                  <p className="text-xs sm:text-[14px] text-neutral-800 leading-normal font-normal font-['Inter']">
                    200+ happy Customers based on complement and customer reviews
                  </p>
                </div>
              </div>

              {/* Progress Bar Indicators */}
              <div className="flex gap-2 mt-8">
                {contactSliderQuotes.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setContactSlide(i)}
                    className={cn(
                      "h-1 flex-1 rounded-full transition-all cursor-pointer",
                      i === contactSlide ? "bg-[#87e00c]" : "bg-neutral-300"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Right Half: Form */}
            <div className="w-full lg:w-1/2 bg-white p-8 sm:p-12 flex flex-col justify-between text-black font-['Inter']">
              {contactSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="size-16 rounded-full bg-[#9AFD0D]/30 text-black flex items-center justify-center mx-auto text-3xl font-black">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-black font-['Inter']">Inquiry Sent!</h3>
                  <p className="text-sm text-neutral-600 max-w-sm mx-auto font-['Inter']">
                    Thank you. We will review your project details and reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#1C1A1A] px-3.5 py-1 text-xs font-semibold text-white mb-3 font-['Inter']">
                      <span className="size-2 rounded-full bg-[#9AFD0D]" />
                      Get in Touch
                    </span>
                    <h3
                      className="text-2xl sm:text-[30px] lg:text-[34px] font-semibold text-[#050414] leading-tight tracking-tight font-['Inter']"
                    >
                      Let’s Talk About Your Project
                    </h3>
                    <p className="text-xs sm:text-sm text-[#414141] mt-1.5 font-normal font-['Inter']">
                      Tell us what you’re building. We design and build high-quality digital products globally.
                    </p>
                  </div>

                  {/* Hi, I'm & I need help with */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs sm:text-[13px] font-medium text-[#111111] mb-1.5 font-['Inter']">
                        Hi, I’m
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#f0f0f0] border border-transparent focus:border-black text-sm text-black outline-none transition-colors font-['Inter']"
                      />
                    </div>
                    <div className="relative" ref={serviceDropdownRef}>
                      <label className="block text-xs sm:text-[13px] font-medium text-[#111111] mb-1.5 font-['Inter']">
                        I need help with
                      </label>

                      {/* Multi-Select Chip Input matching image_9f61b00e.png */}
                      <div
                        onClick={() => setIsServiceDropdownOpen((prev) => !prev)}
                        className="w-full min-h-[44px] px-2.5 py-1.5 rounded-lg bg-[#f0f0f0] border border-transparent focus-within:border-black flex items-center flex-wrap gap-2 transition-colors cursor-pointer"
                      >
                        {selectedServices.map((service) => (
                          <span
                            key={service}
                            className="inline-flex items-center gap-1.5 bg-white border border-[#d1d5db] rounded-full px-3 py-1 text-xs sm:text-[13px] font-medium text-[#0066fe] shadow-[0_1px_2px_rgba(0,0,0,0.04)] select-none font-['Inter']"
                          >
                            <span>{service}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeContactService(service);
                              }}
                              className="text-neutral-500 hover:text-black transition-colors cursor-pointer p-0.5 rounded-full"
                              aria-label={`Remove ${service}`}
                            >
                              <X className="size-3 sm:size-3.5 stroke-[2.2]" />
                            </button>
                          </span>
                        ))}

                        {/* Dropdown trigger pill matching `Wo ... ⌵` */}
                        <div
                          className="inline-flex items-center gap-1.5 bg-white border border-[#d1d5db] rounded-full px-3 py-1 text-xs sm:text-[13px] font-medium text-[#0066fe] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-neutral-400 select-none font-['Inter'] transition-colors cursor-pointer"
                        >
                          <span>{secondaryServiceLabel}</span>
                          <ChevronDown
                            className={cn(
                              "size-3 sm:size-3.5 text-neutral-800 stroke-[2.2] transition-transform duration-200",
                              isServiceDropdownOpen && "rotate-180"
                            )}
                          />
                        </div>

                        {/* Hidden form select for form submission */}
                        <select
                          multiple
                          name="services"
                          value={selectedServices}
                          onChange={() => {}}
                          className="sr-only"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          {contactServiceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Dropdown Menu */}
                      {isServiceDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-neutral-200 rounded-xl shadow-xl z-50 p-2 max-h-60 overflow-y-auto space-y-1 font-['Inter'] animate-in fade-in zoom-in-95 duration-150">
                          {contactServiceOptions.map((option) => {
                            const isSelected = selectedServices.includes(option);
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleContactService(option);
                                  if (!isSelected && option.toLowerCase().startsWith("wo")) {
                                    setSecondaryServiceLabel("Wo ...");
                                  }
                                }}
                                className={cn(
                                  "w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs sm:text-[13px] text-left transition-colors cursor-pointer",
                                  isSelected
                                    ? "bg-blue-50 text-[#0066fe] font-semibold"
                                    : "text-[#222222] hover:bg-neutral-100 font-medium"
                                )}
                              >
                                <span>{option}</span>
                                {isSelected && (
                                  <Check className="size-4 text-[#0066fe] stroke-[2.5]" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs sm:text-[13px] font-medium text-[#111111] mb-1.5 font-['Inter']">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#f0f0f0] border border-transparent focus:border-black text-sm text-black outline-none transition-colors font-['Inter']"
                    />
                  </div>

                  {/* Budget range pills */}
                  <div>
                    <label className="block text-xs sm:text-[13px] font-medium text-[#111111] mb-2 font-['Inter']">
                      Budget range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["$1k to 10k", "$10k to 20k", "$20k to $50k", "$100k+"].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBudget(b)}
                          className={cn(
                            "px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all border cursor-pointer font-['Inter']",
                            selectedBudget === b
                              ? "bg-black text-white border-black font-semibold"
                              : "bg-white text-black border-neutral-300 hover:border-black"
                          )}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Additional info */}
                  <div>
                    <label className="block text-xs sm:text-[13px] font-medium text-[#111111] mb-1.5 font-['Inter']">
                      Additional info?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Goals, scope, timeline, or helpful links"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#f0f0f0] border border-transparent focus:border-black text-sm text-black outline-none transition-colors font-['Inter']"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#9AFD0D] hover:bg-[#8cee05] text-[#070707] font-semibold text-base sm:text-[17px] transition-transform hover:scale-[1.01] active:scale-95 shadow-md cursor-pointer font-['Inter']"
                  >
                    Get in Touch
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Footer Grid Matching Screenshot 4 */}
          <div className="border-t border-white/10 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14 pb-12">
              {/* Col 1: Headquarters */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E7E7E7] underline underline-offset-4 mb-4">
                  Headquarters
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  921 Town Centre Blvd, #266, Clayton
                  <br />
                  North Carolina 27520, US
                </p>

                <div className="flex gap-3 mt-6">
                  <a
                    href="https://dribbble.com/six2eight_agency"
                    target="_blank"
                    rel="noreferrer"
                    className="size-9 rounded-full bg-[#252528] flex items-center justify-center text-white/70 hover:text-[#9AFD0D] hover:bg-white/10 transition-colors"
                    aria-label="dribbble"
                  >
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M2.5 10.2031C2.5 11.188 2.69399 12.1633 3.0709 13.0732C3.44782 13.9832 4.00026 14.81 4.6967 15.5064C5.39314 16.2028 6.21993 16.7553 7.12987 17.1322C8.03982 17.5092 9.01508 17.7031 10 17.7031C10.9849 17.7031 11.9602 17.5092 12.8702 17.1322C13.7801 16.7553 14.6068 16.2028 15.3033 15.5064C15.9997 14.81 16.5522 13.9832 16.9291 13.0732C17.306 12.1633 17.5 11.188 17.5 10.2031C17.5 9.21825 17.306 8.24294 16.9291 7.333C16.5522 6.42306 15.9997 5.59626 15.3033 4.89982C14.6068 4.20338 13.7801 3.65093 12.8702 3.27402C11.9602 2.89712 10.9849 2.70312 10 2.70312C9.01508 2.70312 8.03982 2.89712 7.12987 3.27402C6.21993 3.65093 5.39314 4.20338 4.6967 4.89982C4.00026 5.59626 3.44782 6.42306 3.0709 7.333C2.69399 8.24294 2.5 9.21825 2.5 10.2031Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 3.20312C11.6667 8.20312 13.3333 11.9532 13.75 16.7032"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.32813 16.0416C8.24479 13.125 10.3281 10.625 17.4115 10.7083M2.57812 9.16663C6.74479 9.16663 10.7565 8.84996 15.3398 5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/_six2eight_"
                    target="_blank"
                    rel="noreferrer"
                    className="size-9 rounded-full bg-[#252528] flex items-center justify-center text-white/70 hover:text-[#9AFD0D] hover:bg-white/10 transition-colors"
                    aria-label="instagram"
                  >
                    <svg width="17" height="17" viewBox="0 0 18 19" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 0.25H5C2.23858 0.25 0 2.48858 0 5.25V13.2499C0 16.0113 2.23858 18.2499 5 18.2499H13C15.7614 18.2499 18 16.0113 18 13.2499V5.25C18 2.48858 15.7614 0.25 13 0.25ZM16.25 13.2499C16.2445 15.0425 14.7926 16.4944 13 16.4999H5C3.20735 16.4944 1.75549 15.0425 1.75 13.2499V5.25C1.75549 3.45735 3.20735 2.00549 5 2H13C14.7926 2.00549 16.2445 3.45735 16.25 5.25V13.2499ZM13.75 5.5C14.3023 5.5 14.75 5.05228 14.75 4.5C14.75 3.94772 14.3023 3.5 13.75 3.5C13.1977 3.5 12.75 3.94772 12.75 4.5C12.75 5.05228 13.1977 5.5 13.75 5.5ZM9 4.75C6.51472 4.75 4.5 6.76472 4.5 9.24995C4.5 11.7353 6.51472 13.7499 9 13.7499C11.4853 13.7499 13.5 11.7353 13.5 9.24995C13.5027 8.05565 13.0294 6.90957 12.1849 6.06508C11.3404 5.22059 10.1943 4.74734 9 4.75ZM6.25 9.24995C6.25 10.7688 7.4812 12 9 12C10.5188 12 11.75 10.7688 11.75 9.24995C11.75 7.73115 10.5188 6.5 9 6.5C7.4812 6.5 6.25 7.73115 6.25 9.24995Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://www.behance.net/six2eight_agency"
                    target="_blank"
                    rel="noreferrer"
                    className="size-9 rounded-full bg-[#252528] flex items-center justify-center text-white/70 hover:text-[#9AFD0D] hover:bg-white/10 transition-colors"
                    aria-label="behance"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10.097 11.323c.548-.226.968-.58 1.226-1s.419-.968.419-1.549c0-.548-.097-1.032-.258-1.451c-.194-.42-.452-.742-.807-.968a3.5 3.5 0 0 0-1.225-.516A8.5 8.5 0 0 0 7.87 5.71H2v12.258h5.968c.548 0 1.097-.032 1.58-.226a4.1 4.1 0 0 0 1.42-.645c.42-.258.742-.645.967-1.129c.226-.452.355-1 .355-1.645c0-.774-.193-1.452-.548-1.968c-.387-.452-.936-.806-1.645-1.032M4.742 7.839H7.29c.226 0 .452.032.678.032s.451.13.58.226a.83.83 0 0 1 .42.452c.097.193.129.419.129.742c0 .483-.13.903-.452 1.129a2.35 2.35 0 0 1-1.193.322h-2.71zm4.71 7.258c-.097.226-.226.355-.452.484c-.194.129-.42.226-.645.226c-.226.032-.484.032-.742.032H4.71v-3.323h2.967c.581 0 1.033.13 1.42.42c.355.258.548.742.548 1.355c-.064.322-.064.58-.193.806m12.355-2.903c-.13-.645-.42-1.194-.775-1.678a4.4 4.4 0 0 0-1.355-1.193a4.65 4.65 0 0 0-1.967-.452c-.678 0-1.323.13-1.807.355a4.05 4.05 0 0 0-1.451 1c-.42.42-.742.903-.968 1.484a5 5 0 0 0-.355 1.87c0 .678.097 1.323.323 1.904c.225.58.548 1.032.903 1.484c.42.42.87.742 1.451.968a5 5 0 0 0 1.904.355c1 0 1.87-.226 2.58-.678c.742-.451 1.226-1.226 1.581-2.322h-2.13c-.096.258-.322.548-.644.774c-.323.226-.774.355-1.258.355c-.678 0-1.226-.194-1.58-.549c-.356-.355-.582-1.032-.582-1.742H22c0-.677-.032-1.355-.194-1.935m-6.259.42c0-.227.097-.453.162-.646c.096-.226.193-.452.354-.613c.194-.194.452-.387.71-.516c.258-.13.58-.13.871-.13c.58 0 1.097.194 1.355.485c.258.322.484.774.548 1.42zm4.485-6.065h-5v1.225h5z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/six2eight"
                    target="_blank"
                    rel="noreferrer"
                    className="size-9 rounded-full bg-[#252528] flex items-center justify-center text-white/70 hover:text-[#9AFD0D] hover:bg-white/10 transition-colors"
                    aria-label="linkedin"
                  >
                    <svg width="16" height="16" viewBox="0 0 17 17" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.83333 0H14.6667C15.6792 0 16.5 0.82081 16.5 1.83333V14.6667C16.5 15.6792 15.6792 16.5 14.6667 16.5H1.83333C0.82081 16.5 0 15.6792 0 14.6667V1.83333C0 0.82081 0.82081 0 1.83333 0ZM4.58333 13.75C4.83646 13.75 5.04167 13.5448 5.04167 13.2917V6.875C5.04167 6.62191 4.83646 6.41667 4.58333 6.41667H3.20833C2.9552 6.41667 2.75 6.62191 2.75 6.875V13.2917C2.75 13.5448 2.9552 13.75 3.20833 13.75H4.58333ZM3.89583 5.5C3.13644 5.5 2.52083 4.88439 2.52083 4.125C2.52083 3.36561 3.13644 2.75 3.89583 2.75C4.65523 2.75 5.27083 3.36561 5.27083 4.125C5.27083 4.88439 4.65523 5.5 3.89583 5.5ZM13.2917 13.75C13.5448 13.75 13.75 13.5448 13.75 13.2917V9.075C13.7798 7.6182 12.7028 6.37498 11.2567 6.19667C10.2456 6.10431 9.2659 6.57653 8.7083 7.425V6.875C8.7083 6.62191 8.5031 6.41667 8.25 6.41667H6.875C6.62191 6.41667 6.41667 6.62191 6.41667 6.875V13.2917C6.41667 13.5448 6.62191 13.75 6.875 13.75H8.25C8.5031 13.75 8.7083 13.5448 8.7083 13.2917V9.8542C8.7083 9.0948 9.324 8.4792 10.0833 8.4792C10.8427 8.4792 11.4583 9.0948 11.4583 9.8542V13.2917C11.4583 13.5448 11.6636 13.75 11.9167 13.75H13.2917Z"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/six2eight.agency"
                    target="_blank"
                    rel="noreferrer"
                    className="size-9 rounded-full bg-[#252528] flex items-center justify-center text-white/70 hover:text-[#9AFD0D] hover:bg-white/10 transition-colors"
                    aria-label="facebook"
                  >
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Col 2: Design Services */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E7E7E7] underline underline-offset-4 mb-4">
                  Design Services
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#929292]">
                  <li>
                    <a href="#services" className="hover:text-[#9AFD0D] transition-colors">
                      Web Design Services | Custom Website Design
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-[#9AFD0D] transition-colors">
                      Mobile App Design Services
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-[#9AFD0D] transition-colors">
                      SaaS Web &amp; App Design
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-[#9AFD0D] transition-colors">
                      Branding Identity and Design Services
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-[#9AFD0D] transition-colors">
                      Motion Graphics
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 3: Development Services */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E7E7E7] underline underline-offset-4 mb-4">
                  Development Services
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#929292]">
                  <li>
                    <a href="#services" className="hover:text-[#9AFD0D] transition-colors">
                      Web Development Services | Custom Website Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-[#9AFD0D] transition-colors">
                      WordPress Development Services
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-[#9AFD0D] transition-colors">
                      Shopify Development Services
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-[#9AFD0D] transition-colors">
                      Webflow Development Services Company
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 4: Company */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E7E7E7] underline underline-offset-4 mb-4">
                  Company
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#929292]">
                  <li>
                    <a href="#top" className="hover:text-[#9AFD0D] transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-[#9AFD0D] transition-colors">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials" className="hover:text-[#9AFD0D] transition-colors">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="#top" className="hover:text-[#9AFD0D] transition-colors">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#top" className="hover:text-[#9AFD0D] transition-colors">
                      Career
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-[#262525] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#929292] gap-4">
              <p>© 2026. six2eight. All rights reserved.</p>
              <div className="flex gap-6">
                <span className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </span>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Terms of use
                </span>
              </div>
            </div>

            {/* Giant Six2Eight Footer SVG Logo */}
            <div className="pt-12 sm:pt-16 lg:pt-24 select-none pointer-events-none">
              <img
                alt="six2eight"
                className="w-full opacity-90"
                src="https://cms.six2eight.com/wp-content/uploads/2025/03/six2eight-footer-logo.svg"
              />
            </div>
          </div>
        </div>

        {/* Ambient rotating subtle background illustration */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-10 w-[700px] max-w-full">
          <img
            src="https://cms.six2eight.com/wp-content/uploads/2025/11/footer_elements.webp"
            alt=""
            className="w-full h-auto animate-[spin_60s_linear_infinite]"
          />
        </div>
      </section>

      {/* =========================================================================
          SERVICE DETAIL MODAL
          ========================================================================= */}
      {activeServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#14161e] border border-white/15 p-6 sm:p-8 shadow-2xl text-white">
            <button
              onClick={() => setActiveServiceModal(null)}
              className="absolute top-6 right-6 size-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
            >
              <X className="size-4" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#9AFD0D]/10 text-[#9AFD0D] border border-[#9AFD0D]/30">
                {activeServiceModal.category}
              </span>
              <span className="text-xs text-white/50">Full Specification</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              {activeServiceModal.title}
            </h3>

            <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 bg-black/20">
              <img
                src={activeServiceModal.image}
                alt=""
                className="size-full object-cover"
              />
            </div>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
              {activeServiceModal.excerpt}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
                Deliverables &amp; Focus Areas
              </h4>
              <div className="space-y-2.5">
                {activeServiceModal.points.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-[#9AFD0D] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block mb-0.5">
                          {p.title}
                        </span>
                        <span className="text-white/70">{p.content}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
                className="pill px-5 py-3 bg-[#9AFD0D] hover:bg-[#8cee05] text-black font-bold text-xs flex items-center justify-center gap-2"
              >
                <span>Book Discovery Call</span>
                <ArrowUpRight className="size-3.5" />
              </a>

              <a
                href="#contact"
                onClick={() => setActiveServiceModal(null)}
                className="pill px-5 py-3 border border-white/15 bg-white/5 text-white hover:bg-white/10 font-medium text-xs text-center"
              >
                Start Inquiry
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function OfficialSix2EightLogo() {
  return (
    <svg
      width="68"
      height="48"
      viewBox="0 0 68 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 sm:h-12 w-auto"
    >
      <path
        fill="#ffffff"
        d="M14.98 29.31a7 7 0 0 0-2.78-2.84 8 8 0 0 0-4.01-1q-1.86 0-3.36.63a7 7 0 0 0-2.59 1.8 8 8 0 0 0-1.66 2.73 10 10 0 0 0-.58 3.4q0 2.62.94 4.54a7 7 0 0 0 2.8 2.97 9 9 0 0 0 4.54 1.06q1.79 0 3.28-.55 1.5-.54 2.57-1.73a8 8 0 0 0 1.68-3.15h-3.83q-.38.97-1.2 1.65-.8.7-2.47.7-1.38 0-2.35-.62a4 4 0 0 1-1.48-1.84 7 7 0 0 1-.45-2.04H16v-1.26q0-2.6-1.02-4.45M4.14 32.2l.13-.53q.28-1.02.84-1.72a3.7 3.7 0 0 1 3.08-1.41q.9 0 1.74.38.83.39 1.4 1.2t.68 2.08z"
      />
      <path
        fill="#ffffff"
        d="M36.21 25.86v2.15a5.5 5.5 0 0 0-2.11-1.88 7.6 7.6 0 0 0-6.02-.06q-1.35.6-2.26 1.67a8 8 0 0 0-1.42 2.5 9 9 0 0 0-.48 3.07q0 2.36.88 4.13a6.5 6.5 0 0 0 6.33 3.75 5.8 5.8 0 0 0 4.96-2.4v2.36q0 .68-.14 1.34t-.55 1.24-1.2.93-2.03.35-2.03-.34q-.75-.33-1.12-.85a4 4 0 0 1-.52-1h-4.24q.16 1.05.73 1.97a6 6 0 0 0 1.52 1.64q.95.7 2.38 1.14 1.42.42 3.25.43 2.25 0 3.8-.56a6 6 0 0 0 2.5-1.56 6 6 0 0 0 1.38-2.28q.44-1.29.44-2.67V25.86zm-.28 9.37a5 5 0 0 1-.74 1.5 3 3 0 0 1-1.25.97q-.77.34-1.68.34-1.35 0-2.23-.61a4 4 0 0 1-1.33-1.67q-.45-1.06-.45-2.45 0-.96.25-1.83.25-.86.75-1.5a3.6 3.6 0 0 1 3.01-1.39q1.29 0 2.15.65.85.64 1.32 1.71.45 1.08.45 2.36 0 1.06-.25 1.92"
      />
      <path
        fill="#ffffff"
        d="M56.72 28.56a5 5 0 0 0-1.96-2.24 6.3 6.3 0 0 0-3.4-.84q-1.14 0-2.08.29-.94.3-1.7.87a5 5 0 0 0-1.28 1.41v-5.6h-4.17v19.77h4.17V33q0-1.29.44-2.17T48 29.5t1.94-.45q1.54 0 2.39.85.84.85.84 2.46v9.86h4.18V31.68a8 8 0 0 0-.63-3.12"
      />
      <path
        fill="#ffffff"
        d="M64.26 25.86V21.7H60.1v4.16h-2v3.02h2.02v8.58q0 1.54.43 2.62.42 1.08 1.47 1.6 1.05.54 2.9.54H68v-3.28h-1.85q-.8 0-1.21-.24-.43-.24-.55-.7a4 4 0 0 1-.12-1.12v-8H68v-3.02z"
      />
      <path
        fill="#ffffff"
        d="M5.29 22.41a6 6 0 0 1-2.3-1.19 5 5 0 0 1-1.3-1.73 7 7 0 0 1-.54-2.04H5.1q.12.8.57 1.36t1.19.87 1.91.3q1.27 0 1.96-.3.7-.3.99-.75.28-.45.28-.97 0-.77-.55-1.25-.54-.48-1.61-.61l-3.42-.52a7 7 0 0 1-2.3-.73 4.1 4.1 0 0 1-2.37-3.89 4.8 4.8 0 0 1 1.63-3.63q.81-.75 2.1-1.18a10 10 0 0 1 3.07-.43q1.92 0 3.2.45 1.29.46 2.1 1.17.82.72 1.24 1.64t.52 1.91h-3.76a3 3 0 0 0-.49-1.19q-.36-.5-1.07-.82a5 5 0 0 0-1.77-.3c-.7 0-1.3.1-1.7.3q-.62.3-.87.73-.25.42-.25.8 0 .81.55 1.2.54.4 1.55.57l3.26.51q1.54.3 2.64.87t1.7 1.53q.59.94.59 2.33 0 1.53-.74 2.76a5 5 0 0 1-2.34 1.94q-1.59.72-4.14.73a12 12 0 0 1-3.48-.44"
      />
      <path fill="#ffffff" d="M22.06 6.1h-4.18v36.12h4.18z" />
      <path
        fill="#ffffff"
        d="m29.1 6.1 3.54 5.08 3.64-5.08h4.32l-5.8 7.81 6.18 8.55h-4.9l-3.85-5.5-3.89 5.5h-4.42l6.11-8.32-5.61-8.04z"
      />
      <path
        fill="#9AFD0D"
        d="M64.78 13.28a8 8 0 0 0-.57-2.3 8.6 8.6 0 0 0-6.89-5.25l-.13-.01v4l.1.02q.86.17 1.64.75a4.6 4.6 0 0 1 1.84 3.15 4.3 4.3 0 0 1-1.07 3.38 4.4 4.4 0 0 1-3.27 1.5c-1 0-2.23-.56-3.54-1.62L42.46 7.93a.2.2 0 0 0-.21-.03.2.2 0 0 0-.12.19v4.84L50.35 20q3.12 2.51 6.08 2.52a8.4 8.4 0 0 0 8.35-9.24"
      />
      <path fill="#87E00C" d="M46.3 16.54h-4.17v4.19h4.17z" />
      <path fill="#87E00C" d="M22.06 0h-4.18v4.2h4.18z" />
    </svg>
  );
}
