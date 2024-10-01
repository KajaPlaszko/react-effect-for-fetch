import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {

  const url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState(null);
  const [favourites, setFavourite] = useState(["Measure twice, cut once.", "Don't let the bastards grind you down.", "Always the burrito"]);

  const fetchAdvice = async () => {
    const respone = await fetch(url);
    const jsonData = await respone.json();
    setAdvice(jsonData.slip.advice);
    console.log(advice);
  };

  useEffect(() => {
    fetchAdvice();
  }, [])

  const saveFavourites = () => {
    if(!favourites.includes(advice)) {
      setFavourite([...favourites, advice]);
    }
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip advice={advice} fetchAdvice={fetchAdvice} saveFavourites={saveFavourites}/>
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList favorites={favourites} />
      </section>
    </section>
  )
}

export default AdviceSection