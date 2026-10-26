import { useEffect, useState } from 'react'
import './App.css'
import Cover from './components/Cover'
import Invitation from './components/Invitation'
import Countdown from './components/Countdown'
import WeddingInfo from './components/WeddingInfo'
import Notice from './components/Notice'
import RSVPForm from './components/RSVPForm'

import magpieImg from './assets/magpie.jpg' 
import photo1 from './assets/photo1.jpeg' 

export default function App() {
  const [opened, setOpened] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // 花瓣特效
  useEffect(() => {
    if (!opened) return
    const container = document.createElement('div')
    container.className = 'petals'
    document.body.appendChild(container)

    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div')
      p.className = 'petal'
      const size = 8 + Math.random() * 10 
      p.style.width = size + 'px'
      p.style.height = size + 'px'
      p.style.left = Math.random() * 100 + 'vw'
      p.style.animationDuration = 6 + Math.random() * 8 + 's' 
      p.style.animationDelay = Math.random() * 8 + 's'
      p.style.opacity = 0.4 + Math.random() * 0.6 
      p.style.background = Math.random() > 0.5 ? 'rgba(248, 215, 218, 0.9)' : 'rgba(212, 175, 55, 0.6)'   
      container.appendChild(p)
    }
    return () => { document.body.removeChild(container) }
  }, [opened])

  // 滚动淡入
  useEffect(() => {
    if (!opened) return
    const sections = document.querySelectorAll('.section')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('show')
        })
      },
      { threshold: 0.15 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [opened])

  // 开启请柬
  function handleOpen() {
    const bgm = document.getElementById('bgm')
    if (bgm) {
      bgm.play()
         .then(() => setIsPlaying(true))
         .catch(() => setIsPlaying(false))
    }
    setOpened(true)
    window.scrollTo({ top: 0 })
  }

  // 音乐控制
  const toggleMusic = () => {
    const bgm = document.getElementById('bgm')
    if (bgm) {
      if (isPlaying) { 
        bgm.pause(); 
        setIsPlaying(false); 
      } else { 
        bgm.play()
           .then(() => setIsPlaying(true))
           .catch((err) => console.error("播放失败", err)); 
      }
    }
  }

  return (
    <>
      <audio id="bgm" src="/music/bgm.mp3" loop preload="auto" />

      {!opened ? (
        <Cover onOpen={handleOpen} />
      ) : (
        <main style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
          
          <div onClick={toggleMusic} className="music-toggle-btn">
            {isPlaying ? (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            )}
          </div>

          <div className="ink-image-bg">
            <img src={magpieImg} alt="喜鹊登梅" />
          </div>

          <Invitation />
          <Countdown />
          
          {/* 1. 婚礼行程 (纯文字与地址) */}
          <WeddingInfo />
          
          {/* 2. 合影照片 */}
          <div className="polaroid-section" style={{ marginTop: '10px', marginBottom: '15px' }}>
            <div className="polaroid-frame">
              <div className="polaroid-inner">
                <img src={photo1} alt="合影" />
              </div>
              <div className="polaroid-stamp">囍</div>
            </div>
          </div>

          {/* 3. 地图与导航按钮 (挪到了照片下面) */}
          <div style={{ display: 'flex', gap: 15, justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px' }}>
            <a className="btn" href="https://maps.app.goo.gl/Q2tfhgHxtU4oqpz1A" target="_blank" rel="noreferrer">
              查看地图
            </a>
            <a className="btn" href="https://waze.com/ul?ll=6.392385,100.134527&navigate=yes" target="_blank" rel="noreferrer">
              Waze 导航
            </a>
          </div>

          {/* 4. 温馨提示 */}
          <Notice />
          
          {/* 5. RSVP表单 */}
          <RSVPForm />
          
          <footer style={{ padding: '30px', textAlign: 'center', color: '#999', fontSize: '12px' }}>
            Steven & Charis· 致敬
          </footer>
        </main>
      )}
    </>
  )
}