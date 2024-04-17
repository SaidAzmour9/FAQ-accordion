document.addEventListener("DOMContentLoaded", function() {
    const btns = document.querySelectorAll(".accoord-bar");

    btns.forEach(btn => {
        btn.addEventListener("click", function() {
            this.classList.toggle("active");
            const description = this.nextElementSibling;
            const plusIcon = this.querySelector(".plus");
            const minusIcon = this.querySelector(".mns");

            if (description.style.maxHeight) {
                description.style.maxHeight = null;
                plusIcon.style.display = "block";
                minusIcon.style.display = "none";
                this.querySelector("h2").style.color = "black";
            } else {
                description.style.maxHeight = description.scrollHeight + "px";
                plusIcon.style.display = "none";
                minusIcon.style.display = "block";
                this.querySelector("h2").style.color = "";
            }
        });
    });
});
