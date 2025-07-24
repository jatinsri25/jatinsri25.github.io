import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { about } from '../../portfolio'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__content'>
          <div className='footer__brand'>
            <h3 className='footer__logo'>&lt;/JS&gt;</h3>
            <p className='footer__tagline'>
              Building digital experiences with passion and precision
            </p>
          </div>

          <div className='footer__links'>
            <div className='footer__section'>
              <h4 className='footer__section-title'>Quick Links</h4>
              <ul className='footer__nav'>
                <li><a href='#about' className='footer__nav-link'>About</a></li>
                <li><a href='#projects' className='footer__nav-link'>Projects</a></li>
                <li><a href='#skills' className='footer__nav-link'>Skills</a></li>
                <li><a href='#contact' className='footer__nav-link'>Contact</a></li>
              </ul>
            </div>

            <div className='footer__section'>
              <h4 className='footer__section-title'>Connect</h4>
              <div className='footer__social'>
                {about.social?.github && (
                  <a
                    href={about.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label='GitHub Profile'
                    className='footer__social-link'
                  >
                    <GitHubIcon />
                  </a>
                )}
                {about.social?.linkedin && (
                  <a
                    href={about.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label='LinkedIn Profile'
                    className='footer__social-link'
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='footer__bottom'>
          <div className='footer__copyright'>
            <p>
              © {currentYear} Jatin Srivastava. Made with{' '}
              <FavoriteIcon className='footer__heart' />{' '}
              using React
            </p>
          </div>
          <div className='footer__credits'>
            <a
              href='https://github.com/jatinsri25/jatinsri25.github.io'
              target="_blank"
              rel="noopener noreferrer"
              className='footer__source-link'
            >
              View Source
            </a>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className='footer__gradient' />
    </footer>
  )
}

export default Footer
