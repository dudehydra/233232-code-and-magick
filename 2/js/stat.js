window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgb(0, 0, 255)'
  ctx.strokeStyle = 'rgba(25, 25, 115, 1.0)'
  ctx.fillRect(125, 30, 500, 250)
  ctx.strokeRect(125, 30, 500, 250)

  ctx.fillStyle = 'rgba(0, 0, 255, 0.6)'
  ctx.fillRect(133, 38, 500, 250)

  ctx.fillStyle = 'rgba(50, 205, 50, 0.8)'
  ctx.font = '25px PT Mono bold'
  ctx.fillText('Congratulations, You win!', 240, 60)

  var names = ['Вы', 'Кекс', 'Катя', 'Игорь']
  var times = [2725, 4025, 1244, 1339]

  var max = -1
  var maxIndex = -1
  for (var i = 0; i < times.length; i++) {
    var time = times[i]
    if (time > max) {
      max = time
      maxIndex = i
    }
  }

  var histogramHeigth = 100
  var step = histogramHeigth / (max - 0)

  ctx.fillStyle = 'rgba(169, 29, 17, 0.9)'
  ctx.font = '20px PT Mono bold'
  ctx.fillText('Score: ' + max + ' in player ' + names[maxIndex], 190, 100)

  var initialX = 230 // px;
  var initialY = 250 // px;
  var indent = 80 // px;
  var columnWidth = 40 // px;
  var lineHeight = 20// px;

  for (var i = 0; i < times.length; i++) {
    ctx.fillRect(initialX + indent * i, initialY - times[i] * step, columnWidth, times[i] * step)
    ctx.fillText(names[i], initialX + indent * i, initialY + lineHeight)
    ctx.fillText(times[i], initialX + indent * i, initialY - lineHeight - times[i] * step)
  }
}
