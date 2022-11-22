import {reactive, toRefs} from 'vue' 
export default function useToggle(){
    const data = reactive({
        isShow:false,
    })
    function fnToggle(){
        data.isShow = !data.isShow;
    }
    return {
        ...toRefs(data),
        fnToggle,
    }
}