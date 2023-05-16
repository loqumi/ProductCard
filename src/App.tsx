import {Button} from "./components/Button"
import {PriceTag} from "./components/PriceTag";
import {ProductName} from "./components/ProductName";
import {Description} from "./components/Description";
import {ColorPicker} from "./components/ColorPicker";
import {AdditionalInfo} from "./components/AdditionalInfo";
import "./styles/reset.scss"
import "./styles/main.scss"
import {IMAGES} from "./images";

function App() {
  return (
      <div className="App">
        <main className="card_body">
          <img src={IMAGES.headphones} alt="headphones" className="image"/>
          <PriceTag title="100$"/>
          <ProductName title="Zebronics head phone"/>
          <Description title="A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty."/>
          <ColorPicker/>
          <Button title="Add to cart"/>
          <Button title="Buy now" color='white'/>
          <AdditionalInfo title="Read reviews"/>
        </main>
      </div>
  );
}

export default App;
