// lib/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faTiktok,} from '@fortawesome/free-brands-svg-icons';
import { faUtensils, faPhone, faMapMarkerAlt, faAward, faUsers} from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

library.add(faFacebook, faInstagram, faUtensils, faPhone, faMapMarkerAlt, faTiktok, faAward, faUsers );
