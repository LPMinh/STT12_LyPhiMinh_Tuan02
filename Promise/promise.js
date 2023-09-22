

var url = 'https://jsonplaceholder.typicode.com/todos';

const fn= (succes,fail)=>{
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onload = function() {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
            succes(users)
        } else {
            console.error(users);
            fail(users)
        }
    }
    xhr.send(null);

}
var promise=new Promise(fn)
promise.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.error(data)
})
