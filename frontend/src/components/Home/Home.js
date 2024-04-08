import React, { useState } from 'react';
import Modal from 'react-modal';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import './Home.scss'
import CloseIcon from '@mui/icons-material/Close';

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
            role: 'Drove the design and execution of efficient ETL processes for internal and external data warehouses, utilizing SQL and Python extensively for data gathering, manipulation, and analysis, while also leading multiple financial-focused projects from inception to implementation',
            Description_1: 'Develop and implement efficient ETL processes surrounding internal and external warehouses',
            Description_2: 'Daily use of SQl and Python for the gathering, manipulation and analyzation of financial data',
            Description_3: 'Lead multiple financial focused projects for actionable development and implementation',
            date: '2023-Present',
        },
        {
            title: 'Project Manager',
            company: 'LandVest',
            location: 'Boston, MA',
            role: 'Contributed to revenue growth and operational efficiency by managing centralized databases, developing pricing models for high-value real estate deals, and leading data research projects to support strategic decision-making',
            Description_1: 'Assisted in a 28% YOY increase in revenue for consulting department by maintaining an optimized central comparable sales and lease database for specific high-value comparable properties and markets',
            Description_2: 'Developed multi-tiered pricing model for $+1B of real estate deals (development, acquisitions, and refinances for clients) using a combination of mySQL, VBA, and Python code',
            Description_3: 'Led real estate data research projects for the Managing Director for exclusive presentation materials through collection, customization, and visualization of data sets for internal and external audiences',
            date: '2021 - 2023',
        },
        {
            title: 'Comparative Unit Analyst',
            company: 'Doorkee',
            location: 'New York City, NY',
            role: 'Played a pivotal role in leveraging data analytics to enhance decision-making processes, optimize pricing strategies, and streamline workflows, ultimately driving efficiency and maximizing revenue for property management firms.',
            Description_1: 'Empirically analyzed price and movement trends for NYC apartments utilizing various ML practices',
            Description_2: 'Reported optimized pricing models of apartment units to maximize rental income and minimize vacancy for +1,000 unit property management firms',
            Description_3: 'Worked with firms and team members to update workflows to optimize efficiency and accessibility for the company through data analytics',
            date: '2019-2021',
        },
        {
            title: 'Real Estate Sales Person',
            company: 'Coldwell Banker',
            location: 'Minnesota and Massachusetts',
            role: 'Sold Houses',
            Description_1: 'Created and implemented a centralized database system to optimize sales and customer engagement',
            Description_2: 'Managed contracts, negotiations and all aspects of sales to finalize purchases and exceed customer expectations',
            Description_3: 'Reviewed market research data and changed sales plans accordingly',
            date: '2017-2021',
        },
        {
            title: 'Farm Manager',
            company: 'Chestnut farms',
            location: 'Hardwick, MA',
            role: 'Helping on the family Livestock Farm',
            Description_1: 'Established sustainable farming practices, including rotational grazing and organic feed sourcing, to promote environmental stewardship and animal welfare while maintaining cost-effectiveness',
            Description_2: 'Implemented customer feedback mechanisms and market analysis to tailor product offerings, pricing strategies, and promotional activities, resulting in enhanced customer satisfaction and increased sales volumes',
            Description_3: 'Evaluated equipment performance and conducted cost-benefit analyses to inform decisions on machinery upgrades or replacements, optimizing farm productivity and resource allocation.',
            date: '1998-Present',
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
                            <p onClick={() => handleIconHover(item)}> <i>{item.role}</i></p>
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
                iconStyle={{ background: 'linear-gradient(to bottom right, #ffff66 0%, #ff5050 100%)', color: '#fff' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
        <Modal
            isOpen={isModalOpen && selectedItem}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className='Modal'
        >
            {selectedItem && (
                <div className="modal-content">
                    <button className="close-button" onClick={closeModal}><CloseIcon /></button>
                    <h2 className="modal-title">{selectedItem.title}</h2>
                    <p className="modal-company"><i>{selectedItem.company}</i></p>
                    <p className="modal-date">{selectedItem.date}</p>
                    <p className="modal-location">{selectedItem.location}</p>
                    <ul className="bullet-list">
                        <li className="modal-description">{selectedItem.Description_1}</li>
                        <li className="modal-description">{selectedItem.Description_2}</li>
                        <li className="modal-description">{selectedItem.Description_3}</li>
                    </ul>
                </div>
            )}
        </Modal>

    </div>;
}

export default Home;