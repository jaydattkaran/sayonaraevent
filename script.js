$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#circularcursor').css({
        left: e.pageX,
        top: e.pageY
      });
    })
  });


  document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const text = "Join us in saying goodbye and wishing all the best to our tourism seniors. You have been a part of tourism journey here🥳";
    
    // Function to add delayed text
    function addDelayedText(text, delay) {
      let index = 0;
      const intervalId = setInterval(function() {
        if (index < text.length) {
          textElement.textContent += text[index];
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, delay);
    }
    
    // Call the function with your desired delay (in milliseconds)
    addDelayedText(text, 50);
  });