// variables we need
var sp, btn_start, btn_stop, t, ms, s, mn, h;

// function to initialize variables when the page is loaded
window.onload = function(){ // The window.onload event in JavaScript is used to execute a particular piece of code or a function after all the content on a web page has finished loading, including images, scripts, and other resources.
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    ms = 0, s = 0, mn = 0, h = 0;
}

//putting in place the counter
function update_chrono(){
    ms+=1; 
    if(ms == 10){
        ms = 1;
        s+=1
    }
    if(s==60){
        s=0;
        mn+=1;
    }
    if(mn==60){
        mn=0;
        h+=1;
    }
    //insertion of values in spans 
    //[0] permits to select the first span
    //[1] permits to select the second span etc...  
    sp[0].innerHTML = h + "h";    
    sp[1].innerHTML = mn + "min";                
    sp[2].innerHTML = s + "s";                
    sp[3].innerHTML = ms + "ms";                            
}

// putting in place the function of the start button
function start(){
    // setInterval is a JavaScript function that repeatedly calls a provided function at specified intervals.
    // Here, it's used to call the update_chrono function every 100 milliseconds (1 second). The reference to this interval is stored in the variable t.
    t = setInterval(update_chrono,100); 
    btn_start.disabled = true
}

//stop the chronometer

function stop(){
    clearInterval(t); // deleting the interval t we have created
    btn_start.disabled = false; 
}

// reseting the value of the counter
function reset(){
    clearInterval(t)
    btn_start.disabled = false;
    ms=0, s=0, mn=0, h=0;
// inserting new values to span
    sp[0].innerHTML = h + "h";    
    sp[1].innerHTML = mn + "min";                
    sp[2].innerHTML = s + "s";                
    sp[3].innerHTML = ms + "ms";   
}
