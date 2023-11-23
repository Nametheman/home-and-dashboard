export const country_list = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua &amp; Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia &amp; Herzegovina',
    'Botswana',
    'Brazil',
    'British Virgin Islands',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Cape Verde',
    'Cayman Islands',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote D Ivoire',
    'Croatia',
    'Cruise Ship',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Polynesia',
    'French West Indies',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kuwait',
    'Kyrgyz Republic',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Pierre &amp; Miquelon',
    'Samoa',
    'San Marino',
    'Satellite',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'South Africa',
    'South Korea',
    'Spain',
    'Sri Lanka',
    'St Kitts &amp; Nevis',
    'St Lucia',
    'St Vincent',
    'St. Lucia',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    "Timor L'Este",
    'Togo',
    'Tonga',
    'Trinidad &amp; Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks &amp; Caicos',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'Uruguay',
    'Uzbekistan',
    'Venezuela',
    'Vietnam',
    'Virgin Islands (US)',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];
  
  export const lagos_city = ['Mainland', 'Island'];
  
  export const nigerian_states = [
    'Abia',
    'Adamawa',
    'Akwa Ibom',
    'Anambra',
    'Bauchi',
    'Bayelsa',
    'Benue',
    'Borno',
    'Cross River',
    'Delta',
    'Ebonyi',
    'Edo',
    'Ekiti',
    'Enugu',
    'FCT - Abuja',
    'Gombe',
    'Imo',
    'Jigawa',
    'Kaduna',
    'Kano',
    'Katsina',
    'Kebbi',
    'Kogi',
    'Kwara',
    'Lagos',
    'Nasarawa',
    'Niger',
    'Ogun',
    'Ondo',
    'Osun',
    'Oyo',
    'Plateau',
    'Rivers',
    'Sokoto',
    'Taraba',
    'Yobe',
    'Zamfara',
  ];
  
  export const url = (param) => {
    return `${process.env.REACT_APP_BASE_URL}${param}`;
  };
  
  export const CapFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  export const toCurrency = (num) => {
    return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };
  
  export const convertToLink = (id) => {
    if (id === 'twitter') {
      return 'https://twitter.com';
    }
    if (id === 'instagram') {
      return 'https://instagram.com';
    }
    if (id === 'facebook') {
      return 'https://facebook.com';
    }
    if (id === 'linkedin') {
      return 'https://linkedin.com';
    }
    if (id === 'whatsapp') {
      return 'https://whatsapp.com';
    }
    if (id === 'youtube') {
      return 'https://youtube.com';
    }
    if (id === 'snapchat') {
      return 'https://snapchat.com';
    }
    if (id === 'soundcloud') {
      return 'https://soundcloud.com';
    }
    if (id === 'spotify') {
      return 'https://spotify.com';
    }
    if (id === 'tiktok') {
      return 'https://tiktok.com';
    }
    if (id === 'paypal') {
      return 'https://paypal.com';
    }
    if (id === 'venmo') {
      return 'https://venmo.com';
    }
    if (id === 'twitch') {
      return 'https://twitch.com';
    }
    if (id === 'apple') {
      return 'https://apple.com';
    }
    if (id === 'email') {
      return window.location.pathname;
    }
    if (id === 'dribble') {
      return 'https://dribble.com';
    }
    if (id === 'behance') {
      return 'https://behance.net';
    }
    if (id === 'telegram') {
      return 'https://telegram.org';
    }
  };
  
  export const getInfo = (id) => {
    if (id === 'twitter') {
      return 'Enter your twitter Id e.g albert_oriamo';
    }
    if (id === 'instagram') {
      return 'Enter your instagram Id e.g olabiranjoshua';
    }
    if (id === 'facebook') {
      return 'Enter your facebook link e.g https://facebook.com/username';
    }
    if (id === 'linkedin') {
      return 'Enter your linkedin link e.g https://linkedin.com/username';
    }
    if (id === 'whatsapp') {
      return 'Enter your whatsapp number with tour country code e.g +2348093481350';
    }
    if (id === 'youtube') {
      return 'Enter your youtube link e.g https://youtube.com/username';
    }
    if (id === 'snapchat') {
      return 'Enter your snapchat username e.g mainjoe.code';
    }
    if (id === 'soundcloud') {
      return 'Enter your soundcloud username e.g kennyblack';
    }
    if (id === 'spotify') {
      return 'Enter your spotify username e.g brad';
    }
    if (id === 'tiktok') {
      return 'Enter your tiktok username e.g brad';
    }
    if (id === 'paypal') {
      return 'Enter your paypal username e.g brad';
    }
    if (id === 'venmo') {
      return 'Enter your venmo username e.g brad';
    }
    if (id === 'twitch') {
      return 'Enter your twitch username e.g brad';
    }
    if (id === 'apple') {
      return 'Enter your email e.g john_doe@icloud.com';
    }
    if (id === 'email') {
      return 'Enter your email e.g john_doe@email.com';
    }
    if (id === 'behance') {
      return 'Enter your behance username e.g designerpro';
    }
    if (id === 'dribble') {
      return 'Enter your dribble username e.g awesomeflag';
    }
    if (id === 'telegram') {
      return 'Enter your telegram username e.g username';
    }
  };
  
  export const getLink = (name, link) => {
    if (name === 'text') {
      return `sms:${link}`;
    } else if (name === 'call') {
      return `tel:${link}`;
    } else if (name === 'twitter') {
      return `${convertToLink(name)}/${link}`;
    } else if (name === 'instagram') {
      return `${convertToLink(name)}/${link}`;
    } else if (name === 'facebook') {
      return link;
    } else if (name === 'linkedin') {
      return link;
    } else if (name === 'whatsapp') {
      return `https://wa.me/${link}`;
    } else if (name === 'youtube') {
      return link;
    } else if (name === 'snapchat') {
      return `${convertToLink(name)}/add/${link}`;
    } else if (name === 'soundcloud') {
      return `${convertToLink(name)}/search?q=${link}`;
    } else if (name === 'spotify') {
      return `https://open.spotify.com/search/${link}`;
    } else if (name === 'tiktok') {
      return `${convertToLink(name)}/search?q=${link}`;
    } else if (name === 'paypal') {
      return `https://paypal.me/${link}`;
    } else if (name === 'behance') {
      return `https://behance.net/${link}`;
    } else if (name === 'dribble') {
      return `https://dribble.com/${link}`;
    } else if (name === 'telegram') {
      return `https://t.me/${link}`;
    } else if (name === 'venmo') {
      return `${convertToLink(name)}/${link}`;
    } else if (name === 'apple') {
      return `mailto: ${link}`;
    } else if (name === 'twitch') {
      return `https://www.twitch.tv/search?term=/${link}`;
    } else if (name === 'email') {
      return `mailto: ${link}`;
    } else {
      if (link.includes('https://')) {
        return link;
      } else {
        return `https://${link}`;
      }
    }
  };
  
  export const currencyConverter = (amount, currency, select) => {
    // let selectedCurrency = JSON.parse(localStorage.getItem("country")).currency;
    return currency.USD === undefined ? 0 : currency[select.currency] * amount;
  };
  
  export const addToken = (data) => {
    // const user = jwt(data.data.token); // decode your token here
    localStorage.setItem('token', data.data.token);
    localStorage.setItem('user', JSON.stringify(data.data));
  };
  
  export const isEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  export const inputFocus = (element) => {
    element.preventDefault();
    if (element.key === 'Delete' || element.key === 'Backspace') {
      const next = element.target.tabIndex - 2;
      if (next > -1) {
        element.target.form.elements[next].focus();
      }
    } else {
      const next = element.target.tabIndex;
      if (next < 5) {
        element.target.form.elements[next].focus();
      }
    }
  };
  
  