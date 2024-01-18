import "./App.css";

function App() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center ">
        <div className="border border-violet-500 rounded-xl p-14 bg-violet-50">
          <div className="flex justify-center items-center">
            <button className="px-3 py-2 rounded-md bg-green-500 text-xl text-white">
              Increment
            </button>
            <h4 className="text-4xl px-8">0</h4>
            <button className="px-3 py-2 rounded-md bg-red-500 text-xl text-white">
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
