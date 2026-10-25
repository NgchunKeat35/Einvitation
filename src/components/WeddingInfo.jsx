export default function WeddingInfo() {
  return (
    <section className="section">
      <div className="title">婚礼信息</div>
      <div className="gold-line"></div>
      <p className="text">
        时间：2027 年 01 月 14 日 早上 10:00<br />
        地点：玻璃市港口 马来西亚玻璃市<br />
        <span style={{ fontSize: 13, color: '#999' }}></span>
      </p>
      
      <div style={{ marginTop: 25, display: 'flex', gap: 15, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a className="btn" href="https://maps.app.goo.gl/Q2tfhgHxtU4oqpz1A" target="_blank" rel="noreferrer">
          查看地图
        </a>
        <a className="btn" href="https://waze.com/ul?ll=6.392385,100.134527&navigate=yes" target="_blank" rel="noreferrer">
          Waze 导航
        </a>
      </div>
    </section>
  )
}