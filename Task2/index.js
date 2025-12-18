/// Вычисляет условия задания
function calculate() {
    const date = new Date(this.document.getElementById("t1").value);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const day_of_week = date.getDay();

    const day_of_week_ref = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    this.printLine("День недели даты вашего рождения: " + day_of_week_ref[day_of_week]);
    this.printLine("Год вашего рождения: " + (isLeapYear ? "високосный" : "невисокосный"))

    const now = new Date();
    const now_year = now.getFullYear();
    const age = now_year - year;
    this.printLine("Ваш возраст: " + age);
    this.printLine("Ваша дата рождения: ");
    printNumberAsStars(day, month, year);

}

/// Печать даты рождения символами '*'
function printNumberAsStars(day, month, year) {
    let nums = [
        [" *** ", "*   *", "*   *", "*   *", " *** "],  //0
        ["  *  ", " **  ", "  *  ", "  *  ", "*****"],  // 1
        ["*****", "    *", "*****", "*    ", "*****"],  // 2
        ["**** ", "   *", " ** ", "   * ", "**** "],    // 3
        ["*   *", "*   *", "*****", "    *", "    *"],  // 4
        ["*****", "* ", "**** ", "    *", "**** "],     // 5
        ["**** ", "* ", "**** ", "*   *", "**** "],     // 6
        ["*****", "   *", " * ", " * ", "* "],          // 7
        [" *** ", "*   *", " *** ", "*   *", " *** "],  // 8
        ["*****", "*   *", "*****", "    *", "*****"]]  // 9

    const dayAsString = (day < 10) ? "0" + day : day.toString();
    const monthAsString = (month + 1 < 10) ? "0" + day : day.toString();
    const dateAsString = dayAsString + "+" + monthAsString + "+" + year.toString();
    for (let i = 0; i < 5; i++) {
        let line = "";
        for (let j = 0; j < dateAsString.length; j++) {
            line += (((dateAsString[j] === "+") ? " " : nums[parseInt(dateAsString[j])][i])) + "  ";
        }
        printLine(line);
    }
}

/// Печать строки в консоль
function printLine(line) {
    console.log(line)
}