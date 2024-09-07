var showcase_container = document.getElementById("showcase_container");
for(let i=0; i<info.length;i++){
    const card = document.createElement('div');
    const name = document.createElement('p');
    const img = document.createElement('img');
    const to_selected_item = document.createElement('a');
    const event = document.createAttribute("onclick");

    name.innerHTML = info[i].name;
    
    card.className = "card" + " " + info[i].type;
   
    //card.classList.add(info[i].type);
    

    to_selected_item.id = info[i].name;
    name.className = "name";
    img.className = "thumbnail";
    img.src = "media/thumbnail/" + info[i].img;

    event.value="OpenPopup(this.id)";

    to_selected_item.setAttributeNode(event);

    showcase_container.append(card);
    card.append(to_selected_item);
    to_selected_item.append(img);
    to_selected_item.append(name);

}

filter("all");
function filter(type){
    //get cards
    var get_cards = document.getElementsByClassName("card");
    //remove inline css
    for(var i=0;i<get_cards.length;i++){
        if(get_cards[i].hasAttribute('style')==true){
            get_cards[i].removeAttribute('style');
        }        
    }

    if(type=="all"){
        type="";
    }
    for(var i=0;i<get_cards.length;i++){
        class_remove(get_cards[i],"show");
        if(get_cards[i].className.indexOf(type)>-1){
            class_add(get_cards[i],"show");
        }
    }
}

function class_add(element,name){
    var arr1 = element.className.split("");
    var arr2 = name.split(" ");
    for(var i=0;i<arr2.length;i++){
        if(arr1.indexOf(arr2[i])==-1){
            element.className+= " "+arr2[i];
        }
    }
}

function class_remove(element,name){
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for(var i=0;i<arr2.length;i++){
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
    element.className = arr1.join(" ");
}

var btn_container = document.getElementById("btn_container");
var btn = btn_container.getElementsByClassName("btn_filter");
for (var i=0; i< btn.length;i++){
    btn[i].addEventListener("click", function(){
        var curr = document.getElementsByClassName("active");
        curr[0].className = curr[0].className.replace(" active", "");
        this.className += " active";
    });
}