//Task 1: Creating the Base Structure 
const riskDashboard = document.getElementById("riskDashboard"); //selecting container element
console.log ("risk dashboard loaded"); //printing message to console

// Task 2: Adding Items Dynamically + Task 3: Removing Risk Items 

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

    const resolveButton = riskCard.querySelector(".resolveButton"); 
    resolveButton.addEventListener("click", function (event) {
        riskCard.remove();
    });
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

// Task 4 - Categorizing Risks by Level
function updateRiskCardStyle(riskCard, riskLevel) {
    // Convert risk level to lowercase to ensure consistency
    const normalizedLevel = riskLevel.toLowerCase();

    // Set the background color according to the risk severity
    switch (normalizedLevel) {
        case "low":
            riskCard.style.backgroundColor = "green"; // Low risk: green
            break;
        case "medium":
            riskCard.style.backgroundColor = "yellow"; // Medium risk: yellow
            break;
        case "high":
            riskCard.style.backgroundColor = "red"; // High risk: red
            break;
        default:
            riskCard.style.backgroundColor = "white"; // Default color for unspecified levels
    }
}

// Listen for the risk form submission to add a new risk
document.getElementById("riskForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form's default submission behavior
    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;

    // Call the addRiskItem function (assumed to be defined elsewhere) to create a new risk card
    addRiskItem(riskName, riskLevel, department);

    // Reset the form after submission
    this.reset();
});