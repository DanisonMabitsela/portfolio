import Layout from "../components/MyLayout";

const About = () => (
  // About component
  <Layout>
    <div className="about-content">
      {" "}
      <div className="profile-picture">
        {" "}
        <img src="/static/images/image.jpg" alt="Profile Picture" />{" "}
      </div>
      <div className="bio">
        {" "}
        <h2>About Me</h2>
        <p>
          Hi, I'm Kwena Danison Mabitsela, an aspiring web developer. I recently
          graduated from the University of Limpopo with a Bachelor of Science in
          Agriculture (Animal Production), but I discovered my passion for web
          development during my studies.
        </p>
        <p>
          Since then, I've been learning and practicing web development skills
          on my own and through online courses, such as the HyperionDev
          bootcamp. I have experience with HTML, CSS, JavaScript, and React.js.
          I'm always eager to learn more.
        </p>
        <p>
          In my free time, I enjoy working on personal web development projects,
          such as my portfolio website. I'm also interested in hiking, reading,
          and playing guitar.
        </p>
        <h2>Education</h2>
        <ul>
          <li>
            <h3>University of Limpopo</h3>
            <p>Bachelor of Science in Agriculture (Animal Production)</p>
            <p>Graduated: 2023</p>
          </li>
          <li>
            <h3>HyperionDev Bootcamp</h3>
            <p>Full Stack Web Development</p>
            <p>2023 - Current</p>
          </li>
        </ul>
      </div>
    </div>
    <style jsx>{`
      /* CSS styles for the About component */
      .about-content {
        display: flex;
        align-items: center;
      }

      .profile-picture {
        width: 200px;
        height: 200px;
        margin-right: 20px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      }

      .profile-picture img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .bio {
        flex: 1;
      }

      h2 {
        color: #333;
      }

      p {
        margin-bottom: 10px;
      }
    `}</style>
  </Layout>
);

export default About;
