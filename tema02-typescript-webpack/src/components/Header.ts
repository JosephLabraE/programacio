export class Header {
    constructor(public title: string) {}

    render(): string {
        return `<header><h1>${this.title}</h1></header>`;
    }

}