import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="flex bg-gray-100 font-sans text-gray-900">
      <Sidebar />

      <div className="flex h-screen flex-1 flex-col">
        <Header />

        <Canvas />
      </div>

      <RightSidebar />
    </div>
  );
}

export default App;
