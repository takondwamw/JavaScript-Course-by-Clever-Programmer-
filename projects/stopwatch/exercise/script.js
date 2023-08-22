  /**
   * Initiate 3 variables (seconds, tens, interval)
   * Give a starting value of 0 for seconds and tens
   * Use the appropriate variable type for each
   */
  let seconds = 0;
  let tens = 0;
  let interval;
  let minutes=0
  let hours = 0;
  /**
   * Get the DOM elements for the stopwatch and save them in variables
   * Use the appropriate variable type for each
   *
   * Hint: There are 3 buttons and 2 numbers to manipulate
   */
  const $ = (elm) => document.querySelector(elm);
  const buttonStart = $('#button-start');
  const buttonStop = $('#button-stop');
  const buttonReset = $('#button-reset');
  const disSeconds = $('#seconds');
  const disTens= $('#tens');
  const disMinutes= $('#minutes');
  const disHours= $('#hours');







  /**
   * Create a function, which is waiting for the user to press the 'Start' button.
   * When pressed, set the timer run `runStopwatch` function every 10ms.
   */
  buttonStart.onclick = () => {
    clearInterval(interval);  
    interval = setInterval(runStopwatch,10);   
  }

  /**
   * Create a function, which is waiting for the user to press the 'Stop' button.
   * When pressed, clear the interval.
   */
  buttonStop.onclick = () => {
      clearInterval(interval);          
  }

  /**
   * Create a function, which is waiting for the user to press the 'Reset' button.
   * When pressed, clear the interval, reset the seconds and tens to 0.
   *
   * Hint: Don't forget to concatenate a leading '0'.
   */
  buttonReset.onclick = () => {
      clearInterval(interval); 
      tens = 0;
      seconds = 0;
      disSeconds.innerText = `0${seconds}`
      disTens.innerText = `0${tens}` 
  }

  /**
   * Build the `runStopwatch` function.
   */
  const runStopwatch = () => {
    // Increment the tens.
    tens++;
    
    /**
     * Display updated tens and seconds.
     * Make sure, that the tens and seconds are always two digits long.
     *
     * Hint: there are 4 cases you need to handle every time the function runs.
     */
    // switch(true){
      if( tens <= 9)
      {
        disSeconds.innerText = `0${seconds}`
        disTens.innerText = `0${tens}`
      }

      if( tens > 9)
      {
        disSeconds.innerText = `0${seconds}`
        disTens.innerText = tens;
      }

      if( tens > 99)
      {
        seconds++;
        tens = 0;
        disSeconds.innerText = `0${seconds}`;
        disTens.innerText = tens;
        console.log(tens)
      }
      // check if seconds is greater than 9 and remove the zeros at the begginning
      if(seconds >9){
        disSeconds.innerText = `${seconds}`;
      } 
      // apend to minutes 
      if(seconds > 60){
        seconds = 0;
        minutes ++;
        disSeconds.innerText = `0${seconds}`;
        disMinutes.innerText = `0${minutes}`;
      }
      // if minutes exceeds 60
      if(minutes >60){
        minutes = 0;
        hours++;
        disHours.innerText = `0${hours}`;
        disMinutes.innerText = `0${minutes}`;
       
      }
      if(hours > 9 ){
        disHours.innerText = hours;
      }

      
  }
