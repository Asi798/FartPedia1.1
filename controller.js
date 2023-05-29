window.onload = function () {
    let au = document.getElementById("audio");
    let audios;

    readTextFile("audios.json", function (text) {
        audios = JSON.parse(text);
        let buttons = document.getElementById("buttons");
        console.log(audios);

        audios.forEach(function (audio, i) {
          let container = document.createElement("div"); // Container element
          let button = document.createElement("img"); // Image button
          let caption = document.createElement("span"); // Caption element
        
          if (audio.codi === "Carlo") {
            button.src = "Carlo.png";
            caption.textContent = "Carlo"; // Caption text for Carlo image
          } else {
            button.src = "Asier.png";
            caption.textContent = "Asier"; // Caption text for Asier image
          }
          button.addEventListener("click",function () {
            reprodueix(audio.arxiu);
          })

          container.style.display = "flex"; // Apply flexbox layout to the container
          container.style.flexDirection = "column"; // Stack elements vertically
          container.style.alignItems = "center"; 
          container.appendChild(button); // Add the image button to the container
          container.appendChild(caption); // Add the caption to the container
          buttons.appendChild(container); // Add the container to the buttons container
        });
        
    });

    
    


    function reprodueix(arx) {
        au.src = "Audios/" + arx;
        au.play();
    }

    function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function () {
          if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
          }
        };
        rawFile.send(null);
      }
}