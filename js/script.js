// ======= YES ANSWER =======
const choice = document.querySelector(".choice");
if (choice) {
    const answer_yes = choice.querySelector(".answer-yes");
    const answer_no = choice.querySelector(".answer-no");

    answer_yes.addEventListener("click", () => {
        window.location.href = "yes.html";
    });

    answer_no.addEventListener("click", () => {
        // Get button dimensions
        const buttonWidth = answer_no.clientWidth;
        const buttonHeight = answer_no.clientHeight;

        // Get viewport dimensions
        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;

        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);

        answer_no.style.position = "absolute";
        answer_no.style.left = `${newX}px`;
        answer_no.style.top = `${newY}px`;

        console.log(`New X: ${newX}, New Y: ${newY}`);
    });
}

// ======= END YES ANSWER =======
