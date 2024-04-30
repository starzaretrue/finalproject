document.getElementById("generateMealPlan").addEventListener("click", function () {
    // Get user input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var goal = document.getElementById("goal").value;

    // Validate email address
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Generate meal plan
    var mealPlans = generateMealPlans();

    // Display meal plans in a new window
    generateMealPlanPage(mealPlans, name, email, goal);
});

// Function to generate meal plans
function generateMealPlans() {
    var mealPlans = [];
    var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    daysOfWeek.forEach(function(day) {
        var dayMealPlan = {
            day: day,
            breakfast: document.getElementById(day + "_Breakfast").value,
            snack1: document.getElementById(day + "_Snack1").value,
            lunch: document.getElementById(day + "_Lunch").value,
            snack2: document.getElementById(day + "_Snack2").value,
            dinner: document.getElementById(day + "_Dinner").value
        };
        mealPlans.push(dayMealPlan);
    });
    return mealPlans;
}

// Function to display meal plans
function displayMealPlans(mealPlans, name, email, goal) {
    var mealPlansSection = document.getElementById("mealPlansSection");
    mealPlansSection.innerHTML = ""; // Clear previous content

    // Display user information
    mealPlansSection.innerHTML += "<h2>User Information</h2>";
    mealPlansSection.innerHTML += "<p><strong>Name:</strong> " + name + "</p>";
    mealPlansSection.innerHTML += "<p><strong>Email:</strong> " + email + "</p>";
    mealPlansSection.innerHTML += "<p><strong>Goal for the Week:</strong> " + goal + "</p>";

    // Display meal plans
    mealPlansSection.innerHTML += "<h2>Meal Plans</h2>";
    mealPlans.forEach(function(dayMealPlan) {
        mealPlansSection.innerHTML += "<h3>" + dayMealPlan.day + "</h3>";
        mealPlansSection.innerHTML += "<p><strong>Breakfast:</strong> " + dayMealPlan.breakfast + "</p>";
        mealPlansSection.innerHTML += "<p><strong>Snack 1:</strong> " + dayMealPlan.snack1 + "</p>";
        mealPlansSection.innerHTML += "<p><strong>Lunch:</strong> " + dayMealPlan.lunch + "</p>";
        mealPlansSection.innerHTML += "<p><strong>Snack 2:</strong> " + dayMealPlan.snack2 + "</p>";
        mealPlansSection.innerHTML += "<p><strong>Dinner:</strong> " + dayMealPlan.dinner + "</p>";
    });
}

// Function to validate email address
function validateEmail(email) {
   
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
// Function to generate a new web page with meal plan
function generateMealPlanPage(mealPlans, name, email, goal) {
    // Open a new window
    var newWindow = window.open();

    //html on new window
    newWindow.document.write("<!DOCTYPE html>");
    newWindow.document.write("<html lang='en'>");
    newWindow.document.write("<head>");
    newWindow.document.write("<meta charset='UTF-8'>");
    newWindow.document.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
    newWindow.document.write("<title>Meal Plan</title>");
    newWindow.document.write("<style>");
    newWindow.document.write(".meal-plan { font-family: monospace; }");
    newWindow.document.write("</style>");
    newWindow.document.write("</head>");
    newWindow.document.write("<body>");
    newWindow.document.write("<h1>Weekly Meal Plan for " + name + "</h1>");
    newWindow.document.write("<p><strong>Email:</strong> " + email + "</p>");
    newWindow.document.write("<p><strong>Goal for the Week:</strong> " + goal + "</p>");
    newWindow.document.write("<div class='meal-plan'>");

    mealPlans.forEach(function(dayMealPlan) {
        newWindow.document.write("<h2>" + dayMealPlan.day + "</h2>");
        newWindow.document.write("<p><strong>Breakfast:</strong> " + dayMealPlan.breakfast + "</p>");
        newWindow.document.write("<p><strong>Snack 1:</strong> " + dayMealPlan.snack1 + "</p>");
        newWindow.document.write("<p><strong>Lunch:</strong> " + dayMealPlan.lunch + "</p>");
        newWindow.document.write("<p><strong>Snack 2:</strong> " + dayMealPlan.snack2 + "</p>");
        newWindow.document.write("<p><strong>Dinner:</strong> " + dayMealPlan.dinner + "</p>");
    });
    
    newWindow.document.write("<button onclick='window.print()' style='background-color: #1EB8EB; padding:5px;'>Print</button>");
    newWindow.document.write("<button onclick='downloadgenerateMealPlans()' style='background-color: #1EB8EB; padding:5px; margin-left:5px;' >Download</button>");
    newWindow.document.write("</div>");
    newWindow.document.write("</body>");
    newWindow.document.write("</html>");

    // Closes the new window document
    newWindow.document.close();
}
// clears planner
document.getElementById("clearplanner").addEventListener("click", function() {
    var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    daysOfWeek.forEach(function(day) {
        document.getElementById(day + "_Breakfast").value = "";
        document.getElementById(day + "_Snack1").value = "";
        document.getElementById(day + "_Lunch").value = "";
        document.getElementById(day + "_Snack2").value = "";
        document.getElementById(day + "_Dinner").value = "";
    });
});

// prints the meal plan
document.getElementById("print").addEventListener("click", function() {
    window.print();
});