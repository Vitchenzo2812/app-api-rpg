import { Attribute } from "./Attributes";
import { ClassCharacter } from "./ClassCharacter";
import { Defense } from "./Defense";
import { Origins } from "./Origins";
import { Skills } from "./Skills";

type TClassCharacter = 'combatant' | 'specialist' | 'occultist'

export class Character {

    // classCharacter: ClassCharacter

    constructor(
        readonly id: string,
        readonly idUser: string,
        readonly name: string,
        readonly nex: number,
        readonly history: string,
        readonly age: number,
        readonly gender: string,
        readonly appearance: string,
        readonly classNameCharacter: TClassCharacter,
        readonly defense: Defense,
        readonly attributes: Attribute,
        readonly origin: Origins,
        readonly skills: Skills,
        // readonly inventory: 

    ) { }
}