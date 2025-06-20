import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import Link from 'next/link'
import Image from 'next/image'

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <Imagege width={732} height={979} style={{width:"100%", height:"auto"}} src={"/images/about/Profile.png"} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I’m Pierre Beaufaron, a Developer & Graphic Designer.
                                </h2>
                                <p><strong>After earning my Web Developer certification, I’m now continuing my studies at an advanced level and actively seeking a 4-month unpaid internship, available from October 13, 2025, to February 11, 2026.</strong></p>
                                <p>I started the program with a strong background in HTML, CSS, and JavaScript, which allowed me to quickly build on those foundations by exploring modern technologies and web frameworks. During the first year, I gained hands-on experience with PHP and Symfony, as well as TypeScript and Angular. I also completed a 4-month internship working on a full JavaScript stack including Nest.js, Prisma, and React.</p>
                                <p>This year, the focus has shifted towards software architecture, design patterns, and unit testing, primarily using <strong>Java</strong> and the <strong>Spring framework</strong>. On the front end, we’re diving deeper into advanced <strong>Angular</strong> development.</p>
                                <div className="hero-btns">
                                    <Link href="/contact" className="theme-btn">Get In touch<i> <RiMailSendLine size={16} /> </i></Link>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery