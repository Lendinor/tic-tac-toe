// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var canvas = getElementById("game-board")

var currentPlayer = 1

var ulclicked = 0
var umclicked = 0
var urclicked = 0
var mlclicked = 0
var mclicked = 0
var mrclicked = 0
var blclicked = 0
var bmclicked = 0
var brclicked = 0



function ul()
{

if(ulclicked == 0)
  {
  if(currentPlayer == 1)
    {
    var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", 50)
      circle.setAttribute("cy", 50)
      circle.setAttribute("r", 12.5)
      circle.setAttribute("fill", "red")
      canvas.appendChild(circle)

      ulclicked = 1
      currentPlayer = 2
    }
 }
}
function um()
{

}
function ur()
{

}

function ml()
{

}
function m()
{

}
function mr()
{

}

function bl()
{

}
function bm()
{

}
function br()
{

}
