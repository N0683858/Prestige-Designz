var ans =  null;
var boolean = true;
while (boolean) {
    ans = prompt("Are we there yet?");
    if ((ans === "yes" || ans === "yeah")){
        alert("Yay, we finally made it!")
        boolean = false;
    }
}