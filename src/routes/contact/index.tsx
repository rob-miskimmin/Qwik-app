import { component$, useSignal, useStore, useStylesScoped$ } from "@builder.io/qwik";


export default component$(() => {
  useStylesScoped$(`
    form {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    width: 25%;
}
.contact-button {
    margin-left: 2rem;
    width: 25%;
    padding: 0.5rem;
}`);

  const showForm = useSignal(false);
  const showAnswer = useSignal(false);
  const formstate = useStore({
    name: "",
    email: "",
    message: ""
  });

  return (
    <>
      <h1>Contact</h1>
      <p>Here is a list of ways to get in touch with me:</p>
      <ul>
        <li>Email: <a href="mailto:robert.miskimmin@gmail.com">robert.miskimmin@gmail.com</a></li>
        <li>Twitter: <a href="https://twitter.com/robertmiskimmin">@robertmiskimmin</a></li>
        <li>GitHub: <a href="https://github.com/robertmiskimmin">robertmiskimmin</a></li>
      </ul>

      <button class="contact-button" onClick$={() => showForm.value = !showForm.value}>Contact me</button>
      {showForm.value  && (
      <form preventdefault:submit onSubmit$={() => {showAnswer.value = true;
        formstate.name = "";
        formstate.email = "";
        formstate.message = "";
      }}>
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="name" value={formstate.name}
        onInput$={(ev, el) => formstate.name = el.value}/><br />
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="email" value={formstate.email}
        onInput$={(ev, el) => formstate.email = el.value}/><br />
        <label for="message">Message:</label>
        <textarea id="message" placeholder="message" value={formstate.message}
        onInput$={(ev, el) => formstate.message = el.value}/><br />
        <button type="submit" >Send</button>
      </form>)}
      {showAnswer.value && <p>Thank you for your message!</p>}
      <p>{formstate.name}</p>
      <p>{formstate.email}</p>
      <p>{formstate.message}</p>
    </>
  );
});
  