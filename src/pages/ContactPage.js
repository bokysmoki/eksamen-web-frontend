export default function ContactPage() {
  return (
    <section className="page">
      <article className="contact-page">
        <h1>Contact Us</h1>
        <h2>Let us help!</h2>
        <ul>
          <li>Have a general question or concern?</li>
          <li>Want to create a custom piece?</li>
          <li>Looking for a gift and don't know where to begin?</li>
          <li>Need style advice?</li>
        </ul>
        <p>Fill out the provided form and we will contact you ASAP.</p>
      </article>

      {/* textarea instead of input field */}
      <article className="contact-form">
        <form>
          <input type="text" name="name" placeholder="Name"></input>
          <input type="email" name="mail" placeholder="Email"></input>
          <input type="tel" name="tel" placeholder="Phone number"></input>
          <textarea type="text" name="comment" placeholder="Comment"></textarea>
          <button>Submit</button>
        </form>
      </article>
    </section>
  );
}
