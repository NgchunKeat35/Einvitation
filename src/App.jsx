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

  // 1. 花瓣飘落动画
  useEffect(() => {
    if (!opened) return
    const container = document.createElement('div')
    container.className = 'petals'
    document.body.appendChild(container)

    for (let i = 0; i < 24; i++) {
      const p = document.createElement('div')
      p.className = 'petal'
      
      const size = 8 + Math.random() * 10 
      p.style.width = size + 'px'
      p.style.height = size + 'px'
      
      p.style.left = Math.random() * 100 + 'vw'
      p.style.animationDuration = 6 + Math.random() * 8 + 's' 
      p.style.animationDelay = Math.random() * 8 + 's'
      p.style.opacity = 0.4 + Math.random() * 0.6 
      
      // 随机颜色（一半淡粉色，一半淡金色）
      p.style.background = Math.random() > 0.5 
        ? 'rgba(248, 215, 218, 0.9)' 
        : 'rgba(212, 175, 55, 0.6)'   
        
      container.appendChild(p)
    }

    return () => { document.body.removeChild(container) }
  }, [opened])

  // 2. 滚动入场动画
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

  // 3. 开启请柬
  function handleOpen() {
    const bgm = document.getElementById('bgm')
    if (bgm) {
      bgm.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
    }
    setOpened(true)
    window.scrollTo({ top: 0 })
  }

  // 4. 切换音乐
  const toggleMusic = () => {
    const bgm = document.getElementById('bgm')
    if (bgm) {
      if (isPlaying) { bgm.pause(); setIsPlaying(false); } 
      else { bgm.play(); setIsPlaying(true); }
    }
  }

  return (
    <>
      <audio id="bgm" src="/music/bgm.mp3" loop />

      {!opened ? (
        <Cover onOpen={handleOpen} />
      ) : (
        <main style={{ position: 'relative', overflow: 'hidden' }}>
          
          {/* 悬浮音乐开关 */}
          <div onClick={toggleMusic} className="music-toggle-btn">
            {isPlaying ? (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            )}
          </div>

          {/* 顶部水墨喜鹊背景 */}
          <div className="ink-image-bg">
            <img src={magpieImg} alt="喜鹊登梅" />
          </div>

          <Invitation />
          <Countdown />
          <WeddingInfo />
          
          {/* 中间的照片过渡区 */}
          <div className="polaroid-section" style={{ marginTop: '-10px', marginBottom: '-10px' }}>
            <div className="polaroid-frame">
              <div className="polaroid-inner">
                <img src={photo1} alt="合影" />
              </div>
              <div className="polaroid-stamp">囍</div>
            </div>
          </div>

          <Notice />
          <RSVPForm />
          
          <footer>Made with ❤️ for our wedding</footer>
        </main>
      )}
    </>
  )
}