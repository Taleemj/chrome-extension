chrome.runtime.onMessage.addListener(function (request) {
  if (request.action === "autofill") {
    const searchInput = document.querySelector(
      'input[data-ui="search-input-job"]'
    );
    const locationinput = document.querySelector(
      'input[data-ui="search-input-location"]'
    );

    const firstname = document.querySelector('input[data-ui="firstname"]');
    const lastname = document.querySelector('input[data-ui="lastname"]');
    const email = document.querySelector('input[data-ui="email"]');
    const headline = document.querySelector('input[data-ui="headline"]');
    const phone = document.querySelector('input[name="phone"]');
    const address = document.querySelector('input[name="address"]');
    const avatar = document.querySelector('input[data-ui="avatar"]');
    const summary = document.querySelector('textarea[data-ui="summary"]');
    const resume = document.querySelector('input[data-ui="resume"]');
    const cover_letter = document.querySelector("#cover_letter");

    // searchInput.value = "web developer";
    // locationinput.value = "Antartica";

    firstname.value = "John";
    lastname.value = "Doe";
    email.value = "johndoe@gmail.com";
    (phone.value = "201-723-2247"), (address.value = "Rochelle Park, NJ 07662");
    headline.value = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    summary.value =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ullam commodi voluptatem, et voluptas accusantium architecto dicta vel corrupti, natus consequuntur facilis! Ut consectetur hic quos aperiam, veniam voluptas doloremque rerum nostrum, deleniti quaerat nisi ad illo sed esse ullam ducimus. Rerum quo ab dolores mollitia possimus optio voluptatibus velit.";
    cover_letter.value =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ullam commodi voluptatem, et voluptas accusantium architecto dicta vel corrupti, natus consequuntur facilis! Ut consectetur hic quos aperiam, veniam voluptas doloremque rerum nostrum, deleniti quaerat nisi ad illo sed esse ullam ducimus. Rerum quo ab dolores mollitia possimus optio voluptatibus velit.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ullam commodi voluptatem, et voluptas accusantium architecto dicta vel corrupti, natus consequuntur facilis! Ut consectetur hic quos aperiam, veniam voluptas doloremque rerum nostrum, deleniti quaerat nisi ad illo sed esse ullam ducimus.";
  }
});
