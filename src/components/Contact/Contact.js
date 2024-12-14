import { useState } from 'react'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData
    const mailtoLink = `mailto:${contact.email}?subject=Message from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${email}`
    window.location.href = mailtoLink
  }

  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contact__content'>
        <p className='contact__description'>
          Looking forward to exploring opportunities! Feel free to reach out.
        </p>

        <form className='contact__form' onSubmit={handleSubmit}>
          <div className='form__group'>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              required
              className='form__input'
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className='form__group'>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
              className='form__input'
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className='form__group'>
            <textarea
              name='message'
              placeholder='Your Message'
              required
              className='form__input form__textarea'
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type='submit' className='btn btn--outline'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact