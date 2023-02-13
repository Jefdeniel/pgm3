import fetch from "node-fetch";

// declare the API_URL to post myself to
const API_URL = "https://pgm.cmsdevelopment.be/api/student";

// change the student object to your own data
const student = {
  firstname: "John",
  lastname: "Doe",
  nickname: "Johny",
  classname: "1PGM-a",
  email: "john_doe3@hotmail.com",
  age: 32,
  avatar: "https://i.pravatar.cc/300", // max 255 characters!!!
  hobbies: ["Gamen", "Programmeren"],
  motto: "Code like a boss",
  about: "Ik ben een student die graag codeert.",
};

/**
 * Fetch the students from the API
 * Log the students to the console
 */
const getStudents = async () => {
  const response = await fetch(API_URL);
  const students = await response.json();
  console.log(students);
};
// uncomment the line below to fetch the students from the API
// getStudents();

/**
 * Post myself to the API
 * Log the response to the console
 */
const postStudent = async () => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(student),
  });
  const data = await response.json();
  console.log(data);
};
// uncomment the line below to post yourself to the API
// postStudent();
