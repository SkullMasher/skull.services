<script setup>
let isSending = false
let isSendmailSuccess = false
let isSendmailError = false

const subject = ref('')

async function checkform(e) {
  isSending = true
  isSendmailError = false

  const formInputs = {
    email: e.target.email.value,
    subject: e.target.subject.value,
    message: e.target.message.value,
  }

  const api = `${$nuxt.context.$config.baseURL}/api/formchecker`
  const formcheckerOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formInputs),
  }

  const fetchFormchecker = await fetch(api, formcheckerOptions)
  const formcheckerResult = await fetchFormchecker.json()
  if (formcheckerResult.success) {
    isSending = false
    isSendmailSuccess = true
  }
  if (formcheckerResult.error) {
    isSending = false
    isSendmailError = true
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="checkform">
      <div class="max-w-2xl mx-auto sm:grid grid-cols-5 gap-8 mb-5">
        <div class="col-span-2" :class="{ 'opacity-50': isSendmailSuccess }">
          <div class="mb-5">
            <label class="form-label" for="email">Votre adresse mail</label>
            <input id="email" class="form-input" type="email" :disabled="isSending || isSendmailSuccess" required maxlength="80">
          </div>
          <div class="mb-5">
            <label class="form-label" for="subject">Sujet de la demande</label>
            <input
              id="subject"
              class="form-input"
              type="text"
              maxlength="80"
              :value="subject"
              :disabled="isSending || isSendmailSuccess" required
            >
          </div>
        </div>
        <div class="col-span-3 mb-5">
          <div :class="{ 'opacity-50': isSendmailSuccess }">
            <label class="form-label" for="message">Votre message</label>
            <textarea id="message" class="form-input mb-5" maxlength="1666" rows="5" :disabled="isSending || isSendmailSuccess" required />
          </div>
          <button
            type="submit"
            class="mb-4 btn flex ml-auto"
            :class="{ 'opacity-50': isSendmailSuccess }"
            :disabled="isSending || isSendmailSuccess"
          >
            <SvgoSpinner v-show="isSending" class="h-6 mr-3" />
            <span>Envoyer un Email</span>
          </button>
          <div class="flex justify-end">
            <p v-show="isSendmailSuccess" class="toast--success">
              Méssage envoyé <SvgoCheckCircle />
            </p>
            <p v-show="isSendmailError" class="toast--warning">
              Érreur veuillez réesayer
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
