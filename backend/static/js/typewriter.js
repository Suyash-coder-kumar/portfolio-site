const roles = ["Coder", "Developer", "Learner"];
let i = 0, j = 0, currentText = '', isDeleting = false;

function type() {
    const element = document.getElementById("typed-text");
    if (!isDeleting) {
        currentText += roles[i][j];
        j++;
        element.textContent = currentText;
        if (j === roles[i].length) {
            isDeleting = true;
            setTimeout(type, 1200); 
            return;
        }
    } else {
        currentText = currentText.slice(0, -1);
        element.textContent = currentText;
        if (currentText.length === 0) {
            isDeleting = false;
            i = (i + 1) % roles.length;
            j = 0;
        }
    }
    setTimeout(type, isDeleting ? 90 : 150);
}
type();
