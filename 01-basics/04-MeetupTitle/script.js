import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const MeetupTitle = {
  name: "MeetupTitle",
  data() {
    return {
      id: null,
      meetupsTitle: ''
    }
  },
  watch: {
    id: {
      handler(value) {
        fetchMeetupById(value).then((meetups) => {
          this.meetupsTitle = meetups.title;
        });
      }
    }
  }
} 


const app = createApp(MeetupTitle);
const vm = app.mount('#app')