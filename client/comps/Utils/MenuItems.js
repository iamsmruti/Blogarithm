import FeedIcon from '@mui/icons-material/Feed';
import ScienceIcon from '@mui/icons-material/Science';
import TerminalIcon from '@mui/icons-material/Terminal';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export const menuItems = [
    {
        title: 'News',
        path: '/blog/news'
    },
    {
        title: 'Science',
        path: '/blog/science'
    },
    {
        title: 'Programming',
        path: '/blog/programming'
    },
    {
        title: 'Gadgets',
        path: '/blog/gadgets'
    },
    {
        title: 'Tutorials',
        path: '/blog/tutorials'
    }
]

export const MenuItemsMob = [
    {
        title: 'News',
        path: '/blog/news',
        icon: <FeedIcon />
    },
    {
        title: 'Science',
        path: '/blog/science',
        icon: <ScienceIcon />
    },
    {
        title: 'Programming',
        path: '/blog/programming',
        icon: <TerminalIcon />
    },
    {
        title: 'Gadgets',
        path: '/blog/gadgets',
        icon: <DevicesOtherIcon />
    },
    {
        title: 'Tutorials',
        path: '/blog/tutorials',
        icon: <LightbulbIcon />
    }
]