import React from "react";
import styles from "../page.module.css";

export default function Title({ text }: { text: string }) {
  return <div className={styles.title}>{text}</div>;
}
