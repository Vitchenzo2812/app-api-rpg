import { ApplicationError } from "../Error"
import { Attribute } from "./Attributes";
import { Powers } from "./Powers";
import { Trials } from "./Trials";

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
        readonly trial: Trials,
        readonly proficiencies: IProficiencies,
        readonly attributes: Attribute,
        readonly classPowers: Powers,
        readonly paranormalPowers?: Powers,
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

                this.trial.combatantTrial;
                this.classPowers.classCharacter.combatant;
                this.paranormalPowers?.paranormal?.paranormalPowes;

                break;

            case "specialist":
                this.proficiencies = {
                    simple_weapons: true,
                    tactical_weapons: false,
                    heavy_weapons: false,
                    light_protection: true,
                    heavy_protection: false,
                }

                this.trial.specialistTrial;
                this.classPowers.classCharacter.specialist;
                this.paranormalPowers?.paranormal?.paranormalPowes;

                break;

            case "occultist":
                this.proficiencies = {
                    simple_weapons: true,
                    tactical_weapons: false,
                    heavy_weapons: false,
                    light_protection: false,
                    heavy_protection: false,
                }

                this.trial.occultistTrial;
                this.classPowers.classCharacter.occultist;
                this.paranormalPowers?.paranormal?.paranormalPowes;

                break;
        }

    }

    calcLvlUp() {
        return this.nex += 5;
    }

    calcLvlUpPV() {
        const attribute = this.attributes.attributes.find(att => att.name === "force")!

        switch (this.nameClass) {
            case "combatant":
                this.PV = (20 + attribute.points)
                switch (this.nex) {
                    case 10:
                        this.PV += (4 + attribute.points)
                        break;

                    case 15:
                        this.PV += (4 + attribute.points)
                        break;

                    case 20:
                        this.PV += (4 + attribute.points)
                        break;

                    case 25:
                        this.PV += (4 + attribute.points)
                        break;

                    case 30:
                        this.PV += (4 + attribute.points)
                        break;

                    case 35:
                        this.PV += (4 + attribute.points)
                        break;

                    case 40:
                        this.PV += (4 + attribute.points)
                        break;

                    case 45:
                        this.PV += (4 + attribute.points)
                        break;

                    case 50:
                        this.PV += (4 + attribute.points)
                        break;

                    case 55:
                        this.PV += (4 + attribute.points)
                        break;

                    case 60:
                        this.PV += (4 + attribute.points)
                        break;

                    case 65:
                        this.PV += (4 + attribute.points)
                        break;

                    case 70:
                        this.PV += (4 + attribute.points)
                        break;

                    case 75:
                        this.PV += (4 + attribute.points)
                        break;

                    case 80:
                        this.PV += (4 + attribute.points)
                        break;

                    case 85:
                        this.PV += (4 + attribute.points)
                        break;

                    case 90:
                        this.PV += (4 + attribute.points)
                        break;

                    case 95:
                        this.PV += (4 + attribute.points)
                        break;

                    case 100:
                        this.PV += (4 + attribute.points)
                        break;
                }
                break;

            case "specialist":
                this.PV = (16 + attribute.points)
                switch (this.nex) {
                    case 10:
                        this.PV += (3 + attribute.points)
                        break;

                    case 15:
                        this.PV += (3 + attribute.points)
                        break;

                    case 20:
                        this.PV += (3 + attribute.points)
                        break;

                    case 25:
                        this.PV += (3 + attribute.points)
                        break;

                    case 30:
                        this.PV += (3 + attribute.points)
                        break;

                    case 35:
                        this.PV += (3 + attribute.points)
                        break;

                    case 40:
                        this.PV += (3 + attribute.points)
                        break;

                    case 45:
                        this.PV += (3 + attribute.points)
                        break;

                    case 50:
                        this.PV += (3 + attribute.points)
                        break;

                    case 55:
                        this.PV += (3 + attribute.points)
                        break;

                    case 60:
                        this.PV += (3 + attribute.points)
                        break;

                    case 65:
                        this.PV += (3 + attribute.points)
                        break;

                    case 70:
                        this.PV += (3 + attribute.points)
                        break;

                    case 75:
                        this.PV += (3 + attribute.points)
                        break;

                    case 80:
                        this.PV += (3 + attribute.points)
                        break;

                    case 85:
                        this.PV += (3 + attribute.points)
                        break;

                    case 90:
                        this.PV += (3 + attribute.points)
                        break;

                    case 95:
                        this.PV += (3 + attribute.points)
                        break;

                    case 100:
                        this.PV += (3 + attribute.points)
                        break;
                }
                break;

            case "occultist":
                this.PV = (12 + attribute.points)
                switch (this.nex) {
                    case 10:
                        this.PV += (2 + attribute.points)
                        break;

                    case 15:
                        this.PV += (2 + attribute.points)
                        break;

                    case 20:
                        this.PV += (2 + attribute.points)
                        break;

                    case 25:
                        this.PV += (2 + attribute.points)
                        break;

                    case 30:
                        this.PV += (2 + attribute.points)
                        break;

                    case 35:
                        this.PV += (2 + attribute.points)
                        break;

                    case 40:
                        this.PV += (2 + attribute.points)
                        break;

                    case 45:
                        this.PV += (2 + attribute.points)
                        break;

                    case 50:
                        this.PV += (2 + attribute.points)
                        break;

                    case 55:
                        this.PV += (2 + attribute.points)
                        break;

                    case 60:
                        this.PV += (2 + attribute.points)
                        break;

                    case 65:
                        this.PV += (2 + attribute.points)
                        break;

                    case 70:
                        this.PV += (2 + attribute.points)
                        break;

                    case 75:
                        this.PV += (2 + attribute.points)
                        break;

                    case 80:
                        this.PV += (2 + attribute.points)
                        break;

                    case 85:
                        this.PV += (2 + attribute.points)
                        break;

                    case 90:
                        this.PV += (2 + attribute.points)
                        break;

                    case 95:
                        this.PV += (2 + attribute.points)
                        break;

                    case 100:
                        this.PV += (2 + attribute.points)
                        break;
                }
                break;
        }
    }

    calcLvlUpPE() {
        const attribute = this.attributes.attributes.find(att => att.name === "presence")!

        switch (this.nameClass) {
            case "combatant":
                this.PE = (2 + attribute.points)
                switch (this.nex) {
                    case 10:
                        this.PE += (2 + attribute.points)
                        break;

                    case 15:
                        this.PE += (2 + attribute.points)
                        break;

                    case 20:
                        this.PE += (2 + attribute.points)
                        break;

                    case 25:
                        this.PE += (2 + attribute.points)
                        break;

                    case 30:
                        this.PE += (2 + attribute.points)
                        break;

                    case 35:
                        this.PE += (2 + attribute.points)
                        break;

                    case 40:
                        this.PE += (2 + attribute.points)
                        break;

                    case 45:
                        this.PE += (2 + attribute.points)
                        break;

                    case 50:
                        this.PE += (2 + attribute.points)
                        break;

                    case 55:
                        this.PE += (2 + attribute.points)
                        break;

                    case 60:
                        this.PE += (2 + attribute.points)
                        break;

                    case 65:
                        this.PE += (2 + attribute.points)
                        break;

                    case 70:
                        this.PE += (2 + attribute.points)
                        break;

                    case 75:
                        this.PE += (2 + attribute.points)
                        break;

                    case 80:
                        this.PE += (2 + attribute.points)
                        break;

                    case 85:
                        this.PE += (2 + attribute.points)
                        break;

                    case 90:
                        this.PE += (2 + attribute.points)
                        break;

                    case 95:
                        this.PE += (2 + attribute.points)
                        break;

                    case 100:
                        this.PE += (2 + attribute.points)
                        break;
                }
                break;

            case "specialist":
                this.PE = (3 + attribute.points)
                switch (this.nex) {
                    case 10:
                        this.PE += (3 + attribute.points)
                        break;

                    case 15:
                        this.PE += (3 + attribute.points)
                        break;

                    case 20:
                        this.PE += (3 + attribute.points)
                        break;

                    case 25:
                        this.PE += (3 + attribute.points)
                        break;

                    case 30:
                        this.PE += (3 + attribute.points)
                        break;

                    case 35:
                        this.PE += (3 + attribute.points)
                        break;

                    case 40:
                        this.PE += (3 + attribute.points)
                        break;

                    case 45:
                        this.PE += (3 + attribute.points)
                        break;

                    case 50:
                        this.PE += (3 + attribute.points)
                        break;

                    case 55:
                        this.PE += (3 + attribute.points)
                        break;

                    case 60:
                        this.PE += (3 + attribute.points)
                        break;

                    case 65:
                        this.PE += (3 + attribute.points)
                        break;

                    case 70:
                        this.PE += (3 + attribute.points)
                        break;

                    case 75:
                        this.PE += (3 + attribute.points)
                        break;

                    case 80:
                        this.PE += (3 + attribute.points)
                        break;

                    case 85:
                        this.PE += (3 + attribute.points)
                        break;

                    case 90:
                        this.PE += (3 + attribute.points)
                        break;

                    case 95:
                        this.PE += (3 + attribute.points)
                        break;

                    case 100:
                        this.PE += (3 + attribute.points)
                        break;
                }
                break;

            case "occultist":
                this.PE = (4 + attribute.points)
                switch (this.nex) {
                    case 10:
                        this.PE += (4 + attribute.points)
                        break;

                    case 15:
                        this.PE += (4 + attribute.points)
                        break;

                    case 20:
                        this.PE += (4 + attribute.points)
                        break;

                    case 25:
                        this.PE += (4 + attribute.points)
                        break;

                    case 30:
                        this.PE += (4 + attribute.points)
                        break;

                    case 35:
                        this.PE += (4 + attribute.points)
                        break;

                    case 40:
                        this.PE += (4 + attribute.points)
                        break;

                    case 45:
                        this.PE += (4 + attribute.points)
                        break;

                    case 50:
                        this.PE += (4 + attribute.points)
                        break;

                    case 55:
                        this.PE += (4 + attribute.points)
                        break;

                    case 60:
                        this.PE += (4 + attribute.points)
                        break;

                    case 65:
                        this.PE += (4 + attribute.points)
                        break;

                    case 70:
                        this.PE += (4 + attribute.points)
                        break;

                    case 75:
                        this.PE += (4 + attribute.points)
                        break;

                    case 80:
                        this.PE += (4 + attribute.points)
                        break;

                    case 85:
                        this.PE += (4 + attribute.points)
                        break;

                    case 90:
                        this.PE += (4 + attribute.points)
                        break;

                    case 95:
                        this.PE += (4 + attribute.points)
                        break;

                    case 100:
                        this.PE += (4 + attribute.points)
                        break;
                }
                break;
        }
    }

    calcLvlUpSAN() {
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