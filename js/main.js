

    function Aleatoire(min,max) {
        return (Math.floor((max - min) * Math.random()) + min);
    }

     var voyelle = ["A","E","I","O","U","Y"];

     function VoyelleAleatoire() {
         return(voyelle[Aleatoire(0,voyelle.length)])
     }

     var consonne = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Z"];

     function ConsonneAleatoire() {
         return(consonne[Aleatoire(0,consonne.length)])
     }
        var compteur = 1;

     $("button#Voyelle").click(function () {
        var texte = VoyelleAleatoire();
        $("#lettre"+compteur).html(texte);
        compteur ++;
         $.ajax({
             url : 'lettre.php', // La ressource ciblée
             type : 'GET',
             data : {'lettre': texte}
         });



     });


    $("button#Consonne").click(function () {
        var texte = ConsonneAleatoire();
        $("#lettre"+compteur).html(texte);
        compteur ++;
        $.ajax({
            url : 'lettre.php', // La ressource ciblée
            type : 'GET',
            data : {'lettre': texte}
        });

    })

    $("button#Restart").click(function(){

        var texte = '&nbsp&nbsp';
        $("#lettre1").html(texte);
        $("#lettre2").html(texte);
        $("#lettre3").html(texte);
        $("#lettre4").html(texte);
        $("#lettre5").html(texte);
        $("#lettre6").html(texte);
        $("#lettre7").html(texte);
        $("#lettre8").html(texte);
        $("#lettre9").html(texte);

        compteur = 1;

    })






