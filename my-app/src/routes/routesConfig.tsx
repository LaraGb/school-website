import PageLayout from '../shared/layout/PageLayout';
import Home from '../pages/home/Index';
import About from '../pages/about/Index';
import Blog from '../pages/blog/Index';

type RouteConfig = {
  Component: React.JSX.Element;
  state?: string;
  label:string;
  children?:[{label:string,subLabel:string,href:string}],
  path:string
  // outras propriedades do objeto, se houver
};


const routesConfig:Array<RouteConfig> = [
  {
    state:'home',
    label:'Home',
    path:'/',
    Component:<PageLayout><Home/></PageLayout>
  },{
    state:'about',
    label:'Sobre',
    path:'/sobre',
    Component:<PageLayout><About/></PageLayout>
  },
  {
    state:'blog',
    label:'Blog',
    path:'/blog',
    Component:<PageLayout><Blog/></PageLayout>,
    children:[
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      }
    ]
  }
];




export const getRoutesWithState = () => {
  return routesConfig.filter(route => route.hasOwnProperty('state'));
}

export default routesConfig;