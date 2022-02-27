function printSussess() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    if(username == "Purva" && password=="1112")  {
        document.getElementById("status").innerHTML = "Your Are Sussessfullly LogedIn!!";
    }
}