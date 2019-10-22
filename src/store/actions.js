export default {
    addFile({ commit }, data){
        commit('ADD_FILE', data);
    },
    deleteFile({ commit, state }, index){
        if(index>state.fileList.length-1 || index<0)return
        commit('DELETE_FILE', index);
    },
}