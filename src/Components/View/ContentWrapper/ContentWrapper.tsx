import React from "react"
import { Card } from "../../Molecules/Card/Card"
import styles from "./ContentWrapper.module.css";


  const  ContentWrapper: React.FC =() =>{
  return (
    <div className={styles.wrapper}>ContentWrapper: <Card/></div>
  )
}


export default ContentWrapper