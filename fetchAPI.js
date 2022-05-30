fetch("https://reqres.in/api/products").then( 
    result=>{
        result.json().then(
            colors=>{
                console.log(colors);
                    
                var colorElements="";
                console.log("test");
                    colors.data.forEach(element => {
                            console.log("test");
                            colorElements +="<tr>";
                            colorElements +="<td>"+element.id+"</td>";
                            colorElements +="<td>"+element.name+"</td>";
                            colorElements +="<td>"+element.year+"</td>";
                            colorElements +="<td>"+element.color+"</td></tr>";
                        });
                        document.getElementById("colorData").innerHTML = colorElements;  


            
            }
        )
    }
)


