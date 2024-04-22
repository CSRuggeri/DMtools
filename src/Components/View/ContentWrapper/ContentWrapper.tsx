import React from "react";
import { Card } from "../../Molecules/Card/Card";
import styles from "./ContentWrapper.module.css";
import { useFetch } from '../../../utils/Hooks/useFetch'; // Import your custom hook

const ContentWrapper: React.FC = () => {
  const url : string = "https://www.dnd5eapi.co/api/spells"

  const { loading, error, data } = useFetch(url); // Assuming you have a 'url' variable

  if (loading) {
    return <div className={styles.wrapper}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.wrapper}>Error: {error}</div>;
  }

  return (
    <div className={styles.wrapper}>
      ContentWrapper:
      <Card data={data} /> 
    </div>
  );
};

export default ContentWrapper;