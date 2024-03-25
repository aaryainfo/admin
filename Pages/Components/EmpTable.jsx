import React from 'react'

function EmpTable() {
    return (
        <>
            <div className="empCorTableDiv">
                <div className="container-fluid px-0">
                    <div className="row gx-0">
                        <div className="col-lg-6">
                            <div className="empTable">
                                <div className="empValues">
                                    <div className="value">VAULT</div>
                                    <button className='btnn'>GO TO LINK</button>
                                </div>
                                <div className="empValues">
                                    <div className="value">COMPANY EMAIL</div>
                                    <button className='btnn'>WRITE MAIL</button>
                                </div>
                                <div className="empValues">
                                    <div className="value">ATTENDANCE APPLICATION</div>
                                    <button className='btnn'>GO TO LINK</button>
                                </div>
                                <div className="empValues">
                                    <div className="value">LOREM IPSUM</div>
                                    <button className='btnn'>WRITE MAIL</button>
                                </div>
                                <div className="empValues">
                                    <div className="value">LOREM IPSUM</div>
                                    <button className='btnn'>WRITE MAIL</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bgEmptable">
                            <div className="empTable">
                                <div className="empValues">
                                    <div className="values">
                                        <div className="value">PROCEDURE DAP04V000</div>
                                        <div className="smValue">PROJECT EXECTION-DETAILED</div>
                                    </div>

                                    <button className='btnn'>DOWNLOAD</button>
                                </div>
                                <div className="empValues">
                                    <div className="values">
                                        <div className="value">PROCEDURE DAP0XXXV.XX</div>
                                        <div className="smValue">SCULPTING MISTAKES</div>
                                    </div>
                                    <button className='btnn'>DOWNLOAD</button>
                                </div>
                                <div className="empValues">
                                    <div className="values">
                                        <div className="value">PROCEDURE DAP0XXXV.XX</div>
                                        <div className="smValue">PREPRATION OF ZBRUSH 3D MODEL READY FOR PRINTING</div>
                                    </div>
                                    <button className='btnn'>DOWNLOAD</button>
                                </div>
                                <div className="empValues">
                                    <div className="values">
                                        <div className="value">PROCEDURE DAP0XXXV.XX</div>
                                        <div className="smValue">ATTENDANCE</div>
                                    </div>
                                    <button className='btnn'>DOWNLOAD</button>
                                </div>
                                <div className="empValues">
                                    <div className="values">
                                        <div className="value">LOREM IPSUM</div>
                                        {/* <div className="smValue">PROJECT EXECTION-DETAILED</div> */}
                                    </div>
                                    <button className='btnn'>DOWNLOAD</button>
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

export default EmpTable