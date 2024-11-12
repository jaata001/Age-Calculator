

function calculateAge() {
    alert("hei fra CalculateAge");

    const birthdate = document.getElementById('birthdate').value;
    alert(birthdate);

    if (!birthdate) {
        document.getElementById('result').innerText = "Vennligst velg en fødselsdato.";
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();


    let ageYears = today.getFullYear() - birthDateObj.getFullYear();
    let ageMonths = today.getMonth() - birthDateObj.getMonth();
    let ageDays = today.getDate() - birthDateObj.getDate();


    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;


    if (ageDays < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        ageDays += lastMonth.getDate();
        ageMonths--;
    }

    alert(ageYears + " and " + ageMonths + " and " + ageDays);


    document.getElementById('result').innerText = `Du er ${ageYears} år, ${ageMonths} måneder og ${ageDays} dager gammel.`;
    } 
 
} 