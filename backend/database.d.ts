type DatabaseSchema = {
  tutors: Tutor[],
  users: User[],
  bookings: Bookings[],
  nextID: number
}

type Tutor = {
  tutorID: number;
  firstName: string;
  lastName: string;
  age: number;
  rating: number;
  gpa: number;
  description: string;
  avaliablity: string;
  subject: string;
  pronouns: string;
}

type User = {
  userID: number;
  firstName: string;
  lastName: string;
  pronouns: string;

}

type Bookings = {
  date: string;
  time: string;
  tutorID: number;
  listOfUsers: string[];
}

