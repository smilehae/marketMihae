let clickedTag = 0;

const tags = Array.from(document.querySelectorAll(".tag"));
function swtichTag(e){
    tags[clickedTag].classList.remove("active");
    clickedTag = this.dataset.index;
    tags[clickedTag].classList.add("active");
    const buttonName = document.querySelector(".show_name");
    buttonName.textContent = tags[clickedTag].textContent;

}
tags.forEach(tag=> tag.addEventListener("click",swtichTag));
