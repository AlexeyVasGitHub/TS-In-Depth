import * as Interfaces from '../interfaces';

class UnivercityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`)
    }
}

export { UnivercityLibrarian };