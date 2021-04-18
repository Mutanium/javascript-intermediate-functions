const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
const grades2 = [9, 3, 5, 7, 7, 4, 3, 8, 3, 3, 6, 3, 5, 6];

let studentCumLaude = 0;
function cumLaude (gradeArray) {
    for (let participants = 0; participants < gradeArray.length; participants++) {
        if (gradeArray[participants] > 7) {
            studentCumLaude = studentCumLaude + 1
        }
    }
    return studentCumLaude;
}
cumLaude(grades);
console.log(studentCumLaude);

studentCumLaude = 0;
cumLaude(grades2);
console.log(studentCumLaude);
//jhjhjhj

Array.prototype.highestGradeF = function () {
    let highestgrade = 0;
    for (let i = 0; i < this.length; i++)
        if (this[i] > highestgrade) {
            highestGrade = this[i]
        }
    return highestgrade;
};
console.log(grades1.highestGradeF());
console.log(grades1999.highestGradeF());
console.log(grades2020.highestGradeF());
console.log(grades2023.highestGradeF());