import HomeIcon from '@mui/icons-material/Home';
import { Announcement, Dashboard, Login, QuestionAnswer, QuestionMark } from '@mui/icons-material';
export const navData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <Dashboard/>,
        text: "DashBoard",
        link: "explore"
    },
    {
        id: 2,
        icon: <QuestionMark/>,
        text: "Question",
        link: "Question"
    },
    {
        id: 3,
        icon: <QuestionAnswer/>,
        text: "Answer",
        link: "Answer"
    },
    {
        id: 4,
        icon: <Announcement/>,
        text: "NoticeBoard",
        link: "NoticeBoard"
    },
    {
        id: 5,
        icon: <Login/>,
        text: "Logout",
        link: "Logout"
    }
]