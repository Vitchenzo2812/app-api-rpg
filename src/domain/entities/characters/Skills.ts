import { ApplicationError } from "../Error";

interface IChosenSkills {
    name: string;
    attribute: string;
    charge?: boolean;
    kit?: boolean;
    needTrained?: boolean;
    trainedLevel: {
        trained: boolean;
        veteran: boolean;
        expert: boolean;
    }
}

export class Skills {
    static readonly skills = [
        {
            name: "stunt",
            attribute: "agility",
            charge: true,
            kit: false,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "crime",
            attribute: "agility",
            charge: true,
            kit: true,
            needTrained: true,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "stealth",
            attribute: "agility",
            charge: true,
            kit: false,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "initiative",
            attribute: "agility",
            charge: false,
            kit: false,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "pilotage",
            attribute: "agility",
            charge: false,
            kit: false,
            needTrained: true,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "aim",
            attribute: "agility",
            charge: false,
            kit: false,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "reflexes",
            attribute: "agility",
            charge: false,
            kit: false,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "athletics",
            attribute: "strength",
            charge: false,
            kit: false,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "fight",
            attribute: "strength",
            charge: false,
            kit: false,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "dressage",
            attribute: "presence",
            charge: false,
            kit: false,
            needTrained: true,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "art",
            attribute: "presence",
            charge: false,
            kit: false,
            needTrained: true,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "diplomacy",
            attribute: "presence",
            charge: false,
            kit: false,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "cheat",
            attribute: "presence",
            charge: false,
            kit: true,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "intimidation",
            attribute: "presence",
            charge: false,
            kit: false,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "perception",
            attribute: "presence",
            charge: false,
            kit: false,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "religion",
            attribute: "presence",
            charge: false,
            kit: false,
            needTrained: true,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "desire",
            attribute: "presence",
            charge: false,
            kit: false,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "fortitude",
            attribute: "force",
            charge: false,
            kit: false,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "current_affairs",
            attribute: "intellect",
            charge: false,
            kit: false,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "sciences",
            attribute: "intellect",
            charge: false,
            kit: false,
            needTrained: true,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "intuition",
            attribute: "intellect",
            charge: false,
            kit: false,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "investigation",
            attribute: "intellect",
            charge: false,
            kit: false,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "medicine",
            attribute: "intellect",
            charge: false,
            kit: true,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "occultism",
            attribute: "intellect",
            charge: false,
            kit: false,
            needTrained: true,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "profession",
            attribute: "intellect",
            charge: false,
            kit: false,
            needTrained: true,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "survival",
            attribute: "intellect",
            charge: false,
            kit: false,
            needTrained: false,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "tactic",
            attribute: "intellect",
            charge: false,
            kit: false,
            needTrained: true,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        },
        {
            name: "technology",
            attribute: "intellect",
            charge: false,
            kit: true,
            needTrained: true,
            trainedLevel: {
                trained: false,
                veteran: false,
                expert: false,
            }
        }
    ]

    constructor(
        public chosenSkills: IChosenSkills[]
    ) {
        const characterSkillsName = this.chosenSkills.map(skill => skill.name);
        const allSkillsName = Skills.skills.map(skill => skill.name);

        const characterSkillsAttribute = this.chosenSkills.map(skill => skill.attribute);
        const allSkillsAttribute = Skills.skills.map(skill => skill.attribute);

        // const characterTrainedLevel = this.chosenSkills.map(skill => skill.trainedLevel);
        // const allSkillsTrainedLevel = Skills.skills.map(skill => skill.trainedLevel);

        for (const name of characterSkillsName) {
            if (!allSkillsName.includes(name)) {
                throw new ApplicationError('Some skill not exists!', 400);
            }
        }

        for (const attribute of characterSkillsAttribute) {
            if (!allSkillsAttribute.includes(attribute)) {
                throw new ApplicationError('Some attribute is wrong!', 400);
            }
        }


    }


}