// slider changes differenr properties of the image

const input = document.querySelectorAll('.edit input');
const opacitySlider = document.querySelectorAll('.opacity-slider');
const colorPicker = document.querySelectorAll('.color-picker');
const blend = document.querySelectorAll('select');



function update() {

    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(this.name);
}




input.forEach(input => input.addEventListener('change', update));
input.forEach(input => input.addEventListener('mousemove', update));

opacitySlider.forEach(input => input.addEventListener('change', update));
opacitySlider.forEach(input => input.addEventListener('mousemove', update));

colorPicker.forEach(input => input.addEventListener('change', update));
colorPicker.forEach(input => input.addEventListener('mousemove', update));

blend.forEach(input => input.addEventListener('change', update));
blend.forEach(input => input.addEventListener('mousemove', update));




// open file and put image into image tags
function previewFile() {
    var preview = document.querySelector('.user-image'); //selects the query named img
    var file = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}

// enter cut file name into span

var fileInput = document.getElementById("file");

fileInput.addEventListener('change', function() {


    var file = fileInput.value.split("\\");
    var fileName = file[file.length - 1];

    console.log(fileName);

    var fileSpan = document.querySelector(".file-btn span");
    console.log(fileSpan);
    fileSpan.textContent = fileName;

})

//reset button

var resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', reset)

function reset(){

  var rstBlur = document.querySelector('#blur');
  rstBlur.value = 0;
  document.documentElement.style.setProperty('--blur', 0);

  var rstGray = document.querySelector('#grayscale');
  rstGray.value = 0;
  document.documentElement.style.setProperty('--grayscale', 0);

  var rstSepia = document.querySelector('#sepia');
  rstSepia.value = 0;
  document.documentElement.style.setProperty('--sepia', 0);

  var rstSat = document.querySelector('#saturate');
  rstSat.value = 1;
  document.documentElement.style.setProperty('--saturate', 1);

  var rstInv = document.querySelector('#invert');
  rstInv.value = 0;
  document.documentElement.style.setProperty('--invert', 0);

  var rstBrig = document.querySelector('#brightness');
  rstBrig.value = 1;
  document.documentElement.style.setProperty('--brightness', 1);

  var rstContrast = document.querySelector('#contrast');
  rstContrast.value = 1;
  document.documentElement.style.setProperty('--contrast', 1);

  var rstHue = document.querySelector('#hue');
  rstHue.value = 0;
  document.documentElement.style.setProperty('--hue', 0);

  var rstSpace = document.querySelector('#spacing');
  rstSpace.value = 0;
  document.documentElement.style.setProperty('--spacing', 0);

//color reset
  var rstBase = document.querySelectorAll('.color-picker');
  for(var i = 0; i < rstBase.length; i++){
      rstBase[i].value = '#ffc600';
  }
  document.documentElement.style.setProperty('--base', '#ffc600');

  //overlay reset

  var rstOpacity = document.querySelectorAll('.opacity-slider');


  for(var i = 0; i < rstOpacity.length; i++){
    rstOpacity[i].value = 0;
  }
  document.documentElement.style.setProperty('--opacity', 0);

};


// radio button show/hide

var radio = document.querySelectorAll('input[type="radio"]');

radio.forEach(radioBtn => radioBtn.addEventListener('change', function(){

  var radioChecked = document.querySelector('input[type="radio"]:checked');

  var id = radioChecked.id;


  var solid = document.querySelector('.solid-option');
  var linear = document.querySelector('.linear-option');
  var radial = document.querySelector('.radial-option');

  var solidOverlay = document.querySelector('.solid-overlay');
  var linearOverlay = document.querySelector('.linear-overlay');
  var radialOverlay = document.querySelector('.radial-overlay');



  switch(id){
    case 'o-none':
                        solid.style.display = "none";
                        linear.style.display = "none";
                        radial.style.display = "none";
                        solidOverlay.style.display = "none";
                        linearOverlay.style.display = "none";
                        radialOverlay.style.display = "none";
                        reset();
                        break;
    case 'o-solid':
                        solid.style.display = "flex";
                        linear.style.display = "none";
                        radial.style.display = "none";
                        solidOverlay.style.display = "block";
                        linearOverlay.style.display = "none";
                        radialOverlay.style.display = "none";
                        reset();
                        break;
    case 'o-linear':
                        solid.style.display = "none";
                        linear.style.display = "flex";
                        radial.style.display = "none";
                        solidOverlay.style.display = "none";
                        linearOverlay.style.display = "block";
                        radialOverlay.style.display = "none";
                        reset();
                        break;
    case 'o-radial':
                        solid.style.display = "none";
                        linear.style.display = "none";
                        radial.style.display = "flex";
                        solidOverlay.style.display = "none";
                        linearOverlay.style.display = "none";
                        radialOverlay.style.display = "block";
                        reset();
                        break;
  }


}));


var arrow = document.querySelectorAll('.arrow');

arrow.forEach(arrow => arrow.addEventListener('click', function(){

  var editCard = document.querySelector('.edit');
  var instaCard = document.querySelector('.instagram');

if(editCard.style.display == 'flex'){
  editCard.style.display = 'none';
  instaCard.style.display = 'flex';
}
else{
  instaCard.style.display = 'none';
  editCard.style.display = 'flex';
}




}));
