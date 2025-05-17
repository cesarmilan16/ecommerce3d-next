import { AuthProvider } from "@/contexts"
import { Provider } from "@/components/ui/provider";
import "@/scss/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}
