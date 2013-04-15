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
    _gaq.push(function() { location = url });
}

// Full BG para IEs 6,7 e 8
if(!$.support.leadingWhitespace)
{
    var $body = $('body').css('background','none');
    $body.append('<div id="videoViewport"><img src="images/bg.jpg" id="imgBG"></div>');

    var $viewport = $body.find('#videoViewport');
    var $imgBG = $viewport.find('#imgBG');

    var min_w = 960;
    var vid_w_orig = 1360;
    var vid_h_orig = 930;
    var $win = $(window);

    $win.on('load', {'win':$win, 'min': min_w, 'w_ori': vid_w_orig, 'h_ori': vid_h_orig}, function(ev) {
        ev.data.win.on('resize', function() { resizeToCover(ev.data.win, $viewport, $imgBG); });
        ev.data.win.trigger('resize');
    });

    function resizeToCover(win, viewport, imgBG)
    {
        viewport.width(win.width());
        viewport.height(win.height());

        var scale_h = win.width() / vid_w_orig;
        var scale_v = win.height() / vid_h_orig;
        var scale = scale_h > scale_v ? scale_h : scale_v;

        if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

        imgBG.width(scale * vid_w_orig);
        imgBG.height(scale * vid_h_orig);

        viewport.scrollLeft((imgBG.width() - win.width()) / 2);
        viewport.scrollTop((imgBG.height() - win.height()) / 2);
    };
}