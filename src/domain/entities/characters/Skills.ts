import { Attributes } from "./Attributes";

export class Skills {
    skills = [
        {
            stunt: "stunt",
            charge: true,
            kit: false,
            trained: false
        },
        {
            crime: "crime",
            charge: true,
            kit: true,
            trained: true
        }
    ]

    constructor(
        readonly attributes: Attributes,
        readonly needsForSkills: object[],
    ) { }
}