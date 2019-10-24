<template>
    <div class="slotTest">
        <div class="slotTestContainer">
            <h1>11111</h1>
            <slot name="head">
                <div>
                    slot head +{{user.lastN}}
                </div>
            </slot>
            <slot name="content">
                <div>
                    slot content
                </div>
            </slot>
            <slot name="footer">
                <div>
                    slot footer
                </div>
            </slot>
            <slot name="others" :user="user">
                <div>
                    {{ user.lastN }} {{ user.firstN }}
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'slot-test',
    data(){
        return {
            user:{
                lastN: 'Zhang',
                firstN: 'san'
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>