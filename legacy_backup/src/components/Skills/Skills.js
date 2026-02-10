import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  // Categorize skills for better organization
  const skillCategories = [
    {
      title: 'Frontend',
      skills: skills.filter(skill =>
        ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'SASS', 'Next.js'].includes(skill)
      ),
      icon: '🎨'
    },
    {
      title: 'Backend',
      skills: skills.filter(skill =>
        ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Prisma', 'GraphQL'].includes(skill)
      ),
      icon: '⚡'
    },
    {
      title: 'Languages',
      skills: skills.filter(skill =>
        ['Python', 'Java', 'C/C++', 'JavaScript', 'TypeScript', 'Solidity', 'SQL'].includes(skill)
      ),
      icon: '💻'
    },
    {
      title: 'Tools & Others',
      skills: skills.filter(skill =>
        ['Git', 'HTML/CSS'].includes(skill) ||
        !['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'SASS', 'Next.js',
          'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Prisma', 'GraphQL',
          'Python', 'Java', 'C/C++', 'Solidity', 'SQL'].includes(skill)
      ),
      icon: '🛠️'
    }
  ].filter(category => category.skills.length > 0)

  return (
    <section className='section skills' id='skills'>
      <div className='skills__container'>
        <div className='skills__header' data-aos="fade-up" data-aos-duration="800">
          <h2 className='section__title'>Technical Skills</h2>
          <p className='skills__subtitle'>
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className='skills__grid'>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={uniqid()}
              className='skills__category'
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={categoryIndex * 200}
            >
              <div className='category__header'>
                <span className='category__icon'>{category.icon}</span>
                <h3 className='category__title'>{category.title}</h3>
              </div>

              <div className='category__skills'>
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={uniqid()}
                    className='skill-badge'
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay={categoryIndex * 200 + skillIndex * 100}
                  >
                    <span className='skill-badge__text'>{skill}</span>
                    <div className='skill-badge__glow' />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className='skills__summary' data-aos="fade-up" data-aos-delay="800">
          <div className='summary__stat'>
            <span className='stat__number'>{skills.length}+</span>
            <span className='stat__label'>Technologies</span>
          </div>
          <div className='summary__stat'>
            <span className='stat__number'>{skillCategories.length}</span>
            <span className='stat__label'>Specializations</span>
          </div>
          <div className='summary__stat'>
            <span className='stat__number'>3+</span>
            <span className='stat__label'>Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
