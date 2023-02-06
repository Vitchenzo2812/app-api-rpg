import { Attributes } from "./Attributes";

export class Defense {
    constructor(
        readonly attributes: Attributes,
        readonly modifications: number,
    ) { }
}