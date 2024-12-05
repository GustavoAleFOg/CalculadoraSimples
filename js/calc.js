document.getElementById("btn").addEventListener("click", function() {

    let valor01 = document.getElementById("valor01");
    let valor02 = document.getElementById("valor02");
    


    let display = document.getElementById("display");

    let valorFinal  = parseFloat(valor01.value) + parseFloat(valor02.value);

    if (valorFinal >= 0){
        
        display.innerHTML = ` 
        <h2> Resultado: ${valorFinal}<h2>
      
 `;}

   

    else {
        display.innerHTML = ` 
        <h2> Digite algum valor.<h2>
        `;
       
    }
    

   

  
})