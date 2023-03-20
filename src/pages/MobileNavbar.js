import React, { useState } from 'react'
import { usePost } from '../context/PostContext';

function MobileNavbar() {
    const [a, setA] = useState(true)
    const { setPosts } = usePost();
    const [photo123, setphoto123] = useState(null);
    const handleInputChange = (event) => {
        setphoto123(URL.createObjectURL(event.target.files[0]));
    }

    const addİmage = () => {
        setPosts((pre) => [...pre, { src: photo123 }]);
        setA(true)
    };
    return (
        /*col start */
        <div className="col-12 d-md-none p-0 d-flex justify-content-center">
            <ul className={`d-flex justify-content-center list-unstyled border align-items-center w-100 bg-light py-1 ${a && 'position-fixed'} `} style={{ bottom: "-15px" }}>
                <li>
                    <i className="fs-3 bi bi-house-door-fill"></i>
                </li>
                <li className='px-5'>
                    <i className="fs-3 fa-regular fa-compass"></i>
                </li>

                <li className='fs-3'>

                    <button type="button" class="btn " onClick={() => setA( false)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-clipboard-plus fs-4 pe-lg-3"></i>
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Resim ekle</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className=" d-flex justify-content-center align-items-center" style={{ maxHeight: "20rem" }}>
                                        <i className="bi bi-images fs-1"></i>
                                        <i className="bi bi-film fs-1 px-2"></i>
                                        <input type="file" accept="image/*" name="file" onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="modal-footer d-flex justify-content-center">
                                    <button onClick={addİmage}  className="btn btn-info" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Yükle</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className='px-5'>
                    <i className="fs-3 bi bi-camera-reels"></i>
                </li>
                <li >
                    <div className='d-inline'>
                        <img src="../img/resim1.jpg" width={"23"} height={"23"} className="border border-3 border-dark rounded-circle" alt="" />
                    </div>
                </li>
            </ul>
        </div>
        /*col end */
    )
}

export default MobileNavbar
