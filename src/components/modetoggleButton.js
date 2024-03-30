// import * as React from "react"
// import { useEffect, useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
import * as styles from '../styles/toggle.module.scss'

const ModeToggleButton = () => {

  useEffect(() => { //初期設定をSet
    if (document.body.classList.value === "") {
      document.body.classList.add("lightmode");
      let putMode = "lightmode";
      localStorage.setItem('dark-mode', putMode);
    }
  });

  let putMode = localStorage.getItem('dark-mode');
  if (putMode === "darkmode") {
    document.body.classList.add("darkmode");
    // document.body.classList.remove("lightmode","blackmode");
    putMode = "darkmode";
  } else if (putMode === "blackmode") {
    document.body.classList.add("blackmode");
    // document.body.classList.remove("darkmode","lightmode");
    putMode = "blackmode";
  } else {
    document.body.classList.add("lightmode");
    // document.body.classList.remove("darkmode","blackmode");
    putMode = "lightmode";
  }
  








  function Light(){
    document.body.classList.add("lightmode");
    document.body.classList.remove("darkmode","blackmode");
    putMode = "lightmode";
    localStorage.setItem('dark-mode', putMode);
  };
  function Dark(){
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode","blackmode");
    putMode = "darkmode";
    localStorage.setItem('dark-mode', putMode);
  };
  function Black(){
    document.body.classList.add("blackmode");
    document.body.classList.remove("darkmode","lightmode");
    putMode = "blackmode";
    localStorage.setItem('dark-mode', putMode);
  };

  return (
  <div className={styles.modebox}>
    <button type="button" onClick={Light} name="LightMode">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/></svg><span>Light</span>
    </button>
    <button type="button" onClick={Dark} name="DarkMode">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg><span>Dark</span>
    </button>
    <button type="button" onClick={Black} name="BlackMode">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="22" height="22" ><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"/></svg><span>Black</span>
    </button>
  </div>
  );
};
export default ModeToggleButton


// // チェックボックスの取得
// const btn = document.querySelector("#switch");

// // チェックした時の挙動
// btn.addEventListener("change", () => {
//   if (btn.checked === true) {
//     // ダークモード
//     document.body.classList.remove("lightmode");
//     document.body.classList.add("darkmode");
//   } else {
//     // ライトモード
//     document.body.classList.remove("darkmode");
//     document.body.classList.add("lightmode");
//   }
// });


