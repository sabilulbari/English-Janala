const getLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLevel(json.data));
};

const displayLevel = (lessons)=>{
    const lessonContainer = document.getElementById("lesson-buttons");
    lessonContainer.innerHTML = "";
    lessons.forEach(element => {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <a class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${element.level_no}</a>
        `;
        lessonContainer.append(btnDiv)
        
    });
}

getLesson();
