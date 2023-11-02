
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddOne from "./pages/addOne";
import NotFound from "./pages/notFound";
import PInfo from "./pages/pInfo";
import ChoosePlan from "./pages/choosePlan";
import Summary from "./pages/summary";
import ThankYou from "./pages/thankYou";
import { PlansProvider } from "./contexts/plansContext";
import { AddOnsProvider } from "./contexts/addOneContext";
import SidePortion from "./components/sidePortion";



function App() {
  return (
    <>
      <PlansProvider>
        <AddOnsProvider>
          <BrowserRouter>
            <div className="
            bg-white sm:w-[60rem] h-[35rem] mt-[100px] sm:mt-0 rounded-xl shadow-xl p-4 flex flex-col sm:flex sm:flex-row justify-between">
              <SidePortion />
              <Routes>
                <Route path="/" element={<PInfo />} />
                <Route path="/selectplan" element={<ChoosePlan />} />
                <Route path="/addons" element={<AddOne />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/thankyou" element={<ThankYou />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </AddOnsProvider>
      </PlansProvider>
    </>
  );
}

export default App;

