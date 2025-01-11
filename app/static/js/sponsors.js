const eichs_ad = `
  <div class="eichs-container">
    <div class="eichs-layout">
      <div class="row">Content</div>
      <div class="row">Content</div>
      <div class="row">Content</div>
    </div>
  </div>
`

const contact = `<div class="contact layout">
<h1>Website Developer</h1>
<h2>Theara Ya</h2>
<h3><a href="mailto:theara.ya@outlook.com">theara.ya@outlook.com</a></h3></div>`

class Sponsor {
  constructor(name, logo, classes = '') {
    this.name = name;
    this.logo = logo;
    this.classes = classes;
  }
}

const createSliderElements = (workdir) => {
  const slideTrack = $('<div class="__slide-track">');

  const sponsors = loadSponsors();
  console.log(sponsors);

  for(let i = 0; i < sponsors.length; i++) {
    slideTrack.append($(`<div data-name="${sponsors[i].name}" class="__slide ${sponsors[i].classes}">`).append($(`<img src="${workdir + 'images/logo/' + sponsors[i].logo}" height="100" width="250" alt="">`)));
  }

  const slider = $('<div class="__slider hide-scroll">');
  slideTrack.appendTo(slider);
  return slider;
}


const loadSponsors = () => {
  sponsors = [
      new Sponsor('gopro', 'go_pro_sports_dome_gp_logo.png', 'bg-black'),
      new Sponsor('statefarm', 'state_farm_logo.svg'),
      new Sponsor('profresh', 'pro_fresh_cleaning.jpg'),
      new Sponsor('eichs', 'eichs_sports.PNG'),
      new Sponsor('buffalowildwings', 'buffalo_wild_wings_logo.svg'),
      new Sponsor('culvers', 'culvers_logo.svg'),
      new Sponsor('raisingcanes', 'raising_canes_logo.png'),
      new Sponsor('panerabread', 'panera_bread_logo.png'),
      new Sponsor('darcymotors', 'darcy_motors_logo.png')
  ]
  return sponsors.concat(sponsors)
};


$(document).ready(function() {
  if($('title').html() == 'Twister Home Page') {
    workdir = "./";
  } else {
      workdir = "../";
  }

  $('footer').append(createSliderElements(workdir));


  $('.__slide').click(function() {
    if($('title').html() == 'Sponsors') {
      if($(this).data('name') == 'gopro') {
        $('main').html(goProSportsDomeAd);
      } else if($(this).data('name') == 'statefarm') {
        $('main').html(stateFarmAd);
      } else {
        $('main').html(contact);
      }
    } else {
      window.location.href = workdir + 'html/sponsors.html'
    }
  });

  /* Default Sponsor */
  if($('title').html() == 'Sponsors') {
    $('main').html(eichs_ad);
  }
});