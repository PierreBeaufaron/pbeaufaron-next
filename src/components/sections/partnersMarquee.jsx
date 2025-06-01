import React from 'react'
import Marquee from "react-fast-marquee";

const PartnersMarquee = () => {
    return (
        <div className="about-content-part-bottom">
            <h2>Tools & technologies I use</h2>
            <div className="company-list">
                <div className="scroller">
                    <div className="scroller__inner">
                        <Marquee>
                            <img src={"/images/client-logos/html.png"} alt="HTML5" />
                            <img src={"/images/client-logos/css.png"} alt="CSS3" />
                            <img src={"/images/client-logos/bootstrap.png"} alt="bootstrap" />
                            <img src={"/images/client-logos/tailwind.png"} alt="tailwind" />
                            <img src={"/images/client-logos/javascript.png"} alt="JavaScript" />
                            <img src={"/images/client-logos/typescript.png"} alt="TypeScript" />
                            <img src={"/images/client-logos/angular.png"} alt="Angular" />
                            <img src={"/images/client-logos/react.png"} alt="React" />
                            <img src={"/images/client-logos/nestjs.png"} alt="Nestjs" />
                            <img src={"/images/client-logos/php.png"} alt="PHP" />
                            <img src={"/images/client-logos/symfony.png"} alt="Symfony" />
                            <img src={"/images/client-logos/java.png"} alt="Java" />
                            <img src={"/images/client-logos/spring.png"} alt="Spring" />
                            <img src={"/images/client-logos/mysql.png"} alt="MySQL" />
                            <img src={"/images/client-logos/vscode.png"} alt="VS Code" />
                            <img src={"/images/client-logos/intellij.png"} alt="IntelliJ" />
                            <img src={"/images/client-logos/git.png"} alt="Git" />
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnersMarquee