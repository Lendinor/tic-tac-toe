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

function wincondition()
{
  var line = document.createElementNS(namespace, "line")
  if(ulclicked == 1 && umclicked == 1 && urclicked == 1 || mlclicked == 1 && mclicked == 1 && mrclicked == 1 || blclicked == 1 && bmclicked == 1 && brclicked == 1 || ulclicked == 1 && mlclicked == 1 && blclicked == 1 || umclicked == 1 && mclicked == 1 && bmclicked == 1 || urclicked == 1 && mrclicked == 1 && brclicked == 1 || ulclicked == 1 && mclicked == 1 && brclicked == 1 || urclicked == 1 && mclicked == 1 && blclicked == 1)
  {
    if(ulclicked == 1 && umclicked == 1 && urclicked == 1)
    {
        line.setAttribute("x1", 50)
        line.setAttribute("y1", 50)
        line.setAttribute("x2", 250)
        line.setAttribute("y2", 50)
        line.setAttribute("stroke", "green")
        line.setAttribute("stroke-width", 5)
    } else if(mlclicked == 1 && mclicked == 1 && mrclicked == 1)
        {
          line.setAttribute("x1", 50)
          line.setAttribute("y1", 150)
          line.setAttribute("x2", 250)
          line.setAttribute("y2", 150)
          line.setAttribute("stroke", "green")
          line.setAttribute("stroke-width", 5)
        } else if(blclicked == 1 && bmclicked == 1 && brclicked == 1)
        {
          line.setAttribute("x1", 50)
          line.setAttribute("y1", 250)
          line.setAttribute("x2", 250)
          line.setAttribute("y2", 250)
          line.setAttribute("stroke", "green")
          line.setAttribute("stroke-width", 5)
        } else if(ulclicked == 1 && mlclicked == 1 && blclicked == 1)
        {
          line.setAttribute("x1", 50)
          line.setAttribute("y1", 50)
          line.setAttribute("x2", 50)
          line.setAttribute("y2", 250)
          line.setAttribute("stroke", "green")
          line.setAttribute("stroke-width", 5)
        } else if(umclicked == 1 && mclicked == 1 && bmclicked == 1)
        {
          line.setAttribute("x1", 150)
          line.setAttribute("y1", 50)
          line.setAttribute("x2", 150)
          line.setAttribute("y2", 250)
          line.setAttribute("stroke", "green")
          line.setAttribute("stroke-width", 5)
        } else if(urclicked == 1 && mrclicked == 1 && brclicked == 1)
        {
          line.setAttribute("x1", 250)
          line.setAttribute("y1", 50)
          line.setAttribute("x2", 250)
          line.setAttribute("y2", 250)
          line.setAttribute("stroke", "green")
          line.setAttribute("stroke-width", 5)
        } else if(ulclicked == 1 && mclicked == 1 && brclicked == 1)
        {
          line.setAttribute("x1", 50)
          line.setAttribute("y1", 50)
          line.setAttribute("x2", 250)
          line.setAttribute("y2", 250)
          line.setAttribute("stroke", "green")
          line.setAttribute("stroke-width", 5)
        } else if (urclicked == 1 && mclicked == 1 && blclicked == 1)
        {
          line.setAttribute("x1", 250)
          line.setAttribute("y1", 50)
          line.setAttribute("x2", 50)
          line.setAttribute("y2", 250)
          line.setAttribute("stroke", "green")
          line.setAttribute("stroke-width", 5)
        }
    alert("Player 1 Wins")
  }
  else if(ulclicked == 2 && umclicked == 2 && urclicked == 2 || mlclicked == 2 && mclicked == 2 && mrclicked == 2 || blclicked == 2 && bmclicked == 2 && brclicked == 2 || ulclicked == 2 && mlclicked == 2 && blclicked == 2 ||umclicked == 2 && mclicked == 2 && bmclicked == 2 || urclicked == 2 && mrclicked == 2 && brclicked == 2 || ulclicked == 2 && mclicked == 2 && brclicked == 2 || urclicked == 2 && mclicked == 2 && blclicked == 2)
    {
      if(ulclicked == 2 && umclicked == 2 && urclicked == 2)
      {
          line.setAttribute("x1", 50)
          line.setAttribute("y1", 50)
          line.setAttribute("x2", 250)
          line.setAttribute("y2", 50)
          line.setAttribute("stroke", "green")
          line.setAttribute("stroke-width", 5)
      } else if(mlclicked == 2 && mclicked == 2 && mrclicked == 2)
          {
            line.setAttribute("x1", 50)
            line.setAttribute("y1", 150)
            line.setAttribute("x2", 250)
            line.setAttribute("y2", 150)
            line.setAttribute("stroke", "green")
            line.setAttribute("stroke-width", 5)
          } else if(blclicked == 2 && bmclicked == 2 && brclicked == 2)
          {
            line.setAttribute("x1", 50)
            line.setAttribute("y1", 250)
            line.setAttribute("x2", 250)
            line.setAttribute("y2", 250)
            line.setAttribute("stroke", "green")
            line.setAttribute("stroke-width", 5)
          } else if(ulclicked == 2 && mlclicked == 2 && blclicked == 2)
          {
            line.setAttribute("x1", 50)
            line.setAttribute("y1", 50)
            line.setAttribute("x2", 50)
            line.setAttribute("y2", 250)
            line.setAttribute("stroke", "green")
            line.setAttribute("stroke-width", 5)
          } else if(umclicked == 2 && mclicked == 2 && bmclicked == 2)
          {
            line.setAttribute("x1", 150)
            line.setAttribute("y1", 50)
            line.setAttribute("x2", 150)
            line.setAttribute("y2", 250)
            line.setAttribute("stroke", "green")
            line.setAttribute("stroke-width", 5)
          } else if(urclicked == 2 && mrclicked == 2 && brclicked == 2)
          {
            line.setAttribute("x1", 250)
            line.setAttribute("y1", 50)
            line.setAttribute("x2", 250)
            line.setAttribute("y2", 250)
            line.setAttribute("stroke", "green")
            line.setAttribute("stroke-width", 5)
          } else if(ulclicked == 2 && mclicked == 2 && brclicked == 2)
          {
            line.setAttribute("x1", 50)
            line.setAttribute("y1", 50)
            line.setAttribute("x2", 250)
            line.setAttribute("y2", 250)
            line.setAttribute("stroke", "green")
            line.setAttribute("stroke-width", 5)
          } else if (urclicked == 2 && mclicked == 2 && blclicked == 2)
          {
            line.setAttribute("x1", 250)
            line.setAttribute("y1", 50)
            line.setAttribute("x2", 50)
            line.setAttribute("y2", 250)
            line.setAttribute("stroke", "green")
            line.setAttribute("stroke-width", 5)
          }
               alert("Player 2 Wins")
    }
            canvas.appendChild(line)
}

function stuff()
{
  if(ulclicked == 1 || umclicked == 1 || urclicked == 1 || mlclicked == 1 || mclicked == 1 || mrclicked == 1 || blclicked == 1 || bmclicked == 1 || brclicked == 1)
  {
    alert("This space is already filled. Please choose another.")
  }
  if(ulclicked == 2 || umclicked == 2 || urclicked == 2 || mlclicked == 2 || mclicked == 2 || mrclicked == 2 || blclicked == 2 || bmclicked == 2 || brclicked == 2)
  {
    alert("This space is already filled. Please choose another.")
  }

}

function reset()
{
  location.reload(true)
}

function skipTurn()
{
  if(currentPlayer == 1)
  {
    currentPlayer =2
  }
  else if(currentPlayer == 2)
  {
    currentPlayer = 1
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
      var circle2 = document.createElementNS(namespace, "circle")
        circle2.setAttribute("cx", 50)
        circle2.setAttribute("cy", 50)
        circle2.setAttribute("r", 25)
        circle2.setAttribute("fill", "blue")
        circle2.setAttribute("onclick", "stuff()")
        canvas.appendChild(circle2)

      ulclicked = 2
      currentPlayer = 1
    }
 }else
 {
   alert("This space is already filled. Please choose another.")
 }
 wincondition()
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
        var circle2 = document.createElementNS(namespace, "circle")
          circle2.setAttribute("cx", 150)
          circle2.setAttribute("cy", 50)
          circle2.setAttribute("r", 25)
          circle2.setAttribute("fill", "blue")
          circle2.setAttribute("onclick", "stuff()")
          canvas.appendChild(circle2)

        umclicked = 2
        currentPlayer = 1
      }
   }else
   {
     alert("This space is already filled. Please choose another.")
   }
wincondition()
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
        var circle2 = document.createElementNS(namespace, "circle")
          circle2.setAttribute("cx", 250)
          circle2.setAttribute("cy", 50)
          circle2.setAttribute("r", 25)
          circle2.setAttribute("fill", "blue")
          circle2.setAttribute("onclick", "stuff()")
          canvas.appendChild(circle2)

        urclicked = 2
        currentPlayer = 1
      }
   }else
   {
     alert("This space is already filled. Please choose another.")
   }
wincondition()
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
        var circle2 = document.createElementNS(namespace, "circle")
          circle2.setAttribute("cx", 50)
          circle2.setAttribute("cy", 150)
          circle2.setAttribute("r", 25)
          circle2.setAttribute("fill", "blue")
          circle2.setAttribute("onclick", "stuff()")
          canvas.appendChild(circle2)

        mlclicked = 2
        currentPlayer = 1
      }
   }else
   {
     alert("This space is already filled. Please choose another.")
   }
wincondition()
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
        var circle2 = document.createElementNS(namespace, "circle")
          circle2.setAttribute("cx", 150)
          circle2.setAttribute("cy", 150)
          circle2.setAttribute("r", 25)
          circle2.setAttribute("fill", "blue")
          circle2.setAttribute("onclick", "stuff()")
          canvas.appendChild(circle2)

        mclicked = 2
        currentPlayer = 1
      }
   }else
   {
     alert("This space is already filled. Please choose another.")
   }
   wincondition()
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
        var circle2 = document.createElementNS(namespace, "circle")
          circle2.setAttribute("cx", 250)
          circle2.setAttribute("cy", 150)
          circle2.setAttribute("r", 25)
          circle2.setAttribute("fill", "blue")
          circle2.setAttribute("onclick", "stuff()")
          canvas.appendChild(circle2)

        mrclicked = 2
        currentPlayer = 1
      }
   }else
   {
     alert("This space is already filled. Please choose another.")
   }
   wincondition()
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
        var circle2 = document.createElementNS(namespace, "circle")
          circle2.setAttribute("cx", 50)
          circle2.setAttribute("cy", 250)
          circle2.setAttribute("r", 25)
          circle2.setAttribute("fill", "blue")
          circle2.setAttribute("onclick", "stuff()")
          canvas.appendChild(circle2)

        blclicked = 2
        currentPlayer = 1
      }
   }else
   {
     alert("This space is already filled. Please choose another.")
   }
   wincondition()
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
        var circle2 = document.createElementNS(namespace, "circle")
          circle2.setAttribute("cx", 150)
          circle2.setAttribute("cy", 250)
          circle2.setAttribute("r", 25)
          circle2.setAttribute("fill", "blue")
          circle2.setAttribute("onclick", "stuff()")
          canvas.appendChild(circle2)

        bmclicked = 2
        currentPlayer = 1
      }
   }else
   {
     alert("This space is already filled. Please choose another.")
   }
   wincondition()
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
        var circle2 = document.createElementNS(namespace, "circle")
          circle2.setAttribute("cx", 250)
          circle2.setAttribute("cy", 250)
          circle2.setAttribute("r", 25)
          circle2.setAttribute("fill", "blue")
          circle2.setAttribute("onclick", "stuff()")
          canvas.appendChild(circle2)

        brclicked = 2
        currentPlayer = 1
      }
   }else
   {
     alert("This space is already filled. Please choose another.")
   }
   wincondition()
}
