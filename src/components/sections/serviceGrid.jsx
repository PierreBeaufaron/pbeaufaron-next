import React from 'react'
import { RiTerminalBoxLine, RiPantoneFill, RiMacLine, RiToolsFill, RiArrowRightLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Skills</p>
                                    <h2>Technical Skills</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card id={1} icon={<RiTerminalBoxLine size={60} />} title={"Development"} description={"Java / Spring, PHP / Symfony, JS / TypeScript, NestJS, Angular, React / Next, MySQL"} />
                        <Card id={2} icon={<RiMacLine size={60} />} title={"Web Design"} description={"HTML, CSS, Bootstrap, Tailwind, WordPress, Figma"} />
                        <Card id={3} icon={<RiToolsFill size={60} />} title={"Tools"} description={"VS Code, IntelliJ, Git / GitHub, Dockers, Jira"} />
                        <Card id={4} icon={<RiPantoneFill size={60} />} title={"Graphic Design"} description={"Adobe InDesign, Adobe Illustrator, Adobe Photoshop, Adobe Animate, Adobe Acrobat Pro"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    const items = description.split(",").map(item => item.trim()).filter(item => item);
    return (
        <div className="col-lg-3 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    <div className="icon">{icon}</div>
                    <h4>{title}</h4>
                    <ul className="skill-list">
                        {items.map((item, index) => (
                            <li key={index}><i> <RiArrowRightLine size={14} /></i>{item}</li>
                        ))}
                    </ul>
                </div>
            </SlideUp>
        </div>
    )
}