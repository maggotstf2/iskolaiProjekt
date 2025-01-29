var aram,gaz,viz,kozos,aramar,gazar,vizar,kozosar;
let fAram,fGaz;

function szamol()
{
    aram = parseFloat(document.getElementById("aram").value);
    gaz= parseFloat(document.getElementById("gaz").value);
    viz= parseFloat(document.getElementById("viz").value);
    kozos= parseInt(document.getElementById("koz").value);
    
//ár min/max checker
    if(aram<0||aram>25000&&aram!="")
        {
            document.getElementById("hiba1").innerHTML="(0 és 25000 között!)"
            document.getElementById("aram").value=""   
        }
    else
    {
        if((aram*12)<1320&&aram!="")
            {
                console.log(aram);
                aramar=aram*14.2;
                console.log(aramar);
                document.getElementById("aramar").value=aramar;
                document.getElementById("hiba1").innerHTML=""

            }
        else if((aram*12)>1320&&aram!="")
            {
                aramar=110*14.2+(aram-110)*15.08;
                document.getElementById("aramar").value=aramar;
                document.getElementById("hiba1").innerHTML=""

            }
    }

    if(gaz<0||gaz>500&&document.getElementById("gaz").value != "")
    {
        document.getElementById("hiba2").innerHTML="(0 és 500 között!)"
        document.getElementById("gaz").value=""
    }

    else
    {
        if(gaz<149.91&&document.getElementById("gaz").value != "")
            {
                gazar=gaz*85.06;
                document.getElementById("gazar").value=gazar;
                document.getElementById("hiba2").innerHTML=""

            }
        else if(gaz>149.91&&document.getElementById("gaz").value != "")
            {
                aramar=149.91*85.08+(gaz-149.91)*650.87;
                document.getElementById("gazar").value=gazar;
                document.getElementById("hiba2").innerHTML=""

            }
    }

    if(viz<0||viz>30)
        {
            document.getElementById("hiba3").innerHTML="(0 és 30 között!)"
            document.getElementById("viz").value=""
        }

    else
    {
        if(viz>0&&viz<20)
            {
                vizar=viz*218.95+179.95+viz*526.4;
                document.getElementById("vizar").value=vizar;
                document.getElementById("hiba3").innerHTML=""

            }
        else if(viz>20)
            {
                vizar=179.95+viz*218.95+viz*526.4+viz*504.6;
                document.getElementById("vizar").value=vizar;
                document.getElementById("hiba3").innerHTML=""

            }
    }
    
    if(kozos<6000||kozos>22000&&document.getElementById("koz").value != "")
        {
            document.getElementById("hiba4").innerHTML="(6000 és 22000 között!)"
            document.getElementById("koz").value=""
        }
    else if(kozos>=6000&&kozos<=22000)
        {
            kozosar=kozos
            document.getElementById("kozar").value=kozosar;
            document.getElementById("hiba4").innerHTML=""
        }
//felettiek
    if(aram-1320<0){fAram=0}
    else{fAram=aram-1320}

    if(gaz-149.91<0){fGaz=0}
    else{fGaz=gaz-149.91}
//document.write felulet
    if
    (
        document.getElementById("aramar").value!=""&&
        document.getElementById("vizar").value!=""&&
        document.getElementById("gazar").value!=""&&
        document.getElementById("kozar").value!=""&&
        document.getElementById("hiba1").innerHTML==""&&
        document.getElementById("hiba2").innerHTML==""&&
        document.getElementById("hiba3").innerHTML==""&&
        document.getElementById("hiba4").innerHTML==""
    )
    {
        document.write
        (
            "<div class='szoveg'><b><u>Áram:</u></b><br>Kedvezményes: "+(aram-fAram)+"*14.2"+"<br>A felleti: "+ fAram + "*15.08 <br> Összesen: "+Math.floor(aramar)+"Ft"+
            "<br><br><b><u>Gáz:</u></b><br>Kedvezményes: "+gaz+"*85.06  =  "+gazar+" <br>A felleti: "+fGaz+"="+"650.87<br>Összesen: "+Math.floor(gazar)+"Ft"+
            "<br><br><b><u>Víz:</u></b><br>Alapdíj: "+179.95+"Ft<br>"+"Vízdíj: "+viz+"*218.95"+"<br>Csatornadíj: "+viz+"*526.4<br>"+"Locsolási díj: "+viz+"*504.06<br>Összesen: "+Math.floor(vizar)+"Ft"+
            "<br><br><b><u>Közösköltség: </u></b>"+kozosar+"Ft"+
            "<br><br><b><u>Teljesköltség: </u></b>"+Math.floor(kozosar+aramar+gazar+vizar)+"Ft</div>"+"<style>body{background-image: url(images/allIcons.png); background-repeat: repeat-x repeat-y; background-size: 15%;} .szoveg{margin-top: 10%;text-align: center;font-size: large;background-color: white;border:solid;border-collapse: collapse;border-width: 5px;border-radius: 20px;border-color: black;margin-left: 37%;margin-right: 37%; padding: 3%;}</style>"
           
           
        )
    }
}