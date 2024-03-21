import React from 'react'
import './services.css'
import { BsCheckLg } from "react-icons/bs";

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Full-Stack Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              {/* <p>Offer end-to-end web development services using Angular for the frontend and NestJS for the backend.</p> */}
              <p>Expertise in Angular, NestJS, Node.js, and MongoDB.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              {/* <p>Develop scalable and responsive web applications that leverage the power of MongoDB as the database.</p> */}
              <p>Develop end-to-end web applications with Angular frontend and NestJS backend.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              {/* <p>Provide custom solutions tailored to clients' specific requirements, including user authentication, data management, real-time updates, and more.</p> */}
              <p>Create scalable, responsive, and feature-rich applications.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              {/* <p>Utilize your expertise in frontend technologies like Angular to create intuitive user interfaces and optimal user experiences.</p> */}
              <p>Specialize in user authentication, data management, and real-time updates.</p> 
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Design and develop custom user interfaces with Angular to enhance user experience</p> 
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Implement responsive design principles for seamless interaction across devices..</p> 
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Create interactive components and animations to improve engagement.</p> 
            </li>
          </ul>
        </article>
        {/* End of Full-Stack Web Development */}

        <article className='service'>
          <div className="service__head">
            <h3>Consulting and Training</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              {/* <p>Provide consulting services to businesses looking to adopt Angular, NestJS, or MongoDB for their projects.</p> */}
              <p>Provide consulting on Angular, NestJS, and MongoDB projects.</p> 
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              {/* <p>Offer training sessions or workshops to help teams get up to speed with these technologies, covering best practices, architecture design, performance optimization, and more.</p> */}
              <p>Conduct training sessions for teams to learn best practices.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              {/* <p>Advise on project planning, architecture decisions, and technology stack selection based on your experience with successful implementations.</p> */}
              <p>Advise on project planning, architecture, and technology stack.</p> 
            </li>
          </ul>
        </article>
        {/* End of Consulting and Training */}

        <article className='service'>
          <div className="service__head">
            <h3>Custom Development and Integration Solutions</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              {/* <p>Develop custom modules, plugins, or extensions for Angular and NestJS applications to extend their functionality.</p> */}
              <p>Develop custom modules and extensions for Angular and NestJS.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              {/* <p>Offer integration services to connect existing systems with Angular/NestJS applications, ensuring seamless data flow and communication between different parts of the infrastructure.</p> */}
              <p>Offer integration services to connect systems seamlessly.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              {/* <p>Provide migration services to help businesses transition from legacy systems or outdated technologies to modern Angular/NestJS solutions, leveraging MongoDB for data storage and management.</p> */}
              <p>Provide migration assistance to modernize legacy systems.</p> 
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Analyze and optimize frontend and backend code for improved performance.</p> 
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Implement lazy loading and code splitting techniques to reduce initial load times.</p> 
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Fine-tune database queries and indexing strategies for faster data retrieval.</p> 
            </li>
          </ul>
        </article>
        {/* End of Custom Development and Integration Solutionst */}

      </div>
    </section>
  )
}

export default services