<template>
  <div id="app">
    <form data-netlify="true" method="POST" name="contact-me">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="eg.Jhon Doe" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="eg.name@example.com" />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="3" placeholder="eg.Hello World"></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-outline-success">Send</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Contact"
};
</script>