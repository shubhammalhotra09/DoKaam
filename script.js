const form = document.getElementById("form");
const input = document.getElementById("input");
const kaamsUl = document.getElementById("kaams");

const kaams = JSON.parse(localStorage.getItem('kaams'));

if (kaams){
    kaams.forEach(kaam => {
        addkaam(kaam)
    });
}

form.addEventListener("submit",(e) => {
    e.preventDefault();

    addkaam();

});

function addkaam(kaam) {
    let kaamText = input.value;

    if(kaam){
        kaamText = kaam.text;
    }  

    if (kaamText) {
        const kaamEl = document.createElement
        ('li');
        
        if(kaam && kaam.completed) {
            kaamEl.classList.add('completed');
        }  

        kaamEl.innerText = kaamText;

        kaamEl.addEventListener('click',() =>{
            kaamEl.classList.toggle('completed')

            updateLS();
        });

        kaamEl.addEventListener("contextmenu",
        (e) => {
            e.preventDefault();

            kaamEl.remove();

            updateLS();
        });

        kaamsUl.appendChild(kaamEl);

        input.value=" ";
        
        updateLS();

        }

    

}

function updateLS() {
    const kaamsEl = document.querySelectorAll('li');

    const kaams =[];

    kaamsEl.forEach((kaamEl) => {
        kaams.push({
            text: kaamEl.innerText,
            completed: kaamEl.classList.contains
            ('completed')
        })
    
    });

    localStorage.setItem('kaams',JSON.stringify(kaams));
} 