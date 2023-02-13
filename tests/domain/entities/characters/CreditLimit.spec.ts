import { CreditLimit } from '../../../../src/domain/entities/characters/CreditLimit';

describe('Test with CreditLimit', () => {

    it('should be instantiate a credit limit operator', () => {
        const sut = new CreditLimit('operator');

        expect([sut]).toEqual([
            {
                name: 'operator',
                credit: 'average',
                categoryItem: '3 I, 2 II',
            }
        ]);
    })

    it('should be instantiate a credit limit special agent', () => {
        const sut = new CreditLimit('special agent');

        expect([sut]).toEqual([
            {
                name: 'special agent',
                credit: 'average',
                categoryItem: '3 I, 2 II, 1 III',
            }
        ]);
    })

    it('should be throw error This patent not exists.', () => {
        try {
            const sut = new CreditLimit('operations_officer')

            expect(sut).toThrow('This patent not exists!')
        } catch (err) { }
    })
})