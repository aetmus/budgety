function dragstart_handler(e) {
  e.dataTransfer.setData('text/html', e.target.innerHTML);
  e.dataTransfer.dropEffect = 'move';
}

function dragover_handler(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function drop_handler(e) {
  e.preventDefault();
  let data = e.dataTransfer.getData('text/html');
  e.target.innerHTML = data;
  e.dataTransfer.dropEffect = "move";
}