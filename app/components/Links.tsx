import React from "react";
import styles from "../page.module.css";

export type LinkItem = {
  href: string;
  label: string;
  external?: boolean;
  badge?: string | null;
}

export default function Links({ items }: { items: LinkItem[] }) {
  return (
    <div className={styles.links}>
      {items.map((it) => (
        <a
          key={it.href}
          href={it.href}
          target={it.external ? "_blank" : undefined}
          rel={it.external ? "noopener noreferrer" : undefined}
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
