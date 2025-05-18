import { useState, useEffect } from "react";
import { Heading } from '@chakra-ui/react';
import { Category } from "@/api";
import styles from './Menu.module.scss';
import { set } from "lodash";

const categoryCtrl = new Category();

export function Menu(props) {
    const { isOpenSearch } = props;
    const [categories, setCategories] = useState(null);
    console.log(categories);
    

    useEffect(() => {
      (async () => {
        try {
            const response = await categoryCtrl.getAll();
            setCategories(response.data);
        } catch (error) {
            console.error(error);            
        }
      })();
    }, []);
    

  return (
    <div>
        <Heading as="h2" size="lg">
            MENU
        </Heading>
    </div>
  )
}
