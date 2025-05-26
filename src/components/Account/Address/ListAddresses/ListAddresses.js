import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { map } from "lodash";
import { Address as AddressCtrl } from "@/api";
import { Address } from "./Address";
import { useAuth } from "@/hooks";
import { AddAddress } from "../AddAddress";

const addressCtrl = new AddressCtrl();

export function ListAddresses(props) {
    const { reload, onReload } = props;
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
    }, [reload])
    
    if (!addresses) return null;
    
    return (
        <Box>
            {map(addresses, (address) => (
                <Address key={address.id} 
                addressId={address.id} 
                address={address} 
                onReload={onReload}
                />
            ))}
        </Box>
    )
}
