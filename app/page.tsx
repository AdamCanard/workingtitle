"use client";

import { ChangeEvent, FormEvent, useState } from "react";

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
    { label: "First Name", name: "first_name", regex: `[\\S]{1,}` },

    { label: "Last Name", name: "last_name", regex: "[A-Za-z]+" },
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
  const { inputs } = props;
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        body: formData,
      });
      if (response.status === 201) console.log(await response.json());
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input: IFormInput) => {
        return <FormInput input={input} key={input.name} />;
      })}
      <button type="submit" className={"bg-black w-32 h-32"}></button>
    </form>
  );
}

function FormInput(props: { input: IFormInput }) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const { input } = props;
  return (
    <input
      className={"border-2 border-black"}
      name={input.name}
      value={inputValue}
      onChange={handleChange}
      pattern={input.regex}
    />
  );
}
