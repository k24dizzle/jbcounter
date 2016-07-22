document.addEventListener('DOMContentLoaded', function() {
    alert('nick has no knees');
    console.log($("#count").html())
    // whenever the jtb button is clicked, it executes this function
    $("#jtb").click(function(e) {
        // prevents default behavior of the button
        e.preventDefault();
        // takes the current "count" value and turns it into an int
        var current = parseInt($("#count").html());
        // sets the count to incrase by 1
        $("#count").html(current + 1);
    });
});
