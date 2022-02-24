class Table{
    constructor(arr){
        this.header = arr[0];
        arr.shift();
        this.rows = arr;
    }

    //transforma o metodo em um atributo e precisa de um return
    get RowCount(){
        return this.rows.length;
    }
    get ColumnCount(){
        return this.header.length;
    }
}

module.exports = Table;