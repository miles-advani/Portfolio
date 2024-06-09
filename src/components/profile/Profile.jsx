import "./Profile.css";

export default function Profile({ name, jobTitle, profileImage }) {
  return (
    <div className="about-me-content">
      <img
        className="profile-pic"
        src={profileImage}
        alt={`Picture of ${name}`}
      />
      <h1 className="name">{name}, <br />{jobTitle}</h1>
    </div>
  );
}