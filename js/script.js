document.title = "My New Page Title";
let section_2 = document.getElementsByClassName('section_2')
for (const iterator of section_2) {
	iterator.style.marginTop = '60px'
	iterator.style.width = '100%'
}

let mega = section_2[0].firstElementChild
mega.style.color = '#E7CB6'
mega.style.width = '85%'
mega.style.float = 'right'

let row = document.getElementsByClassName('row')
for (const iterator of row) {
	iterator.style.display = 'flex'
	iterator.style.paddingTop = '45px'
	iterator.style.justifyContent = 'space-evenly'
	iterator.style.alignItems = 'center'
	iterator.style.width = '80%'
	iterator.style.margin = '0 auto'
}

let Title = document.getElementsByClassName('miniTitle')
for (const iterator of Title) {
	iterator.style.color = 'red'
	iterator.style.marginTop = '10px'
}

let Text = document.getElementsByClassName('miniText')
for (const iterator of Text) {
	iterator.style.marginTop = '10px'
}

let elem = document.getElementsByClassName('childs')
for (const iterator of elem) {
	iterator.style.width = '250px'
	console.log(iterator.width)
}

let img = document.getElementsByClassName('imgs')
for (const iterator of img) {
	iterator.style.width = '250px'
}

let btn = document.getElementsByClassName('btn')
for (const iterator of btn) {
	iterator.style.marginTop = '20px'
	iterator.style.width = '84%'
}

let button = btn[1].lastElementChild
button.style.backgroundColor = '#B63335'
button.style.border = 'none'
button.style.color = 'white'
button.style.fontSize = '15.5px'
button.style.width = '110px'
button.style.height = '30px'
button.style.float = 'right'




