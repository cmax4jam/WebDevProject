function validate(){
    var txt = $("#DOB").val();
    var dob = new Date(txt);
    if(dob >= new Date()){
        alert("Date of Birth is not valid. Date has to be before today.");
        return false;
    }

    var phoneNum = /^\d{10}$/;
    if($("#phone").val().match(phoneNum))
    {
        return true;
    }
    else
    {
        alert("Phone number is not valid or ont in a valid format.");
        return false;
    }
}
/*
function dropdown() {
    document.getElementById("occassions-dropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
};

*/