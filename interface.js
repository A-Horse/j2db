'use strict';

let binaryTree = require('./binary_tree');

let db = (file) => {
    let storge = require('./physical')(file),
        tree =  binaryTree(storge);


    return {
        commit: () => {
            if ( file ) {
                storge.flush();
            }
        },

        get: tree.get,

        set: tree.set,

        delete: tree.delete
    }
};

module.exports = db;
