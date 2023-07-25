
$('.dw').mousedown(function(event) {

  var dw = this;

  let shiftX = event.clientX - dw.getBoundingClientRect().left;
  let shiftY = event.clientY - dw.getBoundingClientRect().top;

  dw.style.position = 'absolute';
  dw.style.zIndex = 1000;
  document.body.append(dw);

  moveAt(event.pageX, event.pageY);

  dw.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    dw.onmouseup = null;
  };

  function moveAt(pageX, pageY) {
    dw.style.left = pageX - shiftX + 'px';
    dw.style.top = pageY - shiftY + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

});

dw.ondragstart = function() {
  return false;
};