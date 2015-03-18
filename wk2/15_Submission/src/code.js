var submission = {};

submission.gui = (function() {
    
    function buttonPressed() {
        var name = document.getElementById("name").value;
        var details = document.getElementById("details").value;
        var data = {
            name: name,
            details: details
        }
        
        submission.io.send(data);
    }
    
    return {
        buttonPressed: buttonPressed
    };
    
})();

// toteuta tähän submission.io -moduuli, jolla on näkyvä funktio send.
// funktio send saa parametrina dataolion, joka tulee lähettää palvelimelle
// JSON-muodossa

// lähetä data osoitteeseen http://bad.herokuapp.com/app/in
// voit tarkistaa menikö data perille osoitteessa http://bad.herokuapp.com/app/out

// submission.io = ...

function init() {    
    var button = document.getElementById("submit");
    button.addEventListener("click", submission.gui.buttonPressed, false);
}

