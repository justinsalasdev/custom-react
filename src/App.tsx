enum Haha {
  hello = "haha",
}

export function App() {
  function say_hello(message: string) {
    return message;
  }
  return <h1>{say_hello(Haha.hello)}</h1>;
}
