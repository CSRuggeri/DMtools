import React, { useEffect, useState } from 'react'
import { Htag } from '../../Atoms/Htag/Htag'
import { Ptag } from '../../Atoms/Ptag/Ptag'
import { useFetch } from '../../../assets/Hooks/fetchSpells/fetchSpells'

export const Card: React.FC = () => {
  const url = "https://www.dnd5eapi.co/api/spells"

 
interface Spell  {
    name: string;
    desc: [];
    higher_level: [];
    range:string;
    components: [];
    material:[];
    ritual: boolean;
    casting_time: string;
    level: number;
    attack_type: number;
    damage: string;
    damage_at_slot_level: string;
    classes: string;
    subclasses:string;
    url:string;
}

const [data, setData ] = useState<Spell[]>([])


useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await useFetch(url)
      setData(fetchedData)
      console.log(fetchedData)
    }
    fetchData()

    
  }, [])
  
  
  return (
    <div>
      {data.map((spell: any, index: number) => (
        <div key={index}>

           
          <Htag Hcontent={spell.data.name} Hindex={2} />
          <Ptag text={spell.data.desc} classname={"description"} />
          <Ptag text={spell.data.higher_level} classname={"description"} />
          <Ptag text={spell.data.range} classname={"description"} />
          <Ptag text={spell.data.components} classname={"description"} />
          <Ptag text={spell.data.material} classname={"description"} />
          <Ptag text={spell.data.ritual} classname={"description"} />
          <Ptag text={spell.data.casting_time} classname={"description"} />
          <Ptag text={spell.data.level} classname={"description"} />
          <Ptag text={spell.data.attack_type} classname={"description"} />
        </div>
      ))}
    </div>
  )
}
