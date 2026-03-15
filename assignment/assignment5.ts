// Employee Apprasial data 
let employees = [
  { name: "Alice Johnson", baseSalary: 75000.0, experience: 5.1, rating: 4.2 },
  { name: "Bob Smith", baseSalary: 68000.0, experience: 3.2, rating: 3.8 },
  { name: "Carol Davis", baseSalary: 82000.0, experience: 7.1, rating: 4.5 },
  { name: "David Brown", baseSalary: 90000.0, experience: 10.2, rating: 2.5 },
  { name: "Eva Green", baseSalary: 60000.0, experience: 2.4, rating: 3.5 }
];

// Map to store results
let hikeMap: { [key: string]: number } = {};

for (let i = 0; i < employees.length; i++) {
  const emp = employees[i];
  let variablePayPercent = 0;
  let bonus = 0;
  let reward = 0;

  // Conditional statements for rating
  if (emp.rating >= 4.0) {
    variablePayPercent = 0.15;
    bonus = 1500;
  } else if (emp.rating >= 3.0 && emp.rating < 4.0) {
variablePayPercent = 0.10;
    bonus = 1200;
  } else {
    variablePayPercent = 0.03;
    bonus = 300;
  }

  // Conditional statement for experience
  if (emp.experience >= 5) {
    reward = 5000;
  }

  // Hike calculation
  let hike = emp.baseSalary * variablePayPercent + bonus + reward;
  let hikePercent = (hike / emp.baseSalary) * 100;

  // Store in map
  hikeMap[emp.name] = parseFloat(hikePercent.toFixed(2));
}

// Print results
for (const name in hikeMap) {
  console.log(name + ": " + hikeMap[name] + "%");
}
