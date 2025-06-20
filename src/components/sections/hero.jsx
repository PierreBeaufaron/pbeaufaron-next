'use client'
import React from 'react'
import Link from 'next/link';
import { RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import PartnersMarquee from './partnersMarquee';
import SlideUp from '@/utlits/animations/slideUp';
import Image from 'next/image';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <Image width={732} height={979} style={{width:"100%", height:"auto"}} src={"/images/about/Profile.png"} alt="About Me" />
                                <h2>Pierre Beaufaron</h2>
                                <p>Developer & Graphic Designer</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link target="_blank" href="https://www.linkedin.com/in/pierre-beaufaron-99bb754a"><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link target="_blank" href="https://github.com/PierreBeaufaron"><RiGithubLine size={20} /></Link></li>
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
                                    I’m Pierre Beaufaron, a meticulous junior full stack Developer & experienced Graphic Designer.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Looking for an internship focused on Java / Angular development (or other for frontend).</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <Link href="/files/CV_PBeaufaron_Dev_2025.pdf" target="_blank" className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i> </Link>
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