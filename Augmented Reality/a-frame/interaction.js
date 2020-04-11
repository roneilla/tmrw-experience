AFRAME.registerComponent('accepts-clicks', {
    init: function () {
        this.el.addEventListener('touchend', handleClickEvent);
        this.el.addEventListener('click', handleClickEvent);
    },
    tick: function () {
        // hide if no marker
    }
});

function handleClickEvent() {
    modelClick();
    // console.log("hello");
}
