import styles from "@styles/About.module.css";
import stylesscss from "@styles/About.module.scss";

const About = () => {
  return (
    <>
      <h2>About</h2>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-success">Success</button>
      <div className={styles.highlight}>Local CSS for About Page</div>
      <div className={stylesscss.highlightscss}>Local SCSS for About Page</div>
    </>
  );
};
export default About;
