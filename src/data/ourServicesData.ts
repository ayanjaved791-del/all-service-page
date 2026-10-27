// Auto-generated exact data from six2eight.com/our-services
export interface ServicePoint {
  title: string;
  content: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  permalink: string;
  image: string;
  excerpt: string;
  category: "Design" | "Development";
  theme: "light" | "dark";
  points: ServicePoint[];
}

export interface StrategyItem {
  heading: string;
  desc: string;
  videoUrl?: string;
  lottie?: string;
}

export interface TestimonialItem {
  id: number;
  clientName: string;
  reviewTitle: string;
  reviewDescription: string;
  starRating: string;
  nps: string;
  turnaround: string;
  projectTitle?: string;
  projectImage?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogItem {
  id: number;
  title: string;
  permalink: string;
  date?: string;
  featuredImage?: string;
  categories?: string[];
  readTime?: string;
}

export const HERO_DATA = {
  kicker: "Services & Capabilities",
  title: "Digital Product Design & Web Development Services!",
  badgeIcon: "https://cms.six2eight.com/wp-content/uploads/2025/07/heading-icons.webp",
  description: "No need to juggle multiple agencies for your website, mobile app, branding, SaaS product design, or web development. Our global team handles it all under one roof with expertise.",
  ctaText: "Reach Out to Us",
  ctaUrl: "#contact",
  videoUrl: "https://cms.six2eight.com/wp-content/uploads/2025/12/Our-Services-V2_7mb.mp4",
  posterUrl: "https://cms.six2eight.com/wp-content/uploads/2025/07/service_hero-scaled.webp",
};

export const SERVICES_ITEMS: ServiceItem[] = [
  {
    "id": 741,
    "title": "UI & UX Design Services",
    "permalink": "/services/ui-ux-design",
    "image": "https://cms.six2eight.com/wp-content/uploads/2025/02/ui-ux-service-cards-main.webp",
    "excerpt": "We believe great design is more than how it looks. It’s how it works. So, we create user-first experiences that make your product useful, usable, and valuable. Here's how we help you succeed:",
    "category": "Design",
    "theme": "light",
    "points": [
      {
        "title": "Solving real user problems",
        "content": "We focus on what your users actually need, not just what looks trendy or cool."
      },
      {
        "title": "Aligning business goals with user needs",
        "content": "We bridge the gap between what your users want and what your business needs to grow."
      },
      {
        "title": "Creating clear user journeys",
        "content": "We map out every step your users take to ensure their path is smooth and logical."
      },
      {
        "title": "Improving product usability",
        "content": "We remove confusion and clutter so users can focus on what matters most."
      },
      {
        "title": "Turning feedback into better UX",
        "content": "We test, learn, and improve based on real user insights to make sure your product keeps getting better."
      }
    ]
  },
  {
    "id": 759,
    "title": "Web Development Services | Custom Website Solutions",
    "permalink": "/services/web-development",
    "image": "https://cms.six2eight.com/wp-content/uploads/2025/02/web-dev-service-cards-main.webp",
    "excerpt": "Your website should work as good as it looks. So, we build fast, secure, and scalable websites that support your growth and deliver real results. Here's what we focus on:",
    "category": "Development",
    "theme": "light",
    "points": [
      {
        "title": "Writing clean, maintainable code",
        "content": "We build with performance and future scalability in mind, so your site stays fast and reliable."
      },
      {
        "title": "Ensuring cross-browser compatibility",
        "content": "We test your site on all major browsers to make sure it looks and works consistently."
      },
      {
        "title": "Improving load time",
        "content": "We optimize your code and assets to ensure your site loads fast and performs well under pressure."
      },
      {
        "title": "Securing your website",
        "content": "We implement best practices to protect your site from vulnerabilities and threats."
      },
      {
        "title": "Supporting integration needs",
        "content": "From APIs to third-party tools, we make sure your website plays well with everything you use."
      }
    ]
  },
  {
    "id": 189,
    "title": "Web Design Services | Custom Website Design",
    "permalink": "/services/web-design",
    "image": "https://cms.six2eight.com/wp-content/uploads/2025/02/web-design-service-cards-main.webp",
    "excerpt": "We consider your website to be the most important part of your business. So we design sleek, modern, and user-friendly UI/UX for your site that drives sales, boosts conversion, and generates revenue. You can rely on us for:",
    "category": "Design",
    "theme": "light",
    "points": [
      {
        "title": "Enhancing look and feel",
        "content": "We design websites that reflect your brand’s unique identity and leave a lasting impression on your visitors."
      },
      {
        "title": "Improving user experience",
        "content": "By designing with the users in mind, we ensure your site is easy to navigate and keeps visitors returning."
      },
      {
        "title": "Reducing user bounce rate",
        "content": "Our smart information architecture design makes sure visitors stay engaged and don’t leave your site too quickly."
      },
      {
        "title": "Removing friction to achieve users' goal",
        "content": "We simplify user flows to eliminate obstacles that slow users down, so they can easily reach their goal."
      },
      {
        "title": "Boosting website conversion",
        "content": "We optimize your navigation to guide visitors toward taking action, turning interest into real conversions."
      }
    ]
  },
  {
    "id": 185,
    "title": "WordPress Development Services",
    "permalink": "/services/wordpress-development",
    "image": "https://cms.six2eight.com/wp-content/uploads/2025/02/wordpress-services.webp",
    "excerpt": "Your WordPress site should do more than just look good. So, we build high-speed, SEO-friendly websites with custom functionality that drives results. Here’s how we excel:",
    "category": "Development",
    "theme": "light",
    "points": [
      {
        "title": "Developing custom functionality ",
        "content": "We create tailored solutions that meet your unique business needs, from custom plugins to advanced features."
      },
      {
        "title": "Optimizing page speed ",
        "content": "We ensure your site loads quickly, improving user experience and boosting search engine rankings."
      },
      {
        "title": "Enhancing SEO performance ",
        "content": "Our WordPress sites are built with SEO best practices in mind, helping you rank higher and attract more traffic."
      },
      {
        "title": "Simplifying plugin integration",
        "content": "We seamlessly integrate essential plugins to extend your site’s functionality without compromising performance."
      },
      {
        "title": "Delivering scalable solutions ",
        "content": "Our WordPress sites are designed to grow with your business, ensuring long-term success."
      }
    ]
  },
  {
    "id": 187,
    "title": "SaaS Web & Application Design",
    "permalink": "/services/saas-web-application-design",
    "image": "https://cms.six2eight.com/wp-content/uploads/2025/02/sass-service-cards-main.webp",
    "excerpt": "Your SaaS platform should simplify complex tasks and empower users. So, we design intuitive dashboards and workflows that improve efficiency and deliver exceptional user experiences. Here’s what we deliver:",
    "category": "Design",
    "theme": "dark",
    "points": [
      {
        "title": "Simplifying complex workflows ",
        "content": "We break down intricate processes into easy-to-navigate steps, ensuring users can accomplish tasks without frustration."
      },
      {
        "title": "Designing intuitive dashboards ",
        "content": "Our dashboards are clean, functional, and tailored to your users' needs, making data accessible and actionable."
      },
      {
        "title": "Enhancing data visualization ",
        "content": "We transform complex data into clear, visually appealing formats that help users make informed decisions."
      },
      {
        "title": "Streamlining admin panels ",
        "content": "We create efficient admin interfaces that simplify backend management and improve productivity."
      },
      {
        "title": "Boosting user efficiency ",
        "content": "By optimizing workflows and reducing friction, we ensure your SaaS platform helps users work smarter, not harder."
      }
    ]
  },
  {
    "id": 184,
    "title": "Shopify Development Services",
    "permalink": "/services/shopify-development",
    "image": "https://cms.six2eight.com/wp-content/uploads/2025/02/shopify-devlopment-service-cards-main.webp",
    "excerpt": "Your online store should make shopping easy and drive more sales. So, we create high-converting Shopify experiences with smooth navigation and seamless checkout. Here’s what we focus on:",
    "category": "Development",
    "theme": "dark",
    "points": [
      {
        "title": "Optimizing product pages",
        "content": "We design product pages that highlight your offerings and encourage customers to make a purchase."
      },
      {
        "title": "Streamlining checkout processes",
        "content": "We simplify the checkout experience to reduce cart abandonment and increase conversions."
      },
      {
        "title": "Enhancing conversion rates ",
        "content": "Our designs are optimized to guide users toward making a purchase, turning visitors into loyal customers."
      },
      {
        "title": "Improving navigation ",
        "content": "We create intuitive menus and search functionalities to help users find what they need quickly."
      },
      {
        "title": "Delivering mobile-friendly stores",
        "content": "We ensure your Shopify store provides a seamless shopping experience across all devices."
      }
    ]
  },
  {
    "id": 188,
    "title": "Mobile App Design Services",
    "permalink": "/services/mobile-app-design",
    "image": "https://cms.six2eight.com/wp-content/uploads/2025/02/mobile-app-service-cards-main.webp",
    "excerpt": "We believe your app should feel effortless and native to every user. So, we design intuitive interfaces that enhance usability, keep users engaged, and deliver seamless experiences. Here’s how we make it happen:",
    "category": "Design",
    "theme": "dark",
    "points": [
      {
        "title": "Crafting intuitive interfaces ",
        "content": "We create designs that feel natural and easy to use, ensuring your app aligns perfectly with user expectations."
      },
      {
        "title": "Enhancing usability ",
        "content": "By focusing on user-centric design, we make sure your app is functional, accessible, and enjoyable for all users."
      },
      {
        "title": "Keeping users engaged",
        "content": "Our designs incorporate interactive elements and smooth navigation to keep users coming back for more."
      },
      {
        "title": "Simplifying complex tasks",
        "content": "We streamline workflows and eliminate unnecessary steps, making it easy for users to achieve their goals effortlessly."
      },
      {
        "title": "Driving user retention ",
        "content": "Through thoughtful design and usability testing, we ensure your app not only attracts users but also retains them."
      }
    ]
  },
  {
    "id": 186,
    "title": "Webflow Development Services Company",
    "permalink": "/services/webflow-development",
    "image": "https://cms.six2eight.com/wp-content/uploads/2025/02/webflow-service-cards-main.webp",
    "excerpt": "Your website should be flexible, scalable, and easy to manage. So, we build Webflow websites that combine stunning design with powerful functionality. Here’s what we bring to the table:",
    "category": "Development",
    "theme": "dark",
    "points": [
      {
        "title": "Creating responsive designs ",
        "content": "We ensure your website looks and performs flawlessly on all devices, from desktops to smartphones."
      },
      {
        "title": "Delivering no-code solutions ",
        "content": "Our Webflow expertise allows us to build custom, scalable websites without the need for complex coding."
      },
      {
        "title": "Integrating custom animations ",
        "content": "We add dynamic, engaging animations that enhance user experience and bring your brand to life."
      },
      {
        "title": "Simplifying CMS integration ",
        "content": "We make content management effortless, so you can easily update and manage your site."
      },
      {
        "title": "Building user-friendly interfaces ",
        "content": "Our designs prioritize usability, ensuring your website is easy to navigate and visually appealing."
      }
    ]
  },
  {
    "id": 182,
    "title": "Motion Graphics Design",
    "permalink": "/services/motion-graphics-design",
    "image": "https://cms.six2eight.com/wp-content/uploads/2025/02/motion-dev-service-cards-main.webp",
    "excerpt": "Your brand should come to life through engaging visuals. So, we create motion graphics that enhance user experience and tell your story in a captivating way. Here’s what we specialize in:",
    "category": "Design",
    "theme": "light",
    "points": [
      {
        "title": "Designing micro-interactions ",
        "content": "We add subtle animations that improve usability and make your interface feel alive."
      },
      {
        "title": "Crafting UI animations ",
        "content": "We create smooth, purposeful animations that guide users and enhance their experience."
      },
      {
        "title": "Storyboarding concepts ",
        "content": "We plan and visualize motion designs to ensure they align with your brand and goals."
      },
      {
        "title": "Bringing your brand to life ",
        "content": "Our motion graphics add personality and energy to your brand, making it more relatable and engaging."
      },
      {
        "title": "Enhancing user engagement ",
        "content": "We use motion design to capture attention, communicate ideas, and keep users interacting with your content."
      }
    ]
  },
  {
    "id": 183,
    "title": "Branding Identity and Design Services",
    "permalink": "/services/brand-identity-design",
    "image": "https://cms.six2eight.com/wp-content/uploads/2025/02/brand-identity-services.webp",
    "excerpt": "Your brand should be memorable and instantly recognizable. So, we craft distinct visual identities that align with your business and leave a lasting impact. Here’s how we stand out:",
    "category": "Design",
    "theme": "light",
    "points": [
      {
        "title": "Designing unique logos ",
        "content": "We create logos that capture your brand’s essence and make a strong first impression."
      },
      {
        "title": "Developing style guides ",
        "content": "We provide comprehensive style guides to ensure consistent branding across all platforms."
      },
      {
        "title": "Maintaining brand consistency",
        "content": "Our designs ensure your brand’s visual identity remains cohesive and recognizable everywhere."
      },
      {
        "title": "Choosing impactful typography",
        "content": "We select fonts that reflect your brand’s personality and enhance its overall aesthetic."
      },
      {
        "title": "Building a lasting impression",
        "content": "Our designs help your brand stand out and leave a memorable mark on your audience."
      }
    ]
  }
];

export const STRATEGY_DATA = {
  blockTitle: "Strategy",
  mainTitle: "Why choose us for your UI UX design & web development needs?",
  bgPattern: "https://cms.six2eight.com/wp-content/uploads/2025/11/footer_elements.webp",
  items: [
  {
    "heading": "150+ Projects Delivered",
    "desc": "Designed and built 150+ digital products for businesses worldwide.",
    "videoUrl": "https://pub-e16d91154e2745caab7edf172a9d16cb.r2.dev/media/2025/12/six2eight-3.webm",
    "lottie": "projects"
  },
  {
    "heading": "15+ Industries Served ",
    "desc": "Fintech, SaaS, healthcare, and many other industries all over the world.",
    "videoUrl": "https://pub-e16d91154e2745caab7edf172a9d16cb.r2.dev/media/2025/12/six2eight-10.webm",
    "lottie": "industry"
  },
  {
    "heading": "30+ Global Experts",
    "desc": "A skilled team of designers, developers, and strategists across countries.",
    "videoUrl": "https://pub-e16d91154e2745caab7edf172a9d16cb.r2.dev/media/2025/12/six2eight-5.webm",
    "lottie": "expertservice"
  },
  {
    "heading": "98% Client  Retention Rate",
    "desc": "Long-lasting relationships built on quality, trust, and results",
    "videoUrl": "https://pub-e16d91154e2745caab7edf172a9d16cb.r2.dev/media/2025/12/six2eight-15.webm",
    "lottie": "satisfaction"
  },
  {
    "heading": "100+ Trusted Businesses ",
    "desc": "Trusted for high-quality solutions and exceptional client service.",
    "videoUrl": "https://pub-e16d91154e2745caab7edf172a9d16cb.r2.dev/media/2025/12/six2eight-3.webm",
    "lottie": "projects"
  },
  {
    "heading": "99% Client  Satisfaction ",
    "desc": "Delivering exceptional solutions with unmatched service. ",
    "videoUrl": "https://pub-e16d91154e2745caab7edf172a9d16cb.r2.dev/media/2025/12/six2eight-10.webm",
    "lottie": "satisfaction"
  }
]
};

export const TESTIMONIALS_DATA = {
  blockTitle: "Testimonials",
  mainTitle: "150+ projects done with 5.0 ★ AVG",
  ratingScore: "5.0/5",
  ratingDescription: "Trusted by 100+ businesses for <br />exceptional design & service.",
  items: [
  {
    "id": 243,
    "clientName": "DailyTime",
    "reviewTitle": "Really good experience overall.",
    "reviewDescription": "Responses were fast, things didn’t get messy, and the process actually made sense. You don’t always get that with designers, so it was refreshing.",
    "starRating": "5",
    "nps": "100",
    "turnaround": "24h-48h",
    "projectTitle": "Userpath",
    "projectImage": "https://cms.six2eight.com/wp-content/uploads/2025/03/user-ath-featured.webp"
  },
  {
    "id": 685,
    "clientName": "GunMade",
    "reviewTitle": "The designers had some solid ideas and didn’t just hand us one option.",
    "reviewDescription": "They explained things in plain English, which made choices easy. Felt like a real collaboration, not a cookie-cutter process.",
    "starRating": "5",
    "nps": "100",
    "turnaround": "24h-48h",
    "projectTitle": "Userpath",
    "projectImage": "https://cms.six2eight.com/wp-content/uploads/2025/03/user-ath-featured.webp"
  },
  {
    "id": 264,
    "clientName": "Vizerto",
    "reviewTitle": "Sean and the six2eight crew were super flexible. ",
    "reviewDescription": "They made sure the app felt simple to use without losing any of the bells and whistles. Everything just worked better after their touch.",
    "starRating": "5",
    "nps": "100",
    "turnaround": "24h-48h",
    "projectTitle": "Userpath",
    "projectImage": "https://cms.six2eight.com/wp-content/uploads/2025/03/user-ath-featured.webp"
  },
  {
    "id": 686,
    "clientName": "Storytime Owls",
    "reviewTitle": "Honestly, working with this team was way easier than we expected.",
    "reviewDescription": "They actually get how users think, and the onboarding ended up feeling really smooth. We liked it so much we’re already planning the next round of changes.",
    "starRating": "5",
    "nps": "100",
    "turnaround": "24h-48h",
    "projectTitle": "Userpath",
    "projectImage": "https://cms.six2eight.com/wp-content/uploads/2025/03/user-ath-featured.webp"
  }
]
};

export const FAQS_DATA = {
  leftTitle: "Clear answers to move forward confidently",
  rightTitle: "Got Questions? Let’s Clear Things Up.",
  items: [
  {
    "question": "What UI/UX design services does six2eight provide?",
    "answer": ""
  },
  {
    "question": "How does six2eight approach user-centered design?",
    "answer": ""
  },
  {
    "question": "What industries does six2eight specialize in?",
    "answer": ""
  },
  {
    "question": "How does six2eight balance UI/UX design with technical development?",
    "answer": ""
  },
  {
    "question": "What is six2eight’s process for building high-performing websites?",
    "answer": ""
  },
  {
    "question": "How long does a typical website design and development project take?",
    "answer": ""
  },
  {
    "question": "How does six2eight ensure quality during development?",
    "answer": ""
  },
  {
    "question": "Does six2eight provide post-launch optimization and support?",
    "answer": ""
  }
]
};

export const BLOGS_DATA = {
  blockTitle: "Blogs",
  mainTitle: "Inside UI/UX Design & Web Development",
  items: [
  {
    "id": 3002,
    "title": "Top 8 Web Design Companies in Cyprus",
    "permalink": "/blog/top-web-design-companies-in-cyprus",
    "date": "2026",
    "featuredImage": "https://cms.six2eight.com/wp-content/uploads/2025/02/ui-ux-service-cards-main.webp",
    "readTime": "5 min read",
    "categories": []
  },
  {
    "id": 2989,
    "title": "What Are Primary Colors and How Do They Influence Design?",
    "permalink": "/blog/primary-colors",
    "date": "2026",
    "featuredImage": "https://cms.six2eight.com/wp-content/uploads/2025/02/ui-ux-service-cards-main.webp",
    "readTime": "5 min read",
    "categories": []
  },
  {
    "id": 2955,
    "title": "9 SaaS Product Design Trends in 2026",
    "permalink": "/blog/top-saas-product-design-trends",
    "date": "2026",
    "featuredImage": "https://cms.six2eight.com/wp-content/uploads/2025/02/ui-ux-service-cards-main.webp",
    "readTime": "5 min read",
    "categories": []
  },
  {
    "id": 2185,
    "title": "10 Best Design Agencies in Toronto to Hire",
    "permalink": "/blog/design-agencies-in-toronto",
    "date": "2026",
    "featuredImage": "https://cms.six2eight.com/wp-content/uploads/2025/02/ui-ux-service-cards-main.webp",
    "readTime": "5 min read",
    "categories": []
  },
  {
    "id": 2176,
    "title": "AI Tokens Explained: Cost, Context, and Performance (2026) ",
    "permalink": "/blog/ai-tokens-explained",
    "date": "2026",
    "featuredImage": "https://cms.six2eight.com/wp-content/uploads/2025/02/ui-ux-service-cards-main.webp",
    "readTime": "5 min read",
    "categories": []
  },
  {
    "id": 2159,
    "title": "Figma Config 2026: Every Major Announcement You Need to Know",
    "permalink": "/blog/figma-config",
    "date": "2026",
    "featuredImage": "https://cms.six2eight.com/wp-content/uploads/2025/02/ui-ux-service-cards-main.webp",
    "readTime": "5 min read",
    "categories": []
  }
]
};

export const CALENDLY_URL = "https://calendly.com/six2eight-sales/web-discovery-call";
