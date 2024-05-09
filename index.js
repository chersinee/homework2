function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    checkTotal();
}

function checkAnswer2(answer) {
    const result2 = document.getElementById("result2")
    if (answer === 'c'){
        result2.textContent = "ถูกต้องค่าาา 🥳";
        result2.style.color = 'green';
    } else {
        result2.textContent = "ยังไม่ถูกน้าาา ลองใหม่อีกรอบค่ะ 😱";
        result2.style.color = 'red';
    }
    checkTotal();
}

function checkTotal(){
    const check1 = document.getElementById('result');
    const check2 = document.getElementById("result2");
    if (check1.textContent == "ถูกต้อง PIM ย่อมาจาก PIM" && check2.textContent == "ถูกต้องค่าาา 🥳") {
        document.getElementById("sumTotal").textContent = "ตอบถูกทั้ง 2 ข้อ";
        document.getElementById("sumTotal").style.color = 'green';
        document.getElementById("sumTotal").style.fontWeight = "bold";
    } else if(check1.textContent == "ถูกต้อง PIM ย่อมาจาก PIM" || check2.textContent == "ถูกต้องค่าาา 🥳") {
        document.getElementById("sumTotal").textContent = "ตอบถูกทั้ง 1 ข้อ";
        document.getElementById("sumTotal").style.color = 'green';
        document.getElementById("sumTotal").style.fontWeight = "normal";
    } else {
        document.getElementById("sumTotal").textContent = "ลองใหม่อีกครั้งนะ 🤪";
        document.getElementById("sumTotal").style.color = "red"
    }
}