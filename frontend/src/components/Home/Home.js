import React, { useState } from 'react';
import Modal from 'react-modal';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import './Home.scss'
// import { Document, Page, pdfjs } from 'react-pdf';

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


    // Function to handle icon hover
    const handleIconHover = () => {
        console.log("hey")
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // const pdfUrl = 'frontend/public/Sam Jakshtis Resume (3).pdf';

    function handleClick() {
        window.open("./Sam Jakshtis Resume (3).pdf", "_blank");
    }


    return <div>
        <h1 className='Title'>My Timeline</h1>
        <button className="resume-button" onClick={handleClick}>Resumé</button>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'linear-gradient(45deg, #f3ec78, #af4261)', color: '#fff', fontWeight: 'bold' }}
                contentArrowStyle={{ borderRight: '7px solid ' }}
                iconStyle={{ background: 'linear-gradient(to right, #f3ec78, #af4261)', color: '#fff' }}
                icon={< WorkIcon onClick={handleIconHover} />}
            >
                <div className='info'>
                    <h2 className="vertical-timeline-element-title" onClick={handleIconHover}><b><u>Financial Data Analyst</u></b></h2>
                    <h3><i>Company:</i> Darwin Homes</h3>
                    <h4 className="vertical-timeline-element-subtitle" onClick={handleIconHover}>Location: Remote</h4>
                    <br />
                    <p onClick={handleIconHover}>
                        ETL, SQL, Python, Financial Data modeling efficiency through software development, Project Management, Team Leading
                    </p>
                    <p><i>2023-Present</i></p>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'linear-gradient(-45deg, #f3ec78, #af4261)', color: '#fff', fontWeight: 'bold' }}
                contentArrowStyle={{ borderRight: '7px solid ' }}
                iconStyle={{ background: 'linear-gradient(to right, #f3ec78, #af4261)', color: '#fff' }}
                icon={< WorkIcon onClick={handleIconHover} />}
            >
                <div className='info'>
                    <h2 className="vertical-timeline-element-title" onClick={handleIconHover}><b><u>Project Manager</u></b></h2>
                    <h3><i>Company:</i> LandVest</h3>
                    <h4 className="vertical-timeline-element-subtitle" onClick={handleIconHover}>Location: Boston, MA</h4>
                    <br />
                    <p onClick={handleIconHover}>
                        Developed multi-tiered pricing model for $+1B of real estate deals (development, acquisitions, and refinances for clients)
                    </p>
                    <p><i>2021-2023</i></p>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'linear-gradient(-45deg, #f3ec78, #af4261)', color: '#fff', fontWeight: 'bold' }}
                contentArrowStyle={{ borderRight: '7px solid ' }}
                iconStyle={{ background: 'linear-gradient(to right, #f3ec78, #af4261)', color: '#fff' }}
                icon={< WorkIcon onClick={handleIconHover} />}
            >
                <div className='info'>
                    <h2 className="vertical-timeline-element-title" onClick={handleIconHover}><b><u>Project Manager</u></b></h2>
                    <h3><i>Company:</i> Doorkee</h3>
                    <h4 className="vertical-timeline-element-subtitle" onClick={handleIconHover}>Location: New York City, NY</h4>
                    <br />
                    <p onClick={handleIconHover}>
                        Empirically analyzed price and movement trends for NYC apartments utilizing various ML practices
                    </p>
                    <p><i>2020-2021</i></p>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'linear-gradient(-45deg, #f3ec78, #af4261)', color: '#fff', fontWeight: 'bold' }}
                contentArrowStyle={{ borderRight: '7px solid ' }}
                iconStyle={{ background: 'linear-gradient(to right, #f3ec78, #af4261)', color: '#fff' }}
                icon={< WorkIcon onClick={handleIconHover} />}
            >
                <div className='info'>
                    <h2 className="vertical-timeline-element-title" onClick={handleIconHover}><b><u>Real Estate Salesperson</u></b></h2>
                    <h3><i>Company:</i> Coldwell Banker</h3>
                    <h4 className="vertical-timeline-element-subtitle" onClick={handleIconHover}>Location: Minnesota & Massachusetts</h4>
                    <br />
                    <p onClick={handleIconHover}>
                        Sold Houses
                    </p>
                    <p><i>2017-2021</i></p>
                </div>
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