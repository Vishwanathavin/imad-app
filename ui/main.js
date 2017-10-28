console.log('Loaded!');
var button = document.getElementById('counter');


//create a request
button.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            //Take some action
            if(requst.status == 200){
                var counter = requst.responseText();
                var span = document.getElementById('count');	
	            span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET', 'http://vishwanathavin.imad.hasura-app.io/counter',true);
    request.send(null);
};