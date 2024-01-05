// Write your code here

import './index.css'

const Contacts = () => (
  <div className="contact-container" id="contactSection">
    <div className="contact-logo-container">
      <img
        src="https://res.cloudinary.com/dv7gjsem1/image/upload/v1704464537/ph_instagram-logo-fill_ndzufu.jpg"
        alt="instagram"
        className="instagram"
      />
      <img
        src="https://res.cloudinary.com/dv7gjsem1/image/upload/v1704464696/Group_bzr3t8.png"
        alt="inkedIn"
        className="linked-in"
      />
      <img
        src="https://res.cloudinary.com/dv7gjsem1/image/upload/v1704464775/Group_utychr.png"
        alt="mail"
        className="mail"
      />
    </div>
    <p className="copy-right">Copyright@2024. All rights reserved</p>
  </div>
)

export default Contacts
