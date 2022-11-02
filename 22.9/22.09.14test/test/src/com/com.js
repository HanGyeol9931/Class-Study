import React from 'react'
import imgA from "../img/img1.jpeg"
import imgB from "../img/img2.png"
import imgC from "../img/img3.png"
import imgD from "../img/img4.png"

function com() {
  return (
    <div className='content'>
      <div className='box'>
        <div className='img'></div>
        <img src={imgA} alt="" />
        <div className='text'>[안방1열직캠4K]뉴진스 민지</div>
        <div className='text name'>작성자</div>
      </div>
      <div className='box'>
      <img src={imgB} alt="" />
        <div className='text'>
          Github Copilot AI가 만든 코인 자동매매 봇 돌려봄 와..
        </div>
        <div className='text name'>작성자</div>
      </div>
      <div className='box'>
      <img src={imgC} alt="" />
        <div className='text'>
          한 번 봐도 기억에 남는 매력적인 사람들의 공통된 특징
        </div>
        <div className='text name'>작성자</div>
      </div>
      <div className='box'>
      <img src={imgD} alt="" />
        <div className='text'>
          이세계에서 F급 직업만 뽑아버린 극악의 운을 가진 용사님이 되어버렸다!
        </div> 
        <div className='text name'>작성자</div>
      </div>
    </div>
  )
}

export default com