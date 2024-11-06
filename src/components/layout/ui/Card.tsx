import { CalendarDays, Layers3, MessageCircleMore, Paperclip, SquareChartGantt } from "lucide-react";
import userImage from "../../../assets/images/1.png"

const Card = () => {
    return (
        <div className="w-80 h-fit bg-white p-4 rounded-lg">
            <div>
                <div className="flex justify-between mb-3">
                    <div className="flex justify-center items-center">
                        <img src={userImage} width={20} alt="" className="mr-1" />
                        <h3 className="text-gray-700 font-semibold text-xs">CLient Name</h3>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={userImage} width={20} alt="" className="mr-1" />
                        <h3 className="text-gray-700 font-semibold text-xs">Sadik Istiaq</h3>
                    </div>
                </div>
                <div className="flex justify-between mb-3">
                    <div className="flex  items-center w-56">
                        <Layers3 className="shrink-0 mr-2 w-4 text-gray-700" />
                        <p className="truncate text-xs text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, in.</p>
                    </div>
                    <div className="flex  items-center">
                        <SquareChartGantt className="shrink-0 mr-2 w-4 text-gray-700" />
                        <p className="text-xs text-gray-700 font-semibold">1/2</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">

                    <img src={userImage} width={20} alt="" className="mr-1" />
                    <img src={userImage} width={20} alt="" className="mr-1" />

                    <p className="text-xs text-gray-700 font-semibold">12+</p>
                    <div className="flex  items-center">
                        <MessageCircleMore className="shrink-0 mr-1 w-4 text-gray-700" />
                        <p className="text-xs text-gray-700 font-semibold">15</p>
                    </div>
                    <div className="flex  items-center">
                        <Paperclip className="shrink-0 mr-1 w-4 text-gray-700" />
                        <p className="text-xs text-gray-700 font-semibold">25</p>
                    </div>
                    <div className="flex  items-center">
                        <CalendarDays className="shrink-0 mr-1 w-4 text-gray-700" />
                        <p className="text-xs text-gray-700 font-semibold">30-12-2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;