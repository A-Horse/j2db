'use strict';

let fs = require('fs'),
    util = require('./lib/util');

let StorageMemory = () => {

    let meta = {};

    return {
        flush: () => {
            return true;
        },
        meta: () => {
            return meta;
        }
    };
};

let StorageFile = (file) => {
    let meta = {};

    if ( util.fileExist(file) ) {
        meta = JSON.parse(fs.readFileSync(file));
    }

    let flushing = false,
        out = false;
    return {
        flush: () => {
            if ( flushing ) {
                out = true;
                return;
            }

            flushing = true;
            let self = this;
            fs.writeFile(file, JSON.stringify(meta), function(){
                flushing = false;
                if ( out ) {
                    out = false;
                    this.flush.call(self);
                }

            });
        },
        meta: () => {
            return meta;
        }
    };
};

module.exports = (file) => {
    if (file) {
        return StorageFile(file);
    }
    return StorageMemory();
};
