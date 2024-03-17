//! start menu 
function check(){

    const checkbox = document.querySelector("#checkbox")
    const nav = document.querySelector("#nav")

    // nav.classList.toggle("none");
    console.log(nav)
    console.log(checkbox)

    if(checkbox.checked){
        nav.classList.add("flex")
        nav.classList.remove("none");;
    }else{
        nav.classList.add("none");
        nav.classList.remove("flex")
    }
}
//! end menu 




//! stert Header 
    function header(){
    let header = document.getElementById("min-header")
    header.innerHTML=`
    <div class="container">
        <ul>
            <li>
                <div class="login-container">
                    <button class="login-btn" onclick="toggleLogin()">انشاء حساب</button>
                    <div id="login-popup" class="login-popup">
                        <div class="login-content">
                            <span class="close" onclick="toggleLogin()">&times;</span>
                            <h2>انشاء حساب جديد </h2>
                            <form action="#">
                                <label for="username">اسم المستخدم:</label>
                                <input type="text" id="username" name="username" required>
                                <label for="email">البريد الالكتروني:</label>
                                <input type="email" id="email" name="email" required>
                                <label for="password">كلمة السر: </label>
                                <input type="password" id="password" name="password" required>
                                <label for="password">تاكيد كلمة السر: </label>
                                <input type="password" id="password" name="password" required>
                                <button type="submit" class="submit">تسجيل</button>
                            </form>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="login-container">
                    <button class="login-btn" onclick="toggleLogin()">تسجيل دخول </button>
                    <div id="login-popup" class="login-popup">
                        <div class="login-content">
                            <span class="close" onclick="toggleLogin()">&times;</span>
                            <h2>تسجيل الدخول</h2>
                            <form action="#">
                                <label for="username">اسم المستخدم:</label>
                                <input type="text" id="username" name="username" required>
                                <label for="email">البريد الالكتروني:</label>
                                <input type="email" id="email" name="email" required>
                                <label for="password">كلمة السر: </label>
                                <input type="password" id="password" name="password" required>
                                <button type="submit">تسجيل</button>
                            </form>
                        </div>
                    </div>
                </div>
            </li>
            <li><a href="">طلب حجز صيانه </a></li>
            <li><a href="">الصفحه الرئيسية</a></li>
            <li><a href="">طلب قطع غيار </a></li>
            <li><a href="">اتصل بينا </a></li>
        </ul>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        </form>
    </div>`
}
header()
//? stert scroll Header 
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky",window .scrollY > 100 );
    })       
//? End scroll Header 
//! End Header





function toggleLogin() {
    var popup = document.getElementById("login-popup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}
function toggle2Login() {
    var popup = document.getElementById("in-login-popup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}