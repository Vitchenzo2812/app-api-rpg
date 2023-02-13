import { ApplicationError } from "../Error";
import { Attribute } from "./Attributes";

export class Defense {
    private defense: number = 10
    private agility = this.allAttributes.attributes.find(att => att.name === "agility")!

    constructor(
        private readonly allAttributes: Attribute,
        private readonly modifications: number,
    ) {

        if (this.agility.points < 0) {
            throw new ApplicationError('Invalid attribute points!', 400);
        }
    }

    calcDefense() {
        const defenseCharacter = this.defense + this.agility.points + this.modifications;

        return defenseCharacter;
    }

}