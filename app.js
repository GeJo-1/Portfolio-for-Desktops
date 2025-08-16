document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e=> {
    const rect = card.getBoundingClientRect();

    card.style.setProperty('--x', '${e.clientX - rect.left}px');
    card.style.setProperty('--y', '${e.clientX - rect.top}px');
  })
})


const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const video4 = document.getElementById('projectVideo4');
const serviceVideo1 = document.getElementById('serviceVideo3');

const videoList = [video1,video2,video3,video4,serviceVideo3];

videoList.forEach (function(video){
  video.addEventListener("mouseover", function(){
    video.play()
  })
  video.addEventListener("mouseout", function(){
    video.pause()
  })
})

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" }
  });

  if (response.ok) {
    successMessage.style.display = "block";
    form.reset();
  } else {
    alert("Oops, something went wrong. Please try again.");
  }
});
