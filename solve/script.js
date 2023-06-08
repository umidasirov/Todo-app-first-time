
let nsf = document.getElementById('btn')
    nsf.addEventListener('click', () =>{
        let tr = document.createElement('tr')
        let th = document.createElement('th')
        let tg = document.createElement('th')
        let tj = document.createElement('th')
    let nam = document.getElementById('nam')
        console.log(nam.value)
    let author = document.getElementById('author')
    let year = document.getElementById('year')
    const Name = document.createTextNode(nam.value);
    const Author = document.createTextNode(author.value);
    const Year = document.createTextNode(year.value);
    th.appendChild(Name)
        tg.appendChild(Author)
        tg.classList.add('tg')
        tj.classList.add('tj')
        th.classList.add('th')
        tj.appendChild(Year)
        tr.appendChild(th),tr.appendChild(tg),tr.appendChild(th),tr.appendChild(tj)
    document.getElementById('tab').appendChild(tr)
        nam.value = ''
        year.value = ''
        author.value = ''
})
console.log(a)