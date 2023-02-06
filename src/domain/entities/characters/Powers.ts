
export interface Powers {
    paranormal: allPowers.Paranormal,
    classCharacter: allPowers.classesPower,
}

export namespace allPowers {
    export type Paranormal = {
        paranormalPowes: [
            occult_vision: {
                name: "occult_vision",
                bonus: 5,
                description: "+5 on Perception tests and see in the dark",
                haveThePower: false,
            }
        ],
    }

    export type classesPower = {
        combatant: [
            special_attack: {
                name: "special_attack",
                spendPE: 2,
                bonus: 5,
                description: "+5 on attack or damage rolls",
                haveThePower: false,
            }
        ],

        specialist: [
            eclectic: {
                name: "eclectic",
                spendPE: 2,
                bonus: "training skill",
                haveThePower: false,
            }
        ],

        occultist: [
            element_expert: {
                name: "element_expert",
                bonus: "resistance to an element"
                description: "resistance DT to an elemente up +2"
                haveThePower: false,
            }
        ]
    }
}