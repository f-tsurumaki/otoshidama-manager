import axios from "axios";
import { useEffect, useState } from "react";

function BalanceCard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get<BalanceResponse>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/balances`
      );
      
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