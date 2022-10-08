  let y = Math.floor(Math.random() * 100 + 1);

  
  let guess = 1;

  document.getElementById("submitguess").onclick = function(){

  let x = document.getElementById("guessField").value;
    
  if(x == y)
  {
    
      alert("OMG You did it! Congrats you guessed it in " + guess + " Guesses");
    document.body.style.backgroundColor="green" 
  }
  
  else if(x > y) 

  {
      guess++;
      alert("Nope, try a lower number.");
    document.body.style.backgroundColor="red"
  }
    else if(x < y)

  {
      guess++;
      alert("Yikes, maybe try a higher number.")
      document.body.style.backgroundColor="red"
      
  }

}

