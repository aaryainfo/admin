import React from 'react'

function ArtstudioSec() {
  return (
    <>
      <div className="artStudioPage">
        <div className="container-fluid mx-0">
          <div className="row">
            <div className="col-lg-6 px-0">
              <div className="imgDiv">
                <img loading="lazy" className='w-100' src="/Images/artStu1Img.webp" alt="" />
                <div className="mainText">
                  <div className="Texts">
                    <div className="horiText">DAGAD ART STUDIO</div>
                    <div className="imgText">EMBARK ON AN <span><img className='imgg' src="/Images/artStuSign.svg" alt="" /></span>
                      JOURNEY</div>
                  </div>

                </div>

              </div>
            </div>
            <div className="col-lg-6 px-0">
              <div className="img">
                <img loading="lazy" className='w-100' src="/Images/artStu2Img.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArtstudioSec