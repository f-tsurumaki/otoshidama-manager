import { useEffect, useState } from "react";
import { Balance } from "@/types/balance";
import { fetchMainBalance, fetchSpBalance } from "@/components/balance/balance.api";


function BalanceCard() {
    const [mainBalance, setMainBalance] = useState<Balance[]>([]);

}

export default BalanceCard;