import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

import { name, age } from './bases/01-types';
//import { pokemonIds, bulbasaur, pokemons } from './bases/02-objects';
//import {charmander} from './bases/03-clasess';

import { charmander } from './bases/04-injection';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript!!!</h1>
    <h2>${name}, and I'm ${age} years old</h2>
    <h2>${ charmander.name }</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
