(function ($) {
    let d = $('#data'),
        main = $('#main'),
        pop = $('#population'),
        die = $('#die');

    d
        .on('click', '.roll-dice', function (e) {
            main.find('.dice').each(function(e) {
                let elem = $(this);
                roll(elem);
            });
        });

    pop
        .on('change', function(e) {
            init();
        });

    function init() {
        let c = 'a';
        main.html('');
        for(let i=0; i<pop.val() ;i++) {
            c = (Math.floor(Math.random() * 2)) ? 'a' : 'b';
            add_dice(c);
        }
    }

    function add_dice(c) {
        let dice = die.clone();
        dice.removeAttr('id');
        dice.find('.dice').attr('data-roll', Math.floor(Math.random() * 6) + 1);
        dice.find('.dice').removeClass('a a').addClass(c);
        dice.appendTo(main);
    }

    function roll(elem) {
        c = elem.hasClass('a') ? 'b' : 'a';
        elem.removeClass('a b').addClass(c);
        elem.attr('data-roll', Math.floor(Math.random() * 6) + 1);
    }

    init();
})(jQuery);
