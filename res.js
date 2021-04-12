'use strict';

exports.ok = function(values, res) {
    let data = {
        'status' : 200,
        'values' : values
    };

    res.json(data);
    res.end();
};

//RESPONSE NESTED MATA_KULIAH
exports.nested = (values, res) => {
    //ACCUMULATION DATA
    const result = values.reduce((accumulation, item) => {
        //KeyGroup  
        if(accumulation[item.name]) {
            //Variavle Group Mahasiswa.name
            const group = accumulation[item.name]; 
            //Check array data = mata_kuliah
            if(Array.isArray(group.mata_kuliah)) {
                // Adding value to group mata_kuliah
                group.mata_kuliah.push(item.mata_kuliah);
            }else {
                group.mata_kuliah = [group.mata_kuliah, item.mata_kuliah];
            }
        }else {
            accumulation[item.name] = item;
        }

        return accumulation;
    }, {});

    let data = {
        'status' : 200,
        'values' : result
    };

    res.json(data);
    res.end();
};