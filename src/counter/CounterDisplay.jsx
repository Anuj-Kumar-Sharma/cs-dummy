import useGlobalStore from "../store/store";

const CounterDisplay = () => {
    const count = useGlobalStore((state) => state.count);

    return <p className="text-4xl">{count}</p>;
};

export default CounterDisplay;
