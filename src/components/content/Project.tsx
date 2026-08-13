import React, { useState } from "react";
import { FaReact, FaPhp, FaJava } from "react-icons/fa";
import { SiFigma, SiSwift } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
import { Modal } from "antd";

import ImageCarousel from "@/components/ImageCarousel";

// ================= FAST FOOD =================

import f1 from "@/assets/img/project/fastfood/1.jpg";
import f2 from "@/assets/img/project/fastfood/2.png";
import f3 from "@/assets/img/project/fastfood/3.jpg";
import f4 from "@/assets/img/project/fastfood/4.jpg";
import f5 from "@/assets/img/project/fastfood/5.jpg";
import f6 from "@/assets/img/project/fastfood/6.jpg";
import f7 from "@/assets/img/project/fastfood/7.jpg";
import f8 from "@/assets/img/project/fastfood/8.jpg";

// ================= EDUCATIONAL GAME =================

import e1 from "@/assets/img/project/edugame/Home_Screen.jpg";
import e2 from "@/assets/img/project/edugame/Login_Screen.jpg";
import e3 from "@/assets/img/project/edugame/Sign_Up_Screen.jpg";
import e4 from "@/assets/img/project/edugame/Reset_Password_Screen.jpg";
import e5 from "@/assets/img/project/edugame/Msg_Go_To_Next_Round.jpg";
import e6 from "@/assets/img/project/edugame/Msg_Wrong_Answer.jpg";
import e7 from "@/assets/img/project/edugame/Won_The_Game_Screen.jpg";
import e8 from "@/assets/img/project/edugame/Gaming_History.jpg";

// ================= CAR RENTAL =================

import x1 from "@/assets/img/project/carapp/1.jpg";
import x2 from "@/assets/img/project/carapp/2.jpg";
import x3 from "@/assets/img/project/carapp/3.jpg";
import x4 from "@/assets/img/project/carapp/4.jpg";
import x5 from "@/assets/img/project/carapp/5.jpg";
import x6 from "@/assets/img/project/carapp/6.jpg";

// ================= PROPERTY RENTAL =================

import y1 from "@/assets/img/project/propertyweb/Homepage.png";
import y2 from "@/assets/img/project/propertyweb/OwnerLogin.png";
import y3 from "@/assets/img/project/propertyweb/ManagerResponse.png";
import y4 from "@/assets/img/project/propertyweb/ManagerApartments.png";
import y5 from "@/assets/img/project/propertyweb/ManagerBuildings.png";
import y6 from "@/assets/img/project/propertyweb/OwnerEvents.png";
import y7 from "@/assets/img/project/propertyweb/OwnerManagerMsg.png";
import y8 from "@/assets/img/project/propertyweb/Diagram.png";

// ================= PODCAST =================

import a1 from "@/assets/img/project/podcastweb/1.jpg";
import a2 from "@/assets/img/project/podcastweb/2.jpg";

// ================= LINKEDIN =================

import b1 from "@/assets/img/project/linkedln/1.jpg";
import b2 from "@/assets/img/project/linkedln/2.jpg";

// ================= GERMAN SHEPHERD FOUNDATION =================

import n1 from "@/assets/img/project/nemetzuhasz/Homepage.jpg";
import n2 from "@/assets/img/project/nemetzuhasz/Admin_CRUD_HomeComponents.jpg";
import n3 from "@/assets/img/project/nemetzuhasz/Admin_CRUD_EditASection.jpg";
import n4 from "@/assets/img/project/nemetzuhasz/AdoptablePets_UI.jpg";
import n5 from "@/assets/img/project/nemetzuhasz/Admin_CRUD_Pets.jpg";
import n6 from "@/assets/img/project/nemetzuhasz/Admin_CRUD_AddPet.jpg";
import n7 from "@/assets/img/project/nemetzuhasz/Admin_CRUD_PetDetails.jpg";
import n8 from "@/assets/img/project/nemetzuhasz/Sponsors_UI.jpg";
import n9 from "@/assets/img/project/nemetzuhasz/Admin_CRUD_Sponsors.jpg";
import n10 from "@/assets/img/project/nemetzuhasz/Cookie_Implementation_2Languages.jpg";
import n11 from "@/assets/img/project/nemetzuhasz/FosteringForm_UI.jpg";
import n12 from "@/assets/img/project/nemetzuhasz/Fostering_Form_JSEmail.jpg";
import n13 from "@/assets/img/project/nemetzuhasz/Foster_Email_Format.jpg";

// ================= RECIPEAT =================

import c1 from "@/assets/img/project/recipeat/test.jpg";
import c2 from "@/assets/img/project/recipeat/DBStructure.jpg";

// ================= INSTAGRAM =================

import i1 from "@/assets/img/project/instagram/1.jpg";
import i2 from "@/assets/img/project/instagram/2.jpg";
import i3 from "@/assets/img/project/instagram/3.jpg";

// ================= LASAPPETITE =================

import l1 from "@/assets/img/project/lasappetite/1.jpg";
import l2 from "@/assets/img/project/lasappetite/2.jpg";
import l3 from "@/assets/img/project/lasappetite/3.jpg";
import l4 from "@/assets/img/project/lasappetite/4.jpg";
import l5 from "@/assets/img/project/lasappetite/5.jpg";
import l6 from "@/assets/img/project/lasappetite/6.jpg";
import l7 from "@/assets/img/project/lasappetite/7.jpg";
import l8 from "@/assets/img/project/lasappetite/8.jpg";
import l9 from "@/assets/img/project/lasappetite/9.jpg";
import l10 from "@/assets/img/project/lasappetite/10.jpg";

// ================= EDUF8 =================

import eduCreateNewCourse from "@/assets/img/project/eduf8/CreateNewCourse.png";
import eduEditExistingCourse from "@/assets/img/project/eduf8/EditExistingCourse.png";
import eduHomeNoCourses from "@/assets/img/project/eduf8/Home_NoCourses.png";
import eduHomeWithCourses from "@/assets/img/project/eduf8/HomeWithCourses.png";
import eduMongoDBData from "@/assets/img/project/eduf8/MongoDBData.png";
import eduShowCourseDetails from "@/assets/img/project/eduf8/ShowCourseDetails.png";

// ================= LOTTO / OOP C# =================

import lotto1 from "@/assets/img/project/lotto/1.png";
import lotto2 from "@/assets/img/project/lotto/2.png";
import lotto3 from "@/assets/img/project/lotto/3.png";
import lotto4 from "@/assets/img/project/lotto/4.png";
import lotto5 from "@/assets/img/project/lotto/5.png";
import lotto6 from "@/assets/img/project/lotto/6.png";

interface IProject {
  image: JSX.Element;
  title: string;
  shortDescription: string;
  images?: string[];
  details: {
    description: string;
    frontend: string[];
    backend: string[];
    member: number;
    role: string;
    demo: string;
    github: string;
    demoLinks?: Array<{
      label?: string;
      url: string;
    }>;
  };
}

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataDetails, setDataDetails] = useState<IProject | null>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataDetails(null);
  };

  // =========================================================
  // PROJECT DATA
  //
  // First 3 projects automatically become featured.
  // =========================================================

  const dataProjects: IProject[] = [
    // =========================================================
    // 01 — FEATURED
    // Three of Us For German Shepherds Foundation
    // =========================================================

    {
      image: <FaReact size={50} color="#E2872D" />,
      title: "Three of Us For German Shepherds Foundation",
      shortDescription:
        "Built and maintain a bilingual TypeScript/Firebase platform with an admin CMS, dynamic content, CRUD workflows, forms, authentication, and analytics.",
      images: [
        n1,
        n2,
        n3,
        n4,
        n5,
        n6,
        n7,
        n8,
        n9,
        n10,
        n11,
        n12,
        n13,
      ],
      details: {
        description:
          "Built and maintain a responsive, bilingual platform for the Three of Us For German Shepherds Foundation using TypeScript and Firebase. Developed a custom admin CMS for managing Home, About, Sponsor, Adoption, and Fostering content through Firestore-backed CRUD workflows, including image upload, preview, replacement, and Firebase Storage cleanup. Implemented English/Hungarian content support, authentication, validated forms and email delivery, cookie preferences, Google Analytics, and responsive interfaces for both administrators and visitors.",
        frontend: ["TypeScript", "HTML", "SCSS", "Bootstrap"],
        backend: [
          "Firestore Database",
          "Firebase Authentication",
          "Google Analytics",
          "EmailJS",
        ],
        member: 1,
        role: "Full-Stack Developer",
        demo: "https://nemetjuhasz.com/?lang=en",
        github: "",
      },
    },

    // =========================================================
    // 02 — FEATURED
    // Property Rental Management
    // =========================================================

    {
      image: <PiFileCSharp size={50} color="#E2872D" />,
      title: "Property Rental Management",
      shortDescription:
        "Built a role-based property management system for owners, managers, and tenants using ASP.NET MVC, Entity Framework, and SQL Server.",
      images: [y1, y2, y3, y4, y5, y6, y7, y8],
      details: {
        description:
          "Built a full-stack property management system with separate workflows for property owners, managers, and tenants. Implemented role-based access for managing properties, apartments, appointments, events, and messages using ASP.NET MVC and Entity Framework, with SQL Server for persistent data storage.",
        frontend: ["HTML", "JavaScript"],
        backend: [
          "C#",
          "ASP.NET MVC",
          "Entity Framework",
          "SQL Server 2019",
        ],
        member: 1,
        role: "Full-Stack Developer",
        demo: "",
        github: "https://github.com/tuanh00/Property-Rental-Management",
      },
    },

    // =========================================================
    // 03 — FEATURED
    // Car Rental Management
    // =========================================================

    {
      image: <FaJava size={50} color="#E2872D" />,
      title: "Car Rental Management",
      shortDescription:
        "Built an Android car rental app with Firebase authentication, booking workflows, Stripe payments, and Google Calendar integration.",
      images: [x1, x2, x3, x4, x5, x6],
      details: {
        description:
          "Developed an Android car rental application in Java with customer and admin workflows for authentication, vehicle management, bookings, payments, and rental contracts. Integrated Firebase Authentication and Firestore for user and booking data, Stripe PaymentSheet for payment processing, and Google Calendar API for rental scheduling. After a successful payment, the app creates a calendar event, stores its event ID with the rental contract, and allows the booking to complete even if Calendar authorization or event creation fails.",
        frontend: ["Java (Android Studio)"],
        backend: [
          "Firebase Authentication",
          "Cloud Firestore",
          "Node.js",
          "Stripe API",
          "Google Calendar API",
        ],
        member: 3,
        role: "Android Developer",
        demo: "",
        github: "https://github.com/tuanh00/CarRentalManagement",
      },
    },

    // =========================================================
    // 04
    // Cinema Management
    // =========================================================

    {
      image: <FaJava size={50} color="#E2872D" />,
      title: "Cinema Management System",
      shortDescription:
        "A Java-based console app using design patterns to manage cinema operations, screenings, and reservations.",
      details: {
        description:
          "The Cinema Management System is a Java-based console application that utilizes key design patterns such as Abstract Factory, Builder, Chain of Responsibility, and Singleton. It simulates interactions between customers, employees, and the cinema's database system to manage movie screenings, customer reservations, and employee tasks.",
        frontend: ["N/A (Console Application)"],
        backend: ["Java", "SQLite"],
        member: 1,
        role: "Back-end Developer",
        demo: "",
        github:
          "https://github.com/tuanh00/Advanced_OOP_Cinema_ConsoleApp_FallProject",
      },
    },

    // =========================================================
    // 05
    // EduF8 Course Manager
    // =========================================================

    {
      image: <FaReact size={50} color="#E2872D" />,
      title: "EduF8 – Course Manager NodeJS",
      shortDescription:
        "CRUD course manager using Express, Handlebars, MongoDB/Mongoose, and SCSS.",
      images: [
        eduHomeWithCourses,
        eduHomeNoCourses,
        eduCreateNewCourse,
        eduEditExistingCourse,
        eduShowCourseDetails,
        eduMongoDBData,
      ],
      details: {
        description:
          "EduF8 is a small CMS to create, edit, list, and view course details. Built with Express, Handlebars templates, and MongoDB via Mongoose. Includes soft delete/restore, method override for REST-like forms, and clean SCSS. Screens show home states, create/edit flows, details view, and underlying Mongo data.",
        frontend: ["Handlebars", "JavaScript", "SCSS"],
        backend: [
          "Node.js",
          "Express",
          "MongoDB",
          "Mongoose",
          "express-handlebars",
          "method-override",
        ],
        member: 1,
        role: "Fullstack Developer",
        demo:
          "https://drive.google.com/file/d/1Kjzdg5vQeJprK7WxxO76jTRD4vc09NlS/view?usp=sharing",
        github: "https://github.com/tuanh00/nodejs_blog",
      },
    },

    // =========================================================
    // 06
    // Fast Food Delivery
    // =========================================================

    {
      image: <FaReact size={50} color="#E2872D" />,
      title: "Fast Food Delivery Web Application",
      shortDescription:
        "A full-stack web app for admin, shipper, and customer roles, integrating APIs for communication and optimized delivery.",
      images: [f1, f2, f3, f4, f5, f6, f7, f8],
      details: {
        description:
          "Built a web application with roles for admin, shippers, and customers, offering a user-friendly front-end and efficient management tools for admins. API integration ensures seamless communication between users, while shippers benefit from optimized delivery routes, and customers enjoy a streamlined ordering experience.",
        frontend: [
          "React",
          "React-Bootstrap",
          "Vite",
          "SCSS",
          "Ant Design",
        ],
        backend: ["Node.js", "C#", "SQL Server"],
        member: 4,
        role: "Front-end Developer",
        demo: "",
        github:
          "https://github.com/tuanh00/FastFoodDelivery_WebApplication_SummerProject",
      },
    },

    // =========================================================
    // 07
    // RecipEAT
    // =========================================================

    {
      image: <SiSwift size={50} color="#E2872D" />,
      title: "RecipEAT",
      shortDescription:
        "iOS app for sharing, discovering, and planning meals with social recipes.",
      images: [c1, c2],
      details: {
        description:
          "RecipEAT is a SwiftUI mobile app where food lovers create, discover, and organize recipes. Users can publish recipes with images, save favorites, like recipes, and plan meals by day/meal type. Profiles support name/password updates (email/password accounts) and photo changes. Built with Firebase for auth, storage, and real-time data.",
        frontend: ["Swift", "SwiftUI", "Rive"],
        backend: [
          "Firebase Authentication (Email/Password, Google Sign-In)",
          "Firestore Database",
          "Firebase Storage",
          "Firebase Core",
        ],
        member: 3,
        role: "Fullstack Developer",
        demo: "",
        github: "https://github.com/tuanh00/RecipEAT",
      },
    },

    // =========================================================
    // 08
    // Multi-tier Windows Application
    // =========================================================

    {
      image: <PiFileCSharp size={50} color="#E2872D" />,
      title: "Multi-tier Windows Application",
      shortDescription:
        "A 3-tier C# application for managing students, enrollments, courses, and programs with SQL Server.",
      details: {
        description:
          "Developed a 3-tier application using C#, Windows Forms, and ADO.NET for database management. The application offers four management options at the main menu: Students, Enrollments, Courses, and Programs. SQL Server was used to handle data storage and transactions, with a well-organized back-end structure to support the application.",
        frontend: ["Windows Forms (C#)"],
        backend: ["C#", "SQL Server", "ADO.NET"],
        member: 1,
        role: "Fullstack Developer",
        demo: "",
        github: "https://github.com/tuanh00/Multi-tier-Applications-Project",
      },
    },

    // =========================================================
    // 09
    // Aircraft Management
    // =========================================================

    {
      image: <FaJava size={50} color="#E2872D" />,
      title: "Aircraft Management",
      shortDescription:
        "Java application demonstrating Builder, Abstract Factory, and State patterns with comprehensive JUnit tests.",
      details: {
        description:
          "Implements Builder, Abstract Factory, and State design patterns in Java. Includes JUnit tests to verify functionality and ensure reliability.",
        frontend: ["N/A"],
        backend: ["Java"],
        member: 4,
        role: "Backend Developer",
        demo: "",
        github:
          "https://github.com/tuanh00/AircraftManagement_DesignPatterns",
      },
    },

    // =========================================================
    // 10
    // Educational Game Platform
    // =========================================================

    {
      image: <FaPhp size={50} color="#E2872D" />,
      title: "Educational Game Platform",
      shortDescription:
        "A web-based platform for children's educational games, featuring user management and interactive challenges.",
      images: [e1, e2, e3, e4, e5, e6, e7, e8],
      details: {
        description:
          "Developed a web-based educational game platform aimed at children. The platform features user account management, real-time form validation, and a multi-level question-and-answer game designed to enhance learning through interactive challenges.",
        frontend: ["HTML", "CSS"],
        backend: ["PHP", "MySQL"],
        member: 4,
        role: "Fullstack Developer",
        demo: "",
        github:
          "https://github.com/tuanh00/WebApplication_I_WinterProject",
      },
    },

    // =========================================================
    // 11
    // Podcast Landing Page
    // =========================================================

    {
      image: <FaReact size={50} color="#E2872D" />,
      title: "Podcast Landing Page",
      shortDescription:
        "Central hub for a podcast series with embedded audio, detailed episode descriptions, and source links.",
      images: [a1, a2],
      details: {
        description:
          "Showcases each episode using embedded audio players, descriptions, and relevant source links. Built with TypeScript, CSS, JavaScript, and HTML. Deployed on Vercel.",
        frontend: ["TypeScript", "CSS", "JavaScript", "HTML"],
        backend: ["N/A (Static Frontend)"],
        member: 1,
        role: "Front-end Developer",
        demo: "https://tuanh-podcast.vercel.app/",
        github: "https://github.com/tuanh00/Podcast-Landing-Page",
      },
    },

    // =========================================================
    // 12
    // LasAppetite
    // =========================================================

    {
      image: <SiFigma size={50} color="#E2872D" />,
      title: "LasAppetite",
      shortDescription:
        "Interactive Figma design for LaSalle's cafeteria—students order and pay while staff manage inventory and orders.",
      images: [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10],
      details: {
        description:
          "Two-sided app design (Students & Staff). Students browse live menus, view nutrition, pre-order and pay, receive status/queue updates and pickup codes. Staff update menus based on inventory, manage orders and prep, and validate pickups. 100% hand-crafted, interactive Figma prototype for iOS/Android; built with Scrum and focused on fast, reliable cafeteria flows.",
        frontend: ["Figma (Interactive Prototype)"],
        backend: ["N/A (Design prototype)"],
        member: 4,
        role: "UI/UX Designer",
        demo: "",
        demoLinks: [
          {
            label: "Student",
            url: "https://vimeo.com/1110845528?share=copy",
          },
          {
            label: "Staff",
            url: "https://vimeo.com/1110845799?share=copy#t=0",
          },
        ],
        github: "",
      },
    },

    // =========================================================
    // 13
    // Instagram Clone
    // =========================================================

    {
      image: <SiSwift size={50} color="#E2872D" />,
      title: "Instagram Frontend Clone 2025",
      shortDescription:
        "SwiftUI-based Instagram UI clone using sample photos/videos with screens for Login, Chat, Post, Reel, Search, Profile, and Home.",
      images: [i1, i2, i3],
      details: {
        description:
          "This project is a SwiftUI clone of Instagram, built with sample data (images and videos) to demonstrate UI/UX and navigation. It includes Login (two screens), Chat (Messages/Channels/Requests tabs), Post, Reel, Search (grid), Profile (three tabs), and Home feed. Optimized for iPhone 16 Pro Max.",
        frontend: ["Swift", "SwiftUI"],
        backend: ["N/A (Frontend only)"],
        member: 1,
        role: "Mobile Developer",
        demo: "https://vimeo.com/1054882878",
        github: "https://github.com/tuanh00/Instagram-Clone-2025",
      },
    },

    // =========================================================
    // 14
    // LinkedIn Clone
    // =========================================================

    {
      image: <SiSwift size={50} color="#E2872D" />,
      title: "LinkedIn Frontend Clone",
      shortDescription:
        "A responsive LinkedIn clone built with Swift to replicate the UI and key features of LinkedIn.",
      images: [b1, b2],
      details: {
        description:
          "Replicates key features and UI designs of LinkedIn to demonstrate proficiency with Swift and iOS development.",
        frontend: ["Swift", "SwiftUI"],
        backend: ["N/A"],
        member: 1,
        role: "Mobile Developer",
        demo: "",
        github: "https://github.com/tuanh00/LinkedIn-Frontend-Clone",
      },
    },

    // =========================================================
    // 15
    // OOP WinForms
    // =========================================================

    {
      image: <PiFileCSharp size={50} color="#E2872D" />,
      title: "OOP Multi-Form WinForms Project",
      shortDescription:
        "C# WinForms desktop app featuring IP validation, calculators, lotto number generators, money exchange, and temperature conversion.",
      images: [lotto1, lotto2, lotto3, lotto4, lotto5, lotto6],
      details: {
        description:
          "C# WinForms app with modules for IP validation, calculator, lotto generators, currency exchange, and temperature conversion. Showcases OOP design, regex, file I/O, error handling, and UI navigation.",
        frontend: ["WinForms (C#)"],
        backend: [
          "C#",
          "OOP principles",
          "Regex",
          "FileStream (binary/text)",
        ],
        member: 1,
        role: "Fullstack (Desktop) Developer",
        demo: "",
        github: "",
      },
    },
  ];

  // =========================================================
  // PROJECT GROUPS
  // =========================================================

  const featuredProjects = dataProjects.slice(0, 3);
  const otherProjects = dataProjects.slice(3);

  return (
    <>
      {/* =====================================================
          PROJECT MODAL
          ===================================================== */}

      <Modal
        centered
        width={950}
        wrapClassName="project-modal"
        title={dataDetails?.title ?? ""}
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        maskClosable
        keyboard
        afterOpenChange={(open) => {
          if (open) {
            requestAnimationFrame(() => {
              document
                .querySelector<HTMLElement>(".project-modal .ic-wrap")
                ?.focus();
            });
          }
        }}
      >
        {dataDetails && (
          <div className="project-modal__content">
            <ImageCarousel
              images={dataDetails.images ?? []}
              altPrefix={dataDetails.title}
            />

            <div className="project-modal__body">
              <div className="project-modal__meta">
                <span>{dataDetails.details.role}</span>

                <span>
                  {dataDetails.details.member === 1
                    ? "Individual Project"
                    : `${dataDetails.details.member} Members`}
                </span>
              </div>

              <p className="project-modal__description">
                {dataDetails.details.description}
              </p>

              <div className="project-modal__stack">
                {[
                  ...dataDetails.details.frontend,
                  ...dataDetails.details.backend,
                ]
                  .filter((tech) => !tech.startsWith("N/A"))
                  .map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
              </div>

              <div className="project-modal__actions">
                {dataDetails.details.github && (
                  <a
                    href={dataDetails.details.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}

                {dataDetails.details.demo && (
                  <a
                    href={dataDetails.details.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live / Demo ↗
                  </a>
                )}

                {dataDetails.details.demoLinks?.map((demo, index) => (
                  <a
                    key={demo.url}
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {demo.label || `Demo ${index + 1}`} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* =====================================================
          PROJECTS SECTION
          ===================================================== */}

      <section className="projects" id="projects">
        <div className="projects__container">
          {/* ================= HEADER ================= */}

          <div className="projects__heading">
            <p className="projects__eyebrow">SELECTED WORK</p>

            <h2 className="projects__title">
              Projects that show
              <span> how I build.</span>
            </h2>

            <p className="projects__description">
              A selection of full-stack, backend, mobile, and web projects built
              individually and in teams.
            </p>
          </div>

          {/* ================= FEATURED ================= */}

          <div className="projects__featured">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className={`featured-project ${
                  index === 0 ? "featured-project--primary" : ""
                }`}
              >
                <button
                  type="button"
                  className="featured-project__image"
                  onClick={() => {
                    setDataDetails(project);
                    showModal();
                  }}
                  aria-label={`View ${project.title}`}
                >
                  {project.images?.[0] ? (
                    <img
                      src={project.images[0]}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="featured-project__fallback">
                      {project.image}
                    </div>
                  )}
                </button>

                <div className="featured-project__content">
                  <div className="featured-project__top">
                    <span className="featured-project__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {index === 0 && (
                      <span className="featured-project__badge">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.shortDescription}</p>

                  <div className="featured-project__stack">
                    {[
                      ...project.details.frontend,
                      ...project.details.backend,
                    ]
                      .filter((tech) => !tech.startsWith("N/A"))
                      .slice(0, 5)
                      .map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                  </div>

                  <div className="featured-project__actions">
                    <button
                      type="button"
                      onClick={() => {
                        setDataDetails(project);
                        showModal();
                      }}
                    >
                      View Details →
                    </button>

                    {project.details.demo && (
                      <a
                        href={project.details.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live ↗
                      </a>
                    )}

                    {project.details.github && (
                      <a
                        href={project.details.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ================= CONTINUE ================= */}

          <div className="projects__continue" aria-hidden="true">
            <span>↓</span>
          </div>

          {/* ================= MORE PROJECTS ================= */}

          <div className="projects__more">
            <div className="projects__subheading">
              <h3>More Projects</h3>
              <span>{otherProjects.length} projects</span>
            </div>

            <div className="projects__grid">
              {otherProjects.map((project) => (
                <article
                  key={project.title}
                  className="project-card"
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${project.title}`}
                  onClick={() => {
                    setDataDetails(project);
                    showModal();
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setDataDetails(project);
                      showModal();
                    }
                  }}
                >
                  <div className="project-card__image">
                    {project.images?.[0] ? (
                      <img
                        src={project.images[0]}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="project-card__fallback">
                        <span className="project-card__fallback-label">
                          {project.details.backend.includes("Java")
                            ? "JAVA"
                            : project.details.backend.some((tech) =>
                                tech.includes("C#")
                              )
                            ? "C#"
                            : "CODE"}
                        </span>

                        <div className="project-card__fallback-icon">
                          {project.image}
                        </div>

                        <span className="project-card__fallback-text">
                          Backend / Software Project
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="project-card__content">
                    <p className="project-card__role">
                      {project.details.role}
                    </p>

                    <h3>{project.title}</h3>

                    <p className="project-card__description">
                      {project.shortDescription}
                    </p>

                    <div className="project-card__stack">
                      {[
                        ...project.details.frontend,
                        ...project.details.backend,
                      ]
                        .filter((tech) => !tech.startsWith("N/A"))
                        .slice(0, 3)
                        .map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                    </div>

                    <span className="project-card__link">
                      View Project →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;