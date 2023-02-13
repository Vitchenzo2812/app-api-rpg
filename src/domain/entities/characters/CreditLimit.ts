import { ApplicationError } from "../Error";
import { TPatent } from "./Character";

interface ICreditLimit {
    name: string;
    credit: string;
    categoryItem: string;
}

export class CreditLimit {
    private creditLimit: ICreditLimit[] = [
        { name: 'recruit', credit: 'low', categoryItem: '2 I' },
        { name: 'operator', credit: 'average', categoryItem: '3 I, 2 II' },
        { name: 'special agent', credit: 'average', categoryItem: '3 I, 2 II, 1 III' },
        { name: 'operations officer', credit: 'high', categoryItem: '3 I, 3 II, 2 III, 1 IV' },
        { name: 'elite agent', credit: 'unlimited', categoryItem: '3 I, 3 II, 3 III, 2 IV' },
    ]

    constructor(
        private readonly patent: TPatent
    ) {
        if (!this.patent) {
            throw new ApplicationError('This patent not exists!', 400)
        }

        switch (this.patent) {
            case 'recruit':
                const limitRecruit = this.creditLimit.find(patentCreditLimit => patentCreditLimit.name === 'recruit')!;
                return limitRecruit as unknown as CreditLimit;

            case 'operator':
                const limitOperator = this.creditLimit.find(patentCreditLimit => patentCreditLimit.name === 'operator');
                return limitOperator as unknown as CreditLimit;

            case 'special agent':
                const limitSpecialAgent = this.creditLimit.find(patentCreditLimit => patentCreditLimit.name === 'special agent');
                return limitSpecialAgent as unknown as CreditLimit;

            case 'operations officer':
                const limitOperationsOfficer = this.creditLimit.find(patentCreditLimit => patentCreditLimit.name === 'operations officer');
                return limitOperationsOfficer as unknown as CreditLimit;

            case 'elite agent':
                const limitEliteAgent = this.creditLimit.find(patentCreditLimit => patentCreditLimit.name === 'elite agent');
                return limitEliteAgent as unknown as CreditLimit;
        }
    }
}