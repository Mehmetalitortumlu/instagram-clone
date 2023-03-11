import React, { useState } from 'react'
import { usePost } from '../context/PostContext';

function Create() {
    const { setPosts } = usePost();
    const [photo123, setphoto123] = useState(null);
    const handleInputChange = (event) => {
      setphoto123(URL.createObjectURL(event.target.files[0]));
    }

    const addİmage=() => {
        setPosts((pre)=> [...pre, {src:photo123}]);
    };

    return (
        <>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel">Yeni gönderi oluştur</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className=" d-flex justify-content-center align-items-center" style={{ maxHeight: "20rem" }}>
                                <i className="bi bi-images fs-1"></i>
                                <i className="bi bi-film fs-1 px-2"></i>
                                <input type="file" accept="image/*" name="file" onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button onClick={addİmage} className="btn btn-info" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Yükle</button>
                        </div>
                    </div>
                </div>
            </div>

            <a className="text-decoration-none text-dark" data-bs-toggle="modal" href="#exampleModalToggle" role="button"
            ><i className="bi bi-clipboard-plus pe-lg-3"></i>
                <span className='fs-6 d-none d-lg-inline '>Oluştur</span></a>
        </>
    )
}

export default Create
