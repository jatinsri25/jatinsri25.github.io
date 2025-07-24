import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <section id="about" className='about section'>
      <div className='about__container'>
        <div className='about__content'>
          {name && (
            <div className='about__greeting'>
              <span className='about__greeting-text'>Hello, I&apos;m</span>
              <h1 className='about__name'>
                {name}
                <span className='about__name-dot'>.</span>
              </h1>
            </div>
          )}

          {role && (
            <div className='about__role-container'>
              <h2 className='about__role'>
                <span className='about__role-prefix'>A</span>
                <span className='about__role-text'>{role}</span>
                <div className='about__role-underline' />
              </h2>
            </div>
          )}

          {description && (
            <div className='about__description'>
              <p className='about__desc'>{description}</p>
            </div>
          )}

          <div className='about__actions'>
            {resume && (
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className='about__resume-btn'
              >
                <span>Download Resume</span>
                <div className='btn-glow' />
              </a>
            )}

            {social && (
              <div className='about__social'>
                {social.github && (
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label='GitHub Profile'
                    className='about__social-link'
                    data-tooltip="GitHub"
                  >
                    <span>GitHub</span>
                    <div className='social-link__bg' />
                  </a>
                )}

                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label='LinkedIn Profile'
                    className='about__social-link'
                    data-tooltip="LinkedIn"
                  >
                    <span>LinkedIn</span>
                    <div className='social-link__bg' />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className='about__decoration'>
          <div className='decoration__circle decoration__circle--1' />
          <div className='decoration__circle decoration__circle--2' />
          <div className='decoration__circle decoration__circle--3' />
        </div>
      </div>
    </section>
  )
}

export default About
