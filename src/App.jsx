import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function App() {
    return (
        <div style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column', minHeight: '95vh'}}>
            <Header />
            <div style={{flex: 1, display: 'flex', justifyContent: 'center', padding: 12}}>
                Conteúdo principal
            </div>
            <Footer />
        </div>
    );
}