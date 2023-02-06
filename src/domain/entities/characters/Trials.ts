export interface Trials {
    combatantTrial: allTrials.Combatant,
    specialistTrial: allTrials.Specialist,
    occultistTrial: allTrials.Occultist,
}

export namespace allTrials {
    export type Combatant = {
        annihilator: [
            {
                hasThisTrial: false
            },
            {
                nex: 10,
                name: "The favorite",
                description: "Reduces a weapon's category by I"
                hasNex: false
            },
            {
                nex: 40,
                name: "Secret technique",
                description: "Reduces a weapon's category by II"
                spendPE?: 2,
                effects: {
                    broad: {
                        name: "broad",
                        description: "the attack can hit one additional target in its adjacent range"
                    },
                    destroyer: {
                        name: "destroyer",
                        description: "Increases weapon crit multiplier by +1"
                    }
                }

                hasNex: false
            },
            {
                nex: 65,
                name: "Sublime technique",
                description: "add more effects "
                effects: {
                    lethal: {
                        name: "lethal",
                        description: "Increases threat range by +2, can take this effect twice for +5"
                    },
                    piercing: {
                        name: "piercing",
                        description: "Ignores up to 5 points of damage resistance on any target type"
                    }
                }
                hasNex: false
            },
            {
                nex: 99,
                name: "Killing Machine",
                description: "Reduces a weapon's category by III, gains +2 threat edge, gains +1 damage die",
                hasNex: false
            },
        ],
    }

    export type Specialist = {
        sniper_elite: [
            {
                hasThisTrail: false,
            },
            {
                nex: 10,
                name: "Elite sight",
                description: "You gain proficiency with firearms that use long bullets and add your intellect to damage rolls."
            },
            {
                nex: 40,
                name: "Lethal shot",
                spendPE?: 1,
                description: "Increases the threat range of your next attack by +2 until the end of your next turn"
            },
            {
                nex: 65,
                name: "Impact Shot",
                spendPE?: 2,
                description: "If using a large-caliber firearm, you can spend 2 EP to make knockdown, disarm, push, and break maneuvers using a ranged attack"
            },
            {
                nex: 99,
                name: "Shoot to kill",
                description: "When you critically strike, you deal the maximum amount of damage, no dice roll required."
            },
        ]
    }

    export type Occultist = {
        conduit: [
            {
                hasThisTrail: false,
            },
            {
                nex: 10,
                spendPE: 2,
                description: "Increases your range by one step and doubles the area of effect"
            },
            {
                nex: 40,
                description: "Once per round, can increase a ritual's cost to 4 PE and cast it as a free action."
            },
            {
                nex: 65,
                description: "You can spend the target amount of PE, if you win the rolls, you nullify the ritual"
            },
            {
                nex: 99,
                description: "Learn the Channel Fear ritual"
            },
        ]
    }
}