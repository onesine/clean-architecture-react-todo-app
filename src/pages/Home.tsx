import "reflect-metadata";
import AppContainer from "@ioc/index.ts";
import { GetTasks } from "@useCase/taskUseCase";

const Home = () => {
    const getTasksUseCase = AppContainer.resolve(GetTasks);
    console.log("getTasksUseCase:", getTasksUseCase.invoke());

    return (
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-6xl font-medium text-blue-600">Vite + React</h1>
        </div>
    );
};

export default Home;
