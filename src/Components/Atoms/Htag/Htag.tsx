import React from "react";
import styles from "./Htag.module.css";

export const Htag: React.FC<{ Hcontent: string; Hindex: number; classname: string}> = ({
  Hcontent,
  Hindex,
  classname
}) => {
  const handleHtag = (Hindex: number, Hcontent: string, classname: string) => {
    const Htag: { [key: number]: JSX.Element } = {
      2: <h2 className={styles[classname]}>{Hcontent}</h2>,
      3: <h3 className={styles[classname]}>{Hcontent}</h3>,
      1: <h1 className={styles[classname]}>{Hcontent}</h1>,
      4: <h4 className={styles[classname]}>{Hcontent}</h4>,
      5: <h5 className={styles[classname]}>{Hcontent}</h5>,
      6: <h6 className={styles[classname]}>{Hcontent}</h6>,
    };
    return Htag[Hindex] || null;
  };

  return <div>{handleHtag(Hindex, Hcontent, classname)}</div>;
};