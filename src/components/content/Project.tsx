import React, { useState } from 'react';
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { PiFileCSharp } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import { Button, Modal } from 'antd';


interface IProject {
    image: JSX.Element;
    title: string;
    shortDescription: string;
    details: {
        description: string;
        frontend: string[];
        backend: string[];
        member: number;
        role: string;
        demo: string;
        github: string;
    }
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
  }

  const dataProjects: IProject[] = [
    {
        image: <FaReact 
            size={50}
            color={'#E2872D'}/>,
        title: "Fast Food Delivery Web Application",
        shortDescription: "A full-stack web app for admin, shipper, and customer roles, integrating APIs for communication and optimized delivery.",
        details: {
            description: "Built a web application with roles for admin, shippers, and customers, offering a user-friendly front-end and efficient management tools for admins. API integration ensures seamless communication between users, while shippers benefit from optimized delivery routes, and customers enjoy a streamlined ordering experience.",
            frontend: ["React", "React-Bootstrap", "Vite", "SCSS", "Ant Design"],
            backend: ["Node.js", "C#", "SQL Server"],
            member: 4,
            role: "Front-end Developer",
            demo: "",
            github: "https://github.com/tuanh00/FastFoodDelivery_WebApplication_SummerProject",
        }
    },
    {
        image: <FaPhp 
            size={50}
            color={'#E2872D'}/>,
        title: "Educational Game Platform",
        shortDescription: "A web-based platform for children’s educational games, featuring user management and interactive challenges.",
        details: {
            description: "Developed a web-based educational game platform aimed at children. The platform features user account management, real-time form validation, and a multi-level question-and-answer game designed to enhance learning through interactive challenges.",
            frontend: ["HTML", "CSS"],
            backend: ["PHP", "MySQL"],
            member: 4,
            role: "Fullstack Developer",
            demo: "",
            github: "https://github.com/tuanh00/WebApplication_I_WinterProject",
        }
    },
    {
        image: <FaJava 
            size={50}
            color={'#E2872D'}/>,
        title: "Cinema Management System",
        shortDescription: "A Java-based console app using design patterns to manage cinema operations, screenings, and reservations.",
        details: {
            description: "The Cinema Management System is a Java-based console application that utilizes key design patterns such as Abstract Factory, Builder, Chain of Responsibility, and Singleton. It simulates interactions between customers, employees, and the cinema's database system to manage movie screenings, customer reservations, and employee tasks.",
            frontend: ["N/A (Console Application)"],
            backend: ["Java", "SQLite"],
            member: 1,
            role: "Back-end Developer",
            demo: "",
            github: "https://github.com/tuanh00/Advanced_OOP_Cinema_ConsoleApp_FallProject",
        }
    },
    {
        image: <PiFileCSharp  
            size={50}
            color={'#E2872D'} />,
        title: "Multi-tier Windows Application",
        shortDescription: "A 3-tier C# application for managing students, enrollments, courses, and programs with SQL Server.",
        details: {
            description: "Developed a 3-tier application using C#, Windows Forms, and ADO.NET for database management. The application offers four management options at the main menu: Students, Enrollments, Courses, and Programs. SQL Server was used to handle data storage and transactions, with a well-organized back-end structure to support the application.",
            frontend: ["Windows Forms (C#)"],
            backend: ["C#", "SQL Server", "ADO.NET"],
            member: 1,
            role: "Fullstack Developer",
            demo: "",
            github: "https://github.com/tuanh00/Multi-tier-Applications-Project",
        }
    },
    {
      image: <FaJava size={50} color={'#E2872D'} />,
      title: "Car App Rental Management",
      shortDescription: "Streamlines car rental operations with secure user authentication, bookings, contract management, and payments.",
      details: {
        description: "Built using Android Studio (Java), Firebase, and Stripe. The app enables secure user authentication, car booking, contract management, and payment processing. Implemented Factory and Builder design patterns. Uses Google Calendar API and Stripe Payment (Node.js).",
        frontend: ["Java (Android Studio)"],
        backend: ["Firestore Database", "Node.js"],
        member: 3,
        role: "Mobile Developer",
        demo: "", 
        github: "https://github.com/tuanh00/CarRentalManagement",
      }
    },
    {
      image: <PiFileCSharp size={50} color={'#E2872D'} />,
      title: "Property Rental Management",
      shortDescription: "Web app for property owners, managers, and tenants with secure role-based access and integrated scheduling.",
      details: {
        description: "Streamlines operations for property Owners, Managers, and Tenants using ASP.NET MVC and Entity Framework. Users can manage properties, appointments, events, and messages with secure, role-based access. Utilizes SQL Server 2019 and C# on the backend, JavaScript and HTML on the client side.",
        frontend: ["HTML", "JavaScript"],
        backend: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server 2019"],
        member: 1,
        role: "Fullstack Developer",
        demo: "",
        github: "https://github.com/tuanh00/Property-Rental-Management",
      }
    },
    {
      image: <FaReact size={50} color={'#E2872D'} />,
      title: "Podcast Landing Page",
      shortDescription: "Central hub for a podcast series with embedded audio, detailed episode descriptions, and source links.",
      details: {
        description: "Showcases each episode using embedded audio players, descriptions, and relevant source links. Built with TypeScript, CSS, JavaScript, and HTML. Deployed on Vercel.",
        frontend: ["TypeScript", "CSS", "JavaScript", "HTML"],
        backend: ["N/A (Static Frontend)"],
        member: 1,
        role: "Front-end Developer",
        demo: "https://tuanh-podcast.vercel.app/",
        github: "https://github.com/tuanh00/Podcast-Landing-Page",
      }
    },
    {
      image: <FaJava size={50} color={'#E2872D'} />,
      title: "LinkedIn Frontend",
      shortDescription: "A responsive LinkedIn clone built with Swift to replicate the UI and key features of LinkedIn.",
      details: {
        description: "Replicates key features and UI designs of LinkedIn to demonstrate proficiency with Swift and iOS development.",
        frontend: ["Swift (iOS)"],
        backend: ["N/A (Frontend only)"],
        member: 1,
        role: "Mobile Developer",
        demo: "",
        github: "https://github.com/tuanh00/LinkedIn-Frontend-Clone",
      }
    },
    {
      image: <FaJava size={50} color={'#E2872D'} />,
      title: "Aircraft Management",
      shortDescription: "Java application demonstrating Builder, Abstract Factory, and State patterns with comprehensive JUnit tests.",
      details: {
        description: "Implements Builder, Abstract Factory, and State design patterns in Java. Includes JUnit tests to verify functionality and ensure reliability.",
        frontend: ["N/A"],
        backend: ["Java"],
        member: 4,
        role: "Backend Developer",
        demo: "",
        github: "https://github.com/tuanh00/AircraftManagement_DesignPatterns", 
      }
    },
    {
      image: <FaReact size={50} color={'#E2872D'} />,
      title: "Three of Us For German Shepherds Foundation",
      shortDescription: "Private, ongoing project supporting the foundation, using TypeScript and Firebase.",
      details: {
        description: "A private project under ongoing updates, supporting the Three of Us For German Shepherds Foundation. Utilizes TypeScript and Firebase for real-time data handling. Includes a public-facing site for awareness and fund-raising.",
        frontend: ["TypeScript", "HTML", "CSS"],
        backend: ["Firestore Database"],
        member: 2,
        role: "Fullstack Developer",
        demo: "https://nemetjuhasz.com/?lang=en",
        github: "",
      }
    }
  ]
return (
<>
      <Modal title={dataDetails && dataDetails.title ? `Project ${dataDetails.title}` : ""}
            open = {isModalOpen} 
            onOk = {() => handleCloseModal()}
            onCancel = {() => handleCloseModal()}
            footer = {null}
            maskClosable = {false}
            >
        {
            dataDetails && 
            <ul>
                <li>Desciption: {dataDetails.details.description}</li>
                <li>Frontend: {dataDetails.details.frontend.join(", ")}</li>
                <li>Backend: {dataDetails.details.backend.join(", ")}</li>
                <li>Member: {dataDetails.details.member}</li>
                <li>Role: {dataDetails.details.role}</li>
                {
                  //Only show demo if it is not empty
                  dataDetails.details.demo && (
                    <li>
                Demo:{" "}
                <a
                  href={dataDetails.details.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dataDetails.details.demo}
                </a>
              </li>
                  )}
                <li>Github: <a href = {dataDetails.details.github} target="_blank" rel="noopener noreferrer">Github</a></li>
            </ul>
        }
      </Modal>
    
<div className="arlo_tm_section" id="projects">
                <div className="arlo_tm_services_wrap">
                  <div className="container">
                    <div className="arlo_tm_title_holder">
                      <h3>Projects</h3>
                      {/* <span>Meet our amazing services</span> */}
                    </div>
                    <div className="list_wrap">
                      <ul>
                        {dataProjects.map((item, index) => {
                                return(
                                    <li key={`${index}-project`}>
                          <div className="inner" title="View Details"
                                style = {{ cursor: "pointer" }}
                                onClick = {() => {
                                    setDataDetails(item);
                                    showModal();
                                }}>
                            <div className="icon">
                              {item.image}
                            </div>
                            <div className="title_service">
                              <h3>{item.title}</h3>
                            </div>
                            <div className="text">
                              <p>{item.shortDescription}</p>
                            </div>
                            <div className="view_detail" style={{ padding: "5px 0"}}>
                                <span style = {{ cursor: "pointer" }}>
                                    <BsArrowRight />
                                    &nbsp;
                                    View Details
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
)
}
export default Project;
