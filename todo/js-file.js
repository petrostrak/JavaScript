// Remove all the paragraphs that have the word 'the' in the text

const paragraph = document.querySelectorAll('p');

paragraph.forEach(function(p){
    if(p.textContent.includes('the')){
        p.remove();
    }
})