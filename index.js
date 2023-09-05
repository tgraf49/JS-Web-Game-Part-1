function newImage(src, bottom, left, position) {
let newImage = document.createElement('img');
newImage.src = src;
newImage.style.position = position;
newImage.style.left = left;
newImage.style.bottom = bottom;
document.body.append(newImage);
return newImage
}


newImage('assets/green-character.gif', '100px', '100px', 'fixed');
newImage('assets/pine-tree.png', '200px', '450px', 'fixed');
newImage('assets/tree.png', '300px', '200px', 'fixed');
newImage('assets/pillar.png', '100px', '350px', 'fixed');
newImage('assets/crate.png', '200px', '150px', 'fixed');
newImage('assets/well.png', '425px', '500px', 'fixed');

function newItem(src, bottom, left, position) {
    let item = newImage(src, bottom, left, position)

    item.addEventListener('dblclick', () => {
        item.remove()
    })
}

newItem('assets/sword.png', '405px', '500px', 'fixed')
newItem('assets/shield.png', '165px', '185px', 'fixed')
newItem('assets/staff.png', '600px', '100px', 'fixed')