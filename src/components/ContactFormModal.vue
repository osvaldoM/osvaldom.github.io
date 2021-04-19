<template>
  <base-modal :is-modal-visible="isModalVisible" v-on="$listeners">
    <section slot="body">
      <div class="flex items-center">
        <div class="mr-20 flex flex-col self-stretch form-feedback">
          <img alt="responsive web app icon" class="max-w-full z-10 bg-white relative success-message-svg" height="100%"
               src="~/assets/svg/undraw_Mail_sent_re_0ofv4.svg" svg-inline
               width="300px"/>

          <div class="relative h-20 w-full feedback-messages-container">
            <p class="success-message absolute w-full text-green-600 font-bold text-center mb-0 py-2 rounded-lg top-0 hidden"> Message sent! </p>
            <p class="error-message absolute w-full text-red-600 font-bold text-center mb-0 py-2 rounded-lg top-0 hidden">
              Unable to send your message: <span class="error-message-details text-sm"></span>
            </p>
          </div>
        </div>
        <form class="send-email-form" method="post" style="max-width: 400px" @submit="sendEmail">
          <h2 class="">Get in touch</h2>
          <div style="position: absolute; left: -5000px;">
            <input autocomplete="no" name="grandpas_beige_spotted_dishwasher" tabindex="-1" type="checkbox" value="1">
          </div>
          <input required autocomplete="name" class="w-full rounded-2xl bg-gray-200 px-4 py-2 mb-2" name="name" placeholder="Your name" type="text"/>
          <input required autocomplete="email" class="w-full rounded-2xl bg-gray-200 px-4 py-2 mb-2" name="email" placeholder="Your email address"
                 type="email">
          <textarea required class="w-full rounded-2xl bg-gray-200 px-4 py-2 mb-2" cols="5" name="message" rows="10">
            </textarea>
          <button class="text-center text-white font-bold w-full bg-rose-400 py-1.5 rounded-2xl" type="submit">Send</button>
        </form>
      </div>
    </section>
  </base-modal>
</template>

<script>
import anime from "animejs";
import {checkFetchResponseStatus} from "../util/Util";
import BaseModal from "./base-components/BaseModal";

const initSendEmail = () => {
  const $feedbackMessagesContainer = document.querySelector('.feedback-messages-container');

  const tl = anime.timeline({
    autoplay: false,
    // easing: 'easeOutBounce',
    duration: 3000,
  })
  tl.add({
    targets: $feedbackMessagesContainer,
    translateY: 80,
  });
  tl.add({
    targets: '.envelope-result',
    translateY: -200,
  }, 0);
  return (event) => {
    tl.seek(0);
    event.preventDefault();
    event.stopImmediatePropagation();
    const $form = event.target;
    const $formFeedback = document.querySelector('.form-feedback');
    const formData = new FormData(event.target);

    fetch('https://app.99inbound.com/api/e/Jnn_X4c-', {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'omit',
      redirect: 'manual',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    }).then(checkFetchResponseStatus)
        .then(response => {
          $form.reset();
          $formFeedback.classList.add('success');
          $formFeedback.classList.remove('error');
          tl.play();
        }).catch(err => {
      $formFeedback.classList.add('error');
      $formFeedback.classList.remove('success');
      $formFeedback.querySelector('.error-message-details').textContent = err;
      tl.play();
    });
  }
}

export default {
name: "ContactFormModal",
  components: {BaseModal},
  props: {
    isModalVisible : {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sendEmail: () => {}
    }
  },
  mounted() {
     this.sendEmail = initSendEmail();
     document.body.classList.add('modal-open');
  },
  destroyed() {
    document.body.classList.remove('modal-open');
  }
}
</script>

<style scoped>

</style>
