
$(document).ready(function () {
    var navitems = document.getElementsByClassName('nav-list');
    navitems[0].classList.add('active-nav-list');

    var rowCounter = document.getElementById('rowCount');


    function renderOrderRows(rowData) {
        var id = $('<td>').html(rowData.id);
        var customer = $('<td>').html(rowData.customerName).attr('class', 'primary-text');
        var time = $('<span>').html(rowData.orderTime);
        var formatDate = rowData.orderDate.split('-');
        var date = $('<td>').html(formatDate[0] + " " + formatDate[1] + ", " + formatDate[2] + '<br>').attr('class', 'primary-text');
        date.append(time);
        var amount = $('<td>').html("$" + rowData.amount);
        var status = $('<td>').html(rowData.orderStatus).attr('class', 'primary-text');
        var tr = $('<tr>').append(id, customer, date, amount, status);

        return tr;
    }

    $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', function (orderData) {
        rowCounter.innerText = "Count: " + orderData.length;
        for (var i = 0; i < orderData.length; i++) {
            $('#orderRows').append(renderOrderRows(orderData[i]));
        }
    })
    var newOrder = document.getElementsByName('neworder');
    newOrder[0].onclick = function () {
        var table = document.getElementById('orderRows')
        var userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++) {
            var td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'NEW') {
                    if (newOrder[0].checked == false) {
                        // userRow[i].style.display = "";
                        userRow[i].style.display = "none";
                    }
                    else {
                        // userRow[i].style.display = "none";
                        userRow[i].style.display = "";
                    }
                }
            }
        }
        var rowCount = 0;
        for (j = 0; j < userRow.length; j++) {
            if (userRow[j].style.display == 'none') {
                ;
            }
            else {
                rowCount++;
            }
        }
        rowCounter.innerText = "Count: " + rowCount
    }

    var packedOrder = document.getElementsByName('packedorder');
    packedOrder[0].onclick = function () {
        var table = document.getElementById('orderRows')
        var userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++) {
            var td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'PACKED') {
                    if (packedOrder[0].checked == false) {
                        userRow[i].style.display = "none";
                    }
                    else {
                        userRow[i].style.display = "";
                    }
                }
            }
        }
        var rowCount = 0;
        for (j = 0; j < userRow.length; j++) {
            if (userRow[j].style.display == 'none') {
                ;
            }
            else {
                rowCount++;
            }
        }
        rowCounter.innerText = "Count: " + rowCount
    }

    var inTransitOrder = document.getElementsByName('transitOrder');
    inTransitOrder[0].onclick = function () {
        var table = document.getElementById('orderRows')
        var userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++) {
            var td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'INTRANSIT') {
                    if (inTransitOrder[0].checked == false) {
                        userRow[i].style.display = "none";
                    }
                    else {
                        userRow[i].style.display = "";
                    }
                }
            }
        }
        var rowCount = 0;
        for (j = 0; j < userRow.length; j++) {
            if (userRow[j].style.display == 'none') {
                ;
            }
            else {
                rowCount++;
            }
        }
        rowCounter.innerText = "Count: " + rowCount
    }

    var deliveredOrder = document.getElementsByName('deliveredOrder');
    deliveredOrder[0].onclick = function () {
        var table = document.getElementById('orderRows')
        var userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++) {
            var td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'DELIVERED') {
                    if (deliveredOrder[0].checked == false) {
                        userRow[i].style.display = "none";
                    }
                    else {
                        userRow[i].style.display = "";
                    }
                }
            }
        }
        var rowCount = 0;
        for (j = 0; j < userRow.length; j++) {
            if (userRow[j].style.display == 'none') {
                ;
            }
            else {
                rowCount++;
            }
        }
        rowCounter.innerText = "Count: " + rowCount
    }
})