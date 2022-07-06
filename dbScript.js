function fetchAllAuthors() {
    var apiUrl = 'http://localhost:3000/authors/';
    fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        // Work with JSON data here
        //const obj = JSON.parse(data);
        //console.log(obj.name);
        //console.log(obj.genre);
        console.log("Length" + data.length);
        var output = "<tr> <th> Name</th><th> Genre</th></tr>";
        for (let i = 0; i < data.length; i++) {
            console.log((data[i]));
            //document.getElementById("p1").innerHTML = JSON.stringify(data[i]);
            x = data[i].name;
            y = data[i].genre;
            output += "<tr> <td>" + x + "</td>";
            output += "<td>" + y + "</td> </tr>";
            console.log(output);
            //document.getElementById("p1").innerHTML = (data[i].name);
        }
        document.getElementById("t1").innerHTML = output;
    }).catch(err => {
        // Do something for an error here
        console.log("error")
    });
}

window.onload = fetchAllAuthors();