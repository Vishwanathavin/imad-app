var button = document.getElementById('counter');


//create a request
button.onclick = function(){

	//create a request
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            //Take some action
            if(requst.status == 200){
                var counter = request.responseText;
                var span = document.getElementById('count');	
	            span.innerHTML = counter.toString();
            }
        }
    };

    //make a request
    request.open('GET', 'localhost:8080/counter',true);
    request.send(null);

	
};