    console.log("Hello World");
    const myName = "Elmer L. Andales";
    let age = 22;
    const number = 9052418309;
    const address = "victorias city brgy 2 de leon st.";

    

    const heading = document.querySelector("h1");
    console.log(heading);

    const contactHeading = document.querySelector("#contact h1");
    console.log(contactHeading);

    const projectsHeading = document.querySelector("#products h1");
    console.log(productsHeading);
    const servicesHeading = document.querySelector("#services h1");
    console.log(servicesHeading);

    //text Content
    heading.textContent = "URBAN CLOTHING";
    contactHeading.textContent = "JUST FILL THIS UP AND YOU'RE GOOD TO GO!";
    productsHeading.textContent = "My PrWE SELL A VARIETY OF CLOTHES, JUST CHOOSE WHAT YOU WANT TO BUY.ojects";
    servicesHeading.textContent = "Our Services";

    //.style
    heading.style.color = "purple";
    heading.style.backgroundColor = "yellow";
    contactHeading.style.color = "purple";
    productsHeading.style.color = "purple";
    servicesHeading.style.color = "purple";

    heading.addEventListener("click", function () {
        heading.style.color = "red";
    }

    );
    const toggleButton = document.querySelector('#switch');
    const body = document.querySelector('body');
    let isOff = false;

    toggleButton.addEventListener("click", function () {
        isOff = !isOff;

        if (isOff) {
            body.style.backgroundColor = "black";
            body.style.color = "white";
            
        } else {
            body.style.backgroundColor = "white";
            body.style.color = "black";
        }
    });





   