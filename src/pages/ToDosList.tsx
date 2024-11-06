
import Completed from "./Completed";
import Doing from "./Doing";
import InCompleted from "./InCompleted";
import OverDate from "./OverDate";
import ToDo from "./ToDo";
import UnderReview from "./UnderReview";


const ToDosList = () => {
    return (
        <div className=" bg-slate-100 p-3 h-screen w-screen sticky top-0 left-0">
            <div className="flex flex-row overflow-y-auto gap-5 ">
                <InCompleted />
                <ToDo />
                <Doing />
                <UnderReview />
                <Completed />
                <OverDate />
            </div>
        </div>


    );
};

export default ToDosList;