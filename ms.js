window.addEventListener("load", ()=>{
    $.ajax({
        headers: { 'X-Auth-Token': '728c349faecd47eab36bbb6b8a952bbb' },
        url: 'https://api.football-data.org/v2/competitions/PL/standings',
        dataType: 'json',
        type: 'GET',
      }).done(function(response) {
        console.log(response);
        let x = document.getElementsByClassName("howfar");
        let z = document.getElementsByClassName("name");
        let p = document.getElementsByClassName("pos");
        let g = document.getElementsByClassName("gameweek")
        g[0].textContent="Game Week " + response.season.currentMatchday;
        for(let i = 0; i < response.standings[0].table.length; i++){
            for(let j = 0; j < x.length; j++){
                let tmn = response.standings[0].table[i].team.name.substr(0, response.standings[0].table[i].team.name.length-3);
                if(tmn == "Wolverhampton Wanderers"){
                    tmn= "Wolves";
                }else if(tmn == "AFC Bournemo"){
                    tmn = "Bournemouth";
                }else if(tmn == "Brighton & Hove Albion"){
                    tmn = "Brighton";
                }
                if(tmn == z[j].textContent){
                    let pos = response.standings[0].table[i].position;
                    if(parseInt(p[j].textContent)>parseInt(pos)){
                        x[j].textContent= "+"+(Math.abs(parseInt(p[j].textContent-parseInt(pos))).toString());
                        x[j].style.background="green";
                    }
                    else if(parseInt(p[j].textContent)<parseInt(pos)){
                        x[j].textContent= "-"+(Math.abs(parseInt(pos)-parseInt(p[j].textContent)).toString());
                        x[j].style.background="red";
                    }
                    else{
                        x[j].textContent= "0";
                        x[j].style.background="yellow";
                    }
                }
            }
        }
      });
});