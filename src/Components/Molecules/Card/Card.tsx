import React from 'react';
import { Htag } from '../../Atoms/Htag/Htag';
import { Ptag } from '../../Atoms/Ptag/Ptag';
import { useFetch } from '../../../utils/Hooks/useFetch';
import styles from "./Card.module.css";

interface Spell {
  name: string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  ritual: boolean;
  casting_time: string;
  level: string;
  attack_type: string;
  damage: string;
  damage_at_slot_level: string;
  classes: string;
  subclasses: string;
  url: string;
}
interface CardProps {
  data: Spell[] | null; // Define the type for 'data' prop
}

export const Card: React.FC<CardProps> = ({ data }) => {
  

  return (
    <div>
      {data?.map((spell: Spell, index: number) => (
        <div className={styles.card} key={index}>
          <Htag Hcontent={spell.name} Hindex={2} classname='heading' />
          <Ptag text={spell.desc.join()} classname={"description"} />
          <Ptag text={spell.higher_level.join()} classname={"description"} />
          <Htag Hcontent={spell.range} Hindex={1} classname='description' />
          <Ptag text={spell.components.join()} classname={"description"} />
          <Ptag text={spell.material} classname={"description"} />
          <Ptag text={spell.ritual ? "ritual" : "no es ritual"} classname={"description"} />
          <Ptag text={spell.casting_time} classname={"description"} />
          <Ptag text={spell.level} classname={"description"} />
          <Ptag text={spell.attack_type} classname={"description"} />
        </div>
      ))}
    </div>
  );
};
