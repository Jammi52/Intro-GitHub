import Form from "app/components/Form";
import MenuNavbar from "app/components/MenuNavbar";

export default function Home() {
  return (
    <>
      <MenuNavbar />
      <div className="container">
        <Form />
      </div>
    </>
  );
}
