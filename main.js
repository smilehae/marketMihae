let clickedTag = 0;
// const menus = ["채소","과일 견과 쌀","수산 해산 건어물","정육 계란","국 반찬 메인요리","샐러드 간편식","면 양념 오일",
// "생수 음료 우유 커피","간식 과자 떡","베이커리 치즈 델리","건강식품","생활용품 리빙 캠핑",
// "스킨케어 메이크업","헤어 바디 구강","주방용품","가전제품","베이비 키즈","반려동물"];
const menus=[];
const subMenus = [
    ["친환경","고구마 감자 당근","시금치 쌈채소 나물","브로콜리 파프리카 양배추","양파 대파 마늘 배추"],
    ["친환경","국산과일","제철과일","수입과일","간편과일","견과류"],
    ["제철수산","생선류","굴비 반건류","오징어 낙지 문어","새우 게 랍스터","해산물 조개류"],
    ["국내산 소고기","수입산 소고기","돼지고기","계란류"],
    ["국 탕 찌개","밀키트 메인요리","밑반찬"],
    ["샐러드 닭가슴살","도시락 밥류","파스타 면류","떡볶이 튀김 순대"],
    ["생수 탄산수","음료 주스","우유 두유 요거트","커피","차"],
    ["친환경","고구마 감자 당근","시금치 쌈채소 나물","브로콜리 파프리카 양배추","양파 대파 마늘 배추"],
    ["친환경","국산과일","제철과일","수입과일","간편과일","견과류"],
    ["제철수산","생선류","굴비 반건류","오징어 낙지 문어","새우 게 랍스터","해산물 조개류"],
    ["국내산 소고기","수입산 소고기","돼지고기","계란류"],
    ["국 탕 찌개","밀키트 메인요리","밑반찬"],
    ["샐러드 닭가슴살","도시락 밥류","파스타 면류","떡볶이 튀김 순대"],
    ["생수 탄산수","음료 주스","우유 두유 요거트","커피","차"],
    ["친환경","고구마 감자 당근","시금치 쌈채소 나물","브로콜리 파프리카 양배추","양파 대파 마늘 배추"],
    ["친환경","국산과일","제철과일","수입과일","간편과일","견과류"],
    ["제철수산","생선류","굴비 반건류","오징어 낙지 문어","새우 게 랍스터","해산물 조개류"],
    ["국내산 소고기","수입산 소고기","돼지고기","계란류"],
    ["국 탕 찌개","밀키트 메인요리","밑반찬"],
    ["샐러드 닭가슴살","도시락 밥류","파스타 면류","떡볶이 튀김 순대"]

];

const tags = Array.from(document.querySelectorAll(".tag"));
const categoryContainer = document.querySelector(".category_container");
const category = document.querySelector(".myCategory");
const subCategoryContainer= document.querySelector(".detail_category_container");
const customerBtn = document.querySelector(".customer_center_btn");
const settingMenu = document.querySelector(".setting");
abstractMenu();
fillCategory();
const categoryItem = Array.from(categoryContainer.querySelectorAll("li"));

function abstractMenu(){
    for(let i=0;i<tags.length;i++){
        menus.push(tags[i].textContent);
    }
}

function fillCategory(){
    const content = tags.map((tag,i)=> `<li data-index="${i}">${tag.textContent}<ul class="detail_category_container"></ul></li>`).join("");
    categoryContainer.innerHTML=content;
}

function showCategory(){
    categoryContainer.classList.add("active");
    subCategoryContainer.classList.add("active");
}
function collapseCategory(){
   categoryContainer.classList.remove("active");
   subCategoryContainer.classList.remove("active");
   subCategoryContainer.classList.remove("show_detail_category");
   const items = subCategoryContainer.querySelectorAll("li");
    items.forEach(item=>item.style.opacity="0");
}

function showDetailCategory(e){
    subCategoryContainer.classList.add("show_detail_category");

    const content=  subMenus[parseInt(this.dataset.index)].map(menu=> `<li>${menu}</li>`).join("");
    subCategoryContainer.innerHTML=content;

    const items = subCategoryContainer.querySelectorAll("li");
    items.forEach(item=>item.style.opacity="1");
    

 
   

}

function swtichTag(e){
    tags[clickedTag].classList.remove("active");
    clickedTag = this.dataset.index;
    tags[clickedTag].classList.add("active");
    const buttonName = document.querySelector(".show_name");
    buttonName.textContent = tags[clickedTag].textContent;
}

function openTopmenu(){
    console.log("hi");
    settingMenu.style.display="flex";
}
function closeTopmenu(){
    settingMenu.style.display="none";
}
tags.forEach(tag=> tag.addEventListener("click",swtichTag));
category.addEventListener("mouseenter",showCategory);
category.addEventListener("mouseleave",collapseCategory);
categoryItem.forEach(item=> item.addEventListener("mouseenter",showDetailCategory));
customerBtn.addEventListener("mouseenter",openTopmenu);
customerBtn.addEventListener("mouseleave",closeTopmenu);