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

      <div className="title" style={{ marginTop: '10px' }}>
        温馨提醒 <span style={{ fontSize: '14px', opacity: 0.6, fontWeight: 'normal', letterSpacing: '1px' }}></span>
      </div>
      
      <div className="notice-minimal-text" style={{ lineHeight: '2' }}>
        
        <p style={{ textAlign: 'center', marginBottom: '25px' }}>
          上午的迎亲及敬茶仪式为家庭式安排，仅限家人参与。<br /><br />
          晚上 <strong>7:30 PM</strong> 将举行家庭式自助晚宴，诚挚期待与您欢聚一堂，共享我们的幸福时刻。💍✨
        </p>

        <div style={{ marginBottom: '20px' }}>
          {/* 核心修改：加了 textAlign: 'center' */}
          <div style={{ color: 'var(--red-dark)', fontWeight: 'bold', marginBottom: '8px', fontSize: '15px', textAlign: 'center' }}>
            🚗 交通安排
          </div>
          <p style={{ fontSize: '14px', color: '#555', textAlign: 'left' }}>
            由于停车位有限，温馨建议大家尽量 Carpool（共乘）前来，减少停车不便，感谢大家的体谅与配合。
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          {/* 核心修改：加了 textAlign: 'center' */}
          <div style={{ color: 'var(--red-dark)', fontWeight: 'bold', marginBottom: '8px', fontSize: '15px', textAlign: 'center' }}>
            👗 穿着建议
          </div>
          <p style={{ fontSize: '14px', color: '#555', textAlign: 'left' }}>
            晚宴以轻松温馨的家庭式自助餐形式进行，没有特别的服装要求，穿得舒适、自在就好！最重要的是带着愉快的心情，与我们一起分享这份喜悦。💕
          </p>
        </div>

        <p style={{ textAlign: 'center', marginTop: '30px', fontWeight: 'bold' }}>
          感谢您的理解与祝福，期待与您相见！💕
        </p>
      </div>

      <div className="minimal-decor-bottom">❀</div>
    </section>
  )
}