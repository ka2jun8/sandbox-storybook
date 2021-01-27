import "./styles.css";

type Props = {
  title: string;
  descriptions: string[];
};

export default function App(props: Props) {
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <h2>{props.descriptions.join(" ")}</h2>
    </div>
  );
}
