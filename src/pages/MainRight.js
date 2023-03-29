import React from 'react'

function MainRight() {
  return (
    <div className='d-none d-lg-block col-md-3 col-xl-3 py-5'> {/*col-start*/}
      <ul class="list-group" style={{ maxWidth: "350px" }}>
        <li class="list-group-item d-flex justify-content-between border-0 mb-2 align-items-center">
          <img src="../img/resim.jpg" className='rounded-circle' width={"50"} height={"50"} alt="resim" />
          <div class="ms-2 me-auto">
            <div class="fw-bold f-size">m.alitrtml</div>
            <span className='f-size'>Mehmet Ali</span>
          </div>
          <span class="text-info fw-bold f-size"> <small>Geçiş yap</small> </span>
        </li>
        <div className='ps-3 d-flex justify-content-between'>
          <p className='text-muted f-size'>Senin için öneriler</p>
          <p> <small className='text-muted f-size'>Tümünü gör</small> </p>
        </div>

        <li class="list-group-item d-flex justify-content-between border-0 mb-2 align-items-center">
          <img src="../img/resim.jpg" className='rounded-circle' width={"40"} height={"40"} alt="resim" />
          <div class="ms-2 me-auto">
            <div class="fw-bold f-size">m.alitrtml</div>
            <small className='text-muted f-size'>_abc + 4 diğer kişi takip ediyor</small>
          </div>
          <span class="text-info fw-bold f-size"> <small>Takip et</small> </span>
        </li>

        <li class="list-group-item d-flex justify-content-between border-0 mb-2 align-items-center">
          <img src="../img/resim.jpg" className='rounded-circle' width={"40"} height={"40"} alt="resim" />
          <div class="ms-2 me-auto">
            <div class="fw-bold f-size">m.alitrtml</div>
            <small className='text-muted f-size'>_abc + 4 diğer kişi takip ediyor</small>
          </div>
          <span class="text-info fw-bold f-size"> <small>Takip et</small> </span>
        </li>
        <li class="list-group-item d-flex justify-content-between border-0 mb-2 align-items-center">
          <img src="../img/resim.jpg" className='rounded-circle' width={"40"} height={"40"} alt="resim" />
          <div class="ms-2 me-auto">
            <div class="fw-bold f-size">m.alitrtml</div>
            <small className='text-muted f-size'>_abc + 4 diğer kişi takip ediyor</small>
          </div>
          <span class="text-info fw-bold f-size"> <small>Takip et</small> </span>
        </li>
        <li class="list-group-item d-flex justify-content-between border-0 mb-2 align-items-center">
          <img src="../img/resim.jpg" className='rounded-circle' width={"40"} height={"40"} alt="resim" />
          <div class="ms-2 me-auto">
            <div class="fw-bold f-size">m.alitrtml</div>
            <small className='text-muted f-size'>_abc + 4 diğer kişi takip ediyor</small>
          </div>
          <span class="text-info fw-bold f-size"> <small>Takip et</small> </span>
        </li>
        <li class="list-group-item d-flex justify-content-between border-0 mb-2 align-items-center">
          <img src="../img/resim.jpg" className='rounded-circle' width={"40"} height={"40"} alt="resim" />
          <div class="ms-2 me-auto">
            <div class="fw-bold f-size">m.alitrtml</div>
            <small className='text-muted f-size'>_abc + 4 diğer kişi takip ediyor</small>
          </div>
          <span class="text-info fw-bold f-size"> <small>Takip et</small> </span>
        </li>
      </ul>

      {/* footer start */}
      <footer>
        <ul className='d-flex flex-wrap list-unstyled w-75 mt-3' style={{ fontSize: "11px" }}>
          <li className='px-2 text-muted'>Hakkında</li>
          <li className='px-2 text-muted'>Yardım</li>
          <li className='px-2 text-muted'>Basın</li>
          <li className='px-2 text-muted'>API</li>
          <li className='px-2 text-muted'>İş Fırsatları</li>
          <li className='px-2 text-muted'>Gizlilik</li>
          <li className='px-2 text-muted'>Koşullar</li>
          <li className='px-2 text-muted'>Dil</li>
          <li className='px-2 text-muted'>Meta verified</li>
        </ul>
        <p className='px-2 text-muted'><small>© 2023 INSTAGRAM FROM META</small></p>
      </footer>
      {/* footer end */}

    </div> /*col-start*/
  )
}

export default MainRight
