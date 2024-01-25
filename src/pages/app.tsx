
import { Inter } from "next/font/google";
import { Button } from 'primereact/button';   
import { InputText } from "primereact/inputtext";
import { Card } from 'primereact/card';

const inter = Inter({ subsets: ["latin"] });
import '.';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { ChangeEvent, useMemo, useState } from "react";
import PokeAPI from "./api/PokeAPI";

export default function App() {
const [value, setValue] = useState('')
const api = new PokeAPI();
const search = useMemo(async () => await api.getPokemon(value), [value])
// const {name} = search
  console.log("🚀 ~ App ~ search:", search)
  return (
    <main>
      <InputText
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      {/* <PokeCard name={}/> */}
    </main>
  );
}

function PokeCard(name:string, img?: any){
  return (
    <Card title="Simple Card">
      <p className="m-0">
        {name}
      </p>
    </Card>
  )
}