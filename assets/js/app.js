document.querySelectorAll('.Item__LiBox-sc-yeql7o-0').forEach(button => {
    button.addEventListener('click', function () {
        // Toggle arrow direction for this button
        const svgArrow = this.querySelector('.Octicon-sc-9kayk9-0');
        svgArrow.classList.toggle('daAEFx');
        svgArrow.classList.toggle('gzcJGA');

        // Find the nearest UL element relative to this button and toggle its state
        const ulElement = this.closest('.Box-sc-g0xbh4-0.Ywlla').querySelector('ul');
        ulElement.classList.toggle('enEvIH');
        ulElement.classList.toggle('gMkIpo');
    });
});