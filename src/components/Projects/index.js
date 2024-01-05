// Write your code here
import './index.css'

const Project = props => {
  const {projectList} = props

  return (
    <div className="project-container" id="projectSection">
      <h1>Project</h1>
      <hr className="hr" />
      <ul className="project-list-container">
        {projectList.map(each => (
          <li className="list-ele">
            <div className="project-details-container">
              <h1 className="project-head">{each.name}</h1>
              <p className="project-description">{each.description}</p>
              <button type="button" className="view-project-btn">
                view project
              </button>
            </div>
            <img
              src={each.imgUrl}
              alt="project logo"
              className={
                projectList.indexOf(each) % 2 !== 0
                  ? 'project-logo'
                  : 'project-logo-toggle'
              }
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Project
