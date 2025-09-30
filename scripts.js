function printNameAndYear() {
    let name = document.getElementById("name").value
    let yearCurrent = parseInt(document.getElementById("year-current").value)
    let yearBorn = parseInt(document.getElementById("year-born").value)

    let years = yearCurrent - yearBorn
    
    if (yearCurrent < yearBorn) {
        alert("Ano inválido para cálculo")
        return;
    }
    
    document.getElementById("result").value = name + " você tem " + years + " anos de idade"

    
}