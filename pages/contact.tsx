import styles from "@styles/Contact.module.css";
import stylesscss from "@styles/Contact.module.scss";

const Contact = () => {
  return (
    <>
      <h2>Contact</h2>{" "}
      <div className={styles.highlight}>Local CSS for Contact Page</div>
      <div className={stylesscss.highlightscss}>Local SCSS for Contac Page</div>
    </>
  );
};

export default Contact;
