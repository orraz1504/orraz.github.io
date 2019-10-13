//$.getJSON(
//    'https://apiv2.apifootball.com/?action=get_standings&league_id=148&APIkey=3dda74e1a011bc4dbd71df4f1588c45fca7291daa563ef963877c3b6445e5c43',
//    function(data){
//        console.log(data);
//    }
//);
window.addEventListener("load", ()=>{
    let place;
    const api ='https://apiv2.apifootball.com/?action=get_standings&league_id=148&APIkey=3dda74e1a011bc4dbd71df4f1588c45fca7291daa563ef963877c3b6445e5c43';

    fetch(api)
        .then(res =>{
            return res.json();
        })
        .then(data=>{
            console.log(data)
            console.log(data[0].overall_league_position)
            var i;
            var j;
            var x = document.getElementsByClassName("howfar");
            var z = document.getElementsByClassName("name");
            var p= document.getElementsByClassName("pos");

            console.log(x[0].textContent+ data[0].team_name)
            for (i = 0; i < data.length; i++) {
                for (j = 0; j < x.length; j++) {
                    if(data[i].team_name==z[j].textContent){
                        if(parseInt(p[j].textContent)>parseInt(data[i].overall_league_position)){
                            x[j].textContent= "+"+(Math.abs(parseInt(p[j].textContent-parseInt(data[i].overall_league_position))).toString());
                            x[j].style.background="green";
                        }
                        else if(parseInt(p[j].textContent)<parseInt(data[i].overall_league_position)){
                            x[j].textContent= "-"+(Math.abs(parseInt(data[i].overall_league_position)-parseInt(p[j].textContent)).toString());
                            x[j].style.background="red";
                        }
                        else{
                            x[j].textContent= "0";
                            x[j].style.background="yellow";
                        }
                    }
                }
            }
        })
});