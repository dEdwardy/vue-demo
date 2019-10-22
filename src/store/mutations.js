export default {
    ADD_FILE(state, file){
        state.fileList.push(file)
    },
    DELETE_FILE(state, index){
        state.fileList.splice(index,1);
    }
}