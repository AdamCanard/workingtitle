"use client";

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
    { label: "First Name", name: "first_name", regex: "[A-Za-z]" },
    { label: "Last Name", name: "last_name", regex: "[A-Za-z]" },
    {
      label: "Email",
      name: "email",
      regex: "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$",
    },
  ];

  const handleClick = async () => {
    const formData = new FormData();
    formData.append("first_name", "Adam");
    formData.append("last_name", "Cunard");
    formData.append("email", "azcunard@gmail.com");
    console.log(formData);
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
    <div
      className={
        "border-2 border-black rounded-md w-full h-full max-w-[480px] max-h-2/3 bg-foreground"
      }
      onClick={handleClick}
    >
      <FormRenderer inputs={formInputs} />
    </div>
  );
}

function FormRenderer(props: { inputs: IFormInput[] }) {
  return <></>;
}
