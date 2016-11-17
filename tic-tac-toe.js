// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var canvas = document.getElementById("game-board")

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

function stuff()
{
  if(ulclicked == 1 || umclicked == 1 || urclicked == 1 || mlclicked == 1 || mclicked == 1 || mrclicked == 1 || blclicked == 1 || bmclicked == 1 || brclicked == 1)
  {
    alert("This space is already filled. Please choose another.")
  }
}




function reset()
{
 if(currentPlayer == 1)
 {
   currentPlayer = 0
 }else
  {
    currentPlayer = 2
  }
}

function ul()
{
if(ulclicked == 0)
  {
  if(currentPlayer == 1)
    {
    var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", 50)
      circle.setAttribute("cy", 50)
      circle.setAttribute("r", 25)
      circle.setAttribute("fill", "red")
      circle.setAttribute("onclick", "stuff()")
      canvas.appendChild(circle)

      ulclicked = 1
      currentPlayer = 2
    }else if(currentPlayer == 2)
    {
      var rect = document.createElementNs(namespace, "rect")
      rect.setAttribute("x", 50)
      rect.setAttribute("y", 50)
      rect.setAttribute("height", 50)
      rect.setAttribute("width", 50)
      rect.setAttribute("fill", "blue")
      rect.setAttribute("onclick", "stuff()")
      canvas.appendChild(rect)

      ulclicked = 1
      currentPlayer = 1
    }
 }else
 {
   alert("This space is already filled. Please choose another.")
 }
}

function um()
{
  if(umclicked == 0)
    {
    if(currentPlayer == 1)
      {
      var circle = document.createElementNS(namespace, "circle")
        circle.setAttribute("cx", 150)
        circle.setAttribute("cy", 50)
        circle.setAttribute("r", 25)
        circle.setAttribute("fill", "red")
        circle.setAttribute("onclick", "stuff()")
        canvas.appendChild(circle)

        umclicked = 1
        currentPlayer = 2
      }else if(currentPlayer == 2)
      {
        var rect = document.createElementNs(namespace, "rect")
        rect.setAttribute("x", 150)
        rect.setAttribute("y", 50)
        rect.setAttribute("height", 50)
        rect.setAttribute("width", 50)
        rect.setAttribute("fill", "blue")
        rect.setAttribute("onclick", "stuff()")
        canvas.appendChild(rect)

        umclicked = 1
        currentPlayer = 1
      }
   }else
   {
     alert("This space is already filled. Please choose another.")
   }

}

function ur()
{
  if(urclicked == 0)
    {
    if(currentPlayer == 1)
      {
      var circle = document.createElementNS(namespace, "circle")
        circle.setAttribute("cx", 250)
        circle.setAttribute("cy", 50)
        circle.setAttribute("r", 25)
        circle.setAttribute("fill", "red")
        circle.setAttribute("onclick", "stuff()")
        canvas.appendChild(circle)

        urclicked = 1
        currentPlayer = 2
      }else if(currentPlayer == 2)
      {
        var rect = document.createElementNs(namespace, "rect")
        rect.setAttribute("x", 250)
        rect.setAttribute("y", 50)
        rect.setAttribute("height", 50)
        rect.setAttribute("width", 50)
        rect.setAttribute("fill", "blue")
        rect.setAttribute("onclick", "stuff()")
        canvas.appendChild(rect)

        urclicked = 1
        currentPlayer = 1
      }
   }else
   {
     alert("This space is already filled. Please choose another.")
   }

}

function ml()
{
  if(mlclicked == 0)
    {
    if(currentPlayer == 1)
      {
      var circle = document.createElementNS(namespace, "circle")
        circle.setAttribute("cx", 50)
        circle.setAttribute("cy", 150)
        circle.setAttribute("r", 25)
        circle.setAttribute("fill", "red")
        circle.setAttribute("onclick", "stuff()")
        canvas.appendChild(circle)

        mlclicked = 1
        currentPlayer = 2
      }else if(currentPlayer == 2)
      {
        var rect = document.createElementNs(namespace, "rect")
        rect.setAttribute("x", 50)
        rect.setAttribute("y", 150)
        rect.setAttribute("height", 50)
        rect.setAttribute("width", 50)
        rect.setAttribute("fill", "blue")
        rect.setAttribute("onclick", "stuff()")
        canvas.appendChild(rect)

        mlclicked = 1
        currentPlayer = 1
      }
   }else
   {
     alert("This space is already filled. Please choose another.")
   }

}

function m()
{
  if(mclicked == 0)
    {
    if(currentPlayer == 1)
      {
      var circle = document.createElementNS(namespace, "circle")
        circle.setAttribute("cx", 150)
        circle.setAttribute("cy", 150)
        circle.setAttribute("r", 25)
        circle.setAttribute("fill", "red")
        circle.setAttribute("onclick", "stuff()")
        canvas.appendChild(circle)

        mclicked = 1
        currentPlayer = 2
      }else if(currentPlayer == 2)
      {
        var rect = document.createElementNs(namespace, "rect")
        rect.setAttribute("x", 150)
        rect.setAttribute("y", 150)
        rect.setAttribute("height", 50)
        rect.setAttribute("width", 50)
        rect.setAttribute("fill", "blue")
        rect.setAttribute("onclick", "stuff()")
        canvas.appendChild(rect)

        mclicked = 1
        currentPlayer = 1
      }
   }else
   {
     alert("This space is already filled. Please choose another.")
   }
}

function mr()
{
  if(mrclicked == 0)
    {
    if(currentPlayer == 1)
      {
      var circle = document.createElementNS(namespace, "circle")
        circle.setAttribute("cx", 250)
        circle.setAttribute("cy", 150)
        circle.setAttribute("r", 25)
        circle.setAttribute("fill", "red")
        circle.setAttribute("onclick", "stuff()")
        canvas.appendChild(circle)

        mrclicked = 1
        currentPlayer = 2
      }else if(currentPlayer == 2)
      {
        var rect = document.createElementNs(namespace, "rect")
        rect.setAttribute("x", 250)
        rect.setAttribute("y", 150)
        rect.setAttribute("height", 50)
        rect.setAttribute("width", 50)
        rect.setAttribute("fill", "blue")
        rect.setAttribute("onclick", "stuff()")
        canvas.appendChild(rect)

        mrclicked = 1
        currentPlayer = 1
      }
   }else
   {
     alert("This space is already filled. Please choose another.")
   }
}

function bl()
{
  if(blclicked == 0)
    {
    if(currentPlayer == 1)
      {
      var circle = document.createElementNS(namespace, "circle")
        circle.setAttribute("cx", 50)
        circle.setAttribute("cy", 250)
        circle.setAttribute("r", 25)
        circle.setAttribute("fill", "red")
        circle.setAttribute("onclick", "stuff()")
        canvas.appendChild(circle)

        blclicked = 1
        currentPlayer = 2
      }else if(currentPlayer == 2)
      {
        var rect = document.createElementNs(namespace, "rect")
        rect.setAttribute("x", 50)
        rect.setAttribute("y", 250)
        rect.setAttribute("height", 50)
        rect.setAttribute("width", 50)
        rect.setAttribute("fill", "blue")
        rect.setAttribute("onclick", "stuff()")
        canvas.appendChild(rect)

        blclicked = 1
        currentPlayer = 1
      }
   }else
   {
     alert("This space is already filled. Please choose another.")
   }
}

function bm()
{
  if(bmclicked == 0)
    {
    if(currentPlayer == 1)
      {
      var circle = document.createElementNS(namespace, "circle")
        circle.setAttribute("cx", 150)
        circle.setAttribute("cy", 250)
        circle.setAttribute("r", 25)
        circle.setAttribute("fill", "red")
        circle.setAttribute("onclick", "stuff()")
        canvas.appendChild(circle)

        bmclicked = 1
        currentPlayer = 2
      }else if(currentPlayer == 2)
      {
        var rect = document.createElementNs(namespace, "rect")
        rect.setAttribute("x", 150)
        rect.setAttribute("y", 250)
        rect.setAttribute("height", 50)
        rect.setAttribute("width", 50)
        rect.setAttribute("fill", "blue")
        rect.setAttribute("onclick", "stuff()")
        canvas.appendChild(rect)

        bmclicked = 1
        currentPlayer = 1
      }
   }else
   {
     alert("This space is already filled. Please choose another.")
   }
}

function br()
{
  if(brclicked == 0)
    {
    if(currentPlayer == 1)
      {
      var circle = document.createElementNS(namespace, "circle")
        circle.setAttribute("cx", 250)
        circle.setAttribute("cy", 250)
        circle.setAttribute("r", 25)
        circle.setAttribute("fill", "red")
        circle.setAttribute("onclick", "stuff()")
        canvas.appendChild(circle)

        brclicked = 1
        currentPlayer = 2
      }else if(currentPlayer == 2)
      {
        var rect = document.createElementNs(namespace, "rect")
        rect.setAttribute("x", 250)
        rect.setAttribute("y", 250)
        rect.setAttribute("height", 50)
        rect.setAttribute("width", 50)
        rect.setAttribute("fill", "blue")
        rect.setAttribute("onclick", "stuff()")
        canvas.appendChild(rect)

        brclicked = 1
        currentPlayer = 1
      }
   }else
   {
     alert("This space is already filled. Please choose another.")
   }
}
