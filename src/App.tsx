import "./App.css";

import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center ">
        <div className="border border-violet-500 rounded-xl p-14 bg-violet-50">
          <div className="flex justify-center items-center">
            <button
              className="px-3 py-2 rounded-md bg-green-500 text-xl text-white"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <div className="text-4xl px-8">{count}</div>
            <button
              className="px-3 py-2 rounded-md bg-red-500 text-xl text-white"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
