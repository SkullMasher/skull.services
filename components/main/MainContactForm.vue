<template>
  <div>
    <form @submit.prevent="checkform">
      <div class="max-w-2xl mx-auto sm:grid grid-cols-5 gap-8 mb-5">
        <div class="col-span-2" :class="{ 'opacity-50': isSendmailSuccess }">
          <div class="mb-5">
            <label class="form-label" for="email">Votre adresse mail</label>
            <input class="form-input" type="email" id="email" :disabled="isSending || isSendmailSuccess" required maxlength="80">
          </div>
          <div class="mb-5">
            <label class="form-label" for="subject">Sujet de la demande</label>
            <input
              class="form-input"
              type="text"
              id="subject"
              maxlength="80"
              :value="subject"
              :disabled="isSending || isSendmailSuccess" required
            >
          </div>
        </div>
        <div class="col-span-3 mb-5">
          <div :class="{ 'opacity-50': isSendmailSuccess }">
            <label class="form-label" for="message">Votre message</label>
            <textarea class="form-input mb-5" id="message" maxlength="1666" rows="5" :disabled="isSending || isSendmailSuccess" required/>
          </div>
          <button
            type="submit"
            class="mb-4 btn flex ml-auto"
            :class="{ 'opacity-50': isSendmailSuccess }"
            :disabled="isSending || isSendmailSuccess"
          >
            <svg-spinner v-show="isSending" class="h-6 mr-3" />
            <span>Envoyer un Email</span>
          </button>
          <div class="flex justify-end">
            <p v-show="isSendmailSuccess" class="toast--success">Méssage envoyé <SvgCheckCircle /></p>
            <p v-show="isSendmailError" class="toast--warning">Érreur veuillez réesayer</p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
  import Vue from 'vue'
  import SvgCheckCircle from "~/assets/img/check-circle.svg?inline";
  import SvgSpinner from "~/assets/img/spinner.svg?inline";

  export default Vue.extend({
    components: { SvgCheckCircle, SvgSpinner },
    data: () => ({
      isSending: false,
      isSendmailSuccess: false,
      isSendmailError: false,
    }),
    props: ['subject'],
    methods: {
      // Ask the server to create a payment intent & complete the payment
      async checkform(e) {
        this.isSending = true
        this.isSendmailError = false

        const formInputs = {
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value
        }

        const api = `${this.$nuxt.context.$config.baseURL}/api/formchecker`
        const formcheckerOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formInputs),
        }

        const fetchFormchecker = await fetch(api, formcheckerOptions)
        const formcheckerResult = await fetchFormchecker.json()
        if (formcheckerResult.success) {
          this.isSending = false
          this.isSendmailSuccess = true
        }
        if (formcheckerResult.error) {
          this.isSending = false
          this.isSendmailError = true
        }
      }
    }
  })
</script>
