export interface student {
id: number;
name: string;
className: string;
gender: string;
hobby: string;
favouriteSubject: string ;
}
export class studentclass implements student{
    constructor(
        public id: number,
        public name: string,
        public className: string,
        public gender:'Male'|'Female'| string,
        public hobby: string,
        public favouriteSubject: string
        ){}

}