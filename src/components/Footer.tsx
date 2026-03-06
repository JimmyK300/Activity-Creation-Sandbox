import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2026 Sandbox Activity Project. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
