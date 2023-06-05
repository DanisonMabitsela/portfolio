import Layout from "../components/MyLayout";
// Contact component
const Contact = () => (
  <Layout>
    <h1>Contact</h1>
    <p>
      Contact Information:{" "}
      <a href="mailto:Xboxmabitsela@gmail.com">Xboxmabitsela@gmail.com</a> |{" "}
      <a href="tel:0784038764">078 403 8764</a>
    </p>

    <style jsx>{`
      h1 {
        color: #333;
      }
      p {
        margin-bottom: 10px;
      }
      .link {
        color: #007bff;
        cursor: pointer;
        text-decoration: underline;
      }
    `}</style>
  </Layout>
);

export default Contact;
