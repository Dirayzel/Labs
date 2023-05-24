function replaceHeadings() {
    const userInput = prompt('Write down the Header changer:');
    const headings = document.querySelectorAll('h2');

    headings.forEach((heading) => {
        heading.innerHTML = userInput;
        heading.classList.add('bordered');
    });
}