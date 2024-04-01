import React, { useState } from 'react';
import Modal from 'react-modal';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import './Home.scss'

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle icon hover
    const handleIconHover = () => {
        console.log("hey")
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return <div>
        {/* <h1>Home Page</h1> */}
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000000', fontWeight: 'bold' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                // dateStyle={{ color: 'black' }}
                date="2023 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={< WorkIcon onClick={handleIconHover} />}
            >
                <h3 className="vertical-timeline-element-title" onClick={handleIconHover}>Financial Data Analyst</h3>
                <br />
                <h4 className="vertical-timeline-element-subtitle" onClick={handleIconHover}>Location: Remote</h4>
                <p onClick={handleIconHover}>
                    ETL, SQL, Python, Financial Data modeling efficiency through software development, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>
                    User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                    Strategy, Social Media
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                    Creative Direction, User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                    Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
            <h2>Modal Title</h2>
            <button onClick={closeModal}>Close Modal</button>
        </Modal>
    </div>;
}

export default Home;