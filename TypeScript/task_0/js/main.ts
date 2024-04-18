interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Valentin",
    lastName: "Melia",
    age: 24,
    location: "Paulhan"
}

const student2: Student = {
    firstName: "Amandine",
    lastName: "Assenat",
    age: 21,
    location: "Agen"
}

let studentsList: Student[] = [student1, student2];


const table = document.createElement("table");
const tablebody = document.createElement("tbody");

studentsList.forEach(student => {
    const row = document.createElement("tr");
    const cellFistName = document.createElement("td");
    const cellLocation = document.createElement("td");
    
    cellFistName.textContent = student.firstName;
    cellLocation.textContent = student.location;

    row.appendChild(cellFistName);
    row.appendChild(cellLocation);
    tablebody.appendChild(row);
})

table.appendChild(tablebody);
document.body.appendChild(table);