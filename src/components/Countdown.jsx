import { useEffect, useState } from 'react'
import photo3 from '../assets/photo3.jpeg' 

const TARGET = new Date('2027-01-14T10:00:00').getTime()

export default function Countdown() {
  const [time, setTime] = useState(calc())

  function calc() {
    const diff = TARGET - Date.now()
    if (diff <= 0) return null
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    }
  }

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section">
      <div className="title">婚礼倒计时</div>
      <div className="gold-line"></div>
      
      {time ? (
        <div className="countdown">
          <div>{time.days}<small>天</small></div>
          <div>{time.hours}<small>时</small></div>
          <div>{time.minutes}<small>分</small></div>
          <div>{time.seconds}<small>秒</small></div>
        </div>
      ) : (
        <p style={{ color: '#666', marginBottom: '10px' }}>婚礼已举行，感谢您的祝福！</p>
      )}

      <div className="polaroid-section" style={{ padding: 0 }}>
        <div className="polaroid-frame" style={{ width: '80%', maxWidth: '280px' }}> 
          <div className="polaroid-inner">
            <img src={photo3} alt="倒计时照片" />
          </div>
          <div className="polaroid-stamp">囍</div>
        </div>
      </div>
    </section>
  )
}