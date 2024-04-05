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
    const [selectedItem, setSelectedItem] = useState(null);
    // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


    // Function to handle icon hover
    const handleIconHover = (item) => {
        console.log("hey")
        setSelectedItem(item);
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

    const timelineData = [
        {
            title: 'Financial Data Analyst',
            company: 'Darwin Homes',
            location: 'Remote',
            role: 'ETL, SQL, Python, Financial Data modeling efficiency through software development, Project Management, Team Leading',
            Description_1: 'Develop and implement efficient ETL processes surrounding internal and external warehouses',
            Description_2: 'Daily use of SQl and Python for the gathering, manipulation and analyzation of financial data',
            Description_3: 'Lead multiple financial focused projects for actionable development and implementation',
            date: '2023-Present',
        },
        {
            title: 'Financial Data Analyst',
            company: 'Darwin Homes',
            location: 'Remote',
            description: 'ETL, SQL, Python, Financial Data modeling efficiency through software development, Project Management, Team Leading',
            date: '2023-Present',
        },
    ]

    return <div>
        <h1 className='Title'>My Timeline</h1>
        <button className="resume-button" onClick={handleClick}>Resumé</button>
        <VerticalTimeline>
            <VerticalTimeline>
                {timelineData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'linear-gradient(45deg, #f3ec78, #af4261)', color: '#fff', fontWeight: 'bold' }}
                        contentArrowStyle={{ borderRight: '7px solid ' }}
                        iconStyle={{ background: 'linear-gradient(to right, #f3ec78, #af4261)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <div className='info'>
                            <h2 className="vertical-timeline-element-title" onClick={() => handleIconHover(item)}><b><u>{item.title}</u></b></h2>
                            <h3 onClick={() => handleIconHover(item)}><i>Company:</i> {item.company}</h3>
                            <h4 className="vertical-timeline-element-subtitle" onClick={() => handleIconHover(item)}>Location: {item.location}</h4>
                            <br />
                            <p onClick={() => handleIconHover(item)}>{item.description}</p>
                            <p onClick={() => handleIconHover(item)}> <i>{item.date}</i></p>
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            {/* <VerticalTimelineElement
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
            </VerticalTimelineElement> */}
            {/* <VerticalTimelineElement
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
            </VerticalTimelineElement> */}
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'linear-gradient(to right, #e66465, #9198e5)', color: '#fff', fontWeight: 'bold' }}
                contentArrowStyle={{ borderRight: '7px solid ' }}
                iconStyle={{ background: 'linear-gradient(to right, #e66465, #9198e5)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <div className='info'>
                    <h2 className="vertical-timeline-element-title" onClick={handleIconHover}><b><u>Bachelors of Arts</u></b></h2>
                    <h3><i>School:</i> Macalester College</h3>
                    <h4 className="vertical-timeline-element-subtitle" onClick={handleIconHover}>Location: St. Paul, Minnesaota</h4>
                    <br />
                    <p onClick={handleIconHover}>
                        Graduated with Degrees in Economics & Data Science
                    </p>
                    <p onClick={handleIconHover}>
                        Captain of Football team in 2020-2021
                    </p>
                    <p><i>2017-2021</i></p>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'linear-gradient(to right, #e66465, #9198e5)', color: '#fff', fontWeight: 'bold' }}
                contentArrowStyle={{ borderRight: '7px solid ' }}
                iconStyle={{ background: 'linear-gradient(to right, #e66465, #9198e5)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <div className='info'>
                    <h2 className="vertical-timeline-element-title" onClick={handleIconHover}><b><u>High School</u></b></h2>
                    <h3><i>School:</i> Worcester Academy</h3>
                    <h4 className="vertical-timeline-element-subtitle" onClick={handleIconHover}>Location: Worcester, Massachusetts</h4>
                    <br />
                    <p onClick={handleIconHover}>
                        Graudated cum laude with a distinguishment in Economics
                    </p>
                    <p onClick={handleIconHover}>
                        Captain of Football team in 2016-2017
                    </p>
                    <p><i>2014-2017</i></p>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'linear-gradient(167deg, rgba(37,182,43,1) 15%, rgba(224,115,58,1) 44%, rgba(35,34,218,1) 99%)', color: '#fff' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
        <Modal
            isOpen={isModalOpen && selectedItem}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
            {selectedItem && (
                <div className="modal-content">
                    <h2 className="modal-title">{selectedItem.title}</h2>
                    <p className="modal-company"><i>{selectedItem.company}</i></p>
                    <p className="modal-date">{selectedItem.date}</p>
                    <p className="modal-location">{selectedItem.location}</p>
                    <ul className="bullet-list">
                        <li className="modal-description">{selectedItem.Description_1}</li>
                        <li className="modal-description">{selectedItem.Description_2}</li>
                        <li className="modal-description">{selectedItem.Description_3}</li>
                    </ul>
                    <button onClick={closeModal}>Close Modal</button>
                </div>
            )}
        </Modal>

    </div>;
}

export default Home;