import { For, createSignal } from "solid-js";
import {
  InputContainer,
  OutputContainer,
  ToolContainer,
} from "../../components/tool-containers";

export default function ASCIIPage() {
  const [text, setText] = createSignal("");
  const encodedText = () =>
    text()
      .split("")
      .map((char) => char.charCodeAt(0));
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return (
    <>
      <h1>Text to Number</h1>
      <ToolContainer>
        <InputContainer>
          <div>
            <h3>Text:</h3>
            <textarea
              onInput={(e) => setText(e.currentTarget.value)}
              class="border border-black resize"
              placeholder="Enter text here..."
            ></textarea>
          </div>
        </InputContainer>
        <OutputContainer>
          <div>
            <h3>ASCII Result:</h3>
            <div class="border border-black p-2 container">
              {encodedText().join(" ")}
            </div>
          </div>
          <div>
            <h3>Alphabetical Order Result:</h3>
            <div class="border border-black p-2 container">
              {text()
                .split("")
                .map((char) => alphabet.indexOf(char.toLowerCase()) + 1)
                .join(" ")}
            </div>
          </div>
        </OutputContainer>
      </ToolContainer>
    </>
  );
}
