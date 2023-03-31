let image = document.querySelector("img").src

async function loadDogImage(){
    const req = await fetch("https://dog.ceo/api/breed/chow/images/random");
    const json = await req.json();
    const image = document.querySelector('img');
    image.src = json.message
}

loadDogImage();



