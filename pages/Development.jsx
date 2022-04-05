import Form from "../src/components/Form";
import HeroDev from "../src/components/Development/HeroDev";
import ProductsDevelopment from "../src/components/Development/ProductsDevelopment";
import DevelopmentProcess from "../src/components/Development/developmentProcess";

export default function development() {
  return (
    <div>
      <HeroDev />
      <ProductsDevelopment />
      <DevelopmentProcess />
      <Form />
    </div>
  );
}
