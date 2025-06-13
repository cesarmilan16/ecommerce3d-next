import { useEffect } from "react";
import { BasicLayout } from "@/layouts";

export default function SearchPage() {

    useEffect(() => {
      document.getElementById("search-products").focus();
    }, [])
    
    
    return (
        <>
            <BasicLayout relative isOpenSearch>
                <p>Estamos en la busqueda</p>
            </BasicLayout>
        </>
    )
}
