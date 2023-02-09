import { Origins } from '../../../../src/domain/entities/characters/Origins';

describe('Test with Origins', () => {

    it('should be throw error This origin not exists.', () => {
        try {
            const sut = new Origins('asdf');

            expect(sut).toThrow('This origin not exists!')
        } catch (err) { }
    })

    it('should be instantiate an origin', () => {
        const sut = new Origins('enginner');
        const sut1 = new Origins('stray');

        expect(sut).toEqual({ origin: "enginner" })
        expect(sut1).toEqual({ origin: "stray" })
    })
})