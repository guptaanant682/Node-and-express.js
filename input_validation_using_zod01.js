// zod is independent library it doesn't require express. This is only used to validate Inputs

const zod = require("zod");

function validateInput(arr){
    const schema = zod.array(zod.number());

    const response = schema.safeParse(arr);
    console.log(response);
}

validateInput([1,2,3]);

 