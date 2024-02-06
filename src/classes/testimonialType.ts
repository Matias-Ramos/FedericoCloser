export class Testimonial_T {
    private static _id: number = 0;
  
    id: number;
    entity: string;
    data: string[];
  
    incrementId() { Testimonial_T._id++; }
  
    constructor(entity: string, data: string[]) {
      this.id = Testimonial_T._id;
      this.entity = entity;
      this.data = data;
      this.incrementId();
    }
  }