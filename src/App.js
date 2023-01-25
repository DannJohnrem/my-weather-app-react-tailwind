import "./App.css";

function App() {
  return (
    <div className="bg-gray-800 h-screen grid place-items-center">
      <div className="bg-white w-96 p-4 rounded-md">
        <input
          type="text"
          placeholder="Enter Your Location"
          className="text-xl border-b p-1 border-gray-200 font-semibold uppercase"
        />
      </div>
    </div>
  );
}

export default App;
