let clickedTag = 0;
// const menus = ["채소","과일 견과 쌀","수산 해산 건어물","정육 계란","국 반찬 메인요리","샐러드 간편식","면 양념 오일",
// "생수 음료 우유 커피","간식 과자 떡","베이커리 치즈 델리","건강식품","생활용품 리빙 캠핑",
// "스킨케어 메이크업","헤어 바디 구강","주방용품","가전제품","베이비 키즈","반려동물"];
const menus = [];
const tags = Array.from(document.querySelectorAll(".tag"));

function abstractMenu(){
    for(let i=0;i<tags.length;i++){
        menus.push(tags[i].textContent);
    }
}

function swtichTag(e){
    tags[clickedTag].classList.remove("active");
    clickedTag = this.dataset.index;
    tags[clickedTag].classList.add("active");
    const buttonName = document.querySelector(".show_name");
    buttonName.textContent = tags[clickedTag].textContent;

}

abstractMenu();
tags.forEach(tag=> tag.addEventListener("click",swtichTag));
