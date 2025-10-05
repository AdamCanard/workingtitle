export default function Home() {
  return (
    <main
      className={
        "flex w-full h-full justify-center items-center px-4 bg-background"
      }
    >
      <Card />
    </main>
  );
}
interface IFormInput {
  label: string;
  name: string;
  regex: string;
}
function Card() {
  const formInputs: IFormInput[] = [
    { label: "First Name", name: "firstName", regex: "[A-Za-z]" },
    { label: "Last Name", name: "lastName", regex: "[A-Za-z]" },
    {
      label: "Email",
      name: "email",
      regex: "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$",
    },
  ];

  return (
    <div
      className={
        "border-2 border-black rounded-md w-full h-full max-w-[480px] max-h-2/3 bg-foreground"
      }
    >
      <FormRenderer inputs={formInputs} />
    </div>
  );
}

function FormRenderer(props: { inputs: IFormInput[] }) {
  console.log(props.inputs);
  return <></>;
}
