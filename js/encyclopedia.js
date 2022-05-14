'use strict';

let menuEl = document.getElementById("encyclopedia");

let pets = []

function Pet(bread, text) {
    this.bread = bread;
    this.text = text;
    this.imgurl = `img/pets/${bread}.jpg`;

    pets.push(this);
}

//dogs

new Pet('Beagle', "Not only is the Beagle an excellent hunting dog and loyal companion, it is also happy-go-lucky, funny, and'¿thanks to its pleading expression'¿cute. They were bred to hunt in packs, so they enjoy company and are generally easygoing. There are two Beagle varieties: those standing under 13 inches at the shoulder, and those between 13 and 15 inches. Both varieties are sturdy, solid, and 'big for their inches,' as dog folks say. They come in such pleasing colors as lemon, red and white, and tricolor. The Beagle's fortune is in his adorable face, with its big brown or hazel eyes set off by long, houndy ears set low on a broad head. A breed described as 'merry' by its fanciers, Beagles are loving and lovable, happy, and companionable'¿all qualities that make them excellent family dogs. No wonder that for years the Beagle has been the most popular hound dog among American pet owners. These are curious, clever, and energetic hounds who require plenty of playtime. Adaptability ⭐⭐⭐");
new Pet('English_Bulldog', "Kind but courageous, friendly but dignified, the Bulldog is a thick-set, low-slung, well-muscled bruiser whose sourmug face is the universal symbol of courage and tenacity. These docile, loyal companions adapt well to town or country. You can not mistake a Bulldog for any other breed. The loose skin of the head, furrowed brow, pushed-in nose, small ears, undershot jaw with hanging chops on either side, and the distinctive rolling gait all practically scream Im a Bulldog! The coat, seen in a variety of colors and patterns, is short, smooth, and glossy. Bulldogs can weigh up to 50 pounds, but that won't stop them from curling up in your lap, or at least trying to. But don't mistake their easygoing ways for laziness'¿Bulldogs enjoy brisk walks and need regular moderate exercise, along with a careful diet, to stay trim. Summer afternoons are best spent in an air-conditioned room as a Bulldog is short snout can cause labored breathing in hot and humid weather. Adaptability ⭐⭐");
new Pet('German_Shepard', "Generally considered dogkind's finest all-purpose worker, the German Shepherd Dog is a large, agile, muscular dog of noble character and high intelligence. Loyal, confident, courageous, and steady, the German Shepherd is truly a dog lover's delight. German Shepherd Dogs can stand as high as 26 inches at the shoulder and, when viewed in outline, presents a picture of smooth, graceful curves rather than angles. The natural gait is a free-and-easy trot, but they can turn it up a notch or two and reach great speeds. There are many reasons why German Shepherds stand in the front rank of canine royalty, but experts say their defining attribute is character: loyalty, courage, confidence, the ability to learn commands for many tasks, and the willingness to put their life on the line in defense of loved ones. German Shepherds will be gentle family pets and steadfast guardians, but, the breed standard says, there's a 'certain aloofness that does not lend itself to immediate and indiscriminate friendships. Adaptability ⭐⭐⭐⭐")
new Pet('Golden_Retriever', "The Golden Retriever, an exuberant Scottish gundog of great beauty, stands among America's most popular dog breeds. They are serious workers at hunting and field work, as guides for the blind, and in search-and-rescue, enjoy obedience and other competitive events, and have an endearing love of life when not at work. The Golden Retriever is a sturdy, muscular dog of medium size, famous for the dense, lustrous coat of gold that gives the breed its name. The broad head, with its friendly and intelligent eyes, short ears, and straight muzzle, is a breed hallmark. In motion, Goldens move with a smooth, powerful gait, and the feathery tail is carried, as breed fanciers say, with a 'merry action.' The most complete records of the development of the Golden Retriever are included in the record books that were kept from 1835 until about 1890 by the gamekeepers at the Guisachan (pronounced Gooeesicun) estate of Lord Tweedmouth at Inverness-Shire, Scotland. These records were released to public notice in Country Life in 1952, when Lord Tweedmouth's great-nephew, the sixth Earl of Ilchester, historian and sportsman, published material that had been left by his ancestor. They provided factual confirmation to the stories that had been handed down through generations. Goldens are outgoing, trustworthy, and eager-to-please family dogs, and relatively easy to train. They take a joyous and playful approach to life and maintain this puppyish behavior into adulthood. These energetic, powerful gundogs enjoy outdoor play. For a breed built to retrieve waterfowl for hours on end, swimming and fetching are natural pastimes. Adaptability ⭐⭐⭐")
new Pet("Poodle", "Whether Standard, Miniature, or Toy, and either black, white, or apricot, the Poodle stands proudly among dogdom¿s true aristocrats. Beneath the curly, low-allergen coat is an elegant athlete and companion for all reasons and seasons.Poodles come in three size varieties: Standards should be more than 15 inches tall at the shoulder; Miniatures are 15 inches or under; Toys stand no more than 10 inches. All three varieties have the same build and proportions. At dog shows, Poodles are usually seen in the elaborate Continental clip. Most pet owners prefer the simpler Sporting clip, in which the coat is shorn to follow the outline of the squarely built, smoothly muscled body.  Forget any preconceived notions about Poodles you may have: Poodles are eager, athletic, and wickedly smart dogs of remarkable versatility. The Standard, with his greater size and strength, is the best all-around athlete of the family, but all Poodles can be trained with great success. Adaptability ⭐⭐⭐")

//cats



//fishes



//birds



function renderPet(petBreed) {
    menuEl.innerHTML = "";
    let ulEl = document.createElement('ul');
    menuEl.appendChild(ulEl);
    for (let i = 0; i < products.length; i++) {
        if (petBreed === pets[i].type) {
            let liEl = document.createElement('li');
            let imgEl = document.createElement('img');
            let textEl = document.createElement('text');

            let temName = '';
            for(let j = 0; j < pets[i].name.split('_').length; j++){
                temName += `${pets[i].name.split('_')[j]} `
            }

            spanEl.textContent = temName;
            imgEl.src = pets[i].imgurl;
            textEl.textContent = pets[i].text;
        }
    }
}


