import './index.css'

const UserInfo = () => (
  <div className="user-info-container">
    <div className="profile-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        className="profile-image"
        alt="profile"
      />
      <h1 className="profile-name">Wade Warren</h1>
      <p className="user-designation">Software developer at UK</p>
    </div>
  </div>
)

export default UserInfo
