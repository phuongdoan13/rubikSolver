import styles from "@styles/Footer.module.css";
import React from "react";

export default function Footer() {
  const [message, setMessage] = React.useState("No message found");

  React.useEffect(() => {
    const value = `Chrome's verion ${window.versions.chrome()} - Node's version ${window.versions.node()} - Electron's version ${window.versions.electron()}`;
    setMessage(value);
  }, []);

  return (
    <footer className={styles.footerContainer}>
      <p>{message}</p>
    </footer>
  );
}
