import { Defense } from '../../../../src/domain/entities/characters/Defense';
import { Attribute } from '../../../../src/domain/entities/characters/Attributes';

describe('Test with Defense', () => {

    it('should be instantiate a defense', () => {
        const attribute = new Attribute(5);
        attribute.distribuitionPoints("agility", 2);
        attribute.distribuitionPoints("force", 1);
        attribute.distribuitionPoints("strength", 3);
        attribute.distribuitionPoints("intellect", 1);
        attribute.distribuitionPoints("presence", 2);

        const sut = new Defense(attribute, 0);

        expect(sut.calcDefense()).toBe(12)
    })

    it('should be throw error Invalid attribute points.', () => {
        try {
            const attribute = new Attribute(5);
            attribute.distribuitionPoints("agility", -1);
            attribute.distribuitionPoints("force", 1);
            attribute.distribuitionPoints("strength", 3);
            attribute.distribuitionPoints("intellect", 1);
            attribute.distribuitionPoints("presence", 2);

            const sut = new Defense(attribute, 0);

            expect(sut).toThrow('Invalid attribute points!')
        } catch (err) { }
    })

    it('should be instantiate a defense with modifications (for now).', () => {
        const attribute = new Attribute(5);
        attribute.distribuitionPoints("agility", 1);
        attribute.distribuitionPoints("force", 1);
        attribute.distribuitionPoints("strength", 3);
        attribute.distribuitionPoints("intellect", 1);
        attribute.distribuitionPoints("presence", 2);

        const sut = new Defense(attribute, 5);

        expect(sut.calcDefense()).toBe(16)
    })
})