import { useState, useRef } from 'react'

export default function Cover({ onOpen }) {
  const [dragY, setDragY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isPulled, setIsPulled] = useState(false)
  const startY = useRef(0)

  const handlePointerDown = (e) => {
    if (isPulled) return
    setIsDragging(true)
    startY.current = e.clientY
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e) => {
    if (!isDragging || isPulled) return
    const deltaY = e.clientY - startY.current
    if (deltaY < 0) setDragY(deltaY) // 只允许向上滑
  }

  const handlePointerUp = (e) => {
    if (!isDragging || isPulled) return
    setIsDragging(false)
    e.currentTarget.releasePointerCapture(e.pointerId)

    // ==========================================
    // 核心修改：把 -80 改成 -250 (或 -300)
    // 必须往上拉动超过 250px 才会触发打开
    // ==========================================
    if (dragY < -300) {
      setIsPulled(true)
      setDragY(0)
      onOpen() 
    } else {
      // 如果没拉够，瞬间弹回原位
      setDragY(0)
    }
  }

  const sleeveStyle = isPulled
    ? { transform: 'translateY(-150vh)', transition: 'transform 0.6s cubic-bezier(0.6, 0.05, 0.9, 0.4)' }
    : {
        transform: `translateY(${dragY}px)`,
        transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }

  return (
    <div style={{
      position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', 
      width: '100%', maxWidth: '480px', height: '100vh',
      backgroundColor: '#F5F5DC', zIndex: 99999, 
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden'
    }}>
      
      <div style={{
        position: 'relative', width: '85vw', maxWidth: '320px', height: '70vh', maxHeight: '540px',
        borderRadius: '6px', boxShadow: '0 15px 35px rgba(0,0,0,0.2)', overflow: 'hidden'
      }}>
        
        <div
          style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: '#6a0000', cursor: isPulled ? 'default' : 'grab',
            touchAction: 'none', userSelect: 'none', ...sleeveStyle
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div style={{
            position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', 
            width: '100%', height: '140px', backgroundColor: '#fdfaf5', 
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)', zIndex: 10
          }}>
            <div style={{
              color: '#6a0000', fontSize: '56px', lineHeight: 1,
              fontFamily: 'STKaiti, KaiTi, serif', fontWeight: 'bold', marginBottom: '8px'
            }}>囍</div>
            <div style={{
              color: '#6a0000', fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontSize: '10px', letterSpacing: '4px', marginLeft: '4px'
            }}>WEDDING INVITATION</div>
          </div>

          {!isPulled && (
            <div style={{
              position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
              width: '80px', height: '40px', backgroundColor: '#fdfaf5', borderRadius: '40px 40px 0 0',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              color: '#6a0000', pointerEvents: 'none', zIndex: 10
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '4px' }}>
                <path d="M18 15l-6-6-6 6"/>
              </svg>
              <span style={{ fontSize: '10px', letterSpacing: '1px', marginTop: '2px', fontWeight: 'bold' }}>
                向上抽取
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}