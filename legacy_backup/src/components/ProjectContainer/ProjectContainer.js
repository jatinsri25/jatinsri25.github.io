import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import CodeIcon from '@material-ui/icons/Code'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <article className='project-card'>
    <div className='project-card__content'>
      <div className='project-card__header'>
        <div className='project-card__icon'>
          <CodeIcon />
        </div>
        <h3 className='project-card__title'>{project.name}</h3>
      </div>

      <p className='project-card__description'>{project.description}</p>

      {project.stack && (
        <div className='project-card__stack'>
          <h4 className='stack__title'>Technologies</h4>
          <ul className='stack__list'>
            {project.stack.map((item) => (
              <li key={uniqid()} className='stack__item'>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className='project-card__actions'>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${project.name}`}
            className='project-action project-action--source'
          >
            <GitHubIcon className='action-icon' />
            <span>Source Code</span>
            <div className='action-glow' />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live preview of ${project.name}`}
            className='project-action project-action--preview'
          >
            <LaunchIcon className='action-icon' />
            <span>Live Demo</span>
            <div className='action-glow' />
          </a>
        )}
      </div>
    </div>

    {/* Decorative elements */}
    <div className='project-card__decoration'>
      <div className='decoration__dot decoration__dot--1' />
      <div className='decoration__dot decoration__dot--2' />
      <div className='decoration__dot decoration__dot--3' />
    </div>

    {/* Hover overlay */}
    <div className='project-card__overlay' />
  </article>
)

export default ProjectContainer
