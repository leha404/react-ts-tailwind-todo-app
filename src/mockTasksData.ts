type MockTaskType = {
  checked: boolean;
  text: string;
};

const mockTasksData: MockTaskType[] = [
  {
    checked: true,
    text: "Компонент ToDo List - 2023-07-22",
  },
  {
    checked: true,
    text: "Компонент Task - 2023-07-23",
  },
  {
    checked: true,
    text: "Состояние tasks - 2023-08-02",
  },
  {
    checked: true,
    text: "Добавление новой задачи - 2023-08-03",
  },
  {
    checked: true,
    text: "Изменение статуса задача - 2023-08-03",
  },
  {
    checked: true,
    text: "Удаление задачи - 2023-08-03",
  },
  {
    checked: true,
    text: "Список задач на странице - 2023-08-03",
  },
  {
    checked: true,
    text: "Фильтрация задач - 2023-08-05",
  },
  {
    checked: true,
    text: "Элементы управления для добавления, фильтрации и очистки списка задач - 2023-08-05",
  },
];

export default mockTasksData;
export type { MockTaskType };
