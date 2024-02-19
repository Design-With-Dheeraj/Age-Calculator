
let calculateBtn = document.getElementById("calculateAge");

calculateBtn.addEventListener("click", function() {
    let getYearVal = parseInt(document.getElementById("yearInput").value);
    let getMonthVal = parseInt(document.getElementById("monthInput").value);
    let getDayVal = parseInt(document.getElementById("dayInput").value);

    let errroSpan = document.getElementById("inputError");
    let errorContain = document.getElementById("errorAlert");
    let closeAlrt_Btn = document.getElementById("closeAlert");
    let fade = document.getElementById("fadeBg");

    // Error alert show when some invalid details in the input fields.
    if (isNaN(getDayVal) || isNaN(getMonthVal) || isNaN(getYearVal) || getDayVal < 1 || getDayVal > 31 || getMonthVal < 1 || getMonthVal > 12 || getYearVal < 1900 || getYearVal > 2024) {
        errroSpan.innerHTML = "Please enter valid <span>day</span>, <span>month</span>, and <span>year</span> values.";
        errorContain.classList.add("errorShow");

        fade.style.display = "block";
        closeAlrt_Btn.addEventListener("click", ()=>{
            errorContain.classList.remove("errorShow");
            fade.style.display = "none";
        });
        return;
    }

    let getBirthDate = new Date(getYearVal, getMonthVal - 1, getDayVal);
    let getCurrentDate = new Date();

    // Calculate difference in years, months, and days correctly
    let ageInYear = getCurrentDate.getFullYear() - getBirthDate.getFullYear();
    let ageInMonth = getCurrentDate.getMonth() - getBirthDate.getMonth();
    let ageInDay = getCurrentDate.getDate() - getBirthDate.getDate();

    // Adjust for negative month difference
    if (ageInMonth < 0) {
        ageInYear--;
        ageInMonth += 12;
    }

    // Adjust for negative day difference (if current date is before birthday)
    if (ageInDay < 0) {
        ageInMonth--;
        ageInDay += getDaysInMonth(getBirthDate.getMonth(), getBirthDate.getFullYear());
    }

    // Function to calculate days in a month, considering leap years
    function getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    let yearResult = document.getElementById("yearResult");
    let monthResult = document.getElementById("monthResult");
    let dayResult = document.getElementById("dayResult");
        
    yearResult.innerHTML = ageInYear;
    monthResult.innerHTML = ageInMonth;
    dayResult.innerHTML = ageInDay;
})