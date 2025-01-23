var aram;
var gaz;
var viz;
var kozos;
var aramar;
var gazar;
var vizar;
var kozosar;

function szamol()
{
    aram = parseFloat(document.getElementById("aram").value);
    gaz= parseFloat(document.getElementById("gaz").value);
    viz= parseFloat(document.getElementById("viz").value);
    kozos= parseInt(document.getElementById("koz").value);
    
    if(aram<0||aram>25000&&aram!="")
        {
            document.getElementById("hiba1").innerHTML="Hiba"
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
        document.getElementById("hiba2").innerHTML="Hiba"
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
            document.getElementById("hiba3").innerHTML="Hiba"
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
            document.getElementById("hiba4").innerHTML="Hiba"
            document.getElementById("koz").value=""
        }
    else if(kozos>=6000&&kozos<=22000)
        {
            kozosar=kozos
            document.getElementById("kozar").value=kozosar;
            document.getElementById("hiba4").innerHTML=""

        }


    if(  
            document.getElementById("hiba1").innerHTML==""&&
            document.getElementById("hiba2").innerHTML==""&&
            document.getElementById("hiba3").innerHTML==""&&
            document.getElementById("hiba4").innerHTML==""
    ){
        document.write
        (
            "<b><u>Áram:</u></b><br>Kedvezményes: "+aram+"*14.2"+"<br>A felleti:"+ aram + "*15.08 <br> Összesen: "+aramar+
            "<br><br><b><u>Gáz:</u></b><br>Kedvezményes: "+gaz+"*14.2  =  "+gazar+" <br>A felleti:"+
            "<br><br><b><u>Víz:</u></b><br>Kedvezményes: "+viz+"*14.2  =  "+vizar+" <br>A felleti:"+
            "<br><br><b><u>Közösköltség:</u></b><br>Kedvezményes: "+kozos+"*14.2  =  "+kozosar+" <br>A felleti:"
        )
    }
}