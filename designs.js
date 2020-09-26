const colorPicker = $('#colorPicker');
const inputHeight = $('#inputHeight');
const inputWidth = $('#inputWidth');
const tableElement = $('#pixelCanvas');

// Select color input
function addCellClickListener() {
  $('td').on( "click", event => {
    let color = colorPicker.val();
    $(event.currentTarget).css("background-color", color)
  });
}

// Select size input
$('#sizePicker').on("submit", event =>{
  event.preventDefault();

  let width = inputWidth.val();
  let height = inputHeight.val();

  tableElement.html(''); //clear

  makeGrid(width, height);
  addCellClickListener();
});

// When size is submitted by the user, call makeGrid()
function makeGrid(width, height) {
  for(let i = 0; i < height; i++) {
    tableElement.append('<tr></tr>');
  };

  for(let i = 0; i < width; i++) {
    $('tr').append('<td></td>');
  };
}
