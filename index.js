// নতুন একটা স্ক্রিপ্ট ফাইল খুলবে। সেটাকে index.html এর সাথে কানেক্ট করতে পারো কিনা?


// যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
const heading2 = document.getElementsByTagName('h2');
for (h2 of heading2) {
    h2.style.color = 'lightblue';
}

// ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 
const bags = document.getElementById('bag');
bags.style.backgroundColor = 'tomato';
bags.style.paddingBottom = '20px';


// card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা
const cardClass = document.querySelectorAll('.card');
for (card of cardClass) {
    card.style.borderRadius = '25px';
}


// কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো
function buyNow() {
    console.log("added to cart");

}

// এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে চেষ্টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়।




// একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।

document.getElementById('email-confirm').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const submitButton = document.getElementById('submit-button');
    if (text === 'email') {
        submitButton.removeAttribute('disabled');

    }
    else {
        submitButton.setAttribute('disabled', true);
    }

})
document.getElementById('submit-button').addEventListener('click', function () {
    const confirm = document.getElementById('email-confirm');
    confirm.style.display = 'none';
})


// (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে।


// (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 