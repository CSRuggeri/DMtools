import React from "react";
import styles from "./Htag.module.css";

export const Htag: React.FC<{ Hcontent: string; Hindex: number }> = ({
  Hcontent,
  Hindex,
}) => {
  const handleHtag = (Hindex: number, Hcontent: string) => {
    const Htag: { [key: number]: JSX.Element } = {
      1: <h1 className={styles.heading}>{Hcontent}</h1>,
      2: <h2 className={styles.heading}>{Hcontent}</h2>,
      3: <h3 className={styles.heading}>{Hcontent}</h3>,
      4: <h4 className={styles.heading}>{Hcontent}</h4>,
      5: <h5 className={styles.heading}>{Hcontent}</h5>,
      6: <h6 className={styles.heading}>{Hcontent}</h6>,
    };
    return Htag[Hindex] || null;
  };

  return <div>{handleHtag(Hindex, Hcontent)}</div>;
};