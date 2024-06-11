export class EmailNotRegisteredError extends Error {
    constructor(){
        super('Email is not registered')
    }
}