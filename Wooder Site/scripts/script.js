learnButton = document.getElementById('learnbutton');
learnArrow = document.getElementById('learnarrow');
learnText = document.getElementById('learntext')

learnButton.onmouseover = function() {
    learnArrow.classList.add('hover')
    learnText.classList.add('hover')
    learnButton.classList.add('hover')
}

learnButton.onmouseout = function() {
    learnArrow.classList.remove('hover')
    learnText.classList.remove('hover')
    learnButton.classList.remove('hover')
}
    
