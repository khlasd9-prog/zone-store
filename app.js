console.log("ZONE STORE جاهز");

// عرض المنتجات
let products = JSON.parse(localStorage.getItem("products")) || [];

let gameList = document.getElementById("gameList");


if (gameList) {

products.forEach(product => {

    gameList.innerHTML += `

    <div class="game-card">

        <img src="${product.image}" width="150">

        <h3>${product.name}</h3>

        <p>السعر: ${product.price}</p>

        <button class="order-btn" onclick="saveOrder('${product.name}', '${product.price}')">
            اطلب الآن
        </button>

    </div>

    `;

});

}


// =====================
// Firebase
// =====================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {

  apiKey: "AIzaSyCR4gOU76rfZni_a4beAplwht_TQeByrFs",

  authDomain: "zone-store-5.firebaseapp.com",

  projectId: "zone-store-5",

  storageBucket: "zone-store-5.firebasestorage.app",

  messagingSenderId: "1074472472670",

  appId: "1:1074472472670:web:087c291d21c09c72b2a4cf"

};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// =====================
// حفظ الطلبات
// =====================

window.saveOrder = async function(productName, price) {


    try {


        await addDoc(collection(db, "orders"), {

            product: productName,

            price: price,

            status: "طلب جديد",

            date: new Date()

        });


        alert("تم إرسال الطلب بنجاح ✅");


    } catch(error) {


        console.log(error);

        alert("حدث خطأ أثناء إرسال الطلب ❌");


    }


};