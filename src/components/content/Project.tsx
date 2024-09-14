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
    }
     
  ]
return (
<>
{/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
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
                <li>Demo: <a href = {dataDetails.details.demo} target="_blank" rel="noopener noreferrer">Demo</a></li>
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
