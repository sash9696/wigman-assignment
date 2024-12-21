// internal components
import { NavigationPanel,Header } from "./components";
import "./App.css";
import MainContent from "./containers/MainContent";


export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row">
      <NavigationPanel />

      <div className="p-5 pl-10 w-full md:ml-[60px]">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
