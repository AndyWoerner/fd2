<template>
  <section id="contact" class="bg-black">
    <div class="container mx-auto max-w-screen-xl">
      <div class="flex py-24">
        <div class="w-1/2 relative">
          <img class="w-72 absolute -top-60 -left-40" src="~/assets/images/donkeys.webp" alt="">
          <h2 class="font-Rubik leading-tight text-70px text-white">
            Need a <br>
            project? <br>
            Let’s talk.
          </h2>
          <div class="mt-6 flex items-center">
            <img class="w-12" src="~/assets/images/contact_phone.png" alt="">
            <p class="ml-6 font-Rubik text-white text-15px">
              6194787 1615 94+
            </p>
          </div>
          <div class="mt-6 flex items-center">
            <img class="w-12" src="~/assets/images/contact_mail.png" alt="">
            <p class="ml-6 font-Rubik text-white text-15px hover:text-secondary">
              <a href="mailto:dingdoing@frozendonkey.com">dingdoing@frozendonkey.com</a>
            </p>
          </div>
          <div class="mt-6 flex items-center">
            <img class="w-12" src="~/assets/images/contact_location.png" alt="">
            <p class="ml-6 font-Rubik text-white text-15px">
              Lange Straße 15 <br>
              29664 Walsrode
            </p>
          </div>
        </div>
        <!-- Form -->
        <div class="w-1/2 relative">
          <img class="w-96 absolute -bottom-80 -right-20" src="~/assets/images/donkeys.webp" alt="">
          <form action="">
            <div class="border-b py-1 border-borderGray">
              <label for="name">
                <input
                  id="name"
                  class="bg-transparent w-full py-1 text-white placeholder-white focus:outline-none"
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                >
              </label>
            </div>
            <div class="mt-12 border-b py-1 border-borderGray">
              <label for="email">
                <input
                  id="email"
                  class="bg-transparent w-full py-1 text-white placeholder-white focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                >
              </label>
            </div>
            <div class="mt-12 border-b py-1 border-borderGray">
              <label for="title">
                <input id="title" class="bg-transparent w-full py-1 text-white placeholder-white focus:outline-none" type="text" name="title" placeholder="Title">
              </label>
            </div>
            <div class="mt-12 border-b py-1 border-borderGray">
              <label for="message">
                <textarea
                  id="message"
                  class="bg-transparent w-full py-1 text-white placeholder-white focus:outline-none"
                  rows="3"
                  name="title"
                  placeholder="Message *"
                  required
                />
              </label>
            </div>
            <button class="mt-20 btn bg-primary text-white hover:bg-secondary hover:text-black">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
/* Change Autocomplete styles in Chrome/Safari*/
input:-webkit-autofill,
input:-webkit-autofill:hover,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
select:-webkit-autofill,
select:-webkit-autofill:hover{
  color: white;
  background-color: transparent;
  box-shadow: 0 0 0px 1000px transparent inset;
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
}

input:-webkit-autofill:focus,
textarea:-webkit-autofill:focus,
select:-webkit-autofill:focus{
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
}
textarea{
  resize: none;
}
</style>
