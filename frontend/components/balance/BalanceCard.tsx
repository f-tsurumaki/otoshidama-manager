import axios from "axios";
import { useEffect, useState } from "react";

function BalanceCard() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/balance");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>銀行残高</h1>  
        <p></p>
    </div>
    )
}
export default BalanceCard;