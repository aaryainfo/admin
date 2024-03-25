import React from 'react'

function CareerAImgTxt() {
    return (
        <>
            <div className="carAImgTxtDiv">
                <div className="container-fluid mx-0 px-0">
                    <div className="row gx-0">
                        <div className="col-lg-6" id='career1'>
                            <div className="CareerTexts" id='careerA'>
                                <div className="text">EMPLOYMENT, STUDIES OR INTERNSHIPS</div>
                                <div className="subTxt">
                                    <p>Embark on a journey where innovation converges with imagination at DagadArt. We warmly invite passionate individuals exploring employment, studies, or internships, creating a diverse community. Join a team valuing creativity, craftsmanship, and collaboration, offering a spectrum of career opportunities that celebrate your unique skills.</p>
                                    <p>For those on a continuous learning journey, DagadArt seamlessly merges academic curiosity into practical skills. Engage in opportunities for studies, skill enhancement, and professional development within a dynamic space celebrating innovation.</p>
                                    <p> If you're an aspiring professional in the vibrant world of art and technology, DagadArt's career opportunities provide a platform to contribute to ground breaking projects. Immerse yourself in real world projects, actively shaping your career while collaborating with seasoned professionals. Moreover, DagadArt recognizes the importance of academic exploration. Our internships go beyond practical experience, allowing students to integrate academic theses into ongoing projects, merging theoretical insights with handson application.</p>
                                    <p>Immerse yourself in an innovative environment at DagadArt, transcending borders and pushing artistic expression boundaries. Our studio values global perspectives, fostering international collaboration for creative exploration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="CarImg" style={{backgroundImage: `url(${"/Images/carAInternImg.webp"})`}}>
                                <img className='w-100 careerIg' src="/Images/carAInternImg.webp" alt="" />
                                <div className="carTxt">
                                    <div className="texts">
                                        <div className="text">Join the DagadArt family, a melting pot of diverse talents celebrated for their contribution to the rich tapestry of our global creative community. Work with cutting-edge technology, placing DagadArt at the forefront of artistic creation on an international level.</div>
                                        <div className="subTxt">Join us at DagadArt, where your career aspirations align smoothly with your passion for creativity. Whether launching your career, pursuing studies, or seeking internships, discover a world of possibilities spanning continents. Your canvas of opportunity awaits-paint your career with DagadArt and contribute to the global landscape of artistic innovation.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerAImgTxt