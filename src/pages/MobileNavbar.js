import React from 'react'

function MobileNavbar() {
    return (
        /*col start */
        <div className="col-12 d-md-none p-0 ">
            <ul className='d-flex justify-content-center list-unstyled border align-items-center w-100 bg-light py-1 position-fixed ' style={{ bottom: "-15px" }}>
                <li>
                    <i className="fs-3 bi bi-house-door-fill"></i>
                </li>
                <li className='px-5'>
                    <i className="fs-3 fa-regular fa-compass"></i>
                </li>

                <li className='fs-3'>
                <i className="bi bi-clipboard-plus pe-lg-3"></i>
                </li>

                <li className='px-5'>
                    <i className="fs-3 bi bi-camera-reels"></i>
                </li>
                <li >
                    <div className='d-inline'>
                        <img src="https://media.licdn.com/dms/image/D5635AQHqdDb-eS6FVw/profile-framedphoto-shrink_100_100/0/1662648174490?e=1678921200&v=beta&t=J8Qn-Zgfv8Y1nPru_X2wKliqBOv4IejhpDb9BNnkNrw" width={"23"} height={"23"} className="border border-3 border-dark rounded-circle" alt="" />
                    </div>
                </li>
            </ul>
        </div>
        /*col end */
    )
}

export default MobileNavbar
