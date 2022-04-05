import Form from "../src/components/Form";
import HeroDev from "../src/components/Development/HeroDev";
import ProductsDevelopment from "../src/components/Development/ProductsDevelopment";
import OurProcess from "../src/components/Development/OurProcess";

export default function Blockchain() {
  return (
    <div>
      <HeroDev />
      <ProductsDevelopment />
      <OurProcess />
      <Form />
    </div>
  );
}