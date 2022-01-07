//クラスの切り替え
function classChange(id,class1,class2){
    const target = document.getElementById(id);
    if(target.className == class1){
        target.classList.remove(class1);
        target.classList.add(class2);
    }else{
        target.classList.remove(class2);
        target.classList.add(class1);
    }
}