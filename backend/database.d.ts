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
  availablity: Day[];
  subject: string;
  pronouns: string;
}

type Day = {
  name: string;
  start: number;
  end: number;
};

type User = {
  userID: number;
  firstName: string;
  lastName: string;
  pronouns: string;

}

type Bookings = {
  id: number;
  date: string;
  // time: string;
  tutorID: number;
  listOfUsers: number[];
}

// type BookingRequest = {
//   tutorID: number;
//   userID: number;
//   text: string;
// };
