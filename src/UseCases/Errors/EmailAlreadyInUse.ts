export class EmailAlreadyInUse extends Error{
    constructor(){
        super('Email is already in use');
    }
}