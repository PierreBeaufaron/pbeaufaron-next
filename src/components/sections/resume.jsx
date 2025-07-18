import React from 'react'
import { RiGraduationCapFill, RiBriefcaseFill  } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'October 2024 - Febuary 2025'} title={'Junior Developer NestJS / React'} institution={'HDM Network, Charleroi'} type={'experience'} />
                                    <Card year={'2013 - 2023'} title={'Multimedia Designer'} institution={'Public Imprim, Vénissieux'} type={'experience'} />
                                    <Card year={'2012'} title={'Graphic Designer'} institution={'Éditions de Saxe, Chaponost'} type={'experience'} />
                                    <Card year={'2010 - 2012'} title={'Multimedia Designer'} institution={'Dag Import, Dardilly'} type={'experience'} />
                                    <Card year={'Since 2010'} title={'Freelance Graphic Designer'} institution={'Collaborating with various clients'} type={'experience'} />
                                    <Card year={'2009'} title={'Graphic Designer'} institution={'Communications department, Mairie du Creusot'} type={'experience'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'In Progress'} title={'Certified Course – Application Designer and Developer (equivalent to a Bachelor\'s degree)'} institution={'Human Booster, Villeurbanne'} type={'education'} />
                                    <Card year={'Febuary 2025'} title={'State-Certified – Web and Mobile Web Developer (RNCP title)'} institution={'Human Booster Villeurbanne'} type={'education'} />
                                    <Card year={'2016'} title={'WordPress / Magento Training'} institution={'Public Imprim, delivered by Galilée, Bordeaux'} type={'education'} />
                                    <Card year={'2010'} title={'Two-Year Technical Degree in Multimedia Graphic Design'} institution={'AFPA, Vénissieux'} type={'education'} />
                                    <Card year={'2004  - 2006'} title={'Second Year of a Bachelor\'s Degree in Arts – Plastic Arts specialization'} institution={'Michel de Montaigne University, Bordeaux'} type={'education'} />
                                    <Card year={'2004  - 2006'} title={'French Baccalaureate in Industrial Science and Technology (STI) – Applied Arts specialization'} institution={'Lycée Alain Colas (Secondary School), Nevers'} type={'education'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution, type }) => {
    const Icon = type == 'experience' ? RiBriefcaseFill : RiGraduationCapFill;
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <Icon />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}