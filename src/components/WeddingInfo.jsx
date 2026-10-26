export default function WeddingInfo() {
  return (
    <section className="section">
      <div className="title">婚礼行程</div>
      <div style={{ color: 'var(--red-dark)', fontSize: '12px', letterSpacing: '3px', marginTop: '-15px', marginBottom: '30px', opacity: 0.7 }}>
        WEDDING SCHEDULE
      </div>

      <div className="schedule-list">
        
        <div className="schedule-item">
          <div className="schedule-time">9:30 AM</div>
          <div className="schedule-content">
            <h4>🏮 出门迎亲</h4>
            <p>家庭式仪式安排 · 仅限家人参与</p>
          </div>
        </div>

        <div className="schedule-item">
          <div className="schedule-time">10:30 AM</div>
          <div className="schedule-content">
            <h4>🫖 敬茶仪式</h4>
            <p>与双方长辈共叙亲情，感恩父母养育之恩。</p>
          </div>
        </div>

        <div className="schedule-item">
          <div className="schedule-time">7:30 PM</div>
          <div className="schedule-content">
            <h4>🍽️   结婚晚宴</h4>
            <p>家庭式自助餐 · 诚邀亲友共庆新婚之喜</p>
          </div>
        </div>

        {/* 核心修改：新增第四行，左侧不需要时间，右侧直接放地址 */}
        <div className="schedule-item" style={{ marginBottom: 0 }}>
          <div className="schedule-time" style={{ minHeight: '20px' }}>
            {/* 这里留空，CSS 会自动画出红点 */}
          </div>
          <div className="schedule-content" style={{ paddingTop: '0px', marginTop: '-5px' }}>
            <div className="schedule-address">
              <strong>地点：玻璃市阳光园门牌 20 号</strong>
              <span>20, Jalan Suria, Taman Suria,<br />02000 Kuala Perlis, Perlis</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}