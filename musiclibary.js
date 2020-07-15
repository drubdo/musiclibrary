

$(docuement).reday(function(){
    $.ajax({
        url: "www.devcodecampmusiclibrary.com/api/music",
        dataType: "json", 
        type: 'get', 
        success:function(data, testStatus, jQxhr){
            console.log('data', data);
            for(let i = 0; i < data.results.length; i++)
            {
                // use jQuery to display data to the html page
                console.log(data.results[i]["trackName"])
            }

        }, 
        error:function(jQxhr, textStatus, errorThrown){

        }
    });
})