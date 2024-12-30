const taxDocumentHtml = $(`
    <div class="tax-document content">
        <img src="../images/fundraiser/edited_tax_document.png"/>
    </div>
`);

const calendarHtml = $(`
    <div class="calendar content">
        <img src="../images/fundraiser/calendar.png">
    </div>
`);

const couponCardHtml = $(`
    <div class="coupon-card content">
        <img src="../images/fundraiser/coupon_card.png">
    </div>
`);

const raffleHtml = $(`
    <div class="raffle content">
        <div class="prizes">
            <div class="first prize" data-arg="0">
            <img src="../temp/user.png">
            </div>
            <div class="second prize" data-arg="1">
            <img src="../temp/user.png">
            </div>
            <div class="third prize" data-arg="2">
            <img src="../temp/user.png">
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

    $('.sidelink[data-arg="tax-document"]').addClass('__active');

    $('.sidelink').click(function() {
        const arg = $(this).data('arg');

        if(arg === 'tax-document') {
            view.html(taxDocumentHtml);
        } else if(arg == 'calendar') {
            view.html(calendarHtml);
        } else if(arg == 'coupon-card') {
            view.html(couponCardHtml);
        } else if(arg == 'raffle') {
            view.html(raffleHtml);
            $('.prize').hover(function() {
                const arg = $(this).data('arg');
        
                if(arg == '0') {
                    $('#selected-prize').html('<div>Prize #1</div>');
                } else if(arg == '1') {
                    $('#selected-prize').html('<div>Prize #2</div>');
                } else if(arg == '2') {
                    $('#selected-prize').html('<div>Prize #3</div>');
                }
            })
        } else if(arg == 'concession-stand') {
            view.html(concessionStandHtml);
        }

        $(this).parent().children().removeClass('__active');
        $(this).addClass('__active');
    });



    
});