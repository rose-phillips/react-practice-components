import Textfield from "./Textfield";
import { Label } from "./Label";
import { Input } from "./Input";

export function TextfieldContainer() {

  return (
    <section>
      <h3>Textfield using React Composition</h3>
      <Textfield>
        <Label>Your name:</Label>
        <Input />
      </Textfield>
    </section>
  );
}
