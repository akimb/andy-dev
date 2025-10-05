import React from "react";
import styles from "../page.module.css";

export default function Subtitle({ text }: { text: string }) {
  return <p className={styles.subtitle1}>{text}</p>;
}
