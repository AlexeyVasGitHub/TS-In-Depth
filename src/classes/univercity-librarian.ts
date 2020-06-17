import * as Interfaces from '../interfaces';
import { sealed, logger, writable } from '../decorators';

//@sealed('UnivercityLibrarian')
@logger
class UnivercityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`)
    }
    @writable(true)
    assistFaculty(): void {
        console.log(`Assisting facult`);
    }
    @writable(false)
    teachCommunity(): void {
        console.log(`Teaching community`);
    }
}

export { UnivercityLibrarian };