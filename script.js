$(document).ready(function(){
$('.tableButton').click(function() {
    $(this).prop('disabled', true);   
    $.getJSON("countryCode.json", function(data){
        str = JSON.stringify(data, null, 4);
        console.log(data);

        var country = data.country;

        var table = document.createElement('table');
        for (var i = 0; i < country.length; i++){
            var tr = document.createElement('tr');   
            var td1 = document.createElement('td');
            var text1 = document.createTextNode(country[i]);
            td1.appendChild(text1);
            tr.appendChild(td1);   
            table.appendChild(tr);
        }
        document.getElementById("myTable").appendChild(table);
    });
    });
}); 