import {Component} from 'react'
import {v4} from 'uuid'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Projects from '../Projects'
import Contacts from '../Contacts'
import './index.css'

const image = [
  'https://res.cloudinary.com/dv7gjsem1/image/upload/v1704454557/pexels-elly-fairytale-3823207_1_littqr.png',
  'https://res.cloudinary.com/dv7gjsem1/image/upload/v1704463875/Rectangle_7_1_k2w4hp.png',
  'https://res.cloudinary.com/dv7gjsem1/image/upload/v1704463874/Rectangle_7_2_fejj0j.png',
]

const listOfProjects = [
  {
    id: 1,
    description:
      'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
    name: 'Project Name',
    link: 'www.google.com',
    imgUrl:
      'https://res.cloudinary.com/dv7gjsem1/image/upload/v1704454557/pexels-elly-fairytale-3823207_1_littqr.png',
  },
  {
    id: 2,
    description:
      'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
    name: 'Project Name',
    link: 'www.google.com',
    imgUrl:
      'https://res.cloudinary.com/dv7gjsem1/image/upload/v1704463875/Rectangle_7_1_k2w4hp.png',
  },
  {
    id: 3,
    description:
      'You can also add in this description the type of the project, if it was for web, mobile, electron.',
    link: 'www.google.com',
    name: 'Project Name',
    imgUrl:
      'https://res.cloudinary.com/dv7gjsem1/image/upload/v1704463874/Rectangle_7_2_fejj0j.png',
  },
]

class Home extends Component {
  state = {
    isName: false,
    isLink: false,
    isDescription: false,
    name: '',
    link: '',
    list: [],
    description: '',
  }

  componentDidMount() {
    this.setState({list: listOfProjects})
  }

  submitFunction = event => {
    const {list, link, name, description} = this.state
    event.preventDefault()

    if (name === '' || link === '' || description === '') {
      this.setState({
        isName: name === '',
        isLink: link === '',
        isDescription: description === '',
      })
    } else {
      const newObject = {
        name,
        id: v4(),
        link,
        description,
        imgUrl: image[Math.floor(Math.random() * 3)],
      }
      this.setState({
        list: [newObject, ...list],
        name: '',
        link: '',
        description: '',
        isName: false,
        isLink: false,
        isDescription: false,
      })
    }
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeLink = event => {
    this.setState({link: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value})
  }

  render() {
    const {
      list,
      link,
      name,
      description,
      isName,
      isLink,
      isDescription,
    } = this.state

    return (
      <div className="main-background-container">
        <nav className="nav-bar">
          <div className="nav-container">
            <h1 className="nav-head">Modelyn Torff</h1>
            <ul className="nav-anchor-container">
              <li>
                <AnchorLink href="#aboutSection" className="nav-anchor-ele">
                  About
                </AnchorLink>
              </li>
              <li className="nav-anchor-ele">
                <AnchorLink href="#projectSection" className="nav-anchor-ele">
                  Project
                </AnchorLink>
              </li>
              <li className="nav-anchor-ele">
                <AnchorLink href="#contactSection" className="nav-anchor-ele">
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="about-container" id="aboutSection">
          <img
            src="https://res.cloudinary.com/dv7gjsem1/image/upload/v1704400885/attachment_1_y5vrni.png"
            alt="website banner logo"
            className="website-banner-logo"
          />
          <div className="name-description-container">
            <h1 className="about-page-name-title">UI/UX DESIGNER</h1>
            <h1 className="about-name">Hello, my name is Madelyn Torff</h1>
            <p className="about-description">
              Short ext with details about you. what you do or your professional
              career. You can add ore information on the about page.
            </p>
            <AnchorLink href="#projectSection" className="nav-anchor-ele">
              <button className="project-btn" type="button">
                project
              </button>
            </AnchorLink>

            <button className="linked-btn" type="button">
              LinkedIn
            </button>
          </div>
        </div>
        <div className="add-project-container">
          <form className="form-container" onSubmit={this.submitFunction}>
            <h1>Add Project</h1>
            <hr className="hr" />
            <label htmlFor="name" className="project-label">
              Project Name
            </label>
            <input
              id="name"
              onChange={this.onChangeName}
              value={name}
              className="project-input"
            />
            {isName && <p className="err-msg">*Please enter project name </p>}
            <label htmlFor="link" className="project-label project-label-link">
              Project Link
            </label>
            <input
              id="link"
              onChange={this.onChangeLink}
              value={link}
              className="project-input-link project-input"
            />
            {isLink && <p className="err-msg">*Please enter project link</p>}
            <label
              htmlFor="projectDescription"
              className="project-label project-label-link"
            >
              Description
            </label>
            <textarea
              onChange={this.onChangeDescription}
              value={description}
              id="projectDescription"
              className="project-description project-input"
            />
            {isDescription && (
              <p className="err-msg">*Please enter project description</p>
            )}
            <div className="project-add-btn-container">
              <button type="submit" className="project-add-btn">
                Add
              </button>
            </div>
          </form>
        </div>
        <img
          src="https://res.cloudinary.com/dv7gjsem1/image/upload/v1704453422/Vector_zrjeye.png"
          className="wave-logo"
          alt="wave"
        />
        <Projects projectList={list} />
        <Contacts />
        <img
          src="https://res.cloudinary.com/dv7gjsem1/image/upload/v1704453422/Vector_zrjeye.png"
          className="wave-logo-last"
          alt="wave"
        />
      </div>
    )
  }
}

export default Home
