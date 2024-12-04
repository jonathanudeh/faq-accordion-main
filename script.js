const faqBody = document.querySelectorAll(".faq-body");

faqBody.forEach(element => {
    const faqQuestion = element.querySelector(".faq-question");
    const faqAnswer = element.querySelector(".faq-answer");
    const plusBtn = faqQuestion.querySelector("#plus-btn");
    const image = plusBtn.querySelector(".plus-img"); 
    

    plusBtn.addEventListener("click", (e) => {
        faqAnswer.classList.toggle("disabled");
        
        if (faqAnswer.classList.contains("disabled")) {
            image.setAttribute("src", "./assets/images/icon-plus.svg");
            image.setAttribute("alt", "A plus icon");
            faqQuestion.style.marginBottom = "0px";
        } else {
            image.setAttribute("src", "./assets/images/icon-minus.svg");
            image.setAttribute("alt", "A minus icon");
            faqQuestion.style.marginBottom = "20px";
        }
       
        faqBody.forEach(elem => {
            if (elem !== element) {
                elem.querySelector(".faq-answer").classList.add("disabled");
                elem.querySelector(".plus-img").setAttribute("src", "./assets/images/icon-plus.svg");
                image.setAttribute("alt", "A minus icon");
                elem.querySelector(".faq-question").style.marginBottom = "0px";
            } 
        })     
    })
});
