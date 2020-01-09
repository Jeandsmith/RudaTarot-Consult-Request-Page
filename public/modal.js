
// Whe the document has loaded
document.addEventListener("DOMContentLoaded", () => {
    var elems = document.querySelectorAll('.modal');
    let ins = M.Modal.init(elems, {
        opacity: 1     
    });
});