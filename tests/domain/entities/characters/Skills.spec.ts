import { Skills } from '../../../../src/domain/entities/characters/Skills'

describe('Tests with Skills', () => {

    it('should be instantiate a skill', () => {
        const sut = new Skills([
            {
                name: "stunt",
                attribute: "agility",
                trainedLevel: {
                    trained: true,
                    veteran: false,
                    expert: false,
                }
            },
            {
                name: "initiative",
                attribute: "agility",
                trainedLevel: {
                    trained: true,
                    veteran: true,
                    expert: false,
                }
            }
        ])

        expect({ chosenSkills: sut }).toEqual({
            chosenSkills: [
                {
                    name: "stunt",
                    attribute: "agility",
                    charge: true,
                    kit: false,
                    needTrained: false,
                    trainedLevel: [{
                        trained: true,
                        veteran: false,
                        expert: false,
                    }]
                },
                {
                    name: "initiative",
                    attribute: "agility",
                    charge: false,
                    kit: false,
                    needTrained: false,
                    trainedLevel: [{
                        trained: true,
                        veteran: true,
                        expert: false,
                    }]
                }
            ]
        })
    })

    it('should be throw error Some skill not exists.', () => {
        try {
            const sut = new Skills([
                {
                    name: 'asdf',
                    attribute: 'strength',
                    trainedLevel: {
                        trained: false,
                        veteran: false,
                        expert: false,
                    }
                }
            ])

            expect(sut).toThrow('Some skill not exists!')
        } catch (err) { }
    })

    it('should be throw error Some attribute is wrong.', () => {
        try {
            const sut = new Skills([
                {
                    name: 'stunt',
                    attribute: 'asdf',
                    trainedLevel: {
                        trained: false,
                        veteran: false,
                        expert: false,
                    }
                }
            ])

            expect(sut).toThrow('Some attribute is wrong!')
        } catch (err) { }
    })

    it('should be throw error because need be trained in the skill', () => {
        try {
            const sut = new Skills([
                {
                    name: "crime",
                    attribute: "agility",
                    trainedLevel: {
                        trained: false,
                        veteran: false,
                        expert: false,
                    }
                }
            ])

            expect(sut).toThrow('To use this skill, you must be trained!')
        } catch (err) { }
    })
})