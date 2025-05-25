import { useState, useEffect } from "react";
import { Address } from "@/api";
import { useAuth } from "@/hooks";

const addressCtrl = new Address();

export function ListAddresses() {
    const [addresses, setAdresses] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
      (async () => {
        try {
            const response = await addressCtrl.getAll(user.id);
            setAdresses(response.data);
        } catch (error) {
            console.error(error);
        }
      })()
    }, [])
    
    if (!addresses) return null;
    
    return (
        <div>ListAddresses</div>
    )
}
