window.onload = () => {

    //1.1
    const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
    let ul = document.createElement("ul")
    countries.forEach((item) => {
        let li = document.createElement("li")
        li.innerHTML = item
        ul.appendChild(li)
    })
    document.body.append(ul)


    //1.2
    let borrados = document.querySelector(".fn-remove-me")
    borrados.remove()

    //1.3
    const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
    let divTarget = document.querySelector('[data-function="printHere"]')
    let newUl = document.createElement("ul")
    
    cars.forEach((item) => {
        let li = document.createElement("li")
        li.innerHTML = item
        newUl.appendChild(li)
    })
    divTarget.appendChild(newUl)
    
    //1.4
    const otherCountries = [
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
    ];
    
    otherCountries.forEach((item) => {
        let newDivs = document.createElement("div")
        let h4 = document.createElement("h4")
        h4.innerHTML = item.title
        newDivs.appendChild(h4)
        let img = document.createElement("img")
        img.innerHTML = item.imgUrl
        newDivs.appendChild(img) 
        
        
        document.body.append(newDivs)

       
    })
    
    //1.5 
    
    let btnRemover = document.createElement("button")
    btnRemover.innerHTML = 'Borra el último'
    btnRemover.addEventListener("click", () => {
        
    })
    
    document.body.append(btnRemover)
      
}