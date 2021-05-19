
const wilugkay =[{"image":"./wilug1.JPEG","title":"wilug one","comment":"wilug in coal city rice mill Enugu"},{"image":"./wilug2.JPEG","title":"wilug two","comment":"wilug leaving for church service"},{"image":"./wilug3.JPEG","title":"wilug three","comment":"wilug at christ embersy church trans-ekulu enugu"},{"image":"./wilug4.JPEG","title":"wilug four","comment":"wilug in the village for a friend traditional marriage"},{"image":"./wilug5.JPEG","title":"wilug five","comment":"wilug leaving for Nsukka youths summit"},{"image":"./wilug6.JPEG","title":"wilug six","comment":"wilug arrived home safely after attending Nsukka youths summit"},{"image":"./wilug7.JPEG","title":"wilug seven","comment":"wilug preparing for church service"},{"image":"./wilug8.JPEG","title":"wilug eight","comment":"wilug suppervising building project"},{"image":"./wilug9.JPEG","title":"wilug nine","comment":"wilug at a friend mother's burial"},{"image":"./wilug10.JPEG","title":"wilug ten","comment":"wilug at udenu Governors unity cup tournament"}]



let counter = 0

let buttonPrevious = document.getElementById("btn-previous")
buttonPrevious.addEventListener("click", function( e ) {
    console.log( {e} )
    counter--
    if ( counter < 0 ){
        counter = 9
    }
    let imageElement = document.getElementById("img-source")
    let imageTitleElement = document.getElementById("para-title")
    let imageSummaryElement = document.getElementById("summary") 
    imageTitleElement.textContent = wilugkay[counter].title
    imageSummaryElement.textContent = wilugkay[counter].comment
    imageElement.setAttribute("src", wilugkay[counter].image)
})

let buttonNext = document.getElementById("btn-next")
buttonNext.addEventListener("click", function( e ) {
    if ( counter > 9){
        counter = 0
    }
    let imageElement = document.getElementById("img-source")
    let imageTitleElement = document.getElementById("para-title")
    let imageSummaryElement = document.getElementById("summary")
    imageTitleElement.textContent = wilugkay[counter].title
    imageSummaryElement.textContent = wilugkay[counter].comment
    imageElement.setAttribute("src", wilugkay[counter].image)
    counter++
    console.log( counter )
})