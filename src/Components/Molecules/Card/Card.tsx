import React from 'react'
import { Htag } from '../../Atoms/Htag/Htag'
import { Ptag } from '../../Atoms/Ptag/Ptag'
import { useFetch } from '../../../assets/Hooks/fetchSpells/useFetch'
import styles from "./Card.module.css";




export const Card: React.FC = () => {
  const url : string = "https://www.dnd5eapi.co/api/spells"


  interface Spell  {
    name: string;
    desc: [];
    higher_level: [];
    range:string;
    components: [];
    material:string;
    ritual: boolean;
    casting_time: string;
    level: string;
    attack_type: string;
    damage: string;
    damage_at_slot_level: string;
    classes: string;
    subclasses:string;
    url:string;
}
  
  const {loading, error, data } = useFetch(url);
 
  if (loading){
    return(<Htag Hcontent={"Loading..."} Hindex={1} classname='heading' />)
  } 
  if (error) {
    return(<Htag Hcontent={error} Hindex={1} classname='heading'/>)
  }

  
  return (
    <div >


{data?.map((spell: Spell, index: number) => (
        <div className={styles.card}key={index}>

           
          <Htag Hcontent={spell.name} Hindex={2} classname='heading'/>
          <Ptag text={spell.desc.join()} classname={"description"} />
          <Ptag text={spell.higher_level.join()} classname={"description"} />
          <Htag Hcontent={spell.range} Hindex={1} classname='description'/>
          <Ptag text={spell.components.join()} classname={"description"} />
          <Ptag text={spell.material} classname={"description"} />
          <Ptag text={spell.ritual ? "ritual" : "no es ritual"} classname={"description"} />
          <Ptag text={spell.casting_time} classname={"description"} />
          <Ptag text={spell.level} classname={"description"} />
          <Ptag text={spell.attack_type} classname={"description"} />
        </div>
      ))}
    </div>
  )
}
