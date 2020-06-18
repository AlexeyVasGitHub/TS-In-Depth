import * as Interfaces from '../interfaces';
import { sealed, logger, writable, logMethod, logParameter, format } from '../decorators';

//@sealed('UnivercityLibrarian')
@logger
class UnivercityLibrarian implements Interfaces.Librarian {
    @format() name: string;
    email: string;
    department: string;
    @logMethod
    assistCustomer(@logParameter custName: string): void {
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