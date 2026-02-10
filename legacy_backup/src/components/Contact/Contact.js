import { useState } from 'react'
import EmailIcon from '@material-ui/icons/Email'
import SendIcon from '@material-ui/icons/Send'
import PersonIcon from '@material-ui/icons/Person'
import MessageIcon from '@material-ui/icons/Message'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const { name, email, message } = formData
    const mailtoLink = `mailto:${contact.email}?subject=Message from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${email}`

    setTimeout(() => {
      window.location.href = mailtoLink
      setIsSubmitting(false)
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  if (!contact.email) return null

  return (
    <section className='section contact' id='contact'>
      <div className='contact__container'>
        <div className='contact__header' data-aos="fade-up" data-aos-duration="800">
          <h2 className='section__title'>Get In Touch</h2>
          <p className='contact__subtitle'>
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </div>

        <div className='contact__content'>
          <div className='contact__info' data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
            <div className='info__card'>
              <div className='info__icon'>
                <EmailIcon />
              </div>
              <div className='info__details'>
                <h3 className='info__title'>Email Me</h3>
                <p className='info__text'>
                  Drop me a line and I&apos;ll get back to you as soon as possible.
                </p>
                <a href={`mailto:${contact.email}`} className='info__link'>
                  {contact.email}
                </a>
              </div>
            </div>
          </div>

          <div className='contact__form-container' data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
            <form className='contact__form' onSubmit={handleSubmit}>
              <div className='form__group'>
                <div className='form__input-wrapper'>
                  <PersonIcon className='form__icon' />
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
              </div>

              <div className='form__group'>
                <div className='form__input-wrapper'>
                  <EmailIcon className='form__icon' />
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
              </div>

              <div className='form__group'>
                <div className='form__input-wrapper form__input-wrapper--textarea'>
                  <MessageIcon className='form__icon form__icon--textarea' />
                  <textarea
                    name='message'
                    placeholder='Your Message'
                    required
                    className='form__input form__textarea'
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                  />
                </div>
              </div>

              <button
                type='submit'
                className={`form__submit ${isSubmitting ? 'form__submit--loading' : ''}`}
                disabled={isSubmitting}
              >
                <SendIcon className='submit__icon' />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <div className='submit__glow' />
              </button>
            </form>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className='contact__decoration'>
          <div className='decoration__shape decoration__shape--1' />
          <div className='decoration__shape decoration__shape--2' />
        </div>
      </div>
    </section>
  )
}

export default Contact