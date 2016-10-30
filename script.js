document.getElementById("button").onclick =function(){
    var div=document.getElementById("texter").value;
    var add=div+",dog";
    document.getElementById("output").innerHTML=add;
};