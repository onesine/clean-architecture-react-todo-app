import TasksView from "@presentation/task/TasksView.tsx";

const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full mx-5 md:mx-0 md:w-2/3 lg:w-1/3">
                <h1 className="text-4xl text-gray-700 mb-4">Things to do</h1>
                <TasksView />
            </div>
        </div>
    );
};

export default Home;
