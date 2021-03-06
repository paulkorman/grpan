import {config} from '../config/config';

export default class Testimonial {


  constructor(locale){
    this.locale = locale;
  }

  update(callback){
    fetch(config.backendUrl + 'admin/rest/testimonials?locale=' + this.locale)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Network response was not ok');
      })
      .then(callback);
  }

}
