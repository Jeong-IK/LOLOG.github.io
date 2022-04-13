const renderResult = (resultValue) => {
  const profilePath = "../../img/championProfile/championId_";
  const userValue = resultValue[0];
  const championValue = resultValue[1];

  const resultForm = `
  <div class="flex justify-center h-screen bg-blue-400">
  <!-- 메뉴 바 -->
    <div class="absolute top-0 w-screen h-20 bg-indigo-900 flex flex-row box-content h-18" id="menuBar">
      <img class="justify-self-center my-2 mx-5" src="../../img/Logo/Logo_1.png" style="width:62px; height:62px;">
    </div>

    <div id="resultForm" class="flex flex-col space-y-5 bg-blue-400 my-auto">
      <!-- 이용자 검색 결과 출력 -->
      <div id="userForm" class="container w-screen bg-white rounded-lg shadow-xlg">
        <img src="../../img/userProfile/nonPlayer.jpeg" class="p-5" style="width:150px; height:150px;">
      </div>
        <!-- 챔피언 검색 결과 출력 -->
        <div id="championValue" class="bg-white rounded-lg shadow-xlg">
          <div>
            <div class="p-3"><img class="rounded-full" src="${profilePath}${championValue[0].championId}.png" style="width:100px;height:100px"></div>
          </div>

          <div>
            <div class="p-3"><img class="rounded-full" src="${profilePath}${championValue[1].championId}.png" style="width:100px;height:100px"></div>
          </div>

          <div>
            <div class="p-3"><img class="rounded-full" src="${profilePath}${championValue[2].championId}.png" style="width:100px;height:100px"></div>
          </div>

          <div>
            <div class="p-3"><img class="rounded-full" src="${profilePath}${championValue[3].championId}.png" style="width:100px;height:100px"></div>
          </div>

          <div>
            <div class="p-3"><img class="rounded-full" src="${profilePath}${championValue[4].championId}.png" style="width:100px;height:100px"></div>
          </div>
        </div>
      </div>
    </div>
    `;
  root.innerHTML = resultForm;
};

//자바스크립트 컨벤션

//let키워드 사용을 지양해야 하는 이유
// 변수 초기화 시점부터 값 할당 이전 까지를 일시적 사각지대(TDZ)라 하며 이의 존재 여부가 var 키워드와 let/const키워드의 차이점이며 var키워드를 사용하면 안되는 이유이기도 하다. 또한 let/const의 차이점은  값의 재할당 가능 여부이다. 재할당이 필요한 변수인 경우에만 한하여 let키워드를 사용하며 이를 제외한 경우에는 const 키워드를 사용하여 의도치 않은 재할당을 방지하여야 한다.
const searchForm = () => {
  const root = document.getElementById("root");
  const search_temp = `<div class="flex justify-center h-screen bg-blue-400">
    <!-- 메뉴바 -->
    <div class="absolute top-0 w-screen h-20 bg-indigo-900 flex flex-row box-content h-18" id="menuBar">
      <img class="justify-self-center my-2 mx-5" src="../../img/Logo/Logo_1.png" style="width:62px; height:62px;">
    </div> 
    <!-- 이용자검색폼 -->
    <div class=" box-content h-1/3 w-1/5 fixed bg-white absolute inset-y-1/4 rounded-lg shadow-xlg" id="writeNickname">
      <div class=" box-content h-2/3 w-full grid justify-items-center">
        <img class="justify-self-center m-8" src="../../img/Logo/Logo.jpg" style="width:200px; height:200px;">
      </div>
      <div>
        <form id="search_champion">
          <input type="text" class="rounded border-2 border-black" id="userName" name="userName">
          <input type="submit" value="검색">
        </form>
      </div>

    </div>
  </div>`;
  root.innerHTML = search_temp;
};

export { renderResult, searchForm };