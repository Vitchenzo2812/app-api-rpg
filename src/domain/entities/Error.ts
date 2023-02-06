export class ApplicationError extends Error {
    code: number

    constructor(
        message: string,
        code: number,
        name?: string
    ) {
        super(message)
        this.code = code
        this.name = name ?? ''
    }
}