function calculate() {
    const date = new Date(this.document.getElementById("t1").value);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const day_of_week = date.getDay();

    const day_of_week_ref = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    console.log("День недели даты вашего рождения: " + day_of_week_ref[day_of_week]);
    console.log("Год вашего рождения: " + (isLeapYear ? "високосный" : "невисокосный"))

    const now = new Date();
    const now_year = now.getFullYear();
    const age = now_year - year;
    console.log("Ваш возраст: " + age);
    console.log("Ваша дата рождения: ");

}

function printNumberAsStars(day, month, year) {
    let nums = [
                [" *** ", "*  *", "*  *", "*  *", " *** "],     //0
                ["  *  ", " ** ", " * ", " * ", "*****"],       // 1
                [" *** ", "*  *", " * ", " * ", "*****"],       // 2
                ["**** ", "   *", " ** ", "   *", "**** "],     // 3
                ["*  *",  "*  *", "*  *","*****", "    *"],     // 4
                ["*****", "* ", "**** ", "    *", "**** "],     // 5
                ["**** ", "* ", "**** ", "*   *", "**** "],     // 6
                ["*****", "   *", " * ", " * ", "* "],          // 7
                [" *** ", "*   *", " *** ", "*   *", " *** "],  // 8
                [" ****", "*   *", " ****", "    *", " ****"],  // 9
                ["  ", "  ", "  ", "  ", "  "]]  // space


    // 23
    let num = "23";
    let res = "";
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < num.length; j++) {

        }
    }
}