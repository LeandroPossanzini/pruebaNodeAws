function getUuid(){
    let url = "http://127.0.0.1/api/get-uuid"
    fetch(url, {
        method : 'GET'
    })
    .then(res => res.json())
    .then(data => document.getElementById('result').innerHTML= data)
}



