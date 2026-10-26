import { useState } from 'react'

// ⚠️ 注意：这里依然没有填你的真实接口地址，测试时点提交会报错，但至少按钮的点击事件会生效，状态会变化。
const RSVP_ENDPOINT = 'https://script.google.com/macros/s/你的真实地址/exec'

export default function RSVPForm() {
  const [showForm, setShowForm] = useState(false) 
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
    
    // 如果没填 API，这里故意抛出错误让你能看见按钮是否有反应
    if (!RSVP_ENDPOINT || RSVP_ENDPOINT.includes('你的真实地址')) {
      setTimeout(() => setStatus('测试提示：按钮已生效！请填写真实的 Apps Script 接口'), 1000)
      return
    }

    try {
      const submitData = {
        ...form,
        diet: form.diet === '其他' ? `其他：${form.otherDiet}` : form.diet
      }
      const res = await fetch(RSVP_ENDPOINT, { method: 'POST', body: JSON.stringify(submitData) })
      const result = await res.json()
      
      if (result.result === 'success') {
        setStatus('已收到您的回复，谢谢！')
        setForm({ name: '', phone: '', attendance: '', guests: 1, diet: '无特殊要求', otherDiet: '', message: '', notice: false })
        setTimeout(() => setShowForm(false), 2000)
      } else { throw new Error('提交失败') }
    } catch (err) {
      setStatus('提交失败，请稍后重试。')
    }
  }

  const notAttending = form.attendance === '不出席'

  return (
    <section className="section">
      <div className="title">出席回函</div>
      <div className="gold-line"></div>

      {!showForm ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ marginBottom: '20px', fontSize: '14px', textAlign: 'center', lineHeight: '2' }}>
            期待您的光临<br/>
            请于 12 月 31 日前告知我们
          </p>
          <button type="button" className="btn" onClick={() => setShowForm(true)} style={{ padding: '12px 40px', background: 'var(--red-dark)', color: '#fff', border: 'none' }}>
            敬 请 回 函
          </button>
        </div>
      ) : (
        <div style={{ width: '100%' }}>
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
              <button type="button" onClick={() => setShowForm(false)} className="custom-btn-cancel">取消</button>
              <button type="submit" className="custom-btn-confirm">确认提交</button>
            </div>
            
            {status && <p style={{ marginTop: 15, fontSize: 14, color: 'var(--red-dark)', textAlign: 'center' }}>{status}</p>}
          </form>
        </div>
      )}
    </section>
  )
}