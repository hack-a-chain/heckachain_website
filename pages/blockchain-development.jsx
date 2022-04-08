import Form from "../src/components/Form";
import HeroDev from "../src/components/Development/HeroDev";
import ProductsDevelopment from "../src/components/Development/ProductsDevelopment";
import OurProcess from "../src/components/Development/OurProcess";
import Engagement from "../src/components/Development/Engagement";
import Cases from "../src/components/Development/Cases";
import TestimoniesDevelopment from "../src/components/Development/TestimoniesDevelopment";

export default function Blockchain() {
  return (
    <div className="overflow-hidden">
      <HeroDev />
      <ProductsDevelopment />
      <Cases />
      <Engagement />
      <OurProcess />
      <TestimoniesDevelopment />
      <Form />
    </div>
  );
}