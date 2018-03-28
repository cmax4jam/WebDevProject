function validate(){

    var zip = /^\d{5}$/;
    if($("#zip").val().match(zip))
    {
        return true;
    }
    else
    {
        alert("The zip code is not valid.");
        return false;
    }
}



