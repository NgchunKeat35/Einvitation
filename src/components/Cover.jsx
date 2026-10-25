import { useState } from 'react'

export default function Cover({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isFading, setIsFading] = useState(false)

  const handleOpenClick = () => {
    setIsOpen(true)
    setTimeout(() => {
      setIsFading(true)
      setTimeout(() => { onOpen() }, 1000)
    }, 2000)
  }

  return (
    <div className={`cover-stage ${isFading ? 'fading' : ''}`}>
      <div className="shell">
        <div className={`container ${isOpen ? 'opened' : 'floating'}`}>
          
          <div className="box box-inner">
            <div className="inner-content">
              <div className="inner-line"></div>
              <p>有生之年 欣喜相逢</p>
              <p>佳期已定 敬备喜筵</p>
              <p>诚邀您携家人参加我们的婚礼</p>
              <div className="inner-line"></div>
            </div>
          </div>

          <div className={`box box-cover ${isOpen ? 'open' : ''}`}>
            <div className="cover-front">
              <div className="cover-en">WEDDING INVITATION</div>
              
              <div className="xi">囍</div>
              
              <div className="names">
                <span>黄俊雄</span>
                <span className="amp">&</span>
                <span>冯凯婷</span>
              </div>
              
              {/* 父母信息：左右分栏，上下排版 */}
                 <div className="cover-parents-box">
                <div className="parent-column">
                  <span className="parent-label">男方母亲</span>
                  <span className="parent-name">余月珠</span>
                </div>
                <div className="parent-column">
                  <span className="parent-label">女方父母</span>
                  {/* 这里把点去掉，换成换行，显得更对称 */}
                  <span className="parent-name">冯文旭<br/>伍淑芬</span>
                </div>
              </div>

            </div>
            
            <div className="cover-back"></div>
            
            {!isOpen && (
              <div className="cover-btn" onClick={handleOpenClick}>
                <span>点击开启请柬</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
                </svg>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}