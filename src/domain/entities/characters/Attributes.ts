import { ApplicationError } from "../Error";

export interface IAttribute {
    name: string;
    points: number;
}

export class Attribute {
    public attributes: IAttribute[] = [
        { name: 'agility', points: 0 },
        { name: 'strength', points: 0 },
        { name: 'presence', points: 0 },
        { name: 'force', points: 0 },
        { name: 'intellect', points: 0 }
    ]

    private totalPoints: number;

    constructor(
        readonly nex: number,
    ) {
        this.totalPoints = 9;

        switch (this.nex) {
            case 20:
                this.totalPoints = 10;
                break;

            case 50:
                this.totalPoints = 11;
                break;

            case 80:
                this.totalPoints = 12;
                break;

            case 95:
                this.totalPoints = 13;
                break;
        }
    }

    distribuitionPoints(attributeName: string, points: number) {
        if (points < 0 || points > this.totalPoints) {
            throw new ApplicationError('Invalid limit points!', 400)
        }

        const attribute = this.attributes.find(att => att.name === attributeName);

        if (!attribute) {
            throw new ApplicationError('This attribute not exists!', 400)
        }

        if (attribute.points + points > 6) {
            throw new ApplicationError('Points limit exceeded!', 400)
        }

        // if (attribute.points + points > this.totalPoints) {
        //     throw new ApplicationError('Not enough points available!', 400)
        // }

        attribute.points += points;
        this.totalPoints -= points;
    }

}
