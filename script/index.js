const getLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLevel(json.data));
};

const loadLesson = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((resources) => resources.json())
    .then((data) => {
      displayWord(data.data);
      removeClass();
      const lessonButton = document.getElementById(`click-button-${id}`);
      lessonButton.classList.add("active");
    });
};

const removeClass = () => {
  const lessonAllButton = document.querySelectorAll(".lesson-btn");
  lessonAllButton.forEach((button) => {
    button.classList.remove("active");
  });
};

const displayWord = (word) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  if (word.length < 1) {
    cardContainer.innerHTML = `
   <div class="text-center col-span-full bg-[#F8F8F8] max-w-[1760px] mx-auto rounded-2xl py-[64px]">
          <img src="./assets/alert-error.png" class="mx-auto" alt="">
          <p class = "font-bangla font-regular text-[20px] text-[#26262ab8] py-6">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
          <p class="font-bangla font-medium text-[34px] text-[#26262ab8]">নেক্সট Lesson এ যান</p>
        </div>
    `;
    return;
  }
  word.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="text-center bg-white rounded-2xl  space-y-4 p-8">
          <h4 class="font-bold text-[32px]">${element.word}</h4>
          <p class="font-semibol text-[#26262ab8]">Meaning/Pronounciation</p>
          <p class="font-semibold text-[32px] font-bangla text-[#26262ab8]">"${element.meaning ? element.meaning : "অর্থ পাওয়া যায়নি"} / ${element.pronunciation ? element.pronunciation : "Pronunciation পাওয়া যায়নি"}"</p>
          <div class="flex justify-between  pt-10 rounded-md">
            <button onclick="my_modal_5.showModal()" class="bg-[#1A91FF10] cursor-pointer hover:bg-[#1A91FF50] p-[15px] text-[20px] rounded-md shadow-sm"><i class="fa-solid fa-circle-info"></i></button>
            <button class="bg-[#1A91FF10] cursor-pointer hover:bg-[#1A91FF50] p-[15px] text-[20px] rounded-md shadow-sm"><i class="fa-solid fa-volume-high"></i></button>
          </div>
        </div>
        `;

    cardContainer.append(div);
  });
};

const displayLevel = (lessons) => {
  const lessonContainer = document.getElementById("lesson-buttons");
  lessonContainer.innerHTML = "";
  lessons.forEach((element) => {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        <button  id="click-button-${element.level_no}" onclick="loadLesson(${element.level_no})" class="lesson-btn btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${element.level_no}</button>
        `;
    lessonContainer.append(btnDiv);
  });
};

getLesson();
