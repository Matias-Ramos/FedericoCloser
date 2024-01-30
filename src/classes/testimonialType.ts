export class Testimonial {
    private static _id: number = 0;
  
    id: number;
    entity: string;
    data: string[];
  
    incrementId() { Testimonial._id++; }
  
    constructor(entity: string, data: string[]) {
      this.id = Testimonial._id;
      this.entity = entity;
      this.data = data;
      this.incrementId();
    }
  }