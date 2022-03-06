const Http = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/users";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(Http.responseText);


        for (let i = 0; i < data.length; i++) {


            let id = data[i].id;
            let name = data[i].name;
            let username = data[i].username;
            let email = data[i].email;
            let phone = data[i].phone;
            let city = data[i].address.city;
            let website = data[i].website;
            let postalCode = data[i].address.zipcode;
            let companyName = data[i].company.name;

            let tableBody = document.createElement("tbody");
            let tableRow = document.createElement("tr");
            let tableHead = document.createElement("th");
            let tableData1 = document.createElement("td");
            let textNode1 = document.createTextNode(id);

            let tableData2 = document.createElement("td");
            let textNode2 = document.createTextNode(name);

            let tableData3 = document.createElement("td");
            let textNode3 = document.createTextNode(username);

            let tableData4 = document.createElement("td");
            let textNode4 = document.createTextNode(email);

            let tableData5 = document.createElement("td");
            let textNode5 = document.createTextNode(phone);

            let tableData6 = document.createElement("td");
            let textNode6 = document.createTextNode(city);

            let tableData7 = document.createElement("td");
            let textNode7 = document.createTextNode(website);

            let tableData8 = document.createElement("td");
            let textNode8 = document.createTextNode(postalCode);

            let tableData9 = document.createElement("td");
            let textNode9 = document.createTextNode(companyName);

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
            console.log(data)
            document.getElementById("final-table").appendChild(tableRow);
        }


    }
}

        // document.getElementById("final-table").appendChild(node);
        // console.log(node);




// const Http = new XMLHttpRequest();
// const url = "https://jsonplaceholder.typicode.com/users";
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         let data = JSON.parse(Http.responseText);
//         console.log(data[0])

//     }
// }
