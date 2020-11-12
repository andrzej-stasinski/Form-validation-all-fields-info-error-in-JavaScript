(function(){

var form = document.querySelector("#myForm"),
    fields = form.querySelectorAll("[data-error]");  

function isNotEmpty(field) {
    console.log(field.value !== "");
    return field.value !== "";  
}

function isEmail(field) {
    return field.value.indexOf('@') !== -1;
}

function atLeast(field) {
    return field.value.length >= 3;
}

function displayErrors(errors) {

    var ul = document.querySelector("ul.errors");

    if(!ul) {
        ul = document.createElement("ul");

        ul.classList.add("errors");
    }

    ul.innerHTML = "";

    errors.forEach(function(error) {

        var li = document.createElement("li");

        li.textContent = error;

        ul.appendChild(li);

    });

    form.parentNode.insertBefore(ul, form);

}

form.onsubmit = function(e) {
    e.preventDefault();
    console.log("Submit");

    var errors = [];

    for(var i=0; i<fields.length; i++) {
        var field = fields[i],
            isValid = false;

        console.log(field);
        //console.log(field.getAttribute('data-error'));

        if(field.type === "text") {
            isValid = isNotEmpty(field);
            } else 
        if(field.type === "email") {
                isValid = isEmail(field);
            } else 
        if(field.type === "select-one") {
                isValid = isNotEmpty(field);
            } else 
        if(field.type === "textarea") {
                isValid = atLeast(field);
            }         
    if(!isValid) {
        //field.className = "error";
        // lub
        field.classList.add("error");
        errors.push(field.getAttribute('data-error'));
        } else {
            field.classList.remove("error");    
        }
    }

    console.log(errors);

    if(errors.length) {
        displayErrors(errors);
    } else {
        form.submit();
    }



window.errors = errors;

}



})();











