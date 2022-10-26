function a() {
  $("body").css("background-color", "red");
}

let b = function () {
  $("body").css("background-color", "blue");
};

$("section > button:nth-of-type(2n)").css("color", "red");

$("section > button:nth-of-type(odd)").click(a);

$("section > button:nth-of-type(even)").click(b);
