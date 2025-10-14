"use client";

import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

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
  description: string;
  required?: boolean;
}
function Card() {
  const formInputs: IFormInput[] = [
    {
      label: "First Name",
      name: "first_name",
      regex: `\\w`,
      description: "Please enter first name",
      required: true,
    },

    {
      label: "Last Name",
      name: "last_name",
      regex: "\\w",
      description: "Please enter your last name",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      regex: "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$",
      description: "Please Enter Valid Email",
      required: true,
    },
  ];

  return (
    <div
      className={
        "border-2 border-black rounded-md w-full h-full max-w-[480px] max-h-2/3 bg-foreground flex justify-center"
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
    <form
      onSubmit={handleSubmit}
      className={
        "flex flex-col gap-2 w-2/3 h-full justify-center items-center border-2"
      }
    >
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
    <div className={"w-full"}>
      <label>{input.label}</label>
      <input
        className={"border-2 border-black"}
        name={input.name}
        value={inputValue}
        onChange={handleChange}
        pattern={input.regex}
        required={input.required || false}
        onInvalid={(e: InvalidEvent<HTMLInputElement>) =>
          e.target.setCustomValidity(input.description)
        }
        onInput={(e: InvalidEvent<HTMLInputElement>) =>
          e.target.setCustomValidity("")
        }
      />
    </div>
  );
}
