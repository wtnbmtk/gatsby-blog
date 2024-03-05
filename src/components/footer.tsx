import React from "react";
import type { FC } from "react";
import { Link } from "gatsby";
import * as styles from "../styles/footer.module.css";

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <small>&copy; Motoki Watanabe</small>
  </footer>
);
