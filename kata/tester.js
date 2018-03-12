function drawACross(n) {
  var cross = ''
  if (n < 3){
    return 'Not possible to draw cross for grids less than 3x3!'
  } else if (n%2 === 0){
    return 'Centered cross not possible'
  } else {

    for (i = 1; i < n/2; i++){
      cross += 'x'.padStart(i, ' ').padEnd(n-i, ' ') + 'x'.padEnd(i) + '\n'
    }

    cross += ('x'.padStart(n/2 + 1, ' ').padEnd(n, ' ')) + '\n'

    for (y = n/2; y > 1 ; y--){
      cross += 'x'.padStart(y, ' ').padEnd(n+1-y) + 'x'.padEnd(Math.abs(y)) + '\n'
    }
    console.log(cross)
  }
}

drawACross(25)
drawACross(3)
drawACross(7)