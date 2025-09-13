const typingElement = document.getElementById('typing-text');
const textToType = "안녕하세요!<br> 자유전공학부 이준엽입니다.";
let currentText = '';
let index = 0;

function typeText() {
    if (index < textToType.length) {
        if (textToType.charAt(index) === '<') {
            const tagEndIndex = textToType.indexOf('>', index);
            currentText += textToType.substring(index, tagEndIndex + 1);
            index = tagEndIndex;
        } else {
            currentText += textToType.charAt(index);
        }
        
        typingElement.innerHTML = currentText;
        index++;
        setTimeout(typeText, 100);
    }
}
typeText();

const progressBar = document.querySelector('.bar-ing');
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollProgress + '%';
});

const scrollTargets = document.querySelectorAll('.scroll-target');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1
});

scrollTargets.forEach(target => {
    observer.observe(target);
});