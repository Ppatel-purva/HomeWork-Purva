function is_valid() {
    errors  = [];
    username = document.getElementById("validationCustomUsername").value;
    // console.log(username);
    if (username.length < 5) {
        errors.push("Username should be more than 5 characters");
        document.getElementById("userError").innerHTML = "Username should be more than 5 characters";
    }

    if (username.length > 10) {
        errors.push("Username should be less than 10 characters");
    }

    email = document.getElementById("exampleInputEmail1").value;
    
    if (!email.includes("@")) {
        errors.push("Enter Valid Email Id");
    }

    phone = document.getElementById("validationCustom05").value;

    if (!(phone.length == 10)) {
        errors.push("Enter Valid Phone Number");
    }
    

    console.log(errors);
    errorStr  = ""
    for (let i=0; i<errors.length;i++) {
        errorStr = errorStr + "<div>" + errors[i] + "</div>" ;
    }
    console.log(errorStr);
    document.getElementById("notification").style.display  = "block";
    document.getElementById("notification").innerHTML = errorStr;
    
    // check = document.getElementById("invalidCheck");
    // console.log(check.checked);

    // select = document.getElementById("contact-country").value;
    // console.log(select);

    if (errors.length == 0) {
        return true;
    }

    return false;

}


function copyPermanentAddress() {
    same_as_permanent = document.getElementById("contact-sameAsPermanent")
    // console.log(same_as_permanent.checked)

    if (same_as_permanent.checked) {
        document.getElementById("contact-addressLine1").value = document.getElementById("addressLine1").value
        document.getElementById("contact-addressLine2").value = document.getElementById("addressLine2").value
        document.getElementById("contact-cityDistrict").value = document.getElementById("cityDistrict").value
        document.getElementById("contact-stateProvince").value = document.getElementById("stateProvince").value
        document.getElementById("contact-postalcode").value = document.getElementById("postalcode").value
        document.getElementById("contact-country").value = document.getElementById("country").value
    }
}


function submitUserForm() {
    if (is_valid()) {
        // console.log("yes");

    firstname = document.getElementById("validationCustom01").value;
    lastname = document.getElementById("validationCustom02").value;
    username = document.getElementById("validationCustomUsername").value;
    email = document.getElementById("exampleInputEmail1").value;
    phone = document.getElementById("validationCustom05").value;
    city = document.getElementById("cityDistrict").value;
    state = document.getElementById("stateProvince").value;
    postalCode = document.getElementById("postalcode").value;
    country = document.getElementById("country").value;

        let tableBody = document.createElement("tbody");
        let tableRow = document.createElement("tr");
        let tableHead = document.createElement("th");
        let tableData1 = document.createElement("td");
        let textNode1 = document.createTextNode(firstname);

        let tableData2 = document.createElement("td");
        let textNode2 = document.createTextNode(lastname);
        
        let tableData3 = document.createElement("td");
        let textNode3 = document.createTextNode(username);

        let tableData4 = document.createElement("td");
        let textNode4 = document.createTextNode(email);

        let tableData5 = document.createElement("td");
        let textNode5 = document.createTextNode(phone);

        let tableData6 = document.createElement("td");
        let textNode6 = document.createTextNode(city);

        let tableData7 = document.createElement("td");
        let textNode7 = document.createTextNode(state);

        let tableData8 = document.createElement("td");
        let textNode8 = document.createTextNode(postalCode);

        let tableData9 = document.createElement("td");
        let textNode9 = document.createTextNode(country);

        // let tableData10 = document.createElement("td");
        // let textNode10 = document.createTextNode("1");

        // let textNode = '<tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr>'
        // let child = document.createTextNode(textNode);
        // node.appendChild(child);

        tableHead.appendChild(textNode1);
        tableData2.appendChild(textNode2);
        tableData3.appendChild(textNode3);
        tableData4.appendChild(textNode4);
        tableData5.appendChild(textNode5);
        tableData6.appendChild(textNode6);
        tableData7.appendChild(textNode7);
        tableData8.appendChild(textNode8);
        tableData9.appendChild(textNode9);
        // tableData10.appendChild(textNode10);

        tableRow.appendChild(tableHead);
        // tableRow.appendChild(tableData1);
        tableRow.appendChild(tableData2);
        tableRow.appendChild(tableData3);
        tableRow.appendChild(tableData4);
        tableRow.appendChild(tableData5);
        tableRow.appendChild(tableData6);
        tableRow.appendChild(tableData7);
        tableRow.appendChild(tableData8);
        tableRow.appendChild(tableData9);
        // tableRow.appendChild(tableData10);

        tableBody.appendChild(tableRow);

        document.getElementById("final-table").appendChild(tableRow);


        // document.getElementById("final-table").appendChild(node);
        // console.log(node);
    }
}