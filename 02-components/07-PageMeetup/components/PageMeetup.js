import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  data() {
    return {
      meetup: null,
      loading: true,
      error: false,
      errorText: ''
    }
  },

  props: {
    meetupId: {
      type: Number
    }
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupView
  },

  watch: {
    meetupId: {
      handler(value) {
        this.loading = true;
        this.error = false;

        fetchMeetupById(value).then((meetup) => {
          this.loading = false;
          this.meetup = meetup
        })
          .catch(error => {
            this.error = true;
            this.errorText = error.message;
          })
      },
      immediate: true
    },

  },

  template: `
    <div class="page-meetup">
      <MeetupView :meetup="meetup" v-if="!error && !loading"  />

      <UiContainer v-if="loading && !error">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-if="error">
        <UiAlert>
        {{ errorText }}
        </UiAlert>
      </UiContainer>
    </div>`,
});
