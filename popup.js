document.addEventListener('DOMContentLoaded', function() {
    // alert('nick has no knees');
    
    // on load, if there's a value in the storage, load it up
    chrome.storage.sync.get('count', function(result) {
        console.log(result.count);
        // if there is a value
        if (result.count != null) {
            $("#count").html(result.count);
        }
    });
    
    // whenever the jtb button is clicked, it executes this function
    $("#jtb").click(function(e) {
        var count = $("#count");
        // prevents default behavior of the button
        e.preventDefault();
        // takes the current "count" value and turns it into an int
        var current = parseInt(count.html());
        // sets the count to increase by 1
        count.html(current + 1);
        // save value in storage under key "count"
        chrome.storage.sync.set({'count':  count.html()}, function() {
            console.log('Settings saved: ' + count.html());
        });
    });

    // whenever the reset button is clicked, executes this function
    $("#reset").click(function(e) {
        // set the count back to 0
        $("#count").html(0);
        chrome.storage.sync.set({'count':  count.html()}, function() {
            console.log('Reset Count');        
        });


    });
});
