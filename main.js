let texts = [
  "Surveying 90% of Americans...",
  "Gathering information from Facebook groups...",
  "Searching for answers from American scientists...",
  "Analyzing ancient cultural texts...",
  "Solving giant systems of equations...",
  "Searching every place in the world...",
  "Asking NASA to help...",
  "Searching for a TikTok expert on this subject...",
  'Putting up paper sheets that say "We have lost the person who asked, can you find them?"...',
];

function randomText(){
  let index = Math.floor(Math.random() * texts.length);
  let res = texts[index];

  texts.splice(index, 1); // remove

  return res;
}

function done(){
  $("#pre-kto").fadeOut();
  $("#after-kto").fadeIn();
}

$(document).ready(function(){
  $("#how-long").html(((Math.random() * 100) / 100 + 10).toFixed(5));

  // [sec]
  const INTERVAL = 2;
  const DURATION = 10

  let is_done = false;

  $("#progress-kto").animate({
    width: "100%"
  }, DURATION*1000);

  setTimeout(function(){
    done();
    is_done = true;
  }, DURATION*1000)

  setInterval(function(){
    if(is_done)
      return false;

    $("#text-random").html(randomText());
  }, INTERVAL*1000);
});
