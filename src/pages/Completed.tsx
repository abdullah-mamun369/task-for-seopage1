import Card from "@/components/layout/ui/Card";


const Completed = () => {
    return (
        <div className=" bg-gray-200 p-2 ">
            <div className="flex justify-between mb-2 p-2">
                <div className="flex">
                    <h2 className="font-medium text-gray-700">Completed</h2>
                </div>
                <p className="font-medium text-gray-700">0</p>
            </div>
            <div className="2xl:max-h-[810px] xl:max-h-[500px] lg:max-h-[1200px] md:max-h-[900px] max-h-[800px] overflow-auto overflow-x-hidden">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Completed;