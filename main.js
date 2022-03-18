
let firstname = document.querySelector(".first-name"),
    lastname = document.querySelector(".last-name"),
    country = document.getElementById("country"),
    city = document.getElementById("city"),
    skillOne = document.querySelector(".one"),
    skillTwo = document.querySelector(".two"),
    skillThree = document.querySelector(".three"),
    skillFour = document.querySelector(".four"),
    Desc = document.querySelector(".desc"),
    Button = document.getElementById("Button"),
    result = document.querySelector(".result"),
    Name = document.querySelector(".name"),
    resultAddress = document.querySelector(".result-Address"),
    resultOneSkill = document.querySelector(".first-skill"),
    resultTwoSkill = document.querySelector(".second-skill"),
    resultThreeSkill = document.querySelector(".third-skill"),
    resultFourSkill = document.querySelector(".Fourth-skill"),
    resultAbout = document.querySelector(".result-About"),
    closee = document.querySelector(".close");

Button.addEventListener("click", () => {
    result.classList.add("vist")                           //This is to show the result . element
    Name.textContent = `${firstname.value} ${lastname.value}`   //This is to combine the first name with the last name
    resultAddress.textContent = `${country.value},${city.value}`  //This is to combine the country with the city
    resultOneSkill.textContent = skillOne.value   //This is to bring the first skill
    resultTwoSkill.textContent = skillTwo.value    //This is to bring the second skill
    resultThreeSkill.textContent = skillThree.value   //This is to bring the third skill
    resultFourSkill.textContent = skillFour.value   //This is to bring the Fourth skill
    resultAbout.textContent = Desc.value      //this is about me
})

closee.addEventListener("click", () => {
    result.classList.remove("vist")            //This is to hide the result . element
})