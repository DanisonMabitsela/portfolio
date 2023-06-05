import Layout from "../components/MyLayout";
// Component for projects
const Projects = () => (
  <Layout>
    <h1>Projects</h1>
    <ul>
      <li>
        <span className="link">
          <a href="https://github.com/DanisonMabitsela/Heroku-app.git">
            Nationalize App on Git
          </a>
        </span>
      </li>
      <li>
        <span className="link">
          <a href="https://nationality-predictor.herokuapp.com/">
            Nationalize App on Heroku
          </a>
        </span>
      </li>
    </ul>

    <style jsx>{`
      h1 {
        color: #333;
      }
      ul {
        list-style-type: none;
        padding-left: 0;
      }
      li {
        margin-bottom: 10px;
      }
      .link a {
        color: #007bff;
        text-decoration: none;
      }
    `}</style>
  </Layout>
);

export default Projects;
