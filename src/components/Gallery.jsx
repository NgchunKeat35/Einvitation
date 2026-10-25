import photo1 from '../assets/photo1.jpeg'
import photo2 from '../assets/photo2.jpeg'

export default function Gallery() {
  return (
    <section className="section">
      <div className="title">我们的照片</div>
      <div className="gold-line"></div>
      <div className="gallery">
        <img src={photo1} alt="婚纱照1" />
        <img src={photo2} alt="婚纱照2" />
      </div>
    </section>
  )
}