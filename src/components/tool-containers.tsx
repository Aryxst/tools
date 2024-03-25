export const ToolContainer = ({ children }: { children: any }) => (
  <main class="w-screen flex max-sm:flex-col max-sm:items-center">
    {children}
  </main>
);
export const InputContainer = ({ children }: { children: any }) => (
  <section>
    <h2>Input</h2>
    <hr />
    {children}
  </section>
);
export const OutputContainer = ({ children }: { children: any }) => (
  <section>
    <h2>Output</h2>
    <hr />
    <div>{children}</div>
  </section>
);
