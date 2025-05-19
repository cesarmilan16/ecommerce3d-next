import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon, Input } from "@chakra-ui/react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { map } from "lodash";
import { Category } from "@/api";
import styles from './Menu.module.scss';
import classNames from "classnames";

const categoryCtrl = new Category();

export function Menu(props) {
    const { isOpenSearch } = props;
    const [categories, setCategories] = useState(null);
    const [showSearch, setShowSearch] = useState(false);

    const openCloseSearch = () => setShowSearch(prevState => !prevState);

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
    <div className={styles.categories}>
        {map(categories, (category) => (
            <Link key={category.id} href={`/categories/${category.slug}`}>
                <img src={category.icon.url} />
                {category.title}
            </Link>
        ))}

        <button className={styles.search} onClick={openCloseSearch}>
            <Icon as={FaSearch} />
        </button>

        <div className={classNames(styles.inputContainer, {[styles.active]: showSearch})}>
            <Input 
            id="search-products" 
            placeholder="Buscador" 
            className={styles.input} 
            _focus={true} 
            />
            <Icon 
            as={FaTimes} 
            className={styles.closeInput} 
            onClick={openCloseSearch} 
            />
        </div>
    </div>
  )
}
