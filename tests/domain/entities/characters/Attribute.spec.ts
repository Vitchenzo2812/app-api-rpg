import { Attribute } from '../../../../src/domain/entities/characters/Attributes'

describe('Tests with class Attributes', () => {

    it('should be add the points in the attributes', () => {
        const sut = new Attribute(20);

        sut.distribuitionPoints("agility", 2)
        sut.distribuitionPoints("strength", 1)
        sut.distribuitionPoints("force", 2)
        sut.distribuitionPoints("presence", 3)
        sut.distribuitionPoints("intellect", 2)

        const presence = sut.attributes.find(att => att.name === "presence");
        expect(presence?.points).toBe(3);
    })

    it('should be throw error limit points.', () => {
        try {
            const sut = new Attribute(5);

            sut.distribuitionPoints("agility", 2)
            sut.distribuitionPoints("strength", 1)
            sut.distribuitionPoints("force", 2)
            sut.distribuitionPoints("presence", 3)
            sut.distribuitionPoints("intellect", 1)
        } catch (err) {
            expect(err).toThrow("Invalid limit points!");
        }
    })

    it('should be throw error Attribute not exists.', () => {
        try {
            const sut = new Attribute(5);

            sut.distribuitionPoints("vigor", 2);

        } catch (err) {
            expect(err.toString()).toEqual("This attribute not exists!")
        }
    })

    it('should be throw error Points limit exceeded.', () => {
        try {
            const sut = new Attribute(10);

            sut.distribuitionPoints('agility', 7);
        } catch (err) {
            expect(err.toString()).toEqual('Points limit exceeded!')
        }
    })
})