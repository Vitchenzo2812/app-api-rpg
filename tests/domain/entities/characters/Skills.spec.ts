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
                    veteran: false,
                    expert: false,
                }
            }
        ])

        expect(sut).toEqual({
            chosenSkills: [
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
                        veteran: false,
                        expert: false,
                    }
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
})