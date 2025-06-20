import { RiMailLine, RiMapPinLine, RiPhoneLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../../utlits/animations/slideUp'

const ContactOption = () => {
    const part1 = "+33";
    const part2 = "6";
    const part3 = "82";
    const part4 = "73";
    const part5 = "86";

    const full = `0${part2} ${part3} ${part3} ${part4} ${part5}`;
    const telHref = `tel:${[part1, part2, part3, part3, part4, part5].join("")}`;
    return (
        <div className="col-lg-4">
            <SlideUp>
                <div className="contact-content-part">
                    <h2 className="mb-4">Pierre Beaufaron</h2>
                    <SlideUp delay={2}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i> <RiMapPinLine size={20} /></i>
                            </div>
                            <h2>based in:</h2>
                            <p>69100 Villeurbanne, France</p>
                        </div>
                    </SlideUp>
                    <SlideUp delay={3}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                            <div className="contact-icon">
                                <i> <RiPhoneLine size={20} /></i>
                            </div>
                            <h2>contact number:</h2>
                            <p><a href={telHref}>{full}</a></p>
                        </div>
                    </SlideUp>
                    {/* <SlideUp delay={4}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                            <div className="contact-icon">
                                <i> <RiMailLine size={20} /></i>
                            </div>
                            <h2>Email:</h2>
                            <p>websitename@mail.com</p>
                        </div>
                    </SlideUp> */}
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactOption