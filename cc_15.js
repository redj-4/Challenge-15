//Task 1: Creating the Base Structure 
const riskDashboard = document.getElementById("riskDashboard"); //selecting container element
console.log ("risk dashboard loaded"); //printing message to console

// Task 2: Adding Items Dynamically

function addRiskItem(riskName, riskLevel, department) {
    const riskDashboard = document.getElementById("riskDashboard");
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");

    let bgColor;
    switch (riskLevel) {
        case "Low":
            bgColor = "#90EE90"; // Green
            break;
        case "Medium":
            bgColor = "#FFD700"; // Yellow
            break;
        case "High":
            bgColor = "#FF6347"; // Red
            break;
        default:
            bgColor = "#fff"; // Fallback color
    }
    riskCard.style.backgroundColor = bgColor;

    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p class="riskLevel">Risk Level: <span class="levelText">${riskLevel}</span></p>
        <p>Department: ${department}</p>
        <button class="resolveButton">Resolve</button>
    `;

    riskDashboard.appendChild(riskCard);

    // Adding event listener to remove the risk card when the "Resolve" button is clicked
   // const resolveButton = riskCard.querySelector(".resolveButton"); 
   // resolveButton.addEventListener("click", function (event) {
       // riskCard.remove();
   // });
}

// Event listener for the form to add new risk items
document.getElementById("riskForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;
    addRiskItem(riskName, riskLevel, department);
    this.reset(); // Optionally reset the form
});

