const taxDocumentHtml = $(`
    <div class="__tax_document__ hide-scroll">
        <div class="__scrollme__">Scroll to Read More</div>
        <img src="static/images/fundraising/edited_tax_document.png"/>
    </div>
`);

const calendarHtml = $(`
    <div class="__calendar__">
        <img src="static/images/fundraising/calendar.png">
    </div>
`);

const couponCardHtml = $(`
    <div class="__coupon_card__">
        <img src="static/images/fundraising/coupon_card.png">
    </div>
`);

const raffleHtml = $(`
    <div class="__raffle__">
        <div class="__prizes__">
            <div class="__first__ __prize__" data-arg="0">
                <img src="static/images/temp/user.png">
            </div>
            <div class="__second__ __prize__" data-arg="1">
            <img src="static/images/temp/user.png">
            </div>
            <div class="__third__ __prize__" data-arg="2">
            <img src="static/images/temp/user.png">
            </div>
        </div>
        <div id="selected-prize">
            <div id="selected-prize-text"></div>
        </div>
    </div>
`);

const concessionStandHtml = $(`<div>Coming Soon</div>`);

$(document).ready(function() {
    const view = $('#view');

    // Default View
    view.html(taxDocumentHtml);
    $('li.__sidelink__[data-arg="Tax Document"]').addClass('__active');


    $('li.__sidelink__').click(function() {
        const arg = $(this).data('arg');

        if(arg === 'Tax Document') {
            view.html(taxDocumentHtml);
            $('div.#view').scrollTo(1000)
        } else if(arg == 'Calendar') {
            view.html(calendarHtml);
        } else if(arg == 'Coupon Card') {
            view.html(couponCardHtml);
        } else if(arg == 'Raffle') {
            view.html(raffleHtml);
            $('.__prize__').hover(function() {
                const arg = $(this).data('arg');
        
                if(arg == '0') {
                    $('#selected-prize').html('<div>Prize #1</div>');
                } else if(arg == '1') {
                    $('#selected-prize').html('<div>Prize #2</div>');
                } else if(arg == '2') {
                    $('#selected-prize').html('<div>Prize #3</div>');
                }
            })
        } else if(arg == 'Concession Stand') {
            view.html(concessionStandHtml);
        }

        $(this).parent().children().removeClass('__active');
        $(this).addClass('__active');
    });



    
});