// 🧪 Problem 1 — Group array of objects by a key
// javascriptconst employees = [
//   { name: "Alice", department: "Engineering" },
//   { name: "Bob", department: "Design" },
//   { name: "Charlie", department: "Engineering" },
//   { name: "Diana", department: "Design" },
//   { name: "Eve", department: "HR" }
// ];
// Task: Group employees by department.
// Expected output:
// javascript{
//   Engineering: ["Alice", "Charlie"],
//   Design: ["Bob", "Diana"],
//   HR: ["Eve"]
// }

//✅ Solution 1 — Using reduce() (Most common interview answer)
function groupByDepartment(employees) {
  return employees.reduce((acc, employee) => {
    const dept = employee.department;
    
    if (!acc[dept]) {
      acc[dept] = []; // create array if dept doesn't exist yet
    }
    
    acc[dept].push(employee.name); // add name to dept array
    
    return acc;
  }, {}); // start with empty object
}

console.log(groupByDepartment(employees));
// {
//   Engineering: ["Alice", "Charlie"],
//   Design: ["Bob", "Diana"],
//   HR: ["Eve"]
// }

// ✅ Solution 2 — Using forEach() (Easier to read)
function groupByDepartment(employees) {
  const result = {};
  
  employees.forEach(employee => {
    const dept = employee.department;
    
    if (!result[dept]) {
      result[dept] = [];
    }
    
    result[dept].push(employee.name);
  });
  
  return result;
}

// // Array destructuring
// const [first, ...rest] = [1, 2, 3];

// // Object destructuring
// const { status: _, ...rest } = { id: 1, status: "pending" };