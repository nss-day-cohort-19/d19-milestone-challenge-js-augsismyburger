// GROW BUTTON
var growButton = document.getElementById("grow");
growButton.addEventListener("click", createTree);

// ENTER KEYPRESS LISTENER
var heightBox = document.getElementById("height-input");
heightBox.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        growButton.click();
    }
});
var charBox = document.getElementById("char-input");
charBox.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        growButton.click();
    }
});
// FUNCTIONS
function MakeTreeObject(height, char) {
    this.height = height;
    this.char = char;
}
function createTree() {
    var heightTarget = document.getElementById("height-input").value;
    var charTarget = document.getElementById("char-input").value;
    if (charTarget === "" || heightTarget === "") {
        alert("Be sure to fill in the height and the character you would like to use!");
    }
    var newTree = new MakeTreeObject(parseInt(heightTarget), charTarget);
    sprout(newTree.height, newTree.char);
}
function sprout(num, char) {
    var topper = char;
    var j = 1;
    var space = " ";
    for (var i = 0; i < num; i++) {
        console.log(space.repeat((num - i) - 1) + topper);
        topper = char.repeat(j += 2);
    }
}
