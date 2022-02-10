import React from "react";
import "./Courses.css";




const Courses= () => {
    return (
    
    <div className="mainCourses" id="courses">
        <h3 className="sectionTitle">Online Certifications</h3>
    <div className="type">
    <div className="card">
        <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHjvfNL_2AXIw/company-logo_200_200/0/1628018657141?e=1652313600&v=beta&t=DCE1bmE0c21Ix_iCyYdTdgBsOv2D4CoIDRq8SzRXDmI" alt="" />
        <a href="https://www.futurelearn.com/certificates/gtp4fcc" target="_blank">
        <h3>Digital Skills: User Experience</h3></a>
        <span>Accenture</span>
    </div>
    <div className="card">
    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQGLKj3JHcof0w/company-logo_200_200/0/1589990867649?e=1652313600&v=beta&t=SWQp4gw9LqsWHSozxgyqQ7nAMdJb1OkfwS5aVUzittw" alt="" />
    <a href="https://www.freecodecamp.org/certification/fccd46ad565-3ccc-47ea-b2a3-7dbf369aaa06/javascript-algorithms-and-data-structures" target="_blank"> <h3>JavaScript Algorithms and Data Structures</h3></a>
    <span>freeCodeCamp</span>
    </div>
    <div className="card">
    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQGLKj3JHcof0w/company-logo_200_200/0/1589990867649?e=1652313600&v=beta&t=SWQp4gw9LqsWHSozxgyqQ7nAMdJb1OkfwS5aVUzittw" alt="" />
    <a href="https://www.freecodecamp.org/certification/fccd46ad565-3ccc-47ea-b2a3-7dbf369aaa06/responsive-web-design" target="_blank"><h3>Responsive Web Design</h3></a>
    <span>freeCodeCamp</span>
    </div>

    <div className="card">
    <img src="https://media-exp1.licdn.com/dms/image/C560BAQHneWLNCPQgDA/company-logo_200_200/0/1641202397642?e=1652313600&v=beta&t=wX-8bIIJpUud2M7UP0ogMyvm6fnxRhpz2gNPIoO-zjQ" alt="" />
    <a href="https://www.hackerrank.com/certificates/57822a330163" target="_blank"><h3>JavaScript Intermediate</h3></a>
    <span>HackerRank</span>
    </div>
    <div className="card">
    <img src="https://media-exp1.licdn.com/dms/image/C560BAQHMVfed1djuQA/company-logo_200_200/0/1634816790343?e=1652313600&v=beta&t=G5uYUj5MBPf3y4ZuLhPb3SNtYF5FfY4_j_CvVshebsE" alt="" />
    <a href="https://www.studysection.com/users/socialMedia/NDkyMjk4/ZGFnYWx1azk2QGdtYWlsLmNvbQ==" target="_blank"><h3>React 16.X Foundation</h3></a>
    <span>StudySection</span>
    </div>
    <div className="card">
    <img src="https://media-exp1.licdn.com/dms/image/C560BAQHMVfed1djuQA/company-logo_200_200/0/1634816790343?e=1652313600&v=beta&t=G5uYUj5MBPf3y4ZuLhPb3SNtYF5FfY4_j_CvVshebsE" alt="" />
    <a href="https://www.studysection.com/users/socialMedia/NDkyMjg4/ZGFnYWx1azk2QGdtYWlsLmNvbQ==" target="_blank"><h3>CSS Advanced</h3></a>
    <span>StudySection</span>
    </div>
    </div>
    </div>
    
    );
}

export default Courses;