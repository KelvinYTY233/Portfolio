function select_item(name){
    for(var i=0;i<info.length;i++){
        if(info[i].name==name){
            console.log(name);
            var selected_item = {
                "name":name
            };
            localStorage.setItem('selected_item',JSON.stringify(selected_item));
        }
    }
}

function load_details(){
    let selected_item=JSON.parse(localStorage.getItem('selected_item'));

    var name = document.getElementById("project_title");
    var description = document.getElementById("description_table");
    var gallery = document.getElementById("slider");
    var tools = document.getElementById("tools_table");
    var features = document.getElementById("features_table");

    const description_row = document.createElement('tr');
    const description_data = document.createElement('td');

    const tools_row = document.createElement('tr');
    const tools_data = document.createElement('td');

    const features_row = document.createElement('tr');
    const features_data = document.createElement('td');

    for(var i=0;i<info.length;i++){
        if(selected_item.name == info[i].name){

            name.innerHTML = info[i].name;

            description.append(description_row);
            description_row.append(description_data);
            description_data.innerHTML = info[i].description;

            for(var j = 0; j < info[i].gallery.length;j++){

                const image = document.createElement('img');
                gallery.append(image);

                image.id = "slide-"+JSON.stringify(j+1);
                image.src = "media/gallery/" + info[i].gallery[j];
    
            }

            tools.append(tools_row);
            tools_row.append(tools_data);
            tools_data.innerHTML = info[i].tools;

            if(info[i].features!=''){
                features.append(features_row);
                features_row.append(features_data);
                features_data.innerHTML = info[i].features;
                features.style.display = "block";
            }
            if(info[i].features==''){
                features.style.display = "none";
            }


            tools_row.className = "content_row";
            description_row.className = "content_row";
            features_row.className = "content_row";

            if(info[i].video!=''){
                
                const video_container = document.getElementById('video_container');
                const video = document.createElement('video');
                const source = document.createElement('source');
                video_container.append(video);

                video.append(source);
                source.src = "media/video/" + info[i].video;
                source.type = "video/mp4";
                video.controls = true;
                video_container.style.display = "block";
                slideshow_container.style.width = 50 + "%";
                video.id = "video_player";
            }
            if(info[i].video==''){
                const slideshow_container = document.getElementById('slideshow_container');
                slideshow_container.style.width = 100 + "%";
                const video_container = document.getElementById('video_container');
                video_container.style.display = "none";
            }
        }
    }   
}