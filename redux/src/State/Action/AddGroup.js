export const addGroup = (fname, position, techno) => ({
    type: "ADD_NEW_GROUP",
    group: {
        fname,
        position,
        techno,
    },

});