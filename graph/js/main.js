window.onload =  function() {
  changeGraph();
}


function changeGraph() {
  var c = document.getElementById("myCanvas");
  let context = c.getContext('2d');
  context.clearRect(0, 0, c.width, c.height);

  var yAxis = c.getContext("2d");
  yAxis.beginPath();
  yAxis.strokeStyle = 'black';
  yAxis.lineWidth = 2;
  yAxis.moveTo(400, 0);
  yAxis.lineTo(400, 400);
  yAxis.stroke();
  yAxis.closePath();

  var xAxis = c.getContext("2d");
  xAxis.beginPath();
  xAxis.strokeStyle = 'black';
  xAxis.lineWidth = 2;
  xAxis.moveTo(0, 200);
  xAxis.lineTo(800, 200);
  xAxis.stroke();
  xAxis.closePath();

  let m = document.getElementById("m").value;
  let b = document.getElementById("b").value;

  var line = c.getContext("2d");
  line.clearRect(0, 0, line.width, line.height);
  line.beginPath();
  line.strokeStyle = 'mediumorchid';
  line.lineWidth = 4;
  line.moveTo(400, 200 + (-400 * b));
  line.lineTo(800, 200 + (-400 * b) + (m * -400));
  line.lineTo(0, 200 + (-400 * b) + (m * 400));
  line.stroke();
  line.closePath();
}
