import { ApplicationError } from "../Error"
import { Attributes } from "./Attributes";
import { Powers } from "./Powers";

interface IProficiencies {
    simple_weapons: boolean,
    tactical_weapons: boolean,
    heavy_weapons: boolean,
    light_protection: boolean,
    heavy_protection: boolean
}

export class ClassCharacter {
    constructor(
        public nex: number,
        readonly nameClass: string,
        public PV: number,
        public PE: number,
        public SAN: number,
        readonly trial: string,
        readonly powers: Powers,
        readonly proficiencies: IProficiencies,
        readonly attributes: Attributes,
    ) {

        if (!this.nameClass) throw new ApplicationError('Choose a class!', 400)
        if (this.nex < 0) throw new ApplicationError('NEX invalid!', 400)

        switch (this.nameClass) {
            case "combatant":
                this.proficiencies = {
                    simple_weapons: true,
                    tactical_weapons: true,
                    heavy_weapons: false,
                    light_protection: true,
                    heavy_protection: false,
                }
                break;

            case "specialist":
                this.proficiencies = {
                    simple_weapons: true,
                    tactical_weapons: false,
                    heavy_weapons: false,
                    light_protection: true,
                    heavy_protection: false,
                }
                break;

            case "occultist":
                this.proficiencies = {
                    simple_weapons: true,
                    tactical_weapons: false,
                    heavy_weapons: false,
                    light_protection: false,
                    heavy_protection: false,
                }
                break;
        }
    }

    calcPV() {
        switch (this.nameClass) {
            case "combatant":
                this.PV = (20 + this.attributes.force)
                switch (this.nex) {
                    case 10:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 15:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 20:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 25:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 30:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 35:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 40:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 45:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 50:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 55:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 60:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 65:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 70:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 75:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 80:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 85:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 90:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 95:
                        this.PV += (4 + this.attributes.force)
                        break;

                    case 100:
                        this.PV += (4 + this.attributes.force)
                        break;
                }
                break;

            case "specialist":
                this.PV = (16 + this.attributes.force)
                switch (this.nex) {
                    case 10:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 15:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 20:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 25:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 30:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 35:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 40:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 45:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 50:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 55:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 60:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 65:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 70:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 75:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 80:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 85:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 90:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 95:
                        this.PV += (3 + this.attributes.force)
                        break;

                    case 100:
                        this.PV += (3 + this.attributes.force)
                        break;
                }
                break;

            case "occultist":
                this.PV = (12 + this.attributes.force)
                switch (this.nex) {
                    case 10:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 15:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 20:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 25:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 30:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 35:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 40:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 45:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 50:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 55:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 60:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 65:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 70:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 75:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 80:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 85:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 90:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 95:
                        this.PV += (2 + this.attributes.force)
                        break;

                    case 100:
                        this.PV += (2 + this.attributes.force)
                        break;
                }
                break;
        }
    }

    calcPE() {
        switch (this.nameClass) {
            case "combatant":
                this.PE = (2 + this.attributes.presence)
                switch (this.nex) {
                    case 10:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 15:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 20:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 25:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 30:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 35:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 40:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 45:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 50:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 55:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 60:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 65:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 70:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 75:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 80:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 85:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 90:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 95:
                        this.PE += (2 + this.attributes.presence)
                        break;

                    case 100:
                        this.PE += (2 + this.attributes.presence)
                        break;
                }
                break;

            case "specialist":
                this.PE = (3 + this.attributes.presence)
                switch (this.nex) {
                    case 10:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 15:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 20:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 25:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 30:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 35:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 40:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 45:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 50:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 55:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 60:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 65:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 70:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 75:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 80:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 85:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 90:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 95:
                        this.PE += (3 + this.attributes.presence)
                        break;

                    case 100:
                        this.PE += (3 + this.attributes.presence)
                        break;
                }
                break;

            case "occultist":
                this.PE = (4 + this.attributes.presence)
                switch (this.nex) {
                    case 10:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 15:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 20:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 25:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 30:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 35:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 40:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 45:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 50:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 55:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 60:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 65:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 70:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 75:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 80:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 85:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 90:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 95:
                        this.PE += (4 + this.attributes.presence)
                        break;

                    case 100:
                        this.PE += (4 + this.attributes.presence)
                        break;
                }
                break;
        }
    }

    calcSAN() {
        switch (this.nameClass) {
            case "combatant":
                this.SAN = 12;
                switch (this.nex) {
                    case 10:
                        this.SAN += 3
                        break;

                    case 15:
                        this.SAN += 3
                        break;

                    case 20:
                        this.SAN += 3
                        break;

                    case 25:
                        this.SAN += 3
                        break;

                    case 30:
                        this.SAN += 3
                        break;

                    case 35:
                        this.SAN += 3
                        break;

                    case 40:
                        this.SAN += 3
                        break;

                    case 45:
                        this.SAN += 3
                        break;

                    case 50:
                        this.SAN += 3
                        break;

                    case 55:
                        this.SAN += 3
                        break;

                    case 60:
                        this.SAN += 3
                        break;

                    case 65:
                        this.SAN += 3
                        break;

                    case 70:
                        this.SAN += 3
                        break;

                    case 75:
                        this.SAN += 3
                        break;

                    case 80:
                        this.SAN += 3
                        break;

                    case 85:
                        this.SAN += 3
                        break;

                    case 90:
                        this.SAN += 3
                        break;

                    case 95:
                        this.SAN += 3
                        break;

                    case 100:
                        this.SAN += 3
                        break;
                }
                break;

            case "specialist":
                this.SAN = 16
                switch (this.nex) {
                    case 10:
                        this.SAN += 4
                        break;

                    case 15:
                        this.SAN += 4
                        break;

                    case 20:
                        this.SAN += 4
                        break;

                    case 25:
                        this.SAN += 4
                        break;

                    case 30:
                        this.SAN += 4
                        break;

                    case 35:
                        this.SAN += 4
                        break;

                    case 40:
                        this.SAN += 4
                        break;

                    case 45:
                        this.SAN += 4
                        break;

                    case 50:
                        this.SAN += 4
                        break;

                    case 55:
                        this.SAN += 4
                        break;

                    case 60:
                        this.SAN += 4
                        break;

                    case 65:
                        this.SAN += 4
                        break;

                    case 70:
                        this.SAN += 4
                        break;

                    case 75:
                        this.SAN += 4
                        break;

                    case 80:
                        this.SAN += 4
                        break;

                    case 85:
                        this.SAN += 4
                        break;

                    case 90:
                        this.SAN += 4
                        break;

                    case 95:
                        this.SAN += 4
                        break;

                    case 100:
                        this.SAN += 4
                        break;
                }
                break;

            case "Occultist":
                this.SAN = 20;
                switch (this.nex) {
                    case 10:
                        this.SAN += 5
                        break;

                    case 15:
                        this.SAN += 5
                        break;

                    case 20:
                        this.SAN += 5
                        break;

                    case 25:
                        this.SAN += 5
                        break;

                    case 30:
                        this.SAN += 5
                        break;

                    case 35:
                        this.SAN += 5
                        break;

                    case 40:
                        this.SAN += 5
                        break;

                    case 45:
                        this.SAN += 5
                        break;

                    case 50:
                        this.SAN += 5
                        break;

                    case 55:
                        this.SAN += 5
                        break;

                    case 60:
                        this.SAN += 5
                        break;

                    case 65:
                        this.SAN += 5
                        break;

                    case 70:
                        this.SAN += 5
                        break;

                    case 75:
                        this.SAN += 5
                        break;

                    case 80:
                        this.SAN += 5
                        break;

                    case 85:
                        this.SAN += 5
                        break;

                    case 90:
                        this.SAN += 5
                        break;

                    case 95:
                        this.SAN += 5
                        break;

                    case 100:
                        this.SAN += 5
                        break;
                }
                break;
        }
    }
}