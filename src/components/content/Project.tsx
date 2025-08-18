import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import { SiSwift } from "react-icons/si";
import { Button, Modal } from "antd";
import ImageCarousel from "@/components/ImageCarousel";
import f1 from "@/assets/img/project/fastfood/1.jpg";
import f2 from "@/assets/img/project/fastfood/2.png";
import f3 from "@/assets/img/project/fastfood/3.jpg";
import f4 from "@/assets/img/project/fastfood/4.jpg";
import f5 from "@/assets/img/project/fastfood/5.jpg";
import f6 from "@/assets/img/project/fastfood/6.jpg";
import f7 from "@/assets/img/project/fastfood/7.jpg";
import f8 from "@/assets/img/project/fastfood/8.jpg";
import e1 from "@/assets/img/project/edugame/Home_Screen.jpg";
import e2 from "@/assets/img/project/edugame/Login_Screen.jpg";
import e3 from "@/assets/img/project/edugame/Sign_Up_Screen.jpg";
import e4 from "@/assets/img/project/edugame/Reset_Password_Screen.jpg";
import e5 from "@/assets/img/project/edugame/Msg_Go_To_Next_Round.jpg";
import e6 from "@/assets/img/project/edugame/Msg_Wrong_Answer.jpg";
import e7 from "@/assets/img/project/edugame/Won_The_Game_Screen.jpg";
import e8 from "@/assets/img/project/edugame/Gaming_History.jpg";
import x1 from "@/assets/img/project/carapp/1.jpg";
import x2 from "@/assets/img/project/carapp/2.jpg";
import x3 from "@/assets/img/project/carapp/3.jpg";
import x4 from "@/assets/img/project/carapp/4.jpg";
import x5 from "@/assets/img/project/carapp/5.jpg";
import x6 from "@/assets/img/project/carapp/6.jpg";
import y1 from "@/assets/img/project/propertyweb/Homepage.png";
import y2 from "@/assets/img/project/propertyweb/OwnerLogin.png";
import y3 from "@/assets/img/project/propertyweb/ManagerResponse.png";
import y4 from "@/assets/img/project/propertyweb/ManagerApartments.png";
import y5 from "@/assets/img/project/propertyweb/ManagerBuildings.png";
import y6 from "@/assets/img/project/propertyweb/OwnerEvents.png";
import y7 from "@/assets/img/project/propertyweb/OwnerManagerMsg.png";
import y8 from "@/assets/img/project/propertyweb/Diagram.png";
import a1 from "@/assets/img/project/podcastweb/1.jpg";
import a2 from "@/assets/img/project/podcastweb/2.jpg";
import b1 from "@/assets/img/project/linkedln/1.jpg";
import b2 from "@/assets/img/project/linkedln/2.jpg";
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
import c1 from "@/assets/img/project/recipeat/test.jpg";
import c2 from "@/assets/img/project/recipeat/DBStructure.jpg";
import i1 from "@/assets/img/project/instagram/1.jpg";
import i2 from "@/assets/img/project/instagram/2.jpg";
import i3 from "@/assets/img/project/instagram/3.jpg";
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
    demoLinks?: Array<{ label?: string; url: string }>;
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

  const dataProjects: IProject[] = [
    {
      image: <FaReact size={50} color={"#E2872D"} />,
      title: "Three of Us For German Shepherds Foundation",
      shortDescription:
        "Private, ongoing project supporting the foundation, using TypeScript and Firebase.",
      images: [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13],
      details: {
        description:
          "Under active development for the Three of Us For German Shepherds Foundation. Delivered a responsive, mobile-first site using TypeScript and Firebase for real-time data, implemented cookie consent & preferences, added direct-to-owner form delivery with anti-spam protection, and built a full admin dashboard for content and submissions.",
        frontend: ["TypeScript", "HTML", "SCSS", "Bootstrap"],
        backend: [
          "Firestore Database",
          "Firebase Authentication",
          "Google Analytics",
          "EmailJS",
        ],
        member: 1,
        role: "Fullstack Developer",
        demo: "https://nemetjuhasz.com/?lang=en",
        github: "",
      },
    },
    {
      image: <FaReact size={50} color={"#E2872D"} />,
      title: "Fast Food Delivery Web Application",
      shortDescription:
        "A full-stack web app for admin, shipper, and customer roles, integrating APIs for communication and optimized delivery.",
      images: [f1, f2, f3, f4, f5, f6, f7, f8],
      details: {
        description:
          "Built a web application with roles for admin, shippers, and customers, offering a user-friendly front-end and efficient management tools for admins. API integration ensures seamless communication between users, while shippers benefit from optimized delivery routes, and customers enjoy a streamlined ordering experience.",
        frontend: ["React", "React-Bootstrap", "Vite", "SCSS", "Ant Design"],
        backend: ["Node.js", "C#", "SQL Server"],
        member: 4,
        role: "Front-end Developer",
        demo: "",
        github:
          "https://github.com/tuanh00/FastFoodDelivery_WebApplication_SummerProject",
      },
    },
    {
      image: <FaJava size={50} color={"#E2872D"} />,
      title: "Car App Rental Management",
      shortDescription:
        "Streamlines car rental operations with secure user authentication, bookings, contract management, and payments.",
      images: [x1, x2, x3, x4, x5, x6],
      details: {
        description:
          "Built using Android Studio (Java), Firebase, and Stripe. The app enables secure user authentication, car booking, contract management, and payment processing. Implemented Factory and Builder design patterns. Uses Google Calendar API and Stripe Payment (Node.js).",
        frontend: ["Java (Android Studio)"],
        backend: [
          "Firestore Database",
          "Firebase Authentication",
          "Node.js",
          "Stripe Payments API",
          "Google Calendar API",
        ],
        member: 3,
        role: "Mobile Developer",
        demo: "",
        github: "https://github.com/tuanh00/CarRentalManagement",
      },
    },
    {
      image: <SiSwift size={50} color={"#E2872D"} />,
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
    {
      image: <PiFileCSharp size={50} color={"#E2872D"} />,
      title: "Property Rental Management",
      shortDescription:
        "Web app for property owners, managers, and tenants with secure role-based access and integrated scheduling.",
      images: [y1, y2, y3, y4, y5, y6, y7, y8],
      details: {
        description:
          "Streamlines operations for property Owners, Managers, and Tenants using ASP.NET MVC and Entity Framework. Users can manage properties, appointments, events, and messages with secure, role-based access. Utilizes SQL Server 2019 and C# on the backend, JavaScript and HTML on the client side.",
        frontend: ["HTML", "JavaScript"],
        backend: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server 2019"],
        member: 1,
        role: "Fullstack Developer",
        demo: "",
        github: "https://github.com/tuanh00/Property-Rental-Management",
      },
    },
    {
      image: <FaReact size={50} color={"#E2872D"} />,
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
    {
      image: <FaPhp size={50} color={"#E2872D"} />,
      title: "Educational Game Platform",
      shortDescription:
        "A web-based platform for children’s educational games, featuring user management and interactive challenges.",
      images: [e1, e2, e3, e4, e5, e6, e7, e8],
      details: {
        description:
          "Developed a web-based educational game platform aimed at children. The platform features user account management, real-time form validation, and a multi-level question-and-answer game designed to enhance learning through interactive challenges.",
        frontend: ["HTML", "CSS"],
        backend: ["PHP", "MySQL"],
        member: 4,
        role: "Fullstack Developer",
        demo: "",
        github: "https://github.com/tuanh00/WebApplication_I_WinterProject",
      },
    },
    {
      image: <SiSwift size={50} color={"#E2872D"} />,
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
        github: "https://github.com/tuanh00/LinkedIn-Frontend-Clone",
      },
    },
    {
      image: <FaJava size={50} color={"#E2872D"} />,
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
    {
      image: <SiFigma size={50} color={"#E2872D"} />,
      title: "LasAppetite",
      shortDescription:
        "Interactive Figma design for LaSalle’s cafeteria—students order & pay; staff manage inventory and orders.",
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
          { label: "Student", url: "https://vimeo.com/1110845528?share=copy" },
          {
            label: "Staff",
            url: "https://vimeo.com/1110845799?share=copy#t=0",
          },
        ],
        github:
          "",
      },
    },
    {
      image: <FaJava size={50} color={"#E2872D"} />,
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
    {
      image: <PiFileCSharp size={50} color={"#E2872D"} />,
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
    {
      image: <FaJava size={50} color={"#E2872D"} />,
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
        github: "https://github.com/tuanh00/AircraftManagement_DesignPatterns",
      },
    },
  ];
  return (
    <>
      <Modal
        centered
        width={900} // desktop cap
        wrapClassName="project-modal"
        title={
          dataDetails && dataDetails.title ? `Project ${dataDetails.title}` : ""
        }
        open={isModalOpen}
        onOk={() => handleCloseModal()}
        onCancel={() => handleCloseModal()}
        footer={null}
        maskClosable={true}
        keyboard={true}        // allow ESC to close too
      >
        <ImageCarousel
          images={dataDetails?.images ?? []}
          altPrefix={dataDetails?.title ?? "Screenshot"}
        />
        {dataDetails && (
          <ul className="project-details">
            <li>
              <strong>Description:</strong> {dataDetails.details.description}
            </li>
            <li>
              <strong>Frontend:</strong>{" "}
              {dataDetails.details.frontend.join(", ")}
            </li>
            <li>
              <strong>Backend:</strong> {dataDetails.details.backend.join(", ")}
            </li>
            <li>
              <strong>Member:</strong> {dataDetails.details.member}
            </li>
            <li>
              <strong>Role:</strong> {dataDetails.details.role}
            </li>

            {/* Prefer array of links; fall back to single demo string */}
            {Array.isArray(dataDetails.details.demoLinks) &&
            dataDetails.details.demoLinks.length > 0
              ? dataDetails.details.demoLinks.map((d, i) => (
                  <li key={i}>
                    <strong>
                      Demo{d.label ? ` (${d.label})` : ` ${i + 1}`}:
                    </strong>{" "}
                    <a href={d.url} target="_blank" rel="noopener noreferrer">
                      Watch flow
                    </a>
                  </li>
                ))
              : dataDetails.details.demo && (
                  <li>
                    <strong>Demo:</strong>{" "}
                    <a
                      href={dataDetails.details.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View demo
                    </a>
                  </li>
                )}

            {/* Only show GitHub if not empty */}
            {dataDetails.details.github && (
              <li>
                <strong>GitHub:</strong>{" "}
                <a
                  href={dataDetails.details.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View repository
                </a>
              </li>
            )}
          </ul>
        )}
      </Modal>

      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Projects</h3>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProjects.map((item, index) => {
                  return (
                    <li key={`${index}-project`}>
                      <div
                        className="inner"
                        title="View Details"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setDataDetails(item);
                          showModal();
                        }}
                      >
                        {/* <div className="icon">{item.image}</div> */}
                        {item.images?.[0] ? (
                          <div className="thumb">
                            <img
                              src={item.images[0]}
                              alt={`${item.title} cover`}
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="icon">{item.image}</div>
                        )}
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div
                          className="view_detail"
                          style={{ padding: "5px 0" }}
                        >
                          <span style={{ cursor: "pointer" }}>
                            <BsArrowRight />
                            &nbsp; View Details
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
