import api from '@/api/index'

function fun(to,from,next){
    let data = JSON.parse(sessionStorage.getItem('arr'));
    
    let index = data.findIndex(item=>item.view_id === to.name);
    if(index >= 0){
        next();
    }
    else{
        alert('没有权限')
        next('/home')
    }
}

export default fun;