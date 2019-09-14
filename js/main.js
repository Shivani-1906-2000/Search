(function(){
    let input=document.getElementById("filterInput");
    input.addEventListener("keyup",function(event){
    let value=input.value.toLowerCase().trim();
    let items=document.querySelectorAll(".collection-item");
    items.forEach(
        function(item){ 
           // console.log(item)
           type=item.dataset.item;
          // console.log(type)
            length=value.length;

           // console.log(value)
            match=type.slice(0,length).toLowerCase().trim();
    
           if((value===match))
           {
            item.style.display="";
           }
           else{
            item.style.display="none";
           }
        }
    )
})
})();