/*jslint browser: true,
    devel: true,
    plusplus: true,
    maxerr: 1,
    indent: 4,
    maxlen: 85 */

window.onload = function () {
    "use strict";

    var button = document.getElementsByTagName("button")[0],
        qty,
        description,
        cost;

    function addRow() {
        qty = document.getElementById("qty").value;
        description = document.getElementById("description").value;
        cost = document.getElementById("cost").value;

        /* Create a reference to the only <tbody> element in the HTML document. */
        var tbody = document.getElementsByTagName("tbody")[0];

        /* Create a new <tr> element. We only need one, because we are only creating one row. */
        var tr = document.createElement("tr");

        var tdQuantity = document.createElement("td");
        var tdDescription = document.createElement("td");
        var tdCost = document.createElement("td");

        var NewQuantity = document.createTextNode(qty);
        var NewDescription = document.createTextNode(description);
        var NewCost = document.createTextNode(cost);


        tdQuantity.appendChild(NewQuantity);
        tdDescription.appendChild(NewDescription);
        tdCost.appendChild(NewCost);
        tr.appendChild(tdQuantity);
        tr.appendChild(tdDescription);
        tr.appendChild(tdCost);
        tbody.appendChild(tr);

        /* Add your code above this line. */
    }

    button.addEventListener("click", addRow, false);
};
