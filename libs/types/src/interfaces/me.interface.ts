export interface Experience {
   company: string;
   position: string;
   duration: string;
}

export interface Me {
   name: string;
   age: number;
   address: string;
   hobbies: string[];
   skills: string[];
   experience: Experience[];
}
