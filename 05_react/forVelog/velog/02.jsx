class HelloJSX extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloJSX toWhat="JSX World" />);

class HelloJS extends React.Component {
  render() {
    return React.createElement("div", null, `Hello ${this.props.toWhat}`);
  }
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(HelloJS, { toWhat: "JS World" }, null));
// 위의 두 코드는 동일한 코드(위의 코드는 JSX로, 아래 코드는 JS로 작성됨)

const elementJSX = <h1 className="greeting">Hello, world!</h1>;
const elementJS = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
// 위의 두 코드는 동일한 코드(위의 코드는 JSX로, 아래 코드는 JS로 작성됨)

// // createElement의 파라미터
// function React.createElement(
//     type: HTMLElementType,
//     props?: ClassAttributes<T> & P | null,
//     ...children: ReactNode[]
// )

const name = "소플";
function formatName(user) {
  return user.firstName + " " + user.lastName;
}
const user = {
  firstName: "Inje",
  lastName: "Lee",
};
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
