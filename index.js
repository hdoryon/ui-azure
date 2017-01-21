function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http:/localhost:8080/web-azure/Person/get", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    // var response = JSON.parse(xhttp.responseText);
    console.log(xhttp.responseText);
}
UserAction();
