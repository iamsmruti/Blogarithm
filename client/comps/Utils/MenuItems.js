import FeedIcon from '@mui/icons-material/Feed';
import ScienceIcon from '@mui/icons-material/Science';
import TerminalIcon from '@mui/icons-material/Terminal';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export const menuItems = [
    {
        title: 'News',
        path: '/blogs/news'
    },
    {
        title: 'Science',
        path: '/blogs/science'
    },
    {
        title: 'Programming',
        path: '/blogs/programming'
    },
    {
        title: 'Gadgets',
        path: '/blogs/gadgets'
    },
    {
        title: 'Tutorials',
        path: '/blogs/tutorials'
    }
]

export const MenuItemsMob = [
    {
        title: 'News',
        path: '/blogs/news',
        icon: <FeedIcon />
    },
    {
        title: 'Science',
        path: '/blogs/science',
        icon: <ScienceIcon />
    },
    {
        title: 'Programming',
        path: '/blogs/programming',
        icon: <TerminalIcon />
    },
    {
        title: 'Gadgets',
        path: '/blogs/gadgets',
        icon: <DevicesOtherIcon />
    },
    {
        title: 'Tutorials',
        path: '/blogs/tutorials',
        icon: <LightbulbIcon />
    }
]