type DatabaseSchema = {
  tutors: Tutor[],
  users: User[],
  bookings: Bookings[],
  nextTutorID: number,
  nextUserID: number,
  nextBookingID: number,
}

type Tutor = {
  tutorID: number;
  firstName: string;
  lastName: string;
  age: number;
  rating: number | undefined;
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
  id: number;
  date: string;
  time: string;
  tutorID: number;
  listOfUsers: number[];
}

type Chat = {
  tutorID: number,
  userID: number,
  messages: string[],
};

type Message = {
  isTutor: boolean,
  text: string;
};
