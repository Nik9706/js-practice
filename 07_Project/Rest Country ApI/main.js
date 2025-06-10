
async function getAPIData() {
    var name="bharat"
    if (document.getElementById("search").value != "")
     name = document.getElementById("search").value
try{
    let response= await fetch(`https://restcountries.com/v3.1/name/${name}`)
    response=await response.json()
            data=response[0]

            
            document.getElementById("name").innerHTML = data.name.official
        document.getElementById("capital").innerHTML = data.capital[0]
        document.getElementById("flags").src = data.flags.svg
        document.getElementById("population").innerHTML = data.population
        document.getElementById("area").innerHTML = data.area
        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion 
        document.getElementById("continents").innerHTML = data.continents
        document.getElementById("borders").innerHTML = data.borders
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("landlocked").innerHTML = data.landlocked
        document.getElementById("independent").innerHTML = data.independent
        document.getElementById("Maps").href = data.maps.googleMaps
            }
            catch(error){
                alert("Invalid Country Name")
            }
    
    

}
getAPIData()


/*
promise example
function getAPIData() {
    var name="bharat"
    if (document.getElementById("search").value != "")
     name = document.getElementById("search").value

    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((response)=>{
        response.json().then((data)=>{
            data=data[0]

            document.getElementById("name").innerHTML = data.name.official
        document.getElementById("capital").innerHTML = data.capital[0]
        document.getElementById("flags").src = data.flags.svg
        document.getElementById("population").innerHTML = data.population
        document.getElementById("area").innerHTML = data.area
        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion 
        document.getElementById("continents").innerHTML = data.continents
        document.getElementById("borders").innerHTML = data.borders
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("landlocked").innerHTML = data.landlocked
        document.getElementById("independent").innerHTML = data.independent
        document.getElementById("Maps").href = data.maps.googleMaps
        })
        .catch((error)=>{
            alert("invalid country name")
        })
        
        })
    .catch((error)=>{
        alert ("invalid country name")
    })
    
    

}
getAPIData()


function getAPIData() {
    var name="bharat"
    if (document.getElementById("search").value != "")
     name = document.getElementById("search").value

    let request = new XMLHttpRequest()
    request.open("get",`https://restcountries.com/v3.1/name/${name}`)
    request.send()

    request.addEventListener("load", () => {
        let data = JSON.parse(request.responseText)[0]
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("capital").innerHTML = data.capital[0]
        document.getElementById("flags").src = data.flags.svg
        document.getElementById("population").innerHTML = data.population
        document.getElementById("area").innerHTML = data.area
        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion 
        document.getElementById("continents").innerHTML = data.continents
        document.getElementById("borders").innerHTML = data.borders
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("landlocked").innerHTML = data.landlocked
        document.getElementById("independent").innerHTML = data.independent
        document.getElementById("Maps").href = data.maps.googleMaps
    })

}
getAPIData() */