'use client'
import Image from 'next/image'
import React from 'react'
import { projectsData } from '@/utlits/fackData/projectData'
import { useSearchParams } from 'next/navigation'

// Trigger vercel redeploy again
const SingleProject = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const project = projectsData.find(p => p.id === parseInt(id))

    if (!project) {
        return <p className="text-center mt-20">Project not found</p>
    }
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>{project.category}</p>
                        <h1>{project.title}</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={project.src} alt="image" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <!-- START SINGLE LEFT DESIGN AREA --> */}
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>{project.date}</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>{project.client}</h3>
                            </div>
                        </div>
                        {/* <!-- / END SINGLE LEFT DESIGN AREA --> */}
                    </div>
                    {/* <!-- START SINGLE RIGHT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>
                                Description
                            </h2>
                            <p>{project.description}</p>
                        </div>
                    </div>
                    {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
                </div>
                {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}
                {project.src2 && (
                    <div className="row pt-30">
                        {project.src2 && (
                            <div className="col-lg-6">
                                <div className="single-image wow fadeInUp delay-0-2s">
                                    <Image width={633} height={679} sizes='100%' style={{ width: "100%", height: "auto" }} src={project.src2} alt="gallery" />
                                </div>
                            </div>
                        )}
                        {project.src3 && (
                            <div className="col-lg-6">
                                <div className="single-image wow fadeInUp delay-0-4s">
                                    <Image width={633} height={679} sizes='100%' style={{ width: "100%", height: "auto" }} src={project.src3} alt="gallery" />
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
            </div>
        </div>
    )
}

export default SingleProject