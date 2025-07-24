import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <section id="about" className='about section'>
      {/* Main content with absolute positioning to ensure visibility */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10000,
        width: '90%',
        maxWidth: '800px',
        textAlign: 'center',
        color: '#ffffff'
      }}>
        {/* Greeting */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{
            display: 'block',
            fontSize: '24px',
            color: '#f1f5f9',
            fontWeight: '400',
            marginBottom: '16px',
            letterSpacing: '0.05em'
          }}>
            Hello, I&apos;m
          </span>
          <h1 style={{
            fontSize: '64px',
            fontWeight: '800',
            color: '#ffffff',
            margin: '0',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            {name}
            <span style={{ color: '#60a5fa' }}>.</span>
          </h1>
        </div>

        {/* Role */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: '600',
            color: '#f1f5f9',
            margin: '0'
          }}>
            <span style={{ marginRight: '16px' }}>A</span>
            <span style={{ color: '#60a5fa', fontWeight: '700' }}>{role}</span>
          </h2>
        </div>

        {/* Description */}
        <div style={{ marginBottom: '64px' }}>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.8',
            color: '#f1f5f9',
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'left',
            padding: '32px',
            background: '#1e293b',
            borderRadius: '16px',
            border: '2px solid #60a5fa',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}>
            {description}
          </p>
        </div>

        {/* Actions */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
          flexWrap: 'wrap'
        }}>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 32px',
              background: '#60a5fa',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '16px',
              fontWeight: '600',
              fontSize: '18px',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(96, 165, 250, 0.3)'
            }}
          >
            Download Resume
          </a>

          <a
            href={social?.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px 24px',
              background: '#1e293b',
              border: '2px solid #60a5fa',
              borderRadius: '16px',
              color: '#f1f5f9',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '16px',
              transition: 'all 0.3s ease'
            }}
          >
            GitHub
          </a>

          <a
            href={social?.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px 24px',
              background: '#1e293b',
              border: '2px solid #60a5fa',
              borderRadius: '16px',
              color: '#f1f5f9',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '16px',
              transition: 'all 0.3s ease'
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Keep decorative elements */}
      <div className='about__decoration'>
        <div className='decoration__circle decoration__circle--1' />
        <div className='decoration__circle decoration__circle--2' />
        <div className='decoration__circle decoration__circle--3' />
      </div>
    </section>
  )
}

export default About
