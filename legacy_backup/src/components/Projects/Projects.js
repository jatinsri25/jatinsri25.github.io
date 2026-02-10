import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <div className='projects__container'>
        <div className='projects__header' data-aos="fade-up" data-aos-duration="800">
          <h2 className='section__title'>Featured Projects</h2>
          <p className='projects__subtitle'>
            A collection of projects showcasing my technical skills and creativity
          </p>
        </div>

        <div className='projects__grid'>
          {projects.map((project, index) => (
            <div
              key={uniqid()}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 200}
            >
              <ProjectContainer project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
