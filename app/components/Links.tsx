import React from "react";
import styles from "../page.module.css";

export type LinkItem = {
  href: string;
  label: string;
  badge?: string | null;
}

export default function Links({ items }: { items: LinkItem[] }) {
  return (
    <div className={styles.links}>
      {items.map((it) => (
        <a
          key={it.href}
          href={it.href}
          target={"_blank"}
          rel={"noopener noreferrer"}
          className={styles.link}
        >
          {it.label}
          {it.badge ? (
            <span className={`${styles.newBadge} ${styles["newBadge--pulse"]}`} aria-hidden>
              {it.badge}
            </span>
          ) : null}
        </a>
      ))}
    </div>
  );
}
