export default function Invitation() {
  const redColor = 'var(--red-dark)'; 
  const blackColor = '#000000';       

  return (
    <section className="section">
      <div className="title"> 诚恳邀请 </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', maxWidth: '340px', margin: '20px auto' }}>
        
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ color: redColor, fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', letterSpacing: '4px' }}>新郎</div>
          <div style={{ color: blackColor, fontSize: '22px', letterSpacing: '2px', marginBottom: '25px' }}>黄俊雄</div>
          
          <div>
            <div style={{ color: redColor, fontSize: '17px', fontWeight: 'bold', marginBottom: '10px', letterSpacing: '1px' }}>男方母亲</div>
            <div style={{ color: blackColor, fontSize: '18px', letterSpacing: '0px', whiteSpace: 'nowrap' }}>余月珠</div>
          </div>
        </div>

        <div style={{ color: redColor, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5px', marginTop: '25px', fontSize: '36px', fontWeight: 'bold' }}>
          囍
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ color: redColor, fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', letterSpacing: '4px' }}>新娘</div>
          <div style={{ color: blackColor, fontSize: '22px', letterSpacing: '2px', marginBottom: '25px' }}>冯凯婷</div>
          
          <div>
            <div style={{ color: redColor, fontSize: '17px', fontWeight: 'bold', marginBottom: '10px', letterSpacing: '1px' }}>女方父母</div>
            <div style={{ color: blackColor, fontSize: '18px', letterSpacing: '0px', whiteSpace: 'nowrap' }}>冯文旭 · 伍淑芬</div>
          </div>
        </div>
        
      </div>

      <div style={{ marginTop: '20px', marginBottom: '10px', fontSize: '16px', lineHeight: '2.2', letterSpacing: '2px', color: 'var(--ink)' }}>
        <p>良辰已定，佳偶天成。</p>
        <p>我们即将携手开启人生新的篇章，</p>
        <p>诚邀您出席我们的结婚晚宴</p>
        <p>与我们一同分享喜悦，见证幸福。</p>
        <p>您的到来与祝福,</p>
        <p>将成为我们此生珍贵的美好回忆。</p>
        <p>敬备喜酌 恭候莅临</p>
      </div>
    </section>
  )
}