import { createSignal } from "solid-js";
import {
  InputContainer,
  OutputContainer,
  ToolContainer,
} from "../../components/tool-containers";
export default function ASCIIPage() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [text, setText] = createSignal("");
  const decimalEncodedText = () =>
    text()
      .split("")
      .map((char) => char.charCodeAt(0));
  const hexEncodedText = () =>
    decimalEncodedText().map((char) => "0x" + char.toString(16));
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
            <h3>ASCII Decimal Result:</h3>
            <p class="border border-black p-2 container">
              {decimalEncodedText().join(" ")}
            </p>
          </div>
          <div>
            <h3>ASCII Hexadecimal Result:</h3>
            <p class="border border-black p-2 container">
              {hexEncodedText().join(" ")}
            </p>
          </div>
          <div>
            <h3>Alphabetical Order Result:</h3>
            <p class="border border-black p-2 container">
              {text()
                .split("")
                .map((char) => alphabet.indexOf(char.toLowerCase()) + 1)
                .join(" ")}
            </p>
          </div>
        </OutputContainer>
      </ToolContainer>
    </>
  );
}
