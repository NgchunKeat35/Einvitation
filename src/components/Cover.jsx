import { useState } from 'react'

export default function Cover({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isFading, setIsFading] = useState(false)

  const handleOpenClick = () => {
    // 1. 触发翻书动画（CSS 里是 1.5 秒）
    setIsOpen(true)
    
    // 2. 核心修改：这里的数字控制翻开后“停留”的时间（单位是毫秒，1000 = 1秒）
    setTimeout(() => {
      // 触发淡出动画
      setIsFading(true)
      
      // 3. 等待淡出动画结束（1秒），再彻底进入主页面
      setTimeout(() => { onOpen() }, 1000)
      
    }, 3500) // 
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
              
              <div className="cover-parents-box">
                <div className="parent-column">
                  <span className="parent-label">男方母亲</span>
                  <span className="parent-name">余月珠</span>
                </div>
                <div className="parent-column">
                  <span className="parent-label">女方父母</span>
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