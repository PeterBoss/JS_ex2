window.addEventListener("load", function () {

    ////////////////////////////////////////////////////////////////////////////
    //2.1
    ////////////////////////////////////////////////////////////////////////////

    var divs = document.getElementsByTagName("div");

    divs[0].style.backgroundColor = "red";
    divs[1].style.backgroundColor = "red";
    divs[2].style.backgroundColor = "red";

    ////////////////////////////////////////////////////////////////////////////
    //2.2
    ////////////////////////////////////////////////////////////////////////////

    function Person(firstname, lastname, phone, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
    }

    var person1 = new Person("Peter", "Thomsen", "12345678", "test@mail.com");
    var person2 = new Person("Barrack", "Obama", "87654321", "mail@test.gov");

    var persons = [person1, person2];

    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    for (var i = 0; i < persons.length; i++) {
        var row = document.createElement('tr');

        var cell1 = document.createElement('td');
        cell1.appendChild(document.createTextNode(persons[i].firstname));
        row.appendChild(cell1);

        var cell2 = document.createElement('td');
        cell2.appendChild(document.createTextNode(persons[i].lastname));
        row.appendChild(cell2);

        var cell3 = document.createElement('td');
        cell3.appendChild(document.createTextNode(persons[i].phone));
        row.appendChild(cell3);

        var cell4 = document.createElement('td');
        cell4.appendChild(document.createTextNode(persons[i].email));
        row.appendChild(cell4);

        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    document.body.appendChild(table);

    ////////////////////////////////////////////////////////////////////////////
    //2.3
    ////////////////////////////////////////////////////////////////////////////

    //height & width done in index.html instead, but here's the way to do it in JS:
    //document.getElementById("div1").style.height = "100px";
    //document.getElementById("div1").style.width = "100px";
    

    document.getElementById("div1").style.background = "blue";
    document.getElementById("div2").style.background = "yellow";
    document.getElementById("div3").style.background = "green";

    document.getElementById("div1").addEventListener("click", function () {
        console.log("div1 is blue");
    });
    document.getElementById("div2").addEventListener("click", function () {
        console.log("div2 is yellow");
    });
    document.getElementById("div3").addEventListener("click", function () {
        console.log("div3 is green");
    });

    ////////////////////////////////////////////////////////////////////////////
    //2.4
    ////////////////////////////////////////////////////////////////////////////

    document.getElementById("div4").style.borderColor = "blue";
    document.getElementById("div5").style.borderColor = "yellow";
    document.getElementById("div6").style.borderColor = "green";

    document.getElementById("div4").addEventListener("mouseover", function () {
        document.getElementById("div4").innerHTML = "Success!";
    });
    document.getElementById("div4").addEventListener("mouseout", function () {
        document.getElementById("div4").innerHTML = null;
    });

    document.getElementById("div5").addEventListener("mouseover", function () {
        document.getElementById("div5").innerHTML = "Good Job!";
    });
    document.getElementById("div5").addEventListener("mouseout", function () {
        document.getElementById("div5").innerHTML = null;
    });

    document.getElementById("div6").addEventListener("mouseover", function () {
        document.getElementById("div6").innerHTML = "Misson Accomplished!";
    });
    document.getElementById("div6").addEventListener("mouseout", function () {
        document.getElementById("div6").innerHTML = null;
    });

    ////////////////////////////////////////////////////////////////////////////
    //2.5
    ////////////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////////////
    //2.6
    ////////////////////////////////////////////////////////////////////////////

    var ul = document.getElementById("people");
    var items = ul.getElementsByTagName("li");

    for (var i = 0; i < items.length; i++) {
        if (i % 2 === 0) {
            items[i].style.background = "red";
        } else {
            items[i].style.background = "blue";
        }
    }

    ////////////////////////////////////////////////////////////////////////////
    //2.7
    ////////////////////////////////////////////////////////////////////////////

    var parent = document.querySelector("#container");

    parent.addEventListener("click", function (e) {
        if (e.target !== e.currentTarget) {
            var clickedItem = e.target.innerHTML;
            console.log(clickedItem);
            if (clickedItem === '=') {
                document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML);
            } else {
                document.getElementById("display").innerHTML += clickedItem;
            }
        }
        e.stopPropagation();
    });

});
