import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
  <main>
    <section>
      <h2>Why work with us?</h2>
      <Accordion className="accordion">
      <AccordionItem className="accordion-item" title="We got 20 years of experience">
          <article>
            <p>You can&apost;t go wrong with us</p>
            <p>
              We are in the business of planning highly individualized 
              vacation trips for more than 20 years.
            </p>
          </article>
        </AccordionItem>
        <AccordionItem className="accordion-item" title="We working with local guide">
          <article>
            <p>We are not doing this alone from our office.</p>
            <p>
              Instead, we are working with local guide to ensure a safe and 
              pleasant vacation.
            </p>
          </article>
        </AccordionItem>
      </Accordion>
    </section>
  </main>
  );
}

export default App;
