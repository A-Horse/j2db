'use strict';


/**
 *   
 * Binary Tree
 * 
 */
let BinaryTree = (storge) => {
    let meta = storge.meta();
    return {
        get: (key) => {
            return meta[key];
        },
        set: (key, value) => {
            return meta[key] = value;
        },
        delete: (key) => {
            delete meta[key];
        }
    };
};

module.exports = BinaryTree;





