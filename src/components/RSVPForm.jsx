import { useState } from 'react'
import { createPortal } from 'react-dom'

const RSVP_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzY2IY1dG9YYnesUtwZFntBjgysRKCAD_r_3COAhTYEuv_k2PZAVlucU9n7KuJetQmblw/exec'

export default function RSVPForm() {
  const [isOpen, setIsOpen] = useState(false) 
  const [isSuccess, setIsSuccess] = useState(false) // 记录是否提交成功
  const [form, setForm] = useState({
    name: '', phone: '', attendance: '', guests: 1, diet: '无特殊要求', otherDiet: '', message: '', notice: false,
  })
  const [status, setStatus] = useState('')

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('提交中...')
    
    try {
      const submitData = {
        ...form,
        diet: form.diet === '其他' ? `其他：${form.otherDiet}` : form.diet
      }
      const res = await fetch(RSVP_ENDPOINT, { method: 'POST', body: JSON.stringify(submitData) })
      const result = await res.json()
      
      if (result.result === 'success') {
        setStatus('已收到您的回复，谢谢！')
        setIsSuccess(true) // 标记为成功
      } else { throw new Error('提交失败') }
    } catch (err) {
      setStatus('提交失败，请稍后重试。')
    }
  }

  // 生成并下载 .ics 日历文件
  const downloadCalendar = () => {
    // 设定晚宴时间 (2027年1月14日 19:30 - 22:30)
    const startTime = "20270114T193000"
    const endTime = "20270114T223000"
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding Invitation//EN
BEGIN:VEVENT
UID:${new Date().getTime()}@wedding.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART;TZID=Asia/Kuala_Lumpur:${startTime}
DTEND;TZID=Asia/Kuala_Lumpur:${endTime}
SUMMARY:黄俊雄 & 冯凯婷 婚礼晚宴
LOCATION:20, Jalan Suria, Taman Suria, 02000 Kuala Perlis, Perlis
DESCRIPTION:期待您的光临！\\n上午迎亲及敬茶仪式仅限家人参与，晚上 7:30 举行家庭式自助晚宴。
END:VEVENT
END:VCALENDAR`;

    // 将内容转换为文件并触发下载
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = '婚礼晚宴邀请.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const notAttending = form.attendance === '不出席'

  // 关闭弹窗时重置状态
  const closeModal = () => {
    setIsOpen(false)
    setTimeout(() => {
      setIsSuccess(false)
      setStatus('')
      setForm({ name: '', phone: '', attendance: '', guests: 1, diet: '无特殊要求', otherDiet: '', message: '', notice: false })
    }, 300)
  }

  return (
    <section className="section">
      <div className="title">出席回函</div>
      <div className="gold-line"></div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <p style={{ marginBottom: '20px', fontSize: '14px', textAlign: 'center', lineHeight: '2' }}>
          期待您的光临<br/>
          请于 12 月 15 日前告知我们
        </p>
        <button 
          type="button" 
          className="btn" 
          onClick={() => setIsOpen(true)} 
          style={{ padding: '12px 40px', background: 'var(--red-dark)', color: '#fff', border: 'none' }}
        >
          敬 请 回 函
        </button>
      </div>

      {/* 使用 React Portal 把弹窗直接传送到 body */}
      {isOpen && createPortal(
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button className="modal-close" onClick={closeModal}>×</button>
            
            {!isSuccess ? (
              // 表单填写状态
              <>
                <div className="title" style={{ marginTop: 0, marginBottom: '20px' }}>出席回函</div>
                <form onSubmit={handleSubmit}>
                  <div className="form-item">
                    <label>姓名 *</label>
                    <input type="text" name="name" required placeholder="您的姓名" value={form.name} onChange={handleChange} />
                  </div>
                  
                  <div className="form-item">
                    <label>电话 / WhatsApp *</label>
                    <input type="tel" name="phone" required placeholder="例如 012-3456789" value={form.phone} onChange={handleChange} />
                  </div>
                  
                  <div className="form-item">
                    <label>是否出席 *</label>
                    <select name="attendance" required value={form.attendance} onChange={handleChange}>
                      <option value="">请选择</option>
                      <option value="出席">确认出席</option>
                      <option value="不出席">无法出席</option>
                    </select>
                  </div>

                  {!notAttending && (
                    <>
                      <div className="form-item">
                        <label>出席人数</label>
                        <input type="number" name="guests" min="1" max="10" value={form.guests} onChange={handleChange} />
                      </div>
                      
                      <div className="form-item">
                        <label>饮食要求</label>
                        <select name="diet" value={form.diet} onChange={handleChange}>
                          <option value="无特殊要求">无特殊要求</option>
                          <option value="素食">素食</option>
                          <option value="其他">其他（请注明）</option>
                        </select>
                      </div>

                      {form.diet === '其他' && (
                        <div className="form-item" style={{ marginTop: '-10px', marginBottom: '22px' }}>
                          <input type="text" name="otherDiet" required placeholder="请填写您的特殊饮食要求" value={form.otherDiet} onChange={handleChange} style={{ borderBottom: '1px dashed var(--red-dark)' }} />
                        </div>
                      )}
                    </>
                  )}

                  <div className="form-item">
                    <label>祝福留言</label>
                    <textarea name="message" rows="2" placeholder="给新人的祝福" value={form.message} onChange={handleChange} />
                  </div>

                  <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
                    <button type="button" onClick={closeModal} className="custom-btn-cancel">取消</button>
                    <button type="submit" className="custom-btn-confirm">确认提交</button>
                  </div>
                  
                  {status && <p style={{ marginTop: 15, fontSize: 14, color: 'var(--red-dark)', textAlign: 'center' }}>{status}</p>}
                </form>
              </>
            ) : (
              // 提交成功状态
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '48px', color: 'var(--red-dark)', marginBottom: '20px' }}>✓</div>
                <h3 style={{ fontSize: '22px', color: 'var(--red-dark)', marginBottom: '10px' }}>已收到您的回复</h3>
                <p style={{ color: '#666', marginBottom: '30px' }}>期待在婚礼上与您相见！</p>
                
                {form.attendance === '出席' ? (
                  <div>
                    <p style={{ fontSize: '13px', color: '#999', marginBottom: '15px' }}>怕您忘记，可以将时间存入手机日历：</p>
                    <button 
                      onClick={downloadCalendar}
                      style={{
                        padding: '12px 24px', 
                        background: 'var(--red-dark)', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '4px',
                        fontSize: '14px',
                        letterSpacing: '1px',
                        cursor: 'pointer'
                      }}
                    >
                      📅 添加到手机日历
                    </button>
                  </div>
                ) : (
                  <button className="btn" onClick={closeModal} style={{ padding: '10px 30px' }}>
                    关闭
                  </button>
                )}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}