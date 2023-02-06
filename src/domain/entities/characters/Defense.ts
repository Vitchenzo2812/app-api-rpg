import { Attribute } from "./Attributes";

export class Defense {
    constructor(
        readonly attributes: Attribute,
        readonly modifications: number,
    ) { }
}