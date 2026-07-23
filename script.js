// Loader
setTimeout(() => {
    document.getElementById("loader").style.display = "none";
}, 3000);

// Elements
const startBtn = document.getElementById("startBtn");
const story = document.querySelector(".story");
const gift = document.querySelector(".gift");
const letter = document.querySelector(".letter");
const nextBtn = document.getElementById("next");
const giftBox = document.getElementById("giftBox");
const typing = document.getElementById("typing");

// Story Text
const text = `Sometimes...
A person doesn't need to know who made something...

They only need to smile.

Today isn't about grand words.

It's simply a small surprise wishing you happiness, success and countless beautiful memories.

Happy Birthday, Hamna. 🌸`;

let index = 0;

function typeWriter() {
    if (index < text.length) {
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 35);
    }
}

// Start Journey
startBtn.onclick = () => {
    document.querySelector(".hero").style.display = "none";
    story.classList.remove("hidden");
    typeWriter();
};

// Open Gift
nextBtn.onclick = () => {
    story.style.display = "none";
    gift.classList.remove("hidden");
};

// Final Letter
giftBox.onclick = () => {

    gift.style.display = "none";

    letter.classList.remove("hidden");

    createHearts();

};

// Floating Hearts
function createHearts() {

    for (let i = 0; i < 80; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.top = "-50px";

        heart.style.fontSize = (20 + Math.random() * 30) + "px";

        heart.style.animation = `fall ${3 + Math.random() * 4}s linear`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);

    }

}

// Falling Animation
const style = document.createElement("style");

style.innerHTML = `
@keyframes fall{

0%{
transform:translateY(-50px) rotate(0deg);
opacity:1;
}

100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}

}
`;

document.head.appendChild(style);
