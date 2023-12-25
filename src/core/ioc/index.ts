import TaskLocalStorageDataSource from "@dataSource/Task/TaskLocalStorageDataSource.ts";
import TaskRepositoryImpl from "@repositoryImpl/TaskRepositoryImpl.ts";
import { container } from "tsyringe";

const AppContainer = container;

AppContainer.register("TaskRepository", {
    useClass: TaskRepositoryImpl
});

AppContainer.register("TaskDataSource", {
    useClass: TaskLocalStorageDataSource
});

export default AppContainer;
