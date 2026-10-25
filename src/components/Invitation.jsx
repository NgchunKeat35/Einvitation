export default function Invitation() {
  const redColor = 'var(--red-dark)'; 
  const blackColor = '#000000';       

  // 1. 新郎/新娘标签（字号加大到18px，字距加宽）
  const primaryLabelStyle = {
    color: redColor,
    fontSize: '18px',      
    fontWeight: 'bold',    
    marginBottom: '12px',
    letterSpacing: '4px'   // 字距拉开，更有气势
  };

  // 2. 男方母亲/女方父母标签（保持15px，视觉上退居二线）
  const parentLabelStyle = {
    color: redColor,
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
    letterSpacing: '1px'
  };

  // 3. 新人名字（大字）
  const groomBrideName = {
    color: blackColor, 
    fontSize: '22px', 
    letterSpacing: '2px', 
    fontWeight: 'normal', 
    textAlign: 'center', 
    marginBottom: '25px' // 稍微加大底部间距，透气
  };

  // 4. 父母名字（稍小，单行不折断）
  const parentName = {
    color: blackColor, 
    fontSize: '18px', 
    letterSpacing: '0px', 
    fontWeight: 'normal', 
    textAlign: 'center', 
    whiteSpace: 'nowrap'
  };

  return (
    <section className="section">
      <div className="title">「 婚礼邀请函 」</div>
      
      <div className="invite-couple-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', maxWidth: '340px', margin: '20px auto' }}>
        
        {/* 新郎家 */}
        <div className="invite-person" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* 使用加大加宽的主标签样式 */}
          <div style={primaryLabelStyle}>新郎</div>
          <div style={groomBrideName}>黄俊雄</div>
          
          <div>
            <div style={parentLabelStyle}>男方母亲</div>
            <div style={parentName}>余月珠</div>
          </div>
        </div>

        {/* 中间的囍字 */}
        <div className="invite-center-xi" style={{ color: redColor, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5px', marginTop: '25px', fontSize: '36px', fontWeight: 'bold' }}>
          囍
        </div>

        {/* 新娘家 */}
        <div className="invite-person" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* 使用加大加宽的主标签样式 */}
          <div style={primaryLabelStyle}>新娘</div>
          <div style={groomBrideName}>冯凯婷</div>
          
          <div>
            <div style={parentLabelStyle}>女方父母</div>
            <div style={parentName}>冯文旭 · 伍淑芬</div>
          </div>
        </div>
        
      </div>

      <div className="invite-invite-text" style={{ marginTop: '20px', marginBottom: '10px', fontSize: '16px' }}>
        <p>诚邀您出席我们的婚礼</p>
        <p>敬备喜酌 恭候莅临</p>
      </div>
    </section>
  )
}