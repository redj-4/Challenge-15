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
// Task 5 - Bulk Risk Updates: Increase all risk levels at once
function increaseRiskLevels() {
    // Select all risk cards on the dashboard
    const riskCards = document.querySelectorAll(".riskCard");

    riskCards.forEach(riskCard => {
        // Get the element that contains the risk level text
        const riskLevelElement = riskCard.querySelector(".levelText");
        if (!riskLevelElement) return; // Skip if not found

        // Retrieve and trim the current risk level text
        const currentLevel = riskLevelElement.textContent.trim();
        let newLevel = currentLevel; // Default remains the same

        // Determine the new risk level using a switch statement
        switch (currentLevel.toLowerCase()) {
            case "low":
                newLevel = "Medium"; // Increase from Low to Medium
                break;
            case "medium":
                newLevel = "High"; // Increase from Medium to High
                break;
            case "high":
                // High remains unchanged
                newLevel = "High";
                break;
            default:
                // Do nothing if the risk level is unexpected
        }

        // If the risk level has changed, update the text and style
        if (newLevel !== currentLevel) {
            riskLevelElement.textContent = newLevel;
            updateRiskCardStyle(riskCard, newLevel);
        }
    });
}

document.getElementById("increaseRiskLevels").addEventListener("click", increaseRiskLevels);
// Task 6 - Handling Event Propagation
function attachRiskCardPropagation(riskCard) {
    // Attach an event listener to the risk card that prevents click events from bubbling up
    riskCard.addEventListener("click", function(event) {
        event.stopPropagation();
    });
}