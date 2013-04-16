var combo = $('.fakeCombo').fakeCombo();
combo.on('change.url', function(ev) {
    var s = this;
    if (s.value)
        gaUpdate(
            s.value,
            this.options[this.selectedIndex].getAttribute('data-track'),
            this.options[this.selectedIndex].getAttribute('data-mind')
        );
});

$('a').on('click', function(ev){
    ev.preventDefault();
    gaUpdate(this.href, this.getAttribute('data-track'), this.getAttribute('data-mind'));
})

function gaUpdate(url, track, mind) {
    _gaq.push(['_trackEvent','landing','clique', track]);
    _gaq.push(function() {
        var e = e || window.event;
        mmConversionTag(parseInt(mind), e, '_self', url);
    });
}
