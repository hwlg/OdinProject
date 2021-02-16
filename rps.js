        let computerSelection
        let playerSelection
        let computerScore = 0;
        let playerScore = 0;

        let buttons = document.querySelectorAll(".btn");

        const choices = ["rock", "paper", "scissors"];

        function disableButtons() {
            buttons.forEach(elem => {
                elem.disabled = true
            })
        }
        
        function computerPlay() {
            return choices[~~(Math.random() * choices.length)]; // randomly selects computer choice
        }

        function playRound(playerSelection) {
            let computerSelection = computerPlay().toLowerCase()
            let result = ""
        
            if (playerSelection.toLowerCase() === computerSelection) {
                result = ("It's a tie.")
            }
            else if ((playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') ||
                (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') ||
                (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'))
            {
                playerScore = ++playerScore
                incrementPlayerScore();
                result = (playerSelection + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1))
                if (playerScore == 5) {
                    disableButtons()
                    result = ("You won. Refresh to try again.")
                }
            }
            else {
                computerScore = ++computerScore
                incrementComputerScore();
                result = (playerSelection + " is beaten by " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1))
                if (computerScore == 5) {
                    disableButtons()
                    result = ("The computer won. Refresh to try again.")
                }
            }

            document.getElementById('result').innerHTML = result
            return
        }

        function incrementPlayerScore() {
            let playerScoreboard = document.getElementById('playerscore');

            playerScoreboard.textContent = playerScore;
        }

        function incrementComputerScore() {
            let computerScoreboard = document.getElementById('computerscore');

            computerScoreboard.textContent = computerScore;
        }
        
        buttons.forEach(button => {
            button.addEventListener("click", function(){
                playRound(button.value)
            })
        })
