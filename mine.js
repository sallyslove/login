
function paintTable(size)
{
  var bombNum = 6;
  document.getElementById("bombNum").innerText=bombNum; 
  for(i = 0; i< size; i++)
  {
     document.write("<div>");
     for(j = 0; j< size; j++){
	    var name = initTableCell()
		var count = 0
		if(name == "Mine") count++
		if(count == 6) name="Safe"
		var id = i*size+j
        document.write("<input type=\"button\" class=\"Button\" name="+name+" id="+id+" onclick=\"refreshButton("+size+")\"> ");
        document.write("</button>");
     }
     document.write("</div>");
  }
}

function initTableCell()
{
   if(10*Math.random()>5)
   {
     var value = "Mine";
   }
   else
   {
     value = "Safe";
   }   
   return value;
}

function refreshButton(size)
{ 
   var count = 0
   var targ
   if (!e) var e = window.event
   if (e.target) targ = e.target
   if(targ.name=="Mine")
   {
      targ.className="Mine"
      targ.value="雷"
      alert("你触雷了，游戏结束！"); 
      window.location.reload();  	  
   }
   else
   {
      var id = targ.id;
	  var yPosition = id%size
	  var xPosition = (id-yPosition)/size
	  var big = size*size
	  id = xPosition*size+yPosition+1
	  if((0<=id<big)){
	    if(document.getElementById(id).name=="Mine") count++;
		}
	  if((0<=(xPosition*size+yPosition-1)<big) &&(document.getElementById(xPosition*size+yPosition-1).name=="Mine")) count++;
	  if((0<=((xPosition-1)*size+yPosition+1)<big) &&(document.getElementById((xPosition-1)*size+yPosition+1).name=="Mine")) count++;
	  if((0<=((xPosition+1)*size+yPosition+1)<big) &&(document.getElementById((xPosition+1)*size+yPosition+1).name=="Mine")) count++;
	  if((0<=((xPosition-1)*size+yPosition-1)<big) &&(document.getElementById((xPosition-1)*size+yPosition-1).name=="Mine")) count++;
	  if((0<=((xPosition+1)*size+yPosition-1)<big) &&(document.getElementById((xPosition+1)*size+yPosition-1).name=="Mine")) count++;
	  if((0<=((xPosition-1)*size+yPosition)<big) &&(document.getElementById((xPosition-1)*size+yPosition).name=="Mine")) count++;
	  if((0<=((xPosition+1)*size+yPosition)<big) &&(document.getElementById((xPosition+1)*size+yPosition).name=="Mine")) count++;
	  if(count>0){
	    targ.value=count;
		targ.className="ButtonClicked";
	  }
   }
}
