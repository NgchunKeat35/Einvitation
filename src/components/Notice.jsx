export default function Notice() {
  return (
    <section className="section">
      <div className="minimal-icon">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50,50 C45,35 55,25 60,30 C65,35 60,45 50,50 Z" />
          <path d="M50,50 C65,45 75,55 70,60 C65,65 55,60 50,50 Z" />
          <path d="M50,50 C55,65 45,75 40,70 C35,65 40,55 50,50 Z" />
          <path d="M50,50 C35,55 25,45 30,40 C35,35 45,40 50,50 Z" />
          <circle cx="50" cy="50" r="3" fill="currentColor"/>
          <path d="M50,60 Q50,80 20,90" strokeWidth="1" opacity="0.5"/>
        </svg>
      </div>

      <div className="title" style={{ marginTop: '10px' }}>温馨提示</div>
      
      <div className="notice-minimal-text">
        <p>请于 <strong>2026年12月31日</strong> 前回复出席确认。</p>
        <p>婚礼于 <strong>10:30</strong> 准时开始，请提前 30 分钟入场。</p>
        <p>场地停车位有限，建议拼车或打车前往。</p>
        <p>如需清真 Halal、素食等安排，请在下方表单中注明。</p>
        <p>如有疑问，请联系：<strong>012-345 6789</strong>（俊雄）。</p>
      </div>

      <div className="minimal-decor-bottom">❀</div>
    </section>
  )
}