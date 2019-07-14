// Select color input
// Select size input

// Variable setup
const message = 'This is a Pixel art maker. You can draw what you' +
    'want here by choosing color and canvas size. Enjoy yourself!';
let gridWidth, gridHeight;
alert(message);

//Store width and height info and make grids
$('#sizePicker').submit(function (event) {
    gridHeight = document.getElementById("inputHeight").value;
    gridWidth = $('#inputWidth').val();
    event.preventDefault();
    makeGrid(gridHeight, gridWidth);
});


function makeGrid(h, w) {
    // @grid: single square
    // @smallGrids: all the grids
    var grid, smallGrids;
    //remove old grids
    var oldGrids = document.querySelectorAll('tr');
    oldGrids.forEach(function (element) {
        element.remove();
    });

    //Generate h*w grids
    for (var i = 1; i <= h; i++) {
        $('#pixelCanvas').append('<tr id = grid' + i + '></tr>');
        for (var j = 1; j <= w; j++) {
            $('#grid' + i).append('<td></td>');
        }
    }

    //Store all the grid information in 'smallGrids'  
    smallGrids = document.querySelectorAll('td');

    //Set up a loop for each small square
    for (var k = 0; k < h * w; k++) {
        grid = smallGrids[k];
        //Reflect on 'click' for each suqare by adding function
        grid.addEventListener('click', function () {
            //Get color from input
            var color = $('#colorPicker').val();
            console.log(grid);
            //Change color
            $(this).css('background-color', color);
        });
    }
}


/*
 * Another better option£º first create row, and then append 'td', 
 * finally append the square to pixel canvas.
 * 
for (let c = 0; c < width.value; c++) {
    var cell = document.createElement("td");
    cell.addEventListener("click", function (e) {
        e.target.style.backgroundColor = color.value;
    });
    row.appendChild(cell);
}
*/