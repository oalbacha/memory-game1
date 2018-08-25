var cards = document.getElementsByClassName('card')
var cardList = [...cards]

// game parameters
var opened = {
    first: null,
    second: null
}
var moves = 0
var no_of_match = 0

cardList.forEach(function(card) {
    card.addEventListener('click', function(event) {
        // you see that we could fetch the classes this way right?
        // event.target.classList.add('open', 'show')
        moves += 1
        document.getElementsByClassName('moves')[0].textContent = moves

        console.log(opened)

        console.log(event.target.childNodes[1].className)

        if (opened.first === null) {
            event.target.classList.add('open', 'show')

            opened.first = event.target.childNodes[1].className
        } else if (opened.first && opened.second === null) {
            event.target.classList.add('open', 'show')

            opened.second = event.target.childNodes[1].className

            var openedCards = document.querySelectorAll('.card.open.show')

            openedCards.forEach(function(openCard) {
                openCard.classList.remove('show')
                openCard.classList.remove('open')
            })

            if (opened.first === opened.second) {
                console.log('there was a match!!!')
                no_of_match += 1

                openedCards.forEach(function(openCard) {
                    openCard.classList.remove('show')
                    openCard.classList.remove('open')
                    openCard.classList.add('match')
                })

                opened = {
                    first: null,
                    second: null
                }

                if (no_of_match === 8) {
                    alert('Well done!!!')
                }
            } else {
                console.log('please try again!')

                openedCards.forEach(function(openCard) {
                    openCard.classList.add('mismatch')

                    setTimeout(function() {
                        openCard.classList.remove('mismatch')
                        opened = {
                            first: null,
                            second: null
                        }
                    }, 1000)
                })
            }

        } else {
            // if (opened.first === opened.second) {
            //   console.log(document.querySelectorAll('.card.open.show'))
            // }
        }
        // opened.first = event.target.childNodes[1]
        // console.log(opened)
    })
})

document.getElementsByClassName('restart')[0].addEventListener('click', function() {
    console.log('game reset attempted!')

    cardList.forEach(function(card) {
        card.classList.remove('match')
        card.classList.remove('open')
        card.classList.remove('show')
    })
})