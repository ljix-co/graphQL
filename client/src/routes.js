import App from "./App";
import ListTopics from "./components/ListTopics";
import TopicDetails from "./components/TopicDetails";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <ListTopics />
            },
            {
                path: '/topic/:topicId',
                element: <TopicDetails />
            }
        ]
    }
]

export default routes;
