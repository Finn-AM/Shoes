function dragStart(e) {
  e.target.classList.add('dragging');
  e.dataTransfer.setData('text/plain', e.target.id);
  e.dataTransfer.dropEffect = 'copy';
  // e.currentTarget.style.transform = 'scale(0.8)';
}
function drop(e) {
  e.preventDefault();
  let draggableId = e.dataTransfer.getData('text');
  let droppable = e.currentTarget;
  let draggable = document.getElementById(draggableId);
  draggable.classList.remove('dragging');
  let droppableArea = window.getComputedStyle(droppable).gridArea;
  let draggableArea = window.getComputedStyle(draggable).gridArea;
  draggable.style.gridArea = droppableArea;
  droppable.style.gridArea = draggableArea;
  gsap.from(draggable, { scale: 1.2 });
}

function dragover(e) {
  e.preventDefault();
  // e.currentTarget.style.transform = 'scale(0.8)';
}

function setup() {
  let els = document.querySelectorAll('.editable');
  els.forEach(function (el) {
    el.draggable = true;
    el.ondragstart = dragStart;
    el.ondrop = drop;
    el.ondragover = dragover;
  });
}

setup();
