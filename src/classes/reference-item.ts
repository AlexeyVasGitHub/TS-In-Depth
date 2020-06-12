abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number){
    //   console.log(`Creating new Reference Item...`);
    //   this.title = newTitle;
    //   this.year = newYear;
    // }

    private _publisher: string;

    static department: string = 'Research';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(public title: string, protected year: number) {
        console.log(`Creating new Reference Item...`);
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;
}

export { ReferenceItem };