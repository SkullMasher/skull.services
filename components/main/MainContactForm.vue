<template>
  <div>
    <form @submit.prevent="checkform">
      <div class="max-w-2xl mx-auto sm:grid grid-cols-5 gap-8 mb-5">
        <div class="col-span-2">
          <div class="mb-5">
            <label class="form-label" for="email">Votre adresse mail</label>
            <input class="form-input" type="mail" id="email" required>
          </div>
          <div class="mb-5">
            <label class="form-label" for="subject">Sujet de la demande</label>
            <input class="form-input" type="text" id="subject" maxlength="100" required>
          </div>
        </div>
        <div class="col-span-3 mb-5">
          <div>
            <label class="form-label" for="message">Votre message</label>
            <textarea class="form-input mb-5" id="message" maxlength="1666" rows="5" required />
          </div>
          <input type="submit" class="btn flex ml-auto" value="Envoyer un email">
        </div>
      </div>

    </form>
    <p>Debug: {{debug}}</p>
  </div>
</template>
<script>
  import Vue from 'vue'
  import ArrowRight from "~/assets/img/arrow-right.svg?inline";

  export default Vue.extend({
    components: { ArrowRight },
    data: () => ({
      debug: 'topkek',
    }),
    methods: {
      // Ask the server to create a payment intent & complete the payment
      async checkform() {
        const baseURL = `${this.$nuxt.context.$config.baseURL}/api`
        this.debug = baseURL
      }
    }
  })
</script>
