'use client'
import React from 'react'
import Link from 'next/link';
import { RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import PartnersMarquee from './partnersMarquee';
import SlideUp from '@/utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/profile.png"} alt="About Me" />
                                <h2>Pierre Beaufaron</h2>
                                <p>Developer & graphic designer</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link href=""><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link href=""><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Hello There!</p>
                                <h2>
                                    I’m Pierre Beaufaron, a meticulous junior full stack developer & experienced graphic designer.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Looking for an internship focused on Java / Angular development.</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <Link href="/contact" className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i> </Link>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <PartnersMarquee />
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero