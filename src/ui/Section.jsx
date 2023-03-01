import img from "../img/background.webp";
import dev from "../img/photo.png";

const ProfileSection = (props) => {
    return (
        <section className="profile">
            <img src={img} alt="background" />
            <div className="card">
                <img src={props.profile.photos.small || dev} alt="profileImage" />
                <div className=" card-text">
                    <p className="card-name">{props.profile.fullName}</p>
                    <p className="card-birthday">Date of birth: 1998</p>
                    <p className="card-city">City: Minsk</p>
                    <p className="card-education">Education: BSU'11 </p>
                    <p>
                        Web-site:{" "}
                        <a className="card-site" href="https://github.com" target="_blank">
                            https://github.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
