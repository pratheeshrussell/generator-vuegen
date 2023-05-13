export default  class AppPaths{
    static root = {
        name:'root',
        path:'/'
    };
    static userDashboard = {
        name:'userdashboard',
        path:'/dashboard'
    };
    static login = {
        name:'login',
        path:'/login'
    };
    <% if(extrapackages.includes('vueacl')) { %>
    static unauthorized = {
        name:'unauthorized',
        path:'/unauthorized'
    };
    <% }%>
}