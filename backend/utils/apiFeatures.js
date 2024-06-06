class APIFeatures {
  //example: /api?name=redragon
  constructor(query, queryPar) {
    this.query = query;
    this.queryPar = queryPar;
  }

  search() {
    const filters = {};

    Object.keys(this.queryPar).forEach((key) => {
      if (this.queryPar[key]) {
        filters[key] = {
          $regex: this.queryPar[key],
          $options: "i",
        };
      }
    });

    // Aplicar todos los filtros a la consulta
    this.query = this.query.find(filters);
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryPar };

    // console.log(queryCopy)
    const removeFields = ["name", "limit", "page"];
    removeFields.forEach((el) => delete queryCopy[el]);

    // const numericFields = ["price"]; // Ejemplo, debes ajustar según tu esquema

    // // Aplicar filtro gte solo a campos numéricos
    // numericFields.forEach((field) => {
    //     if (queryCopy[field]) {
    //         // Obtener el operador y el valor numérico del campo
    //         const { operator, value } = this.extractOperatorAndValue(queryCopy[field]);

    //         console.log({operator,value})

    //         // Aplicar el filtro solo si el valor proporcionado es numérico y el operador es válido
    //         if (operator && value !== undefined) {
    //             queryCopy[field] = {
    //                 [operator]: Number(value),
    //             }
    //         }
    //     }
    // });

    console.log(queryCopy);

    let queryPar = JSON.stringify(queryCopy);
    queryPar = queryPar.replace(/\b(gt|gte|lt|lte)\b/g,match => `$${match}`);

    this.query = this.query.find(JSON.parse(queryPar));

    console.log(queryPar)

    return this;
  }

  extractOperatorAndValue(filter) {
    const operators = ["gt", "gte", "lt", "lte"];
    for (const operator of operators) {
        if (filter[operator]) {
            return { operator, value: filter[operator] };
        }
    }
    return { operator: null, value: undefined };
}
}



module.exports = APIFeatures;
