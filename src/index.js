import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // li生成
  const li = document.createElement("li");
  // div生成
  const div = document.createElement("div");
  div.className = "list-row"
  // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click" , () => {
    alert();
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click" , () =>{
    //押された削除ボタンの親タグを未完了リストから削除
    const deleteTarget = deleteButton.
    ;
  });
  
  //li　タグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  
  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);

};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());