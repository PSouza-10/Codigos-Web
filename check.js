function check(){
    
   
    var motiv = document.getElementById('motivacional').checked;
    var artig = document.getElementById('artigo').checked;
    var avis = document.getElementById('aviso').checked;
    var video = document.getElementById('video').checked;
    var photo = document.getElementById('photo').checked;
    var doc = document.getElementById('document').checked;

    if(motiv == true){ document.getElementById('mot').style.backgroundColor = 'orange'}else{
        document.getElementById('mot').style.backgroundColor = 'rgb(59, 59, 59)'
    }

    if(artig == true){ document.getElementById('art').style.backgroundColor = 'orange'}else{
        document.getElementById('art').style.backgroundColor = 'rgb(59, 59, 59)'
    }
    
    if(avis == true){ document.getElementById('war').style.backgroundColor = 'orange'}else{
        document.getElementById('war').style.backgroundColor = 'rgb(59, 59, 59)'
    }
    
    
    if(video == true){ document.getElementById('vid').style.backgroundColor = 'orange'}else{
        document.getElementById('vid').style.backgroundColor = 'rgb(59, 59, 59)'
    }
    
    if(photo == true){ document.getElementById('picture').style.backgroundColor = 'orange'}else{
        document.getElementById('picture').style.backgroundColor = 'rgb(59, 59, 59)'
    }

    if(doc == true){ document.getElementById('doc').style.backgroundColor = 'orange'}else{
        document.getElementById('doc').style.backgroundColor = 'rgb(59, 59, 59)'
    }
}