import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const jobs = [
  {
    title: 'Database Adminstrator',
    company: 'YWCA',
    date: 'Sep 2022 - Present',
    description: 'As a Senior Database Administrator, I lead complex database design and optimization, establish KPIs, and play a strategic role in management meetings. I contribute to staff training and provide guidance on sophisticated database solutions, expanding beyond my junior role focused on reporting.'
  },
  {
    title: 'Web Designer',
    company: 'Tinker Club (Contract)',
    date: 'Nov 2023 - March 2024',
    description: 'In my role as a contract web developer, I am tasked with the comprehensive creation of a Wix website, involving the development of over 15 pages and the implementation of essential features such as purchasing, scheduling, and contact functionalities. Leveraging my expertise in custom coding, I am dedicated to delivering personalized solutions to meet the specific needs and requirements of the project.'
  },
  {
    title: 'Jr. Database Coordinator',
    company: 'YWCA',
    date: 'Feb 2022 - Sep 2022',
    description: 'As a Junior Database Coordinator, I design and optimize database queries, develop automated reporting systems, and collaborate on cross-functional projects, contributing to quality improvement initiatives and translating business requirements into database solutions.'
  },
  {
    title: 'Computer Science Teacher',
    company: 'Teach Communication Through Science',
    date: 'Jan 2020 - Dec 2022',
    description: 'As a Computer Science Teacher, I have developed and delivered dynamic lessons in Python, Scratch, science, and math to groups of 5-12 students. Proficient in translating complex concepts into easily understandable terms, I consistently set clear objectives and maintain effective communication with parents to report on student progress.'
  },
  {
    title: 'Private Math Tutor',
    company: 'Self Employed',
    date: 'Nov 2019 - Present',
    description: 'As a dedicated private tutor, I provided comprehensive instruction in various subjects, with a primary focus on math, Python, and Java programming for students ranging from grades 3 to 11. Handling all aspects independently, I successfully sourced and acquired clients, managed scheduling, provided constructive feedback, and developed tailored lesson plans to ensure a personalized and effective learning experience.'
  },
];

const WorkTimeline = () => {
  return (
    <div className='experience'>
      <h2>Work Experience</h2>
      <VerticalTimeline>
        {jobs.map((job, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${index % 2 === 0 ? 'work' : 'education'}`}
            date={job.date}
            iconStyle={{ background: '#C248A0', color: '#C248A0' }}
            icon={<i className="fa fa-briefcase"></i>}
          >
            <h3 className="vertical-timeline-element-title">{job.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{job.company}</h4>
            <p className='vertical-timeline-element-description'>Responsibilities:</p>
            <p className='vertical-timeline-element-description'>{job.description}</p>

          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkTimeline;
