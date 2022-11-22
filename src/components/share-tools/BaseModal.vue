<template>
    <button class="relative" @click="fnToggle()">
        {{props.openButton}}
    </button>
    <Teleport to="body">
        <transition name="modal-fade">
        <div v-if="isShow" class="modal fixed full-width min-full-height flex wrap y-center x-center">
           <div class="modal-content relative bg-white black">
                <div class="modal-header">
                    <slot name="modal-header"></slot>
                </div>
                <div class="modal-body">
                    <slot></slot> 
                </div>
                <div class="modal-footer">
                    <slot name="modal-footer"></slot>
                    <button @click="fnToggle()">
                        {{props.closeButton}} 
                    </button>
                </div>
                <button v-if="isCross" 
                @click="fnToggle()"
                class="absolute boton-icon top-0 right-0 black  material-symbols-outlined">
                    close
                </button>
            </div>
        </div>
        </transition>
    </Teleport>
</template>
<script>
//import {reactive, toRefs} from 'vue' 
import useToggle from '@/use/useToggle'
import { reactive,toRefs } from 'vue'
export default {
    name:'BaseModal',
    props:{
        openButton:{
            type: String,
            default: 'Open'
        },
        closeButton:{
            type: String,
            default: 'Close'
        },
        isCross:{
            type:Boolean,
            default:true
        },
        autoDisplay:{
            type:Boolean,
            default:true
        }
    },
    setup(props) {
        const dataModel =  reactive({
            sayHello:'hello'
        });
        return {
            ...toRefs(dataModel),
            ...useToggle(),
            props,
        }
    }
}
</script>