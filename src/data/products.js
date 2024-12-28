export const products = [
  {
    id: 1,
    name: "Birabook",
    shortDesc: "Beauty & Lifestyle Booking Platform",
    description: "Connect beauty professionals with customers seamlessly",
    path: "/products/birabook",
    icon: "/birabook-logo.png",
    video: {
      id: null,
      isAvailable: false,
    },
    features: {
      user: [
        {
          title: "Easy Booking",
          description:
            "Find and book beauty & lifestyle services in your area with just a few clicks",
          icon: "fas fa-calendar-check",
        },
        {
          title: "Real Reviews",
          description: "Read authentic reviews from verified customers",
          icon: "fas fa-star",
        },
        {
          title: "Location Based",
          description:
            "Discover services near you with our smart location features",
          icon: "fas fa-map-marker-alt",
        },
        {
          title: "Secure Payments",
          description: "Safe and secure payment processing for all bookings",
          icon: "fas fa-lock",
        },
      ],
      business: [
        {
          title: "Business Management",
          description:
            "Complete toolkit to manage your beauty or lifestyle business",
          icon: "fas fa-briefcase",
        },
        {
          title: "Team Scheduling",
          description:
            "Effortlessly manage your team's availability and bookings",
          icon: "fas fa-users",
        },
        {
          title: "Service Showcase",
          description:
            "Display your services with beautiful galleries and descriptions",
          icon: "fas fa-store",
        },
        {
          title: "Analytics",
          description: "Track your business growth with detailed insights",
          icon: "fas fa-chart-line",
        },
      ],
    },
    stats: {
      businesses: "1000+",
      bookings: "50K+",
      customers: "100K+",
    },
  },
  {
    id: 2,
    name: "lotsApark",
    shortDesc: "Parking Management System",
    description:
      "Smart parking management solution for apartments and condominiums",
    path: "/products/lotsapark",
    icon: "/lotsapark-logo.png",
    video: {
      id: null,
      isAvailable: false,
    },
    features: {
      user: [
        {
          title: "Easy Booking",
          description: "Book and manage your parking space with a few taps",
          icon: "fas fa-parking",
        },
        {
          title: "Digital Access",
          description: "Contactless entry and exit with digital passes",
          icon: "fas fa-key",
        },
        {
          title: "Real-time Availability",
          description: "Check parking space availability in real-time",
          icon: "fas fa-clock",
        },
        {
          title: "Visitor Parking",
          description: "Easily manage guest parking permits",
          icon: "fas fa-ticket-alt",
        },
      ],
      business: [
        {
          title: "Space Management",
          description: "Efficiently manage all parking spaces and allocations",
          icon: "fas fa-th",
        },
        {
          title: "Access Control",
          description: "Advanced security and access management system",
          icon: "fas fa-shield-alt",
        },
        {
          title: "Reporting",
          description: "Comprehensive reports on usage and violations",
          icon: "fas fa-file-alt",
        },
        {
          title: "Revenue Management",
          description: "Handle parking fees and payment processing",
          icon: "fas fa-dollar-sign",
        },
      ],
    },
  },
];
