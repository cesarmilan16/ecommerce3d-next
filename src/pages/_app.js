import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AuthProvider, CartProvider } from "@/contexts"
import { Provider } from "@/components/ui/provider";
import "@/scss/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <AuthProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </AuthProvider>
    </Provider>
  );
}
