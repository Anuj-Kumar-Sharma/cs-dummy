import useGlobalStore from "../store/store";

const CounterOperation = () => {
    // const state = useCounterStore();
    // console.log(state);

    const increment = useGlobalStore((state) => state.increment);
    const decrement = useGlobalStore((state) => state.decrement);
    const incrementAsync = useGlobalStore((state) => state.incrementAsync);

    console.log("counterOperation");

    return (
        <div className="flex gap-6 text-black text-4xl">
            <button
                onClick={decrement}
                className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 "
            >
                -
            </button>
            <button
                onClick={increment}
                className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 "
            >
                +
            </button>

            <button
                onClick={() => incrementAsync(3)}
                className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 "
            >
                ++
            </button>
        </div>
    );
};

export default CounterOperation;
