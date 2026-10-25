import photo1 from '../assets/photo1.jpeg' 

export default function PhotoBreak() {
  return (
    <section className="section photo-break-section">
      <div className="vintage-photo-frame">
        <img src={photo1} alt="合影" />
        {/* 相框角落的装饰小囍字 */}
        <div className="frame-decor">囍</div>
      </div>
    </section>
  )
}