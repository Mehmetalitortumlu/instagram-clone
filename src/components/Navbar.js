import React from 'react'
import Create from '../pages/Create';

function Navbar() {
    return (
        <div className="d-none d-md-flex justify-content-center justify-content-md-center col-md-1 col-lg-2 py-5 border-end position-relative " style={{ minHeight: "100vh" }}>
            <nav >
                <a href="/" className='text-decoration-none d-none d-md-inline fs-4 text-dark px-3'>
                    <span className='fs-3 d-none d-lg-inline'> <em>Instagram</em> </span>
                </a>
                <ul className='py-3 list-unstyled px-3 fs-4 '>
                    <li className='pt-1 pt-lg-4'>
                        <i className="bi bi-house-door-fill pe-lg-3"></i>
                        <span className='fs-6 d-none d-lg-inline'>Ana Sayfa</span>
                    </li>
                    <li className='pt-4'>
                        <i className="bi bi-search pe-lg-3"></i>
                        <span className='fs-6 d-none d-lg-inline'>Ara</span>
                    </li>
                    <li className='pt-4'>
                        <i className="fa-regular fa-compass pe-lg-3"></i>
                        <span className='fs-6 d-none d-lg-inline'>Keşfet</span>
                    </li>
                    <li className='pt-4'>
                        <i className="bi bi-camera-reels pe-lg-3"></i>
                        <span className='fs-6 d-none d-lg-inline'>Reels</span>
                    </li>
                    <li className='pt-4'>
                        <i className='btn btn-white fs-5 p-0 bi bi-chat-dots pe-lg-3 position-relative'>
                            <span style={{ width: "24px" }} className='position-absolute top-0 start-75 px-0 py-1 border border-white badge rounded-circle bg-danger translate-middle '>
                                <small>9</small>
                            </span>
                        </i>
                        <span className='fs-6 d-none d-lg-inline '>Mesajlar</span>
                    </li>
                    <li className='pt-4'>
                        <i className='btn btn-white bi bi-heart fs-5 p-0 bi bi-chat-dots pe-lg-3 position-relative'>
                            <span style={{ width: "24px" }} className='position-absolute top-0 start-75 px-0 py-1 border border-white badge rounded-circle bg-danger translate-middle '>
                                <small>9</small>
                            </span>
                        </i>
                        <span className='fs-6 d-none d-lg-inline '>Bildirimler</span>
                    </li>
                    <li className='pt-4'>
                      {/* modal start */}
                      <Create/>
                      {/* modal end */}

                    </li>
                    <li className='pt-4'>
                        <div className='d-inline pe-lg-3'>
                            <img src="https://media.licdn.com/dms/image/D5635AQHqdDb-eS6FVw/profile-framedphoto-shrink_100_100/0/1662648174490?e=1678921200&v=beta&t=J8Qn-Zgfv8Y1nPru_X2wKliqBOv4IejhpDb9BNnkNrw" width={"23"} height={"23"} className="border border-3 border-dark rounded-circle" alt="" />
                        </div>
                        <span className='fs-6 d-none d-lg-inline '>Profil</span>
                    </li>
                </ul>

                {/* dropdown button*/}
                <div className="btn-group dropup  mt-5 py-5">
                    <button type="button" id="myDropdown" className="btn btn-light dropdown-toggle d-none d-lg-inline" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots-vertical"></i>
                        <span className='px-2 fs-6 '>
                            Daha fazla
                        </span>
                    </button>
                    <ul className="dropdown-menu py-0">
                        <li className='border-bottom d-flex align-items-center'>
                            <a href="/" className="dropdown-item  py-2">Ayarlar</a>
                            <i className="bi bi-gear-fill fs-5 px-2"></i>
                        </li>
                        <li className='border-bottom d-flex align-items-center'>
                            <a href="/" className="dropdown-item py-2 ">Hareketlerin</a>
                            <i className="bi bi-stopwatch fs-5 px-2"></i>
                        </li>
                        <li className='border-bottom d-flex align-items-center'>
                            <a href="/" className="dropdown-item border-bottom py-2">Kaydedilenler</a>
                            <i className="bi bi-box-arrow-down fs-5 px-2"></i>
                        </li>
                        <li className='border-bottom d-flex align-items-center'>
                            <a href="/" className="dropdown-item border-bottom py-2">Görünümü değiştir</a>
                            <i className="bi bi-moon fs-5 px-2"></i>
                        </li>
                        <li className='border-bottom d-flex align-items-center'>
                            <a href="/" className="dropdown-item border-bottom py-2">Bir sorun bildir</a>
                            <i className="bi bi-exclamation-circle fs-5 px-2"></i>
                        </li>
                        <li><a href="/" className="dropdown-item border-bottom py-2">Hesap Değiştir</a></li>
                        <li><a href="/" className="dropdown-item border-bottom py-2">Çıkış yap</a></li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
